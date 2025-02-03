import React, { useState } from "react";

const Tools = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleReadMore = (cardId) => {
    setIsReadMoreOpen((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Suite of AI & Privacy Tools
      </h1>
      <div className="flex-wrap  grid grid-cols-2   m-10 justify-center gap-8">
        {/* Card 1 */}
        <div className="card  bg-gradient-to-r from-violet-600 to-orange-500 text-white w-96 h-auto p-4 flex flex-row justify-between items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 rounded-lg overflow-hidden">
          <div className="card-body flex flex-col justify-between items-start ml-4 flex-grow h-full">
            <h2 className="card-title font-mono font-bold text-xl mb-4 flex items-center">
              AI Auditor
              <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md">
                BETA
              </span>
            </h2>
            <p className="font-mono font-bold text-base mb-4 flex-grow overflow-hidden">
              {isReadMoreOpen[3]
                ? "An AI smart contract auditor is a tool that uses advanced algorithms to analyze smart contracts and identify potential vulnerabilities or issues that could lead to a scam or other security risk. The auditor uses machine learning techniques to identify patterns and anomalies in the code, flagging potential issues for further review.."
                : "An AI smart contract auditor is a tool that uses advanced algorithms to analyze smart..."}
              <span
                onClick={() => toggleReadMore(3)}
                className="text-black font-mono underline underline-offset-1 font-bold cursor-pointer ml-1"
              >
                {isReadMoreOpen[3] ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="card-actions justify-center mt-4 space-x-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white transition duration-300">
                Launch Editor
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-gradient-to-r from-violet-600 to-orange-500 text-white w-96 h-auto p-4 flex flex-row justify-between items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 rounded-lg overflow-hidden">
          <div className="card-body flex flex-col justify-between items-start ml-4 flex-grow h-full">
            <h2 className="card-title font-mono font-bold text-xl mb-4 flex items-center">
              Privacy Mixer
              <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md">
                ERC20
              </span>
            </h2>
            <p className="font-mono font-bold text-base mb-4 flex-grow overflow-hidden">
              {isReadMoreOpen[3]
                ? "A privacy mixer is a tool that can be used to make cryptocurrency transactions more private and anonymous. Also known as a coin mixer or coin tumbler, this tool works by pooling multiple transactions together, mixing them, and then redistributing them to the intended recipients..."
                : "A privacy mixer is a tool that can be used to make cryptocurrency transactions more private and anonymous..."}
              <span
                onClick={() => toggleReadMore(3)}
                className="text-black font-mono underline underline-offset-1 font-bold cursor-pointer ml-1"
              >
                {isReadMoreOpen[3] ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="card-actions justify-center mt-4 space-x-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white transition duration-300">
                Launch Editor
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-gradient-to-r from-violet-600 to-orange-500 text-white w-96 h-auto p-4 flex flex-row justify-between items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 rounded-lg overflow-hidden">
          <div className="card-body flex flex-col justify-between items-start ml-4 flex-grow h-full">
            <h2 className="card-title font-mono font-bold text-xl mb-4 flex items-center">
              Privacy DEX
              <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md">
                BETA
              </span>
            </h2>
            <p className="font-mono font-bold text-base mb-4 flex-grow overflow-hidden">
              {isReadMoreOpen[3]
                ? "The privacy DEX aggregator is a tool that allows users to access multiple decentralized exchanges (DEXs) in a single platform, while also providing enhanced privacy and security features. DEXs are decentralized platforms that allow users to trade cryptocurrencies without the need for a centralized authority, and are known for their high level of security and privacy."
                : "The privacy DEX aggregator is a tool that allows users to access multiple decentralized exchanges..."}
              <span
                onClick={() => toggleReadMore(3)}
                className="text-black font-mono underline underline-offset-1 font-bold cursor-pointer ml-1"
              >
                {isReadMoreOpen[3] ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="card-actions justify-center mt-4 space-x-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white transition duration-300">
                Launch Editor
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card bg-gradient-to-r from-violet-600 to-orange-500 text-white w-96 h-auto p-4 flex flex-row justify-between items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 rounded-lg overflow-hidden">
          <div className="card-body flex flex-col justify-between items-start ml-4 flex-grow h-full">
            <h2 className="card-title font-mono font-bold text-xl mb-4 flex items-center">
              Anti-Rug AI
              <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md">
                Loading
              </span>
            </h2>
            <p className="font-mono font-bold text-base mb-4 flex-grow overflow-hidden">
              {isReadMoreOpen[3]
                ? "The AI anti-rug bot is a tool currently in development by 0x0 to help protect users from scams in the DeFi space. It works by using advanced algorithms to analyze transactions and detect suspicious behavior, such as setting a tax too high or removing liquidity. If the bot detects any suspicious behavior, it will automatically frontrun the transaction, preventing users from getting rug pulled..."
                : "The AI anti-rug bot is a tool currently in development by 0x0 to help protect users from..."}
              <span
                onClick={() => toggleReadMore(3)}
                className="text-black font-mono underline underline-offset-1 font-bold cursor-pointer ml-1"
              >
                {isReadMoreOpen[3] ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="card-actions justify-center mt-4 space-x-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white transition duration-300">
                Launch Editor
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-violet-600 to-orange-500 text-white w-96 h-auto p-4 flex flex-row justify-between items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 rounded-lg overflow-hidden">
          <div className="card-body flex flex-col justify-between items-start ml-4 flex-grow h-full">
            <h2 className="card-title font-mono font-bold text-xl mb-4 flex items-center">
              AI Developer Hub
              <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md">
                BETA
              </span>
            </h2>
            <p className="font-mono font-bold text-base mb-4 flex-grow overflow-hidden">
              {isReadMoreOpen[3]
                ? " The AI developer hub is a platform within 0x0 that allows users to deploy their own custom smart contracts written by the in-house AI, without the need for coding knowledge. The platform uses advanced algorithms and machine learning techniques to generate smart contracts that are safe and secure, reducing the risk of scams and fraud..."
                : "The AI developer hub is a platform within 0x0 that allows users to deploy their own custom..."}
              <span
                onClick={() => toggleReadMore(3)}
                className="text-black font-mono underline underline-offset-1 font-bold cursor-pointer ml-1"
              >
                {isReadMoreOpen[3] ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="card-actions justify-center mt-4 space-x-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white transition duration-300">
                Launch Editor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
