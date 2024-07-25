import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type TWishListBtnProps = {
    isWished: boolean;
    className?: string;
};

const WishListBtn = (props: TWishListBtnProps) => {
    const { className, isWished } = props;
    return (
        <Button
            type="button"
            className={`border-medium border-opacity-50 fs-6 p-3 lh-1 ${className}`}
            variant="outline-dark"
        >
            {isWished ? <FaHeart /> : <FaRegHeart />}
        </Button>
    );
};

export default WishListBtn;
