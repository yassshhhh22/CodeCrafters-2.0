import asynchandler from "express-async-handler";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshtokens = async (userId) => {
  try {
    // console.log("Generating tokens for user:", userId);
    const user = await User.findById(userId);

    if (!user) {
      // console.error("User not found for ID:", userId);
      throw new ApiError(404, "User not found");
    }

    // console.log("User found:", user.username);

    if (!user.generateAccessToken() || !user.generateRefreshToken()) {
      // console.error("Token generation methods are missing in User model");
      throw new ApiError(500, "Token generation methods missing");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // console.log("Access Token:", accessToken);
    // console.log("Refresh Token:", refreshToken);

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // console.log("Tokens generated successfully!");
    return { accessToken, refreshToken };
  } catch (error) {
    // console.error("Error in generateAccessAndRefreshtokens:", error);
    throw new ApiError(
      500,
      "Something went wrong while generating refresh access token"
    );
  }
};

export const loginUser = asynchandler(async (req, res) => {

  const { email, password } = req.body;
  if (!email) {
    throw new ApiError(400, "email is required");
  }
  const user = await User.findOne({
    email
  });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid password");
  }

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  const { accessToken, refreshToken } = await generateAccessAndRefreshtokens(
    user._id
  );
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser
        },
        "User logged in successfully"
      )
    );
});

export const registerUser = asynchandler(async (req, res) => {

  const { fullname, email, username, password } = req.body;
  console.log(req.body);

  if (!fullname || !email || !username || !password || password.trim() === "") {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }


  const user = await User.create({
    fullname,
    email,
    username,
    password
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating user");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

export const logoutUser = asynchandler(async (req, res) => {

  await User.findByIdAndUpdate(req.user._id, {
    refreshToken: "",
  });
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});


export const refreshAccessToken = asynchandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(400, "Refresh token is required");
  }
  try {
    const decoded = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decoded?.id);
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshtokens(
      user._id
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});


export const changeCurrentPassword = asynchandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user?._id);
  const ispasswordMatch = await user.comparePassword(oldPassword);
  if (!ispasswordMatch) {
    throw new ApiError(400, "Invalid password");
  }
  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

export const getCurrentUser = asynchandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User details fetched successfully"));
});

export const updateAccountDetails = asynchandler(async (req, res) => {

  const { fullname, email } = req.body;

  if (!req.user?._id) {
    throw new ApiError(401, "Unauthorized request");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id, 
    { fullname, email },
    { new: true }
  )
    .select("-password")
    .lean();

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"));
});




