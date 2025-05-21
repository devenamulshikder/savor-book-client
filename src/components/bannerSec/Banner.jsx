import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="relative group">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet !bg-amber-500 !opacity-50",
        }}
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        <SwiperSlide>
          <div className="relative h-80 md:h-96 lg:h-[600px] ">
            <img
              src="https://i.postimg.cc/655HmVJf/mario-raj-JLh-ych-Gq-Jo-unsplash-1.jpg"
              alt="Delicious Pasta"
              className="w-full h-full object-cover brightness-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Authentic{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Typewriter
                      typeSpeed={100}
                      delaySpeed={3000}
                      loop={5}
                      deleteSpeed={50}
                      words={["Italian Pasta"]}
                    />
                  </span>
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Discover our chef's special recipe with fresh ingredients
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all">
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-80 md:h-96 lg:h-[600px]">
            <img
              src="https://i.postimg.cc/cHsM2Zg5/emy-Xo-Byi-Bym-X20-unsplash.jpg"
              alt="Spicy Thai Curry"
              className="w-full h-full object-cover brightness-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  New Spicy{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Typewriter
                      typeSpeed={100}
                      delaySpeed={3000}
                      loop={5}
                      deleteSpeed={50}
                      words={["Thai Curry"]}
                    />
                  </span>
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Experience the authentic flavors of Thailand
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all">
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-80 md:h-96 lg:h-[600px]">
            <img
              src="https://i.postimg.cc/05Grrm4m/moreau-tokyo-o-NFT5k-Tqd-NY-unsplash.jpg"
              alt="Gourmet Dish"
              className="w-full h-full object-cover brightness-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Special New{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Typewriter
                      typeSpeed={100}
                      delaySpeed={3000}
                      loop={5}
                      deleteSpeed={50}
                      words={[" Gourmet "]}
                    />
                  </span>
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Elevate your cooking with this restaurant-quality dish
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all">
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-amber-500 !left-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
        <div className="swiper-button-next !text-amber-500 !right-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
      </Swiper>
    </div>
  );
};
export default Banner;