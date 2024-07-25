import React, { ReactNode } from "react";

import SwiperCore from "swiper/core";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import styles from "./SwiperSlider.module.scss";

type TSwiperSliderProps = {
    settings: SwiperProps;
    children: ReactNode | ReactNode[];
    className?: string;
};

SwiperCore.use([Navigation, Pagination]);

const SwiperSlider = ({ settings, children, className }: TSwiperSliderProps) => {
    const slides = React.Children.toArray(children);

    return (
        <Swiper {...settings} className={`${styles.customSwiper} ${className}`}>
            {slides.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
