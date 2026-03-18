import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import TestimonialSlider from "../components/common/TestimonialSlider";
const testimonials = [
  {
    title: "Quick Set Homes",
    review:
      "Big thanks to the Enfork team for designing our new logo and website! They understood what we wanted right from the start and delivered a sleek, meaningful brand identity. Super easy to work with and quick on execution. Would 100% recommend them!",
    rating: 5.0,
    // author: "Omega Auto Rentals",
  },
  {
    title: "Spring Hill College",
    review:
      "Enfork Creations nailed it! The logo they designed perfectly represents who we are as an institution — rooted in learning, growth, and aspiration. Their creativity, clear communication, and genuine passion for design made the entire process seamless and enjoyable. We’re truly proud of our new identity. Highly recommended!",
    rating: 5,
    // author: "BrightPath Agency",
  },
  {
    title: "Himvera",
    review:
      "We’re so glad we chose Enfork for Himvera’s branding and marketing. They truly understood our vision and brought it to life with creativity and professionalism. The team was supportive, responsive, and made the whole process smooth and exciting. We highly recommend them to anyone looking to build a strong, authentic brand!",
    rating: 5.0,
    // author: "Nova Digital",
  },
  {
    title: "Aimers College",
    review:
      "Working with Enfork Creations was a great experience! They designed not just our logo, but also built an interactive website and took care of our marketing and stationery. Everything felt thoughtful, professional, and perfectly suited to our college’s identity. The team understood our vision from day one and brought it to life beautifully. We’ve received amazing feedback from students and visitors alike. Truly happy with the results!",
    rating: 5.0,
    // author: "Nova Digital",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-10 md:py-16 lg:py-24 text-white text-center overflow-hidden">
      {/* background images */}
      <div className="absolute top-0 -left-10 lg:-left-24 w-[150px] lg:w-[350px]">
        <motion.img
          src="./Enfork page bg elemts/bg object 6.png"
          alt="background-images"
          className="w-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
      <div className="absolute top-64 -right-10 lg:-right-24 w-[150px] lg:w-[350px]">
        <motion.img
          src="./Enfork page bg elemts/bg object 8.png"
          alt="background-images"
          className="w-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative  md:px-6 lg:px-0">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4 section-container"
          >
            <h1 className="tracking-tight">Testimonials</h1>
            <p className="max-w-2xl mx-auto  leading-relaxed">
              Our relationships define us. These reflections highlight the care,
              craftsmanship, and dedication we bring to every brand, every
              project, and every individual we serve.
            </p>
          </motion.div>
          <div
            style={{
              backgroundImage: "url('./testtimonial bg.png')",
            }}
            className="py-8  md:py-10 lg:py-12 bg-cover bg-left-top bg-no-repeat mt-4 md:mt-6 lg:mt-4"
          >
            <div className="section-container w-full ">
              {/* ====== Customer Count ====== */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10">
                <p className="text-base md:text-lg font-medium text-gray-300">
                  <span className="text-white font-bold text-lg md:text-xl">
                    200+
                  </span>{" "}
                  Satisfied Customers
                </p>
                <div className="flex -space-x-2">
                  <img
                    src="/testimonial images/1.png"
                    alt="user1"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <img
                    src="/testimonial images/2.png"
                    alt="user2"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <img
                    src="/testimonial images/3.png"
                    alt="user3"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs md:text-sm">
                    +
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center overflow-hidden w-[100%] md:[60%] lg:w-[700px] mx-auto cl:p-12 ">
                {/* Main Card */}
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
