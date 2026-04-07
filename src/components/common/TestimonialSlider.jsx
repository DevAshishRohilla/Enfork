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
                  {testimonial.review}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span className="text-foreground font-semibold text-sm md:text-base">
                      {testimonial.rating}
                    </span>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm italic">
                    – {testimonial.title}
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