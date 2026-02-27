import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-screen">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-row items-start gap-5">
          
          {/* Violet Line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-white text-5xl font-bold">
              Hi, I'm <span className="text-[#915eff]">Aquib</span>
            </h1>
            <p className="mt-2 text-white-100 text-lg">
              I am a software developer <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - SPLINE */}
       <div className="flex-1 flex justify-center max-w-[600px]">
          <Spline scene="https://prod.spline.design/QE2DqaCclcgmfMqP/scene.splinecode" />
        </div>

      </div>
    </section>
  );
};
