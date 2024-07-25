import { useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import Ratio from "react-bootstrap/Ratio";
import { TbMinusVertical } from "react-icons/tb";

import { TTestimonialItems } from "@/models";
import useWindowDimensions from "@customHooks/useWindowDimensions";

import CommonModal from "../CommonModal";

const PlayBtn = dynamic(() => import("@components/core/PlayBtn"), {
    loading: () => <p>...</p>,
});

type TTestimonialsCardProps = {
    testimonialsItem: TTestimonialItems;
};

const TestimonialsCard = (props: TTestimonialsCardProps) => {
    const { testimonialsItem } = props;
    const { name, image, video, designation, company } = testimonialsItem;
    const { width } = useWindowDimensions();
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handlePlayBtnClick = () => {
        setShowVideo(true);
    };

    const handleModalCloseClick = () => {
        setShowVideo(false);
    };

    const generateAlignmentClass = (alignment: string) => {
        switch (alignment) {
            case "start":
                return "justify-content-start";
            case "center":
                return "justify-content-center";
            case "end":
                return "justify-content-end";
            default:
                return "justify-content-start";
        }
    };

    const cardDescription = (alignment: string) => (
        <>
            <div className={`d-flex align-items-center gap-1 mb-2 ${generateAlignmentClass(alignment)}`}>
                <h3 className="m-0 fs-base lh-1">{name}</h3>
                <TbMinusVertical className="fs-7 text-medium lh-1" />
                <h4 className="m-0 fs-base lh-1">{designation}</h4>
            </div>
            <h5 className="fs-sm m-0">{company}</h5>
        </>
    );

    return (
        <>
            <div className="text-center">
                <Ratio aspectRatio={`5x3`} className="rounded-3 overflow-hidden mb-3 mb-md-4">
                    <>
                        <Image alt={name} src={image} fill={true} style={{ objectFit: "cover" }} />
                        {video && <PlayBtn onClick={handlePlayBtnClick} />}
                    </>
                </Ratio>
                {cardDescription("center")}
            </div>
            <CommonModal
                modalProps={{
                    centered: true,
                    show: showVideo,
                    backdrop: "static",
                    onHide: () => setShowVideo(false),
                }}
                ModalBodyComponent={
                    <>
                        <iframe
                            width="100%"
                            height={video && width && width >= 1199 ? 520 : 380}
                            src={`${video}?autoplay=1`}
                            title={name}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mb-2 mb-md-3 rounded"
                        />
                        {cardDescription("start")}
                    </>
                }
                onCloseClick={handleModalCloseClick}
            />
        </>
    );
};

export default TestimonialsCard;
