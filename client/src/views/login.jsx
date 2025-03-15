import React, { useState } from "react";
import axios from "axios"
import {useForm} from "react-hook-form"
import {EyeClosed, EyeIcon} from "lucide-react"
import { AxiosInstance } from "../Utils/AxiosInstance";
import { useNavigate } from "react-router";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm()

  const handleLogin = async(data)=>{
    try {
      if(data){
        console.log(data)
        const response = await AxiosInstance.post("/v1/users/login",data)
        console.log(response.data.message)
        if(!response){
          throw new Error("Error logging in",response.data.error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="font-[Poppins] select-none overflow-hidden flex justify-center items-center bg-[#dde5f4] min-h-screen pt-10 md:pt-20">
  <form onSubmit={handleSubmit(handleLogin)}>
  <div className="bg-[#f1f7fe] p-6 md:p-10 flex flex-col rounded-[20px] md:rounded-[30px] shadow-[0_0_2em_#e6e9f9] gap-6 w-full max-w-[400px] mx-4">
    <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-4 md:p-5 flex flex-col gap-3 rounded-[15px] md:rounded-[20px] text-[#4d4d4d] -mt-6">
      <label htmlFor="email" className="text-sm md:text-base">Email Address</label>
      <div className="flex items-center gap-3">
        <ion-icon name="mail-outline" className="text-[#4d4d4d] text-lg md:text-xl"></ion-icon>
        <input
          type="email"
          name="email"
          placeholder="Username@gmail.com"
          className="outline-none border-none text-sm md:text-base text-black w-full"
          {...register("email",{
            required: ["email is required"],
          })}
        />
      </div>
    </div>

    <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-4 md:p-5 flex flex-col gap-3 rounded-[15px] md:rounded-[20px] text-[#4d4d4d]">
      <label htmlFor="password" className="text-sm md:text-base">Password</label>
      <div className="flex items-center gap-3">
        <input
          type= {showPassword ? "text" : "password"}
          name="password"
          placeholder="············"
          className="outline-none border-none text-sm md:text-base text-black w-full"
          {...register("password",{
            required:["Password is required"]
          })}
        />
        {showPassword ? (<EyeClosed name="eye-outline" onClick={()=>{
          setShowPassword(!showPassword)
        }} className="text-[#4d4d4d] text-lg md:text-xl cursor-pointer"></EyeClosed>): (<EyeIcon name="eye-outline" onClick={()=>{
          setShowPassword(!showPassword)
        }} className="text-[#4d4d4d] text-lg md:text-xl cursor-pointer"></EyeIcon>)}
      </div>
    </div>

    <button type="submit" className="p-3 bg-[#3e4684] text-white border-none rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition">
      Login
    </button>

    <div className="flex text-[0.75em] md:text-[0.8em] text-[#5e5e5e] justify-between pb-4">
      <span onClick={()=>{
        navigate("/signup")
      }} className="cursor-pointer hover:underline" >Signup</span>
      <span className="cursor-pointer hover:underline">Forgot Password?</span>
    </div>
  </div>
  </form>
</div>

  );
};

export default Login;