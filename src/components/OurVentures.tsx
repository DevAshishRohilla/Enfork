import { motion } from "framer-motion";
import AppButton from "@/components/common/AppButton";

const OurVentures = () => {
  return (
    <section
      id="ventures"
      // style={{ backgroundImage: "url('./Hero background.png')" }}
      className="py-10  relative overflow-hidden bg-no-repeat "
    >
      <div className="p">
        <div className="relative overflow-hidden">
          <h1 className="font-light text-foreground text-center py-10 md:py-16 lg:py-20">
            Our Ventures
          </h1>
        </div>

        {/* Cards */}
        <div className="section-container flex flex-col space-y-8 md:space-y-12 mt-4 md:mt-8">
          {/* Cards -1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap- 8">
            {/* ===== Left Content Card ===== */}
            <div
              style={{
                backgroundImage: "url('./ventures/bg 2.png')",
               
              }}
              className="relative   lg:col-span-2 bg-[#0e0e0e]/90 rounded-2xl p-6 md:p-8 lg:p-12 border border-white/50 text-white shadow-lg backdrop-blur-sm py-12 md:py-16 bg-center bg-no-repeat 2xl:bg-[length:110%]"
            >
              {/* Background Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl "
                aria-hidden="true"
              ></div>

              {/* Content */}
              <div className="relative z-10 xl:mt-16">
                <h3 className=" mb-3 md:mb-4">Enfork Creations</h3>
                <p className="text-foreground  w-full lg:w-2/3 leading-relaxed mb-6 md:mb-8">
                  Enfork Creations crafts compelling marketing campaigns and
                  brand strategies that captivate audiences, boost engagement,
                  and drive measurable growth worldwide.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <AppButton label="Explore Now" />
                  <AppButton label="Let's Talk" isBlack={true} />
                </div>
              </div>
            </div>

            {/* ===== Right Image Card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] md:min-h-[400px]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              >
                <source src="./videos/brand 1 video.mp4" type="video/mp4" />
              </video>

              {/* Overlay Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <img
                  src="./brand logos/Frame 21.png"
                  alt="Enfork"
                  className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Cards-2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* ===== Left Image Card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] md:min-h-[400px] lg:min-h-0 lg:order-1 order-2"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              >
                <source src="./videos/brand 2 video.mp4" type="video/mp4" />
              </video>

              {/* Overlay Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <img
                  src="./brand logos/Frame 22.png"
                  alt="Bolly Beats"
                  className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* ===== Right Content Card ===== */}
            <div
              style={{
                backgroundImage: "url('./ventures/bg 1.png')",
         
              }}
              className="relative lg:col-span-2 rounded-2xl p-6 md:p-8 lg:p-12 border border-white/50 text-foreground shadow-lg backdrop-blur-sm py-12 md:py-16 bg-center lg:order-2 order-1 lg:bg-[length:110%]"
            >
              <div
                className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl"
                aria-hidden="true"
              ></div>

              {/* Content */}
              <div className="relative z-10 xl:mt-16">
                <h3 className=" mb-3 md:mb-4">Bolly Beats</h3>
                <p className="text-foreground  w-full lg:w-2/3 leading-relaxed mb-6 md:mb-8">
                  Bolly Beats creates high-energy social campaigns and immersive
                  event experiences that ignite buzz, celebrate culture, and
                  connect brands with audiences in meaningful ways.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <AppButton label="Explore Now" isBlack={true} />
                  <AppButton label="Let's Talk" />
                </div>
              </div>
            </div>
          </div>

          {/* card-3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8  ">
            {/* ===== Left Content Card ===== */}
            <div className="relative lg:col-span-2 bg-[#0e0e0e]/90 rounded-2xl p-6 md:p-8 lg:p-12 border border-white/50 text-white shadow-lg backdrop-blur-sm py-12 md:py-16">
              {/* Background Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl"
                aria-hidden="true"
              ></div>

              {/* Content */}
              <div className="relative z-10 xl:mt-16">
                <h3 className=" mb-3 md:mb-4">Enfork Care</h3>
                <p className="text-foreground  w-full lg:w-2/3 leading-relaxed mb-6 md:mb-8">
                  Enfork Care provides holistic home and personal care services
                  designed to support well-being, comfort, and daily
                  independence. Our caregivers deliver empathy-driven assistance
                  that nurtures both health and peace of mind.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <AppButton label="Explore Now" />
                  <AppButton label="Get In Touch" isBlack={true} />
                </div>
              </div>
            </div>

            {/* ===== Right Image Card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] md:min-h-[400px] lg:min-h-0"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              >
                <source src="./videos/brand 3 video.mp4" type="video/mp4" />
              </video>

              {/* Overlay Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <img
                  src="./brand logos/Frame 23.png"
                  alt="Enfork Care"
                  className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVentures;
