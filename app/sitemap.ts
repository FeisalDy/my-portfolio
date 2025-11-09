import { getAllProjectSlugs } from "@/lib/content";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

export const dynamic = "force-static";
export const revalidate = false;

const BASE_URL = "https://feisaldy.dev";

export default async function sitemap() {
    const projectSlugs = getAllProjectSlugs();
    const timestamp = new Date();

    const defaultRoutes = SUPPORTED_LOCALES.flatMap((locale) => {
        const prefix = `${BASE_URL}/${locale}`;
        return [
            {
                url: prefix,
                lastModified: timestamp,
            },
            {
                url: `${prefix}/about`,
                lastModified: timestamp,
            },
        ];
    });

    const projectRoutes = SUPPORTED_LOCALES.flatMap((locale) =>
        projectSlugs.map((slug) => ({
            url: `${BASE_URL}/${locale}/projects/${slug}`,
            lastModified: timestamp,
        })),
    );

    return [
        { url: BASE_URL, lastModified: timestamp },
        ...defaultRoutes,
        ...projectRoutes,
    ];
}
