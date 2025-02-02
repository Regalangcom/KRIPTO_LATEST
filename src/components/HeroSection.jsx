import { motion } from "framer-motion";
import logo from "../assets/motion2.gif";
import Auditor from "../assets/AUDITOR-COVER.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 bg-[#18181A] text-white bg-no-repeat lg:bg-cover lg:bg-center">
      {/* Background Image dengan Efek Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Auditor})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-lg"></div>
      </div>

      {/* Gambar dengan Animasi */}
      <motion.img
        src={logo}
        className="w-64 lg:w-80 max-w-full h-auto object-contain rounded-full shadow-lg m-4 lg:m-36 relative z-10"
        animate={{
          boxShadow: [
            "0px 0px 20px rgba(255, 255, 255, 0.8)",
            "0px 0px 30px rgba(255, 255, 255, 1)",
            "0px 0px 20px rgba(255, 255, 255, 0.8)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Konten Teks */}
      <motion.div
        className="mt-6 lg:mt-0 max-w-lg text-center lg:text-left relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Teks */}
        <h1 className="text-4xl font-mono lg:text-5xl font-bold text-shadow-lg">
          Privacy.
        </h1>
        <h1 className="text-4xl font-mono lg:text-5xl font-bold text-shadow-lg">
          Security.
        </h1>
        <h1 className="text-4xl lg:text-5xl text-shadow-lg font-bold">
          <span className="font-mono font-bold text-violet-900">
            Confidentiality.
          </span>
        </h1>
        <p className="mt-4 text-lg font-mono font-bold leading-relaxed">
          A comprehensive privacy solution featuring a variety of AI-based
          safety tools that redistributes 100% revenue to 0x0 holders.
        </p>

        {/* Button Animasi */}
        <motion.button
          className="mt-6 bg-violet-900 px-6 py-3 rounded-lg shadow-lg transition duration-300 mb-7 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-500 focus:ring-opacity-50 relative z-10"
          whileHover={{
            boxShadow:
              "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.8)",
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          FIND OUT MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
