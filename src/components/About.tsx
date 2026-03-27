import { motion } from "framer-motion";
import BrandLogs from "../components/common/BrandLogos";
const About = () => {
  return (
    <section
      id="about"
 
      className="relative py-12 sm:py-14 lg:py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
        {/* ===== Left Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="font-light mb-4 leading-tight">
            <h1 className="text-foreground font-light">About</h1>
            <br />
            <a href="#" className="flex items-center gap-2 select-none">
              <img
                src="./logo bg 2.png"
                alt="Enfork"
                className="w-[150px] sm:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[400px] h-auto object-contain"
              />
            </a>
          </div>

          <p className="text-foreground leading-relaxed max-w-lg  lg:max-w-2xl mt-4 sm:mt-5 lg:mt-6">
            Enfork Group, based in Australia, is committed to driving meaningful change through innovation across technology, marketing, finance, and social development. We work to empower businesses, communities, and individuals by unlocking their full potential and enabling a future defined by opportunity, accessibility, and sustainable growth.

          </p>
        </motion.div>

        {/* ===== Right Floating Logos ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative hidden lg:flex w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] xl:h-[480px] justify-center items-center mx-auto">
            {/* === Floating Brand Cards === */}

            {/* Card 1 */}
            <motion.div
              className="absolute "
            >
              <img
                src="./logo-collage.webp"
                alt="Enfork Creations"
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full lg:hidden">
            <BrandLogs />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
