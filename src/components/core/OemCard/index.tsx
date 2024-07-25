import Image from "next/image";
import Ratio from "react-bootstrap/Ratio";

import { TOemItems } from "@/models";
import useWindowDimensions from "@customHooks/useWindowDimensions";

type TOemCardProps = {
    oem: TOemItems;
};

const OemCard = (props: TOemCardProps) => {
    const { oem } = props;
    const { width } = useWindowDimensions();

    return (
        <div className={`rounded bg-white p-3 p-md-4`}>
            <Ratio aspectRatio={width && width <= 575 ? "1x1" : "21x9"}>
                <Image src={oem.image} alt="Oem" fill={true} style={{ objectFit: "contain" }} />
            </Ratio>
        </div>
    );
};

export default OemCard;
