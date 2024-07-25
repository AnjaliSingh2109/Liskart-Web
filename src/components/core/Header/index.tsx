"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import Hamburger from "@components/core/Hamburger/index";
import TopBar from "@components/core/Header/TopBar";
import HeaderSearch from "@components/core/HeaderSearch/index";
import MainMenu from "@components/core/MainMenu/index";
import useWindowDimensions from "@customHooks/useWindowDimensions";

import styles from "./Header.module.scss";

const Header = () => {
    const { width } = useWindowDimensions();
    return (
        <header className="position-sticky z-3 top-0">
            <TopBar />
            <div className={`${styles.bottomBar} bg-light py-2 d-flex align-items-center`}>
                <Container>
                    <Stack direction="horizontal" gap={3}>
                        <>
                            {width !== undefined && width < 1025 && (
                                <div>
                                    <Hamburger />
                                </div>
                            )}
                        </>
                        <div>
                            <Image
                                src="/assets/images/logo.png"
                                alt="Liscart"
                                title="Liscart"
                                width={290}
                                height={40}
                                // sizes="(min-width: 808px) 50vw, 100vw"
                                // fill
                                // placeholder="blur"
                                // blurDataURL="/assets/images/logo.png"
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>
                        <div className="ms-auto">
                            <HeaderSearch />
                        </div>
                        <div>
                            <MainMenu type="desktop" />
                        </div>
                    </Stack>
                </Container>
            </div>
        </header>
    );
};

export default Header;
