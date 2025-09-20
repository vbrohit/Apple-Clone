import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { IoMdPlayCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdPauseCircleFilled } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const Slider = () => {
  const [playState, setPlayState] = useState(true);
  const swiperRef = useRef(null);
  const changeState = () => {
    setPlayState((state) => !state);

    if (playState) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  };

  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-[100%]  mx-auto relative mb-8">
      <button className="swiper-button-prev absolute left-[5px] top-1/2 z-10 rounded-full p-2 hover:bg-gray-500">
        <TbArrowBigLeftLinesFilled className="text-white" />
      </button>
      <button className="swiper-button-next text-black absolute right-[5px] top-1/2 z-10 rounded-full p-2 hover:bg-gray-500">
        <TbArrowBigRightLinesFilled className="text-white" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-gray-700 rounded-full inline-block"></span>`;
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          200: { slidesPerView: 1.5 }, // mobile
          640: { slidesPerView: 1.5 }, // mobile
          768: { slidesPerView: 1.5 }, // tablet
          1024: { slidesPerView: 1.2 }, // desktop
        }}
        className="pb-10"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`/slider${src}.jpg`}
              alt={`Slide ${idx + 1}`}
              loading="lazy"
              className="w-full h-[300px]  sm:h-[350px] md:h-[400px] md:object-cover lg:h-[450px] filter brightness-40 contrast-125"
            />
            <button className="absolute">hi</button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="custom-pagination flex justify-center items-center gap-2 absolute w-full z-20 "
        style={{ bottom: "-20px" }}
      ></div>
      <style jsx="true">{`
        .swiper-pagination-bullet-active {
          background-color: #000 !important;
          opacity: 1 !important;
          transform: scale(1);
          width: 25px;
          border-radius: 10px;
        }
      `}</style>
      <style jsx="true">{`
  .swiper-slide-active img {
  filter:brightness(100%)
   
   
  }
  .swiper-slide img {
    transition: transform 0.3s;
  }
`}</style>
      <div
        className="absolute right-2 mt-2 z-20 cursor-pointer "
        onClick={changeState}
      >
        
        {playState ? <MdPauseCircleFilled /> : <IoMdPlayCircle />}
      </div>
    </div>
  );
};

export default Slider;