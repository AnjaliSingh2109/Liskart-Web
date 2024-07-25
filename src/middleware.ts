import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./config";

export default createMiddleware({
    // A list of all locales that are supported
    locales,
    localePrefix,
    // Used when no locale matches
    defaultLocale: "en",
});

export const config = {
    // Match only internationalized pathnames
    // matcher: ["/", "/hi/:path*"],
    matcher: ["/((?!_next|.*\\..*).*)"],
    // matcher: ['/(?!_next|.*\\..*)(/hi/:path*)?'],
};
