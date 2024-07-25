import { useSearchParams } from "next/navigation";
import Pagination from "rc-pagination";
import Button from "react-bootstrap/esm/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./CustomPagination.module.scss";

interface CustomPaginationProps {
    current: number;
    total: number;
    pageSize: number;
    onChange: (page: number) => void;
    className?: string;
}

const CustomPagination = (props: CustomPaginationProps) => {
    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());

    const { current, total, pageSize, onChange, className } = props;
    const itemRender = (current: number, type: string, originalElement: React.ReactNode) => {
        if (type === "prev") {
            return (
                <>
                    <Button type="button" variant="outline-medium" className={`fs-sm p-0 ${styles.button}`}>
                        <FaChevronLeft />
                    </Button>{" "}
                    <span className="fw-medium fs-base">Previous</span>
                </>
            );
        }
        if (type === "next") {
            return (
                <>
                    <span className="fw-medium fs-base">Next</span>
                    <Button type="button" variant="outline-medium" className={`fs-sm p-0 ${styles.button}`}>
                        <FaChevronRight />
                    </Button>
                </>
            );
        }
        if (type === "page") {
            return (
                //  <Link href={`/?page=${current}`} passHref>
                <Button
                    type="button"
                    variant={current === Number(params.page) ? "outline-primary" : "outline-medium"}
                    className={`fs-sm p-0 ${styles.button}`}
                >
                    {current}
                </Button>
                //  </Link>
            );
        }
        if (type === "jump-next" || type === "jump-prev") {
            return (
                <Button type="button" variant="outline-medium" className={`fs-sm p-0 ${styles.button}`}>
                    ...
                </Button>
            );
        }
        return originalElement;
    };

    return (
        <Pagination
            current={current}
            total={total}
            pageSize={pageSize}
            onChange={onChange}
            itemRender={itemRender}
            className={className}
        />
    );
};

export default CustomPagination;
