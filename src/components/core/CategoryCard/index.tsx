import Link from "next/link";
import { ReactSVG } from "react-svg";

import { TCategoryItems } from "@/models";

import styles from "./CategoryCard.module.scss";

type TCategoryCardProps = {
    category: TCategoryItems;
};

const CategoryCard = (props: TCategoryCardProps) => {
    const { category } = props;
    return (
        <Link
            href={category.link}
            className={`rounded-3 overflow-hidden bg-secondary bg-opacity-10 p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center gap-3 text-center h-100 transition-2_5 ${styles.card}`}
        >
            <ReactSVG src={category.icon} style={{ height: 40 }} className="svgFull" />
            <h3 className="fw-medium small m-0 text-black">{category.title}</h3>
        </Link>
    );
};

export default CategoryCard;
