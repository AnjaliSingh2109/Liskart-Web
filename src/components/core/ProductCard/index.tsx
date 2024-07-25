import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdOutlineStar } from "react-icons/md";

import { TProducts } from "@/models";
import { formatNumber } from "@utils/formatAmount";

import styles from "./ProductCard.module.scss";
import WishListBtn from "./WishListBtn";

type TProductCardProps = {
    product: TProducts;
    mode?: "detailed" | "minified";
};

const ProductCard = (props: TProductCardProps) => {
    const { product, mode = "detailed" } = props;
    const t = useTranslations();

    return (
        <div
            className={`border border-medium border-opacity-50 rounded p-3 d-flex flex-column h-100 position-relative transition-2_5 ${styles.card}`}
        >
            <Link
                href={product.link}
                className={`rounded overflow-hidden mb-3 p-3 d-flex align-items-center justify-content-center stretched-link`}
            >
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={200}
                    style={{ objectFit: "contain" }}
                    className="position-relative z-2"
                />
            </Link>
            <WishListBtn isWished={product.isWished} className="position-absolute top-0 end-0 mt-3 me-3 z-3" />
            <h3 className="fs-6 fw-semibold text-black mb-1 lh-sm">{product.title}</h3>
            {mode === "detailed" && <p className="fs-sm fw-medium text-medium mb-2 lh-1">{product.type}</p>}
            {mode === "minified" && <p className="fw-medium text-medium mb-2">{product.description}</p>}
            {mode === "detailed" && (
                <Row className="row-gap-3 row-cols-2 mb-2 mb-lg-3 mt-lg-2">
                    {product.partNumber && (
                        <Col>
                            <p className="fs-7 fw-medium text-dark mb-0">{t("global.part_number")}</p>
                            <p className="fs-sm text-medium mb-0">{product.partNumber}</p>
                        </Col>
                    )}
                    {product.partNumber && (
                        <Col>
                            <p className="fs-7 fw-medium text-dark mb-0">{t("global.segment")}</p>
                            <p className="fs-sm text-medium mb-0">{product.segment}</p>
                        </Col>
                    )}
                    {product.partNumber && (
                        <Col>
                            <p className="fs-7 fw-medium text-dark mb-0">{t("global.brand")}</p>
                            <p className="fs-sm text-medium mb-0">{product.brand}</p>
                        </Col>
                    )}
                    {product.partNumber && (
                        <Col>
                            <p className="fs-7 fw-medium text-dark mb-0">{t("global.oem")}</p>
                            <p className="fs-sm text-medium mb-0">{product.oem}</p>
                        </Col>
                    )}
                </Row>
            )}
            {mode === "minified" && (
                <div className="d-flex mb-3 mt-auto">
                    {[0, 1, 2, 3, 4].map((item: number) => (
                        <MdOutlineStar
                            className={`fs-6 ${
                                item === product.rating || item <= product.rating
                                    ? "text-warning"
                                    : "text-medium text-opacity-50"
                            }`}
                            key={item}
                        />
                    ))}
                </div>
            )}
            <div className="d-flex align-items-center gap-2">
                <span className="text-primary fs-5 fw-semibold">₹{formatNumber(product.price)}</span>
                {product.price < product.oldPrice && (
                    <span className="text-dark text-opacity-50 fs-7 fw-semibold text-decoration-line-through">
                        ₹{formatNumber(product.oldPrice)}
                    </span>
                )}
                <Button type="button" variant="outline-primary" className="ms-auto position-relative z-2 text-nowrap">
                    {t("global.add_to_cart")}
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
