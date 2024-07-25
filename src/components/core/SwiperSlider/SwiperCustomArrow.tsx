import Button from "react-bootstrap/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type TSwiperCustomArrowTypes = {
    className?: string;
    mode: "next" | "prev";
};

const SwiperCustomArrow = (props: TSwiperCustomArrowTypes) => {
    const { className, mode } = props;
    return (
        <Button
            type="button"
            className={`border-medium border-opacity-50 p-2 p-md-3 lh-1 ${className}`}
            variant="outline-dark"
        >
            {mode === "next" ? <FaArrowRight /> : <FaArrowLeft />}
        </Button>
    );
};

export default SwiperCustomArrow;
