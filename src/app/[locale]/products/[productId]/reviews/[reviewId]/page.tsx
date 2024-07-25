import React from "react";

const Reviews = ({ params }: { params: { productId: string; reviewId: string } }) => {
    console.log(params);
    return (
        <div>
            Reviews {params.reviewId} of product {params.productId}
        </div>
    );
};

export default Reviews;
