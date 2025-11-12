export const SUPPORTED_LOCALES = ["en", "id"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "id";

const dictionary = {
    en: {
        locale: "en" as const,
        hero: {
            name: "Feisal Dharma Yuda",
            role: "Web Developer",
            tagline: "Build scalable systems with clean code and clear structure.",
            ctaAbout: "More about me",
            ctaProjects: "View project",
        },
        nav: {
            about: "About",
            projects: "Projects",
            home: "Home",
        },
        projects: {
            heading: "Selected Projects",
            fallbackBadge: "Indonesia version",
            empty: "Projects are on the way. Check back soon!",
        },
        about: {
            title: "About Me",
        },
        footer: {
            note: "Built with Next.js and Tailwind CSS",
        },
        metadata: {
            homeTitle: "Feisal Dharma Yuda | Web Developer",
            homeDescription:
                "Web developer blending clean architecture with delightful user experience.",
            aboutTitle: "About Feisal Dharma Yuda",
            aboutDescription:
                "Learn about Feisal Dharma Yuda’s journey, skills, and development philosophy.",
            projectsTitle: (title: string) => `${title} | Project by Feisal Dharma Yuda`,
            projectsDescription: (description: string) => description,
        },
        languageSwitcher: {
            label: "Switch language",
            optionEn: "English",
            optionId: "Bahasa Indonesia",
        },
        actions: {
            backToProjects: "Back to projects",
            viewDemo: "Visit demo",
            viewRepo: "View repository",
            viewNews: "View news",
        },
    },
    id: {
        locale: "id" as const,
        hero: {
            name: "Feisal Dharma Yuda",
            role: "Web Developer",
            tagline: "Membangun sistem yang skalabel dengan kode yang bersih dan struktur yang jelas.",
            ctaAbout: "Kenali saya",
            ctaProjects: "Lihat proyek",
        },
        nav: {
            about: "Tentang",
            projects: "Proyek",
            home: "Beranda",
        },
        projects: {
            heading: "Proyek Pilihan",
            fallbackBadge: "Versi Inggris",
            empty: "Proyek sedang disiapkan. Kunjungi kembali nanti!",
        },
        about: {
            title: "Tentang Saya",
        },
        footer: {
            note: "Dibangun dengan Next.js dan Tailwind CSS",
        },
        metadata: {
            homeTitle: "Feisal Dharma Yuda | Web Developer",
            homeDescription:
                "Pengembang web yang memadukan arsitektur bersih dan pengalaman pengguna yang solid.",
            aboutTitle: "Tentang Feisal Dharma Yuda",
            aboutDescription:
                "Pelajari perjalanan, keterampilan, dan filosofi pengembangan Feisal Dharma Yuda.",
            projectsTitle: (title: string) => `${title} | Proyek oleh Feisal Dharma Yuda`,
            projectsDescription: (description: string) => description,
        },
        languageSwitcher: {
            label: "Ganti bahasa",
            optionEn: "English",
            optionId: "Bahasa Indonesia",
        },
        actions: {
            backToProjects: "Kembali ke proyek",
            viewDemo: "Lihat demo",
            viewRepo: "Lihat repositori",
            viewNews: "Lihat berita",
        },
    },
};

export type Dictionary = (typeof dictionary)[Locale];

export function isLocale(value: string): value is Locale {
    return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getDictionary(requestedLocale: string | undefined): Dictionary {
    if (requestedLocale && isLocale(requestedLocale)) {
        return dictionary[requestedLocale];
    }
    return dictionary[DEFAULT_LOCALE];
}

export function getAlternateLocale(locale: Locale): Locale {
    return locale === "en" ? "id" : "en";
}
