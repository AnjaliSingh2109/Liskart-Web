import Container from "react-bootstrap/Container";

import Internationalization from "@components/core/Internationalization/index";
import MiniCart from "@components/core/MiniCart/index";
import Profile from "@components/core/Profile/index";
import TopMenu from "@components/core/TopMenu/index";

import styles from "./TopBar.module.scss";

// const TopMenu = dynamic(() => import("@components/core/TopMenu/index"));
// const MiniCart = dynamic(() => import("@components/core/MiniCart/index"));
// const Profile = dynamic(() => import("@components/core/Profile/index"));
// const Internationalization = dynamic(() => import("@components/core/Internationalization/index"));

const TopBar = () => {
    return (
        <div className={`${styles.topBar} bg-primary d-flex flex-column justify-content-center`}>
            <Container className="justify-content-end d-flex align-items-center">
                <TopMenu type="desktop" />
                <MiniCart />
                <Profile />
                <Internationalization />
            </Container>
        </div>
    );
};

export default TopBar;
