"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SwiperProps } from "swiper/react";

import { TBlogItems } from "@/models";
import SwiperCustomArrow from "@components/core/SwiperSlider/SwiperCustomArrow";
import useWindowDimensions from "@customHooks/useWindowDimensions";
import { getResponsiveValue } from "@utils/utils";

import styles from "./Blogs.module.scss";
import { mockOemData } from "./constant";

const SwiperSlider = dynamic(() => import("@components/core/SwiperSlider"), {
    loading: () => <p>...</p>,
});

const BlogCard = dynamic(() => import("@components/core/BlogCard"), {
    loading: () => <p>...</p>,
});

type TOemProps = {
    sectionClassName?: string;
};

const Oem = (props: TOemProps) => {
    const { sectionClassName } = props;
    const [data, setData] = useState<TBlogItems[]>([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setData(mockOemData);
    }, []);

    const swiperSettings: SwiperProps = {
        spaceBetween: 16,
        slidesPerView: 1,
        navigation: {
            nextEl: ".blogNextArrow",
            prevEl: ".blogPrevArrow",
        },
        pagination: false,
        breakpoints: {
            575: {
                slidesPerView: 1.5,
            },
            767: {
                slidesPerView: 1.25,
            },
            1024: {
                slidesPerView: 2.125,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    };

    return (
        <section className={`bg-light ${sectionClassName}`}>
            <Container>
                <Row className="row-gap-4">
                    <Col xs={12} md={6} lg={8}>
                        <h2 className="fs-1 m-0 mb-3 mb-md-4">Blogs</h2>
                        <div className="bg-white p-3 p-md-4 rounded-3">
                            <SwiperSlider
                                settings={swiperSettings}
                                className={`mb-2 mb-md-3 ${getResponsiveValue(
                                    width,
                                    [
                                        { breakpoint: 0, value: "" },
                                        { breakpoint: 575, value: "me-n3" },
                                        { breakpoint: 767, value: "me-n4" },
                                        { breakpoint: 1200, value: "" },
                                    ],
                                    ""
                                )}`}
                            >
                                {data.map((item) => (
                                    <div key={item.id} className={`h-100 position-relative ${styles.items}`}>
                                        <BlogCard blog={item} />
                                    </div>
                                ))}
                            </SwiperSlider>
                            <div className="d-flex justify-content-end gap-2">
                                <SwiperCustomArrow className="blogPrevArrow" mode="prev" />
                                <SwiperCustomArrow className="blogNextArrow" mode="next" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image
                            alt="Ad 01"
                            src={`/assets/images/ads.png`}
                            width={634}
                            height={809}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Oem;
