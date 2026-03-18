import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Problem Solvers",
      content: "With having a fleet business you need to have consistent leads and thanks to Pav and team for getting this sorted. Empty garage looks perfect!!",
      rating: 4.0,
      stars: 4,
      company: "Omega Auto Rentals"
    },
    {
      title: "Outstanding Results",
      content: "The team delivered beyond our expectations. Their strategic approach to digital marketing transformed our online presence completely.",
      rating: 5.0,
      stars: 5,
      company: "Tech Solutions Inc"
    },
    {
      title: "Highly Recommended",
      content: "Professional, responsive, and results-driven. They helped us achieve our marketing goals faster than we anticipated.",
      rating: 4.5,
      stars: 5,
      company: "Growth Ventures"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
  

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!w-full flex justify-center border-white ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              
                className="relative border bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 md:p-8 lg:p-12 w-full md:w-[60%] lg:w-full lg:max-w-[500px] text-left responsive-box"
                style={{
                  borderRadius:"32px",
                  padding:"64px"
                
                }}
              >
                <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-white/10" />

                <h6 className=" mb-2 ">{testimonial.title}</h6>
                <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-foreground/90">
                  {testimonial.content}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span className="text-foreground font-semibold text-sm md:text-base">
                      {testimonial.rating}
                    </span>
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm italic">
                    – {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;