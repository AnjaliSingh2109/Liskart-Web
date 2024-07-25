import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"), {
    loading: () => <p>...</p>,
});

const Banner = dynamic(() => import("./Banner"), {
    loading: () => <p>...</p>,
});

const Catalogue = dynamic(() => import("./Catalogue"), {
    loading: () => <p>...</p>,
});

const Oem = dynamic(() => import("./Oem"), {
    loading: () => <p>...</p>,
});

const PopularProducts = dynamic(() => import("./PopularProducts"), {
    loading: () => <p>...</p>,
});

const Segments = dynamic(() => import("./Segments"), {
    loading: () => <p>...</p>,
});

const Faqs = dynamic(() => import("./Faq"), {
    loading: () => <p>...</p>,
});

const Testimonials = dynamic(() => import("./Testimonials"), {
    loading: () => <p>...</p>,
});

const Blogs = dynamic(() => import("./Blogs"), {
    loading: () => <p>...</p>,
});

// const Footer = dynamic(() => import("./Footer"), {
//     loading: () => <p>...</p>,
// });

// const Login = dynamic(() => import("./Login"), {
//     loading: () => <p>...</p>,
// });

const HomeComponent = () => {
    return (
        <>
            <Banner />
            {/* <Segments sectionClassName="pt-6 pt-lg-7" /> */}
            <Segments/>
            {/* <PopularProducts sectionClassName="pt-6 pt-lg-7" /> */}
            <PopularProducts/>
            {/* <Catalogue sectionClassName="py-6 py-lg-7" /> */}
            <Catalogue/>
            {/* <Oem sectionClassName="py-6 py-lg-7" /> */}
            <Oem/>
            {/* <About sectionClassName="pt-6 pt-lg-7" /> */}
            <About/>
            <Testimonials sectionClassName="py-6 py-lg-7" />
            <Blogs sectionClassName="py-6 py-lg-7" />
            {/* <Faq sectionClassName="py-6 py-lg-7" /> */}
            <Faqs/>
            {/* <Footer /> */}
            
        </>
    );
};

export default HomeComponent;
