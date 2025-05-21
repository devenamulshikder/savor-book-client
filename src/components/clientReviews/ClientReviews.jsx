/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment:
        "This app changed my cooking game! Found so many amazing recipes that my family loves. The chocolate lava cake is now my signature dish!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment:
        "As a busy dad, I appreciate the quick and easy recipes. The avocado toast recipe saved my breakfast routine!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment:
        "The Thai curry recipe was restaurant-quality. I've tried many recipe apps but this one stands out for its clear instructions.",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      comment:
        "The community features are fantastic. I've shared my grandmother's pasta recipe and got so much love from other users!",
      date: "5 days ago",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className="py-16 px-4 bg-base-200"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div variants={item} className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            What Our Users Say
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Hear from our community of food lovers and home chefs
          </p>
        </motion.div>

        {/* Reviews Slider */}
        <motion.div variants={item} className="px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-amber-400/50",
              bulletActiveClass:
                "!bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D]",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-base-100 p-8 rounded-xl shadow-md h-full"
                >
                  <FaQuoteLeft className="text-amber-400 text-2xl mb-4 opacity-70" />
                  <p className="text-base-content/90 mb-6">{review.comment}</p>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${
                          i < review.rating
                            ? "text-amber-400"
                            : "text-base-content/30"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <p className="text-sm text-base-content/60">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default ClientReviews;