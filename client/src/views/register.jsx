import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {EyeClosed, EyeIcon} from "lucide-react"
import { AxiosInstance } from "../Utils/AxiosInstance";
import { Link } from "react-router";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
  
    const handleSignUp = async(data)=>{
      try {
        if(data){
          console.log(data)
          const response = await AxiosInstance.post("/v1/users/register",data)
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
    <div className="font-[Poppins] select-none overflow-hidden flex justify-center items-center bg-[#dde5f4] h-screen pt-20">
     <form onSubmit={handleSubmit(handleSignUp)}>
     <div className="bg-[#f1f7fe] p-10 flex flex-col rounded-[30px] shadow-[0_0_2em_#e6e9f9] gap-6 w-[90%] max-w-[400px]">
        <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-5 flex flex-col gap-3 rounded-[20px] text-[#4d4d4d] -mt-6">
          <label htmlFor="name" className="text-base">Name</label>
          <div className="flex items-center gap-3">
            <ion-icon name="person-outline" className="text-[#4d4d4d] text-xl"></ion-icon>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="outline-none border-none text-base text-black w-full"
              style={{ paddingRight: '1rem', width: '100%' }}
              {...register("fullname",{
                required:["full name is required"]
              })}
            />
          </div>
        </div>

        <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-5 flex flex-col gap-3 rounded-[20px] text-[#4d4d4d]">
          <label htmlFor="username" className="text-base">Username</label>
          <div className="flex items-center gap-3">
            <ion-icon name="person-circle-outline" className="text-[#4d4d4d] text-xl"></ion-icon>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="outline-none border-none text-base text-black w-full"
              style={{ paddingRight: '1rem', width: '100%' }} 
              {...register("username",{
                required:["username is required"]
              })}
            />
          </div>
        </div>

        <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-5 flex flex-col gap-3 rounded-[20px] text-[#4d4d4d]">
          <label htmlFor="email" className="text-base">Email Address</label>
          <div className="flex items-center gap-3">
            <ion-icon name="mail-outline" className="text-[#4d4d4d] text-xl"></ion-icon>
            <input
              type="email"
              name="email"
              placeholder="Username@gmail.com"
              className="outline-none border-none text-base text-black w-full"
              style={{ paddingRight: '1rem', width: '100%' }} 
              {...register("email",{
                required:["email is required"]
              })}
            />
          </div>
        </div>

        <div className="bg-white shadow-[0_0_2em_#e6e9f9] p-5 flex flex-col gap-3 rounded-[20px] text-[#4d4d4d]">
          <label htmlFor="password" className="text-base">Password</label>
          <div className="flex items-center gap-3">
            <ion-icon name="lock-closed-outline" className="text-[#4d4d4d] text-xl"></ion-icon>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="············"
              className="outline-none border-none text-base text-black w-full"
              style={{ paddingRight: '1rem', width: '100%' }} 
              {...register("password",{
                required:["password is required"]
              })}
            />
           {showPassword ? (<EyeClosed name="eye-outline" onClick={()=>{
          setShowPassword(!showPassword)
        }} className="text-[#4d4d4d] text-lg md:text-xl cursor-pointer"></EyeClosed>): (<EyeIcon name="eye-outline" onClick={()=>{
          setShowPassword(!showPassword)
        }} className="text-[#4d4d4d] text-lg md:text-xl cursor-pointer"></EyeIcon>)}
          </div>
        </div>

        
        <button type="submit" onClick={()=>{
            navigate("/verify-email")
        }} className="p-3 bg-[#3e4684] text-white border-none rounded-full font-semibold text-base hover:opacity-90 transition">Verify Email
        </button>
      </div>
     </form>
    </div>
  );
};
export default Register;
