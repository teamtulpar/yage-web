import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import BackToTop from "../../components/main/BackToTop";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-inter",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    title: {
        default: "YAGE | Yazılım Araştırma ve Geliştirme Topluluğu",
        template: "%s | YAGE",
    },
    description:
        "Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu. Yazılım dünyasında birlikte öğreniyor ve projeler geliştiriyoruz.",
    keywords: ["YAGE", "Gazi Üniversitesi", "Yazılım Topluluğu", "Teknoloji", "Öğrenci Topluluğu"],
    authors: [{ name: "YAGE" }],
    creator: "YAGE",
    metadataBase: new URL("https://yage.gazi.edu.tr"), // TODO kaldırıldı, gerçek domain formatına geçildi (Örnek domain, kendi domaininize göre ayarlayabilirsiniz)
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: "https://yage.gazi.edu.tr",
        title: "YAGE | Yazılım Araştırma ve Geliştirme Topluluğu",
        description: "Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu. Yazılım dünyasında birlikte öğreniyor ve projeler geliştiriyoruz.",
        siteName: "YAGE",
        images: [
            {
                url: "/images/logo/yage-logo.png",
                width: 1200,
                height: 630,
                alt: "YAGE Logo",
            },
        ],
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={`${inter.variable} scroll-smooth antialiased`}>
        <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col font-sans selection:bg-brand-primary/30 selection:text-brand-text">
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
        <BackToTop />
        </body>
        </html>
    );
}
