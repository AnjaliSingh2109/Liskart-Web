"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";

import useWindowDimensions from "@customHooks/useWindowDimensions";
import { getResponsiveValue } from "@utils/utils";

const InnerBanner = () => {
    const { width } = useWindowDimensions();

    return (
        <section className="position-relative text-white">
            <Ratio
                aspectRatio={getResponsiveValue(
                    width,
                    [
                        { breakpoint: 0, value: "10x6" },
                        { breakpoint: 575, value: "16x9" },
                        { breakpoint: 767, value: "21x9" },
                        { breakpoint: 1024, value: "30x2" },
                    ],
                    "30x2"
                )}
            >
                <Image
                    src={"/assets/images/inner_banner.jpg"}
                    alt={"Products"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                />
            </Ratio>

            <div
                className={`bg-primary bg-opacity-75 position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center`}
            >
                <Container className="py-3 py-md-4 text-center">
                    <h2 className={`fs-1 text-white fw-medium lh-1`}>Starter Motor</h2>
                    <p className={"fs-sm m-0"}>(Showing 1 – 50 products of 2969 products)</p>
                </Container>
            </div>
        </section>
    );
};

export default InnerBanner;
