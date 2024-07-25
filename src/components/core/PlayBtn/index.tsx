import Button from "react-bootstrap/Button";
import { ReactSVG } from "react-svg";

import useWindowDimensions from "@customHooks/useWindowDimensions";
import { getResponsiveValue } from "@utils/utils";

import styles from "./PlayBtn.module.scss";

type TChildComponentProps = {
    onClick: () => void;
    size?: number;
};

const PlayBtn = (props: TChildComponentProps) => {
    const { width } = useWindowDimensions();
    const {
        onClick,
        size = getResponsiveValue(
            width,
            [
                { breakpoint: 0, value: 60 },
                { breakpoint: 767, value: 80 },
                { breakpoint: 1200, value: 100 },
                { breakpoint: 1480, value: 130 },
            ],
            130
        ),
    } = props;
    return (
        <Button
            className={`rounded-0 bg-black bg-opacity-25 border-0 ${styles.button}`}
            variant="clear"
            onClick={onClick}
        >
            <ReactSVG
                src={`/assets/icons/play.svg`}
                style={{ width: size, height: size }}
                className="svgFull mx-auto text-white"
            />
        </Button>
    );
};

export default PlayBtn;
