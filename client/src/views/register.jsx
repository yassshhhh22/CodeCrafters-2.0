import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-[Poppins] select-none overflow-hidden flex justify-center items-center bg-[#dde5f4] h-screen pt-20">
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
              style={{ paddingRight: '1rem', width: '100%' }} // Ensure padding for visibility
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
              style={{ paddingRight: '1rem', width: '100%' }} // Ensure padding for visibility
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
              style={{ paddingRight: '1rem', width: '100%' }} // Ensure padding for visibility
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
              style={{ paddingRight: '1rem', width: '100%' }} // Ensure padding for visibility
            />
            <ion-icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              className="text-[#4d4d4d] text-xl cursor-pointer"
              onClick={togglePasswordVisibility}
            ></ion-icon>
          </div>
        </div>

        <button className="p-3 bg-[#3e4684] text-white border-none rounded-full font-semibold text-base hover:opacity-90 transition">
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default Register;
