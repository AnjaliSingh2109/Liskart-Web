import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import OverlayTrigger, { OverlayTriggerType } from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// import Avatar from "react-avatar";
import { FiUser } from "react-icons/fi";
import { PiSealPercent } from "react-icons/pi";
import Link from "next/link";

import styles from "./Profile.module.scss";

const Profile = () => {
    const profileMenu = [
        {
            id: "0",
            title: "My Profile",
            icon: <FiUser size={16} className="me-2" />,
            slug: "login",
        },
        {
            id: "1",
            title: "My Address Book",
            icon: <PiSealPercent size={16} className="me-2" />,
            slug: "#",
        },
        {
            id: "1",
            title: "My Wishlist",
            icon: <PiSealPercent size={16} className="me-2" />,
            slug: "#",
        },
        {
            id: "1",
            title: "My Order",
            icon: <PiSealPercent size={16} className="me-2" />,
            slug: "#",
        },
        {
            id: "1",
            title: "Signout",
            icon: <PiSealPercent size={16} className="me-2" />,
            slug: "#",
        },
    ];
    const popover = (
        <Popover>
            <Popover.Body className="p-0">
                <ul className={`list-unstyled mb-0`}>
                    {profileMenu.map((item) => (
                        <li key={item.id} className="p-2">
                            <Link href={item.slug} className="d-flex align-items-center">
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="ps-3 ms-3 border-start border-white border-opacity-25">
            <OverlayTrigger trigger="click" rootClose placement="bottom-end" overlay={popover}>
                <div className="cursor-pointer d-flex align-items-center">
                    {/* <Avatar name="John Doe" size="32" round={true} className="me-2" /> */}
                    <div
                        className={`${styles.avatar} rounded-circle d-flex align-items-center bg-dark text-white justify-content-center me-2`}
                    >
                        JD
                    </div>
                    <span className="text-white">John Doe</span>
                </div>
            </OverlayTrigger>
        </div>
    );
};

export default Profile;
