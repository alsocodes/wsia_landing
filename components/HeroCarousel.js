import React from 'react'
import {
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    UncontrolledCarousel,

} from 'reactstrap'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroCarousel = () => {
    const items = [
        {
            src: "images/blog/blog-1.jpg",
            altText: '',
            caption: '',
            header: ''
        },
        {
            src: "images/blog/blog-2.jpg",
            altText: '',
            caption: '',
            header: ''
        }
    ];

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    )

    // return (
    //     <section id="hero" className="hero d-flex align-items-center">
    //         {/* <div className="container"> */}
    //         {/* <Carousel

    //             >
    //             </Carousel> */}
    //         <UncontrolledCarousel items={items} />
    //         {/* </div> */}
    //     </section>
    // )
}

export default HeroCarousel
