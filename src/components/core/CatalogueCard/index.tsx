import Image from "next/image";
import Link from "next/link";
import Ratio from "react-bootstrap/Ratio";
import { FiLink } from "react-icons/fi";

import { TCatalogueItems } from "@/models";
import useWindowDimensions from "@customHooks/useWindowDimensions";

import styles from "./CatalogueCard.module.scss";

type TCatalogueCardProps = {
    catalogue: TCatalogueItems;
};

const CatalogueCard = (props: TCatalogueCardProps) => {
    const { catalogue } = props;
    const { width } = useWindowDimensions();

    return (
        <div className="d-flex flex-column gap-2 text-center">
            <Link href={catalogue.link} className={`position-relative rounded overflow-hidden ${styles.cardImage}`}>
                <Ratio aspectRatio={width && width <= 575 ? "4x5" : "1x1"}>
                    <Image
                        src={catalogue.image}
                        alt={catalogue.title}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="z-1"
                    />
                </Ratio>
                <FiLink
                    className={`position-absolute z-3 fs-1 text-primary opacity-0 top-50 start-50 translate-middle transition-2_5 ${styles.cardLinkIcon}`}
                />
            </Link>
            <h3 className="fs-6 m-0">{catalogue.title}</h3>
        </div>
    );
};

export default CatalogueCard;
