"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainMenu.module.scss";

const MainMenu = ({ type }: { type: "desktop" | "mobile" }) => {
    const pathName = usePathname();
    console.log(pathName);
    const mainMenu = [
        {
            id: "0",
            title: "Home",
            slug: "",
        },
        {
            id: "1",
            title: "About Us",
            slug: "about-us",
        },
        {
            id: "2",
            title: "Brands",
            slug: "",
        },
        {
            id: "3",
            title: "OEM Catalog",
            slug: "oem-catalog",
        },
        {
            id: "4",
            title: "Network",
            slug: "network",
        },
        {
            id: "5",
            title: "Contact Us",
            slug: "contact-us",
        },
    ];
    return (
        <ul className={`${styles.mainMenu} ${styles[type]} d-flex list-unstyled mb-0`}>
            {mainMenu.map((item) => {
                const isActive = pathName.startsWith(`en/network`);
                console.log(isActive);
                return (
                    <li key={item.id}>
                        <Link
                            // locale={pathName}
                            href={item.slug}
                            key={item.title}
                            className={isActive ? "text-primary" : undefined}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default MainMenu;
