import React from "react";
import logo from "../../assets/AUDITOR-AI-ICON-NO-BG.png";

const NewsLetter = () => {
  return (
    <div>
      {/* Hero Section for Sign Up Newsletter */}
      <div className="hero bg-black mb-28">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
          {/* Gambar */}
          <img
            src={logo}
            className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0"
            alt="Newsletter"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Sign Up for Our Newsletter!
            </h1>
            <p className="py-6 text-white">
              Stay updated with the latest news, articles, and special offers.
              Subscribe to our newsletter to receive exclusive content directly
              to your inbox.
            </p>
            <form className="flex flex-col space-y-4 items-center lg:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <button
                type="submit"
                className="btn bg-violet-900 hover:bg-violet-600 font-mono font-bold w-full max-w-xs"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
