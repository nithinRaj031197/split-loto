"use client"
import Image from "next/image";
import React, { useState } from "react";
import googleLogo from "@/public/google.png";
import phoneOTP from "@/public/phoneOTP.png";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-600 to-gray-900 flex justify-center items-center shadow-lg">
      <div className="bg-white p-6 rounded-l-lg shadow-md max-w-sm w-full flex flex-col justify-center" style={{ height: '25rem' }}>
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="text"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 h-16 border border-gray-300 rounded-md bg-gray-400 opacity-40"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-16 bg-gray-400 opacity-40"
            />
          </div>
          <button
            type="submit"
            className="w-full h-16 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="bg-black max-w-md w-full flex flex-col justify-center items-center rounded-r-lg" style={{ height: '25rem' }}>

        <form onSubmit={handleSubmit} className="max-w-[20rem] w-full">
          <div className="mb-4 max-w-[20rem] w-full">
            <label htmlFor="email" className="block text-white mb-1">Phone Number</label>
            <input
              type="text"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" px-3 py-2 h-16 border border-gray-300 rounded-md bg-gray-400 opacity-40 max-w-[20rem] w-full"
            />
          </div>

          <button
            type="submit"
            className="max-w-[20rem] w-full h-16 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Get OTP
          </button>
          {/* <p className="text-center mt-5">OR</p> */}
        </form>

        <p className="text-white my-5">OR</p>

        <button
          onClick={() => signIn("google")}
          className="max-w-[20rem] w-full flex items-center font-semibold justify-center h-20 px-6  text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
        >
          <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
          <span className="ml-4">Sign in with Google</span>
        </button>

      </div>
    </div>


  );
};

export default SignIn;
