import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell ,faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isCondensed, setIsCondensed] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 0.9 * window.screen.width) {
      setIsCondensed(true);
    } else {
      setIsCondensed(false);
    }
  };

  // Listen to window resize events
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav flex p-3 mx-[6vw] items-center justify-between">
      {!isCondensed ? (
        <div className="part1 flex items-center gap-10">
          <img
            src="https://hobbycue.com/_next/static/media/logo-full.13d59baf.svg"
            alt="Logo"
          />
          <div className="search-bar">
            <div className="w-72">
              <div className="relative flex items-center border border-gray-300 rounded-md">
                <input
                  placeholder="Search for anything on your hobbies..."
                  type="text"
                  className="flex-grow bg-transparent outline-none text-sm p-[10px] bg-gray-200"
                />
                <button
                  className="text-gray-500 hover:text-gray-700 flex items-center justify-center focus:outline-none  w-10 h-10 bg-[#7f63A1] rounded-r-md"
                  type="button"
                >
                  <FontAwesomeIcon className="text-white " icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="part1 flex items-center justify-between w-full">
          <img src="https://hobbycue.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-small.50a121fa.png&w=128&q=75" alt="" />
          <div className="logo-con flex items-center gap-5">
          <div className="logo">
          <FontAwesomeIcon icon={faSearch} className=" w-5 h-5 text-[#7f63A1]" />
          </div>
          <div className="logo flex items-center">
            <FontAwesomeIcon icon={faBell} className=" w-5 h-5 text-[#7f63A1]" />
          </div>
          <div className="logo flex items-center">
            <FontAwesomeIcon icon={faBars} className=" w-5 h-5 text-[#7f63A1]" />
          </div>
          </div>
        </div>
      )}

      {!isCondensed && (
        <div className="part2 hidden lg:flex items-center gap-4">
          <div className="explore flex items-center space-x-2">
            <img
              src="https://hobbycue.com/_next/static/media/navbar-explore-icon.0cdba9a4.svg"
              alt="Explore Icon"
              className="h-6 w-6"
            />
            <h2 className="text-sm font-semibold">Explore</h2>
            <svg
              className="text-gray-500 h-6 w-6"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
              />
            </svg>
          </div>
          <div className="hobbies mx-5 flex items-center space-x-2">
            <img
              src="https://hobbycue.com/_next/static/media/navbar-hobby-icon.35a907be.svg"
              alt="Hobby Icon"
              className="h-6 w-6"
            />
            <h2 className="text-sm font-semibold">Hobbies</h2>
            <svg
              className="text-gray-500 h-6 w-6"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
              />
            </svg>
          </div>
          <div className="logo-con flex items-center gap-5">
            <div className="logo">
              <svg
                className="w-6 h-6 text-[#7f63A1]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Bookmark"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="logo flex items-center">
              <FontAwesomeIcon icon={faBell} className=" w-5 h-5 text-[#7f63A1]" />
            </div>
            <div className="logo">
              <svg
                className="w-6 h-6 text-[#7f63A1]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Cart"
              >
                <path
                  d="M21.92 7.25V7.38L20.46 12.78C20.2875 13.421 19.9073 13.9866 19.3789 14.3883C18.8505 14.79 18.2038 15.0051 17.54 15H9.89C9.13906 15.0031 8.41423 14.7243 7.85877 14.2189C7.30332 13.7134 6.95765 13.018 6.89 12.27L6.24 4.91C6.21754 4.6607 6.10232 4.4289 5.91717 4.26041C5.73202 4.09192 5.4904 3.99901 5.24 4.00002H3.07C2.80485 4.00002 2.5505 3.89467 2.36296 3.70713C2.17543 3.51959 2.07007 3.26524 2.07007 3.00002C2.07007 2.73481 2.17543 2.48045 2.36296 2.29292C2.5505 2.10538 2.80485 2.00002 3.07 2.00002H5.24C5.99107 1.99698 6.71591 2.27572 7.27136 2.78118C7.82682 3.28665 8.17248 3.98206 8.24 4.73002V5.00002H19.93C20.2151 4.99779 20.4974 5.05652 20.7579 5.17228C21.0184 5.28805 21.2512 5.45816 21.4406 5.67124C21.63 5.88431 21.7716 6.1354 21.8561 6.4077C21.9405 6.67999 21.9657 6.96718 21.92 7.25H21.92Z"
                  fill="currentColor"
                />
                <path
                  d="M9.07 22C10.4508 22 11.5701 20.8807 11.5701 19.5C11.5701 18.1193 10.4508 17 9.07 17C7.68936 17 6.57007 18.1193 6.57007 19.5C6.57007 20.8807 7.68936 22 9.07 22Z"
                  fill="currentColor"
                />
                <path
                  d="M17.07 22C18.4508 22 19.5701 20.8807 19.5701 19.5C19.5701 18.1193 18.4508 17 17.07 17C15.6894 17 14.5701 18.1193 14.5701 19.5C14.5701 20.8807 15.6894 22 17.07 22Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="sign-in">
            <button className="text-[#7f63A1] text-lg font-semibold h-9 w-28 border-2 border-[#7f63A1] rounded-md">
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
