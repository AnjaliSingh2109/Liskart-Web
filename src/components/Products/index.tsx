import dynamic from "next/dynamic";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { TProducts } from "@models/index";

const ProductCard = dynamic(() => import("@components/core/ProductCard"), {
    loading: () => <p>...</p>,
});

type TProductsProps = {
    data: TProducts[];
};

const ProductsComponent = (props: TProductsProps) => {
    const { data } = props;

    return (
        <>
            <Row className="row-gap-4 row-cols-1 row-cols-lg-2 row-cols-xl-3">
                {data.map((item) => (
                    <Col key={item.id}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ProductsComponent;
