import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

const Partners = () => {

    return (
        <>

            <div className="Partners part_top">
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{

                        767: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1300: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                        1500: {
                            slidesPerView: 8,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/img/part_1_1.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_2.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_3.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_4.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_5.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_6.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_7.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_8.png" alt="" className="part_img" />
                    </SwiperSlide>
                </Swiper> */}
            </div>

            <div className="asd">
                <div className="wrapper">
                    <div className="slider">
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                    </div>
                </div>


                <div className="wrapper ">
                    <div className="slider">
                        <div className="slide slide2 ">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                        <div className="slide slide2">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                        <div className="slide slide2">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="slider">
                        <div className="slide">
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_8.png" alt="" className="part_img" />
                            <img src="/img/part_1_7.png" alt="" className="part_img" />
                            <img src="/img/part_1_6.png" alt="" className="part_img" />
                            <img src="/img/part_1_5.png" alt="" className="part_img" />
                            <img src="/img/part_1_4.png" alt="" className="part_img" />
                            <img src="/img/part_1_3.png" alt="" className="part_img" />
                            <img src="/img/part_1_2.png" alt="" className="part_img" />
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="Partners">
                <Swiper
                    dir="rtl"
                    slidesPerView={3}
                    spaceBetween={40}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{

                        767: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1300: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                        1500: {
                            slidesPerView: 8,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/img/part_1_1.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_2.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_3.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_4.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_5.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_6.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_7.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_8.png" alt="" className="part_img" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="Partners ">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    loop={true}
                    loopFillGroupWithBlank={true}

                    breakpoints={{

                        767: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1300: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                        1500: {
                            slidesPerView: 8,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 50,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/img/part_1_1.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_2.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_3.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_4.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_5.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_6.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_7.png" alt="" className="part_img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/part_1_8.png" alt="" className="part_img" />
                    </SwiperSlide>
                </Swiper>
            </div> */}

            {/* <div className="body_part">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                        <div className="slide">
                            <img src="/img/part_1_1.png" alt="" className="part_img" />
                        </div>
                    </div>
                </div>
            </div> */}




        </>
    )
}

export default Partners