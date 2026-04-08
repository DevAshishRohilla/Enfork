import { motion } from "framer-motion";
import CurveButton from "@/components/common/CurveButton";
import AppButton from "@/components/common/AppButton";
import Stats from "./hero/Stats";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden"
    >
      <div className="section-container mt-24 xl:mt-32">
        {/* ===== Content Wrapper (Equal Padding) ===== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 sm:gap-10 lg:gap-12 lg:min-h-[60vh]">
          {/* ===== Left Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left col-span-1 lg:col-span-2"
          >
            <h2 className="text-foreground mb-4 sm:mb-5 lg:mb-6 leading-[1.3] tracking-wide">
              Empowering Growth. Creating Value
            </h2>

            <p className=" text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-xl xl:max-w-1xl leading-relaxed mx-auto lg:mx-0">
              Enfork Group stands at the heart of progress, delivering meaningful impact across Media, Tech, Care, Creation & Investment.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-4">
              <Link to="/contact-us">
                <AppButton label="Get In Touch" isBlack={true} />
              </Link>
            </div>
          </motion.div>

          {/* ===== Right Image Composition ===== */}
          <div className="flex items-center justify-center h-full lg:-mr-[6vw]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-[calc(100%+6vw)]"
            >
              <img
                src="./stack-images.webp"
                alt="Creative Marketing"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>

        <div className="z-[2]  m flex justify-center my-6 sm:my-8 lg:my-0 ">
          <img
            src="./enfork bg logo 1.png"
            alt="bg-enfork"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none opacity-40 sm:opacity-50 lg:opacity-100 mt-12"
          />
        </div>

        {/* ===== Bottom Video Section ===== */}
        <div className="relative -mt-8 sm:-mt-16 lg:-mt-24 rounded-xl sm:rounded-2xl shadow-lg z-[1] overflow-hidden">
          {/* ===== Video ===== */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
          >
            <source src="./videos/herovid.mp4" type="video/mp4" />
          </video>

          {/* ===== Overlay (Visible only on lg and up) ===== */}
          <div className="hidden lg:flex absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 py-8 justify-end items-end text-white">
            {/* Left Side – Button */}
            <div className="absolute bottom-[10px] left-[0px]">
              <CurveButton />
            </div>

            {/* Right Side – Stats */}
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
