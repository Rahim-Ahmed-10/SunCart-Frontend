'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1920&auto=format&fit=crop',
      titleTop: 'SUMMER SALE',
      titleBottom: '50% OFF',
      subTitle: 'Upgrade Your Style with',
      highlightText: 'hottest',
      desc: 'trends of the season. Limited time offer on all summer essentials.',
      btnText: 'Shop Sale Now',
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1920&auto=format&fit=crop',
      titleTop: 'HOT DEALS 🔥',
      titleBottom: 'LIMITED TIME',
      subTitle: 'Grab the most exclusive',
      highlightText: 'deals',
      desc: 'at unbeatable prices. Don’t miss out on our special summer collection.',
      btnText: 'Claim Offers',
    },
    {
      id: 3,
      bgImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1920&auto=format&fit=crop',
      titleTop: 'SEASONAL',
      titleBottom: 'MUST-HAVES',
      subTitle: 'Discover Uncompromising Style &',
      highlightText: 'comfort',
      desc: 'with our new arrivals tailored for sunny beach days.',
      btnText: 'Explore Collection',
    },
    {
    id: 4,
    bgImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop',
    titleTop: 'BEACHWEAR',
    titleBottom: 'FASHION 2026',
    subTitle: 'Make a splash with our',
    highlightText: 'trendy',
    desc: 'swimwear and coastal accessories for your next ocean getaway.',
    btnText: 'Shop Beachwear',
  },
  {
    id: 5,
    bgImage: 'https://images.unsplash.com/photo-1527733942322-39c7322971cc?q=80&w=1920&auto=format&fit=crop',
    titleTop: 'SUN CARE',
    titleBottom: 'SKIN GUARD',
    subTitle: 'Keep your skin healthy and',
    highlightText: 'glowing',
    desc: 'with dermatologist-tested sunscreens and organic after-sun lotions.',
    btnText: 'View Skin Care',
  },
  {
    id: 6,
    bgImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1920&auto=format&fit=crop',
    titleTop: 'WEEKEND',
    titleBottom: 'GETAWAY',
    subTitle: 'Pack your summer joy in',
    highlightText: 'spacious',
    desc: 'durable travel bags and backpacks built for every adventure.',
    btnText: 'Shop Travel Bags',
  },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] bg-gray-900 text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        grabCursor={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1.5 rounded-full inline-block cursor-pointer transition-all duration-300',
          bulletActiveClass: 'bg-orange-500 w-8 !rounded-full',
        }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.8) 30%, rgba(15, 23, 42, 0.3) 100%), url(${slide.bgImage})`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                <div className="absolute inset-0 flex items-center z-10 px-6 sm:px-12 md:px-20 lg:px-32">
                  {isActive && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
                    >
                      <motion.h1
                        variants={textVariants}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white m-0"
                      >
                        {slide.titleTop}
                      </motion.h1>

                      <motion.h2
                        variants={textVariants}
                        className="text-3xl sm:text-5xl lg:text-6xl font-black text-orange-500 mt-1 mb-6 border-b border-white/20 pb-4"
                      >
                        {slide.titleBottom}
                      </motion.h2>

                      <motion.div
                        variants={textVariants}
                        className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-8"
                      >
                        {slide.subTitle}{' '}
                        <span className="italic text-yellow-400 font-bold border-b-2 border-yellow-400/60">
                          {slide.highlightText}
                        </span>{' '}
                        {slide.desc}
                      </motion.div>

                      <motion.button
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-xl shadow-orange-900/40 transition-all duration-300 uppercase tracking-wider"
                      >
                        {slide.btnText}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-orange-600 text-white items-center justify-center transition-all hidden sm:flex">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-orange-600 text-white items-center justify-center transition-all hidden sm:flex">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-6">
          <div className="custom-pagination flex items-center" />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;