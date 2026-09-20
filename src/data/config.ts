import { SiteConfig, Sponsor } from "../types";

export const siteConfig: SiteConfig = {
    contact: {
        email: "yagegazi@gmail.com",
        addressDetail: "Gazi Üniversitesi Teknoloji Fakültesi, Ankara",
        shortAddress: "Teknoloji Fakültesi, Ankara"
    },
    social: {
        instagram: "https://www.instagram.com/gaziyage",
        linkedin: "https://www.linkedin.com/company/gaziyage",
        github: "https://github.com/orgs/teamtulpar/",
        whatsapp: "https://chat.whatsapp.com/I0uLyeqGZ12LMNTKAYaCIn"
    }
};

export const sponsors: Sponsor[] = [
    { name: "Gazi Üniversitesi", logo: "/images/sponsorlar/gazi-logo.jpg" },
    { name: "TÜBİTAK", logo: "/images/sponsorlar/tubitak-logo.png" },
];