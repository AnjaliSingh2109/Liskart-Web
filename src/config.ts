import { LocalePrefix } from "next-intl/routing";

// A list of all locales that are supported
export const locales = ["en", "hi"] as const;

// If you only want to include a locale prefix for non-default locales, you can configure your routing accordingly
export const localePrefix = "as-needed" satisfies LocalePrefix;
