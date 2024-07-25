"use client";

import dynamic from "next/dynamic";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useAppDispatch, useAppSelector } from "@customHooks/useTypedDispatch";
import { setHamburgerShow } from "@redux/slices/hamburgerSlice";

const MainMenu = dynamic(() => import("@components/core/MainMenu/index"));
const TopMenu = dynamic(() => import("@components/core/TopMenu/index"));

const SideMenu = () => {
    const dispatch = useAppDispatch();

    // side menu close function
    const handleClose = () => {
        dispatch(setHamburgerShow(false));
    };

    const isSideMenu = useAppSelector((state) => state.hamburger);

    return (
        <Offcanvas show={isSideMenu.show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <MainMenu type="mobile" />
                <TopMenu type="mobile" />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SideMenu;
