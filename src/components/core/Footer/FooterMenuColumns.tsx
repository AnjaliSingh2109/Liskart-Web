import Link from "next/link";

import styles from "./FooterMenuColumns.module.scss";
import { TMenu } from "./typeDefs";

type TFooterMenuColumnsProps = {
    title: string;
    menus: TMenu[];
};

const FooterMenuColumns = (props: TFooterMenuColumnsProps) => {
    const { title, menus } = props;
    return (
        <>
            <h5 className="text-white mb-2 mb-md-3">{title}</h5>
            <ul className={`d-flex flex-column gap-2 gap-md-2_5 p-0 m-0 text-white ${styles.menu}`}>
                {menus.map((item) => (
                    <li key={item.title}>
                        <Link href={item.url} className="link-medium link-opacity-50-hover fs-base transition-2_5">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FooterMenuColumns;
