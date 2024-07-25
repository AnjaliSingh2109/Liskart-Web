"use client";

import Button from "react-bootstrap/Button";
import { BiMenuAltLeft } from "react-icons/bi";

import { useAppDispatch } from "@customHooks/useTypedDispatch";
import { setHamburgerShow } from "@redux/slices/hamburgerSlice";

const Hamburger = () => {
    const dispatch = useAppDispatch();

    // show sidemenu function
    const handleShow = () => {
        dispatch(setHamburgerShow(true));
    };

    return (
        <Button variant="white" className="p-0 d-lg-none" onClick={handleShow}>
            <BiMenuAltLeft size="32" />
        </Button>
    );
};

export default Hamburger;
