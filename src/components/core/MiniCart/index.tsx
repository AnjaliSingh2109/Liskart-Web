import React from "react";
import Badge from "react-bootstrap/Badge";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import styles from "./MiniCart.module.scss";

const MiniCart = () => {
    return (
        <div className="ps-3 ms-3 border-start border-white border-opacity-25">
            <Link href="cart" className="d-flex align-items-center text-white">
                <div className={`${styles.cartIcon} position-relative`}>
                    <LuShoppingCart size={24} />
                    <Badge bg="success" className={`${styles.badge} position-absolute`}>
                        99+
                    </Badge>
                </div>
                <span className="d-block ms-3">₹1,215.00</span>
            </Link>
        </div>
    );
};

export default MiniCart;
