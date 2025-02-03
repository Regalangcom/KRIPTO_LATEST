import React from "react";
import logo from "../../assets/motion.gif";

const JoinTocommunity = () => {
  return (
    <div>
      <div className="hero  min-h-screen bg-black ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Join to Our Community!</h1>
            <p className="py-6">
              Join us and be part of an amazing community. Connect, learn, and
              grow with like-minded people. Get access to exclusive resources,
              events, and more.
            </p>
            <button className=" bg-violet-900 btn hover:bg-violet-700 font-mono font-bold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTocommunity;
