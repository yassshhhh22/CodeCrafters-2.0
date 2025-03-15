import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  updateAccountDetails,
  getCurrentUser,
} from "../controller/user.controller.js";

import { AuthMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout").post(AuthMiddleware, logoutUser);
router.route("/logout").post(AuthMiddleware, logoutUser);
router.route("/refresh-access-token").post(refreshAccessToken);
router.route("/change-password").post(AuthMiddleware, changeCurrentPassword);
router.route("/current-user").get(AuthMiddleware, getCurrentUser);
router.route("/update-account").patch(AuthMiddleware, updateAccountDetails);
router.route("/change-password").post(AuthMiddleware, changeCurrentPassword);
router.route("/current-user").get(AuthMiddleware, getCurrentUser);
router.route("/update-account").patch(AuthMiddleware, updateAccountDetails);
export default router;
