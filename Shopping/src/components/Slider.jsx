import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const photos = [
  {
    id: 1,
    img: "https://pbs.twimg.com/media/Eg2NdzdWoAMmDqM?format=jpg&name=large",
  },
  {
    id: 2,
    img: "https://pbs.twimg.com/media/FqmfweYaAAAJwr_?format=jpg&name=medium",
  },
  {
        id:3,
        img:"https://cdn.neowin.com/news/images/uploaded/2023/10/1697743744_xbox-power-your-dreams.jpg",
  },
  {
    id:4,
    img:"https://www.gtavice.net/content/images/rockstar-games-twitter-banner-dec-6-2023-1500x500.jpeg",
  },
];

const Slider = () => {

    

  return (
    <div className=" mt-8 bg-black">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
           <div
                style={{
                    background:`url(${photo.img}) center no-repeat`,
                    backgroundSize:"cover",
                }}
                className=" h-[250px] sm:h-[500px]"
           >

           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
