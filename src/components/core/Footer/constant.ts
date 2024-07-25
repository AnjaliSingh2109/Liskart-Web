import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const mockFooterMenus = [
    {
        title: "About",
        menus: [
            {
                title: "About Us",
                url: "/about-us",
            },
            {
                title: "FAQ",
                url: "/faq",
            },
            {
                title: "Contact Us",
                url: "/contact-us",
            },
        ],
    },
    {
        title: "Policy",
        menus: [
            {
                title: "Return Policy",
                url: "/return-policy",
            },
            {
                title: "Privacy Policy",
                url: "/privacy-policy",
            },
            {
                title: "Disclaimer",
                url: "/disclaimer",
            },
            {
                title: "Terms of Use",
                url: "/terms-of-use",
            },
            {
                title: "Buyers Policy",
                url: "/buyers-policy",
            },
            {
                title: "Sellers Policy",
                url: "/sellers-policy",
            },
        ],
    },
    {
        title: "Useful Links",
        menus: [
            {
                title: "Blogs",
                url: "/blogs",
            },
            {
                title: "Testimonials",
                url: "/testimonials",
            },
            {
                title: "OEM",
                url: "/oem",
            },
            {
                title: "Our Catalogue",
                url: "/our-catalogue",
            },
        ],
    },
];

export const mockSocialData = [
    {
        icon: FaFacebookF,
        link: "https://facebook.com",
    },
    {
        icon: FaTwitter,
        link: "https://twitter.com",
    },
    {
        icon: FaLinkedinIn,
        link: "https://linkedin.com",
    },
];
