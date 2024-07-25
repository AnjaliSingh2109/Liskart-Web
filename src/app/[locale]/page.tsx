import { useTranslations } from "next-intl";
import { ApolloProvider } from '@apollo/client';

// export default function Index() {
//     const t = useTranslations();
//     return <h1>{t("About.title")}</h1>;
// }

import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("@/components/Home"), {
    loading: () => <p>Home Loading...</p>,
});

export default function Home() {
    const t = useTranslations();

    return (
        <>
           
            <h1>{t("About.title")}</h1>
            <HomeComponent />
           
        </>
    );
}
