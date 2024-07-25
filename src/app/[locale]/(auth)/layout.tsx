import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    console.log("AuthLayout -", children);
    return (
        <>
            {/* <h1>Auth Layout</h1> */}
            {children}
        </>
    );
};

export default AuthLayout;
