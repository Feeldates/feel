"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './estilo_slider_swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

const SliderSwiper = () => {

    const data = [
        "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "https://reactscript.com/wp-content/uploads/2020/12/Custom-Toast-Component-Using-TailwindCSS.png",
        "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg"
    ];

    return (
        <div className={"flex md:w-[70%] lg:w-[70%] items-center mx-auto md:rounded-[30px] lg:rounded-[30px] h-[400px] relative overflow-hidden"}>
            <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src={data[0]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[1]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[2]} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderSwiper;