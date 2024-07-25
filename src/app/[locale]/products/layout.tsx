import dynamic from "next/dynamic";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const InnerBanner = dynamic(() => import("@components/core/InnerBanner"), {
    loading: () => <p>...</p>,
});

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <InnerBanner />

            <Container className="py-4 py-md-5">
                <Row>
                    <Col xs={12} md={5} lg={4} xl={3}>
                        <div>Filter Sidebar</div>
                    </Col>
                    <Col xs={12} md={7} lg={8} xl={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductsLayout;
