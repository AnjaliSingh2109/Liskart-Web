import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <div>Related Products</div>
        </>
    );
};

export default ProductDetailsLayout;
