"use client";

import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { IconType } from "react-icons/lib";

import useWindowDimensions from "@customHooks/useWindowDimensions";

import { mockFooterMenus, mockSocialData } from "./constant";
import ContactCards from "./ContactCards";
import FooterMenuColumns from "./FooterMenuColumns";
import { TFooter } from "./typeDefs";

type TSocial = {
    icon: IconType;
    link: string;
};

const Footer = () => {
    const [data, setData] = useState<TFooter[]>([]);
    const [socials, setSocials] = useState<TSocial[]>([]);
    const currentYear = new Date().getFullYear();

    const { width } = useWindowDimensions();

    useEffect(() => {
        setData(mockFooterMenus);
        setSocials(mockSocialData);
    }, []);

    return (
        <footer className="bg-dark py-5 py-lg-6">
            <Container>
                <Row className="row-gap-5">
                    {data &&
                        data.map((item, index) => (
                            <Col
                                xs={6}
                                sm={4}
                                lg={2}
                                key={item.title}
                                className={
                                    width && width <= 575
                                        ? index === 0
                                            ? "order-0"
                                            : index === 1
                                              ? "order-2"
                                              : index === 2
                                                ? "order-1"
                                                : ""
                                        : ""
                                }
                            >
                                <FooterMenuColumns menus={item.menus} title={item.title} />
                            </Col>
                        ))}
                    <Col xs={6} sm={12} lg={6} className={width && width <= 575 ? "order-3" : ""}>
                        <h5 className="text-white mb-2 mb-md-3">Contact Details</h5>
                        <Row className="row-gap-3 row-gap-md-4">
                            <Col xs={12} md={4} lg={6} className="d-flex gap-2_5">
                                <ContactCards
                                    icon={<FaLocationArrow className="text-white fs-6 flex-shrink-0 mt-1" />}
                                    text="No. 28, Poomagal Main Road, (Behind Olympia Tech Park), Ekkattuthangal, Chennai – 600 032"
                                    link="https://maps.app.goo.gl/KCC3mB2QJmgNrgBz6"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={6} className="d-flex gap-2_5">
                                <ContactCards
                                    icon={<FaPhone className="text-white fs-6 flex-shrink-0 mt-1" />}
                                    text="(044) 2225 5032/34/35"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={6} className="d-flex gap-2_5">
                                <ContactCards
                                    icon={<FaEnvelope className="text-white fs-6 flex-shrink-0 mt-1" />}
                                    text="lis@lismail.in"
                                    link="mailto:lis@lismail.in"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="border-top border-white border-opacity-10 pt-5 pt-lg-6 mt-5 mt-lg-6">
                    <Col xs={12} md={6}>
                        <p className="m-0 text-medium">
                            Copyright &copy; {currentYear}{" "}
                            <a
                                href="lucasindiancatalog.com"
                                target="_blank"
                                className="link-success link-opacity-50-hover transition-2_5"
                            >
                                lucasindiancatalog.com
                            </a>
                            . All Rights Reserved.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-end gap-2_5">
                        {socials &&
                            socials.map((item) => (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="link-white link-opacity-25-hover transition-2_5 bg-white bg-opacity-10 fs-6 p-2 rounded-circle"
                                    key={String(item.icon)}
                                >
                                    {/* {String(item.icon)} */}
                                    <item.icon />
                                </a>
                            ))}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
