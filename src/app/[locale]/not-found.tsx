import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <h1>Not Found</h1>
            {/* <html>
                <body className="text-center">
                    <h1>Not Found</h1>
                    <div>This page could not be found.</div>
                    <Link href="/">Back to Home</Link>
                </body>
            </html> */}
        </>
    );
};

export default NotFound;
// "use client";

// export default function NotFound() {
//     return (
//         <html>
//             <body className="text-center">
//                 <h1 className="mt-10 font-semibold">Something went wrong!</h1>
//             </body>
//         </html>
//     );
// }
