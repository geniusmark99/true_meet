"use client";

import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Signin = ()=> {
  // React state replaces add/remove class
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return <>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
    <h1 className="text-4xl font-bold my-10">Sign in</h1>

      <div
        id="container"
        className={`relative overflow-hidden w-full max-w-4xl min-h-[480px] rounded-lg shadow-lg bg-white transition-all duration-700 
        ${isRightPanelActive ? "right-panel-active" : ""}`}
      >
        {/* Sign Up */}
        <div
          className={`absolute top-0 h-full w-full md:w-1/2 flex items-center justify-center transition-all duration-700 
          ${isRightPanelActive ? "md:translate-x-full md:opacity-100 md:z-10" : "md:opacity-0 md:z-0"} 
          ${!isRightPanelActive ? "block md:hidden" : "block"}`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-8 md:px-12 h-full text-center w-full">
            <h1 className="font-bold text-2xl">Create Account</h1>
            <div className="flex gap-3 my-5">
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaFacebookF />
              </a>
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaGooglePlusG />
              </a>
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs mb-2">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-200 rounded px-4 py-2 w-full my-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 rounded px-4 py-2 w-full my-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 rounded px-4 py-2 w-full my-2"
            />
            <button className="mt-3 rounded-full border border-emerald-800 bg-emerald-800 text-white text-xs font-bold px-10 py-3 uppercase tracking-wider">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div
          className={`absolute top-0 left-0 h-full w-full md:w-1/2 flex items-center justify-center transition-all duration-700 z-20 
          ${isRightPanelActive ? "md:translate-x-full" : ""} 
          ${isRightPanelActive ? "hidden md:flex" : "block"}`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-8 md:px-12 h-full text-center w-full">
            <h1 className="font-bold text-2xl">Sign in</h1>
            <div className="flex gap-3 my-5">
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaFacebookF />
              </a>
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaGooglePlusG />
              </a>
              <a className="border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 text-gray-700">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs mb-2">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 rounded px-4 py-2 w-full my-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 rounded px-4 py-2 w-full my-2"
            />
            <a href="#" className="text-sm my-2 text-gray-600">
              Forgot your password?
            </a>
            <button className="mt-3 rounded-full border border-emerald-800 bg-emerald-800 text-white text-xs font-bold px-10 py-3 uppercase tracking-wider">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay (desktop only) */}
        <div
          className={`hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 z-30 
          ${isRightPanelActive ? "-translate-x-full" : ""}`}
        >
          <div
            className={`bg-gradient-to-r from-emerald-800 to-green-500 bg-cover bg-no-repeat text-white relative left-[-100%] h-full w-[200%] flex transition-transform duration-700 
            ${isRightPanelActive ? "translate-x-1/2" : "translate-x-0"}`}
          >
            {/* Left Panel */}
            <div className="absolute top-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm mt-4">
                To keep connected with us please login with your personal info
              </p>
              <button
                id="signIn"
                className="mt-6 rounded-full border border-white bg-transparent text-white text-xs font-bold px-10 py-3 uppercase tracking-wider"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            {/* Right Panel */}
            <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center">
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm mt-4">
                Enter your personal details and start journey with us
              </p>
              <button
                id="signUp"
                className="mt-6 rounded-full border border-white bg-transparent text-white text-xs font-bold px-10 py-3 uppercase tracking-wider"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="flex md:hidden justify-around border-t p-4">
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase ${
              !isRightPanelActive
                ? "bg-emerald-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsRightPanelActive(false)}
          >
            Sign In
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase ${
              isRightPanelActive
                ? "bg-emerald-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsRightPanelActive(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>

    </>

}


export default Signin;