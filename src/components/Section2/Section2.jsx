import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Section2() {

    const [signin, setsignin] = useState(true)
  return (
    <div className="section2 w-full ">
    <div className="nav flex items-center px-8 justify-center">
      {signin ? (
        <>
          <div className="relative">
            <button
              onClick={() => {
                setsignin(true);
              }}
              className="py-2 px-4 text-[#7f63A1] hover:text-gray-900 focus:outline-none text-lg"
            >
              Sign in
            </button>
            <hr className="absolute bottom-0 left-0 w-full border-t-4 border-[#7f63A1]" />
          </div>
          <div className="relative ml-4">
            <button
              onClick={() => {
                setsignin(false);
              }}
              className="py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none text-lg"
            >
              Join in
            </button>
            <hr className="absolute bottom-0 left-0 w-full border-t-4 border-gray-400" />
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <button
              onClick={() => {
                setsignin(true);
              }}
              className="py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none text-lg"
            >
              Sign in
            </button>
            <hr className="absolute bottom-0 left-0 w-full border-t-4 border-gray-400" />
          </div>
          <div className="relative ml-4">
            <button
              onClick={() => {
                setsignin(false);
              }}
              className="py-2 px-4 text-[#7f63A1] hover:text-gray-900 focus:outline-none text-lg"
            >
              Join in
            </button>
            <hr className="absolute bottom-0 left-0 w-full border-t-4 border-[#7f63A1]" />
          </div>
        </>
      )}
    </div>

    <form action="" class="max-w-lg mx-auto rounded px-8 py-6">
      <div class="mb-4">
        <button class="w-full py-2 px-4 text-sm font-semibold text-gray-700 bg-transparent border border-gray-500 rounded-md mb-2 flex items-center ">
          <img
            src="https://hobbycue.com/_next/static/media/google-icon.8ffdb486.svg"
            alt=""
          />{" "}
          <p className="ml-20 font-semibold text-lg">
            Continue with Goggle
          </p>
        </button>
        <button class="w-full py-2 px-4 text-sm font-semibold text-gray-700 bg-transparent border border-gray-500 rounded mb-2 flex items-center">
          <img
            src="https://hobbycue.com/_next/static/media/facebook-icon.9f733536.svg"
            alt=""
          />
          <p className="ml-20 font-semibold text-lg">
            Continue with facebook
          </p>
        </button>
        <div class="flex items-center my-4">
          <hr class="flex-grow border-gray-400" />
          <p class="px-4 text-gray-600 text-sm  font-semibold">
            Or Sign in with
          </p>
          <hr class="flex-grow border-gray-400" />
        </div>
        <input
          type="email"
          placeholder="Email"
          class="w-full py-2 px-3 text-gray-700 leading-tight border border-black rounded-md focus:border-2 focus:border-black focus:outline-none focus:shadow-outline mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          class="w-full py-2 px-3 text-gray-700 leading-tight border border-black rounded-md focus:border-2 focus:border-black focus:outline-none focus:shadow-outline mb-4"
        />

        <div class="flex items-center justify-between mb-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-blue-600"
            ></input>
            <span class="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <div class="flex items-center gap-1">
            <FontAwesomeIcon icon={faLock} className="text-gray-500" />
            <p class="text-gray-700">Forgot password</p>
          </div>
        </div>
        <button
          class="w-full py-2 px-4 bg-[#7f63A1] text-white font-bold rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Continue
        </button>
      </div>
    </form>
  </div>

  )
}

export default Section2