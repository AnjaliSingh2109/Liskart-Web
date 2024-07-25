"use client";

import { Fragment, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Container from "react-bootstrap/Container";
import { SwiperProps } from "swiper/react";

import { TTestimonialItems } from "@/models";
import SwiperCustomArrow from "@components/core/SwiperSlider/SwiperCustomArrow";
import useWindowDimensions from "@customHooks/useWindowDimensions";

import { mockTestimonialsData } from "./constant";
//import { TestimonialsItems } from "./typeDefs";
import { useQuery } from "@apollo/client";
import {GET_TEST,GetTestData,GetTestVars,ContentItem} from "../../../graphql/graphqlQueries/test";
import styles from "./Testimonials.module.scss";

const SwiperSlider = dynamic(() => import("@components/core/SwiperSlider"), {
    loading: () => <p>...</p>,
});

const TestimonialsCard = dynamic(() => import("@components/core/TestimonialsCard"), {
    loading: () => <p>...</p>,
});

type TTestimonialsProps = {
    sectionClassName?: string;
};

interface TestimonialsCardProps {
    testimonialsItem: ContentItem;
  }

const Testimonials = (props: TTestimonialsProps) => {
//var TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonialsItem }) => {
    const { sectionClassName } = props;
    //const [data, setData] = useState<TTestimonialItems[]>([]);
    const { width } = useWindowDimensions();

    // useEffect(() => {
    //     setData(mockTestimonialsData);
    // }, []);

    const swiperSettings: SwiperProps = {
        spaceBetween: 16,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".testimonialsNextArrow",
            prevEl: ".testimonialsPrevArrow",
        },
        pagination: false,
        breakpoints: {
            575: {
                slidesPerView: 1.25,
            },
            767: {
                slidesPerView: 1.75,
            },
            1024: {
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    };

    const {loading,error,data}=useQuery<GetTestData>(GET_TEST)
    if(loading) return <h1>Loading</h1>
    if(error){
        console.log(error.message) 
    }

     if(!data || !data.contentManegement) return <p>No data found!</p>;

    return (
        <Container className={`${sectionClassName}`}>
            <div className="d-flex align-items-center gap-3 mb-3 mb-md-4">
                <h2 className="fs-1 m-0">Testimonials</h2>
                <div className="d-flex ms-auto gap-2">
                    <SwiperCustomArrow className="testimonialsPrevArrow" mode="prev" />
                    <SwiperCustomArrow className="testimonialsNextArrow" mode="next" />
                </div>
            </div>
            <SwiperSlider
                settings={swiperSettings}
                className={`${styles.testiSlider} ${width && width <= 1200 && width >= 576 ? "mx-n2_5" : ""}`}
            >
                {data.contentManegement.map((contentItem) => (
                    <Fragment key={contentItem.id}>
                        
                        <TestimonialsCard
              testimonialsItem={{
                id: contentItem.id,
                image: contentItem.image_url, // Mapping image_url to image
                name: contentItem.reviewer_name, // Mapping reviewer_name to name, fallback to name
                designation: contentItem.reviewer_designation , // Mapping reviewer_designation to designation, fallback to designation
                company: contentItem.reviewer_company , // Mapping reviewer_company to company, fallback to company
                video: contentItem.video_url, // Mapping video_url to video
                //status: contentItem.status,
                //title: contentItem.title,
                //content_category_name: contentItem.content_category_name,
               // sort_order: contentItem.sort_order,
                //link_url: contentItem.link_url,
                //description: contentItem.description,
              }}
            />
                    </Fragment>
                ))}
            </SwiperSlider>
        </Container>
    );
};

export default Testimonials;
