import React from "react";

import { FiUser } from "react-icons/fi";
import { PiSealPercent } from "react-icons/pi";
import Link from "next/link";
import styles from "./TopMenu.module.scss";
import { useRouter } from 'next/router';

const TopMenu = ({ type }: { type: "desktop" | "mobile" }) => {
    // const router = useRouter();

    const handleNavigation = (slug: string) => {
        // router.push(slug);
    };

    const topMenu = [
        {
            id: "0",
            title: "Login/Register",
            icon: <FiUser size={24} className="me-2" />,
            slug: "/Login",
        },
        {
            id: "1",
            title: "Start Selling",
            icon: <PiSealPercent size={24} className="me-2" />,
            slug: "#",
        },
    ];
    return (
        <ul className={`${styles.topMenu} ${styles[type]} list-unstyled mb-0`}>
            {topMenu.map((item) => (
            //     <li key={item.id} onClick={() => handleNavigation(item.slug)}>
            //         <Link href={item.slug} className="d-flex align-items-center">
            //             {item.icon}
            //             <span>{item.title}</span>
            //         </Link>
            //     </li>
            <li key={item.id} onClick={() => handleNavigation(item.slug)}>
            <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
                {item.icon}
                <span>{item.title}</span>
            </div>
        </li>
             ))}
        </ul>
    );
};

export default TopMenu;
