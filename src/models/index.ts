import { JSXElementConstructor } from "react";

export type TProducts = {
    id: number;
    image: string;
    title: string;
    description: string;
    type: string;
    partNumber: string;
    segment: string;
    brand: string;
    oem: string;
    rating: number;
    price: number;
    oldPrice: number;
    link: string;
    isWished: boolean;
};

export type TCategoryItems = {
    id: number;
    icon: string;
    title: string;
    link: string;
};

export type TCatalogueItems = {
    id: number;
    image: string;
    title: string;
    link: string;
};

export type TOemItems = {
    id: number;
    image: string;
};

export type TAccordion = {
    id?: number; //I made it optional by puttting ?
    title: string;
    content: string | JSXElementConstructor<any> | any;
};

export type TTestimonialItems = {
    id: string;
    image: string;
    name: string;
    designation: string;
    company: string;
    video?: string;



// //    //id
//      status?:string;
//      title?:string;
// //     //image_url
//     content_category_name:string;
//      sort_order?:string;
// //    // video_url
//      link_url?:string;
//      description?:string;
//     //reviewer_name
//     //reviewer_designation
//    // reviewer_company


    // id: string;
    // status: number;
    // title: string;
    // image_url: string;
    // content_category_name?: string;
    // sort_order?: number;
    // video_url: string;
    // link_url: string;
    // description: string;
    // reviewer_name: string;
    // reviewer_designation: string;
    // reviewer_company: string;

//     id:string;
//     status:number;
//    title:string;
//     image:string;
//     content_category_name:string;
//     sort_order:number;
//     video?:string;
//     link_url?:string;
//     description?:string;
//     name:string;
//     designation:string;
//     company:string;
};

export type TBlogItems = {
    id: number;
    image: string;
    title: string;
    date: string;
    video: string;
};
