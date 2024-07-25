import React from "react";

const Catalouge = ({ params }: { params: { slug: string[] } }) => {
    console.log(params);
    // if (params.slug?.length === 1) {
    //     return <div>View catalouge for {params.slug[0]}</div>;
    // } else if (params.slug?.length === 2) {
    //     return (
    //         <div>
    //             View catalouge for {params.slug[0]} and concept {params.slug[1]}
    //         </div>
    //     );
    // }
    let content;
    switch (params.slug?.length) {
        case 1:
            content = <div>View catalouge for {params.slug[0]}</div>;
            break;
        case 2:
            content = (
                <div>
                    View catalouge for {params.slug[0]} and concept {params.slug[1]}
                </div>
            );
            break;
        default:
            content = <div>Catalouge</div>;
            break;
    }
    return content;
};

export default Catalouge;
