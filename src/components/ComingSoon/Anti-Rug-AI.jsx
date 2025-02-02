import React from "react";
import { useNavigate } from "react-router-dom";
const AntiRugAI = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is currently under development. We'll be launching this
          feature soon!
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default AntiRugAI;
