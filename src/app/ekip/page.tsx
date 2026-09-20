"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/src/data/siteData";
import ScrollReveal from "@/src/components/ScrollReveal";
import PersonCard from "@/src/components/PersonCard";
import CtaLink from "@/src/components/CtaLink";

export default function TeamPage() {
    const [activeTab, setActiveTab] = useState("Yönetim");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tabs = [
        "Yönetim",
        "Etkinlik ve Organizasyon",
        "Sponsorluk",
        "Sosyal Medya",
        "İletişim",
        "Eğitim ve Proje Geliştirme"
    ];

    const president = teamMembers.filter(m => m.role === "Başkan" || m.role === "Yönetim Kurulu Başkanı");
    const vicePresidents = teamMembers.filter(m => m.role.includes("Başkan Yardımcısı"));
    const unitLeaders = teamMembers.filter(m => m.role.includes("Başkanı") && !m.role.includes("Yardımcısı") && m.role !== "Başkan" && m.role !== "Yönetim Kurulu Başkanı");

    return (
        <main className="flex flex-col min-h-screen bg-brand-bg">
            <section className="page-header bg-brand-bg">
                <div className="page-header-content">
                    <ScrollReveal><h1 className="page-title">Ekibimiz</h1></ScrollReveal>
                </div>
            </section>

            <section
                className={`w-full pt-4 pb-6 sticky top-[72px] md:top-[90px] z-40 px-6 transition-all duration-300 ${
                    isSticky ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-text/5" : "bg-transparent border-transparent"
                }`}
            >
                <ScrollReveal delay={0} className="max-w-6xl mx-auto flex justify-center pointer-events-none">
                    <div className="bg-brand-surface border border-brand-text/5 p-1.5 rounded-sm flex items-center gap-1 overflow-x-auto max-w-full hide-scrollbar pointer-events-auto shadow-xl">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-sm text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-brand-primary text-brand-text shadow-md"
                                        : "text-brand-muted/70 hover:text-brand-text hover:bg-brand-text/5"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            <section className="max-w-6xl mx-auto px-6 w-full pt-8 pb-24 min-h-[50vh]">
                {activeTab === "Yönetim" && (
                    <div key="yonetim-tab" className="animate-fade-in flex flex-col items-center gap-10 md:gap-14">
                        {president.length > 0 && <ScrollReveal><PersonCard member={president[0]} /></ScrollReveal>}
                        {vicePresidents.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                                {vicePresidents.map((member, i) => <ScrollReveal key={i} delay={i * 100}><PersonCard member={member} /></ScrollReveal>)}
                            </div>
                        )}
                        {unitLeaders.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-8 w-full justify-items-center">
                                {unitLeaders.map((member, i) => <ScrollReveal key={`birim-${i}`} delay={i * 50}><PersonCard member={member} roleOverride={`${member.unit} Birim Başkanı`} /></ScrollReveal>)}
                            </div>
                        )}
                    </div>
                )}
                {activeTab !== "Yönetim" && (() => {
                    const activeUnitLeader = teamMembers.find(m => m.unit === activeTab && m.role.includes("Başkanı"));
                    const activeUnitMembers = teamMembers.filter(m => m.unit === activeTab && !m.role.includes("Başkanı"));
                    return (
                        <div key={`birim-tab-${activeTab}`} className="animate-fade-in flex flex-col items-center gap-10 md:gap-14">
                            {activeUnitLeader && <ScrollReveal><PersonCard member={activeUnitLeader} roleOverride={`${activeTab} Birim Başkanı`} /></ScrollReveal>}
                            {activeUnitMembers.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
                                    {activeUnitMembers.map((member, i) => <ScrollReveal key={`uye-${i}`} delay={i * 50}><PersonCard member={member} hideRole={true} /></ScrollReveal>)}
                                </div>
                            )}
                        </div>
                    );
                })()}
            </section>

            <section className="py-16 px-6 relative overflow-hidden border-t border-brand-text/5 bg-brand-surface-darker">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[100px] bg-brand-text/5 blur-[50px] rounded-full pointer-events-none z-0"></div>

                <ScrollReveal className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 tracking-tight">
                            Yönetim Kurulunda Yer Al
                        </h2>
                        <p className="text-brand-muted text-sm md:text-base">
                            YAGE&apos;nin etkinliklerini koordine eden, sponsorluklarını yürüten ve topluluğun altyapısını şekillendiren çekirdek ekibe katıl.
                        </p>
                    </div>

                    <CtaLink href="/katil" className="shrink-0 px-8 py-4">
                        Başvuru Formu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </CtaLink>
                </ScrollReveal>
            </section>
        </main>
    );
}
