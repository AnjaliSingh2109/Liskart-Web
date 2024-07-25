import { useState } from "react";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Ratio from "react-bootstrap/Ratio";

import { TBlogItems } from "@/models";
import useWindowDimensions from "@customHooks/useWindowDimensions";
import { getResponsiveValue } from "@utils/utils";

import CommonModal from "../CommonModal";

const PlayBtn = dynamic(() => import("@components/core/PlayBtn"), {
    loading: () => <p>...</p>,
});

type TBlogCardProps = {
    blog: TBlogItems;
};

dayjs.extend(advancedFormat);

const BlogCard = (props: TBlogCardProps) => {
    const { blog } = props;
    const { title, image, video, date } = blog;
    const { width } = useWindowDimensions();
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handleBlogRedirect = () => {
        alert("Go to blog details");
    };

    const handlePlayBtnClick = () => {
        setShowVideo(true);
    };

    const handleModalCloseClick = () => {
        setShowVideo(false);
    };

    return (
        <>
            <>
                <Ratio aspectRatio={`5x3`} className="rounded-3 overflow-hidden mb-3 mb-md-4">
                    <>
                        <Image alt={title} src={image} fill={true} style={{ objectFit: "cover" }} />
                        {video && (
                            <PlayBtn
                                onClick={handlePlayBtnClick}
                                size={getResponsiveValue(
                                    width,
                                    [
                                        { breakpoint: 0, value: 60 },
                                        { breakpoint: 767, value: 80 },
                                        { breakpoint: 1480, value: 95 },
                                    ],
                                    130
                                )}
                            />
                        )}
                    </>
                </Ratio>
                <p className="fs-sm mb-2 mb-md-3 text-primary">{dayjs(date).format("Do MMMM, YYYY")}</p>

                <Button
                    variant="link"
                    onClick={() => handleBlogRedirect()}
                    className="fs-5 text-start p-0 link-dark link-opacity-75-hover text-sentence-case fw-medium lh-sm"
                >
                    {title}
                </Button>
            </>
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
                            title={title}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mb-2 mb-md-3 rounded"
                        />
                        <h4 className="m-0 fs-6">{title}</h4>
                    </>
                }
                onCloseClick={handleModalCloseClick}
            />
        </>
    );
};

export default BlogCard;
