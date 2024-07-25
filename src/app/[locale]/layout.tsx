// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

// export default async function LocaleLayout({
//     children,
//     params: { locale },
// }: {
//     children: React.ReactNode;
//     params: { locale: string };
// }) {
//     // Providing all messages to the client
//     // side is the easiest way to get started
//     const messages = await getMessages();

//     return (
//         <html lang={locale}>
//             <body>
//                 <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
//             </body>
//         </html>
//     );
// }

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import "@styles/globals.scss";

import ApolloWrapper from "@/utils/ApolloWrapper";
import Footer from "@components/core/Footer";
import Header from "@components/core/Header/index";
import SideMenu from "@components/core/SideMenu/index";

import StoreProvider from "../StoreProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--lis-body-font-family",
});

// const Header = dynamic(() => import("@components/core/Header/index"));
// const SideMenu = dynamic(() => import("@components/core/SideMenu/index"));

export const metadata: Metadata = {
    title: "LisKart :: Lucas Indian Service Limited",
    description: "The Aftermarket Solutions Provider",
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default async function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <StoreProvider>
                        <ApolloWrapper>
                            <Header />
                            <SideMenu />
                            <main className="position-relative z-2">{children}</main>
                           <Footer/>
                        </ApolloWrapper>
                    </StoreProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
