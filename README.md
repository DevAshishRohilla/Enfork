   {/* ===== Slider Section ===== */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <IndustryCard industry={industry} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};