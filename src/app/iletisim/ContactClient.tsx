"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Loader2, CheckCircle2, XCircle, RefreshCw, Mail, MapPin } from "lucide-react";
import ScrollReveal from "../../components/main/ScrollReveal";
import { siteConfig } from "../../data/siteData";
import { Input, Textarea, Select } from "../../components/main/FormElements";

// --- D3 GLOBE BAĞIMLILIKLARI ---
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

interface WorldAtlasTopology extends Topology { objects: { countries: GeometryCollection; }; }

// --- SOSYAL MEDYA İKONLARI (SVG) ---
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.2 4.2 0 0 0-.1-3.21s-1.15-.38-3.38 1.1A11.7 11.7 0 0 0 12 4a11.7 11.7 0 0 0-3.38.62c-2.23-1.48-3.38-1.1-3.38-1.1a4.2 4.2 0 0 0-.1 3.21 4.6 4.6 0 0 0-1.39 3.23c0 5.6 3.36 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);

// --- DENGELİ VE KONTROLLÜ UFUK KÜRESİ ---
function HorizonGlobe() {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [worldData, setWorldData] = useState<any>(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const loadWorldData = async () => {
            try {
                const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
                const world = (await response.json()) as WorldAtlasTopology;
                const countries = feature(world, world.objects.countries);
                setWorldData(countries);
            } catch (error) {
                console.error("Error loading world data", error);
            }
        };
        loadWorldData();
    }, []);

    useEffect(() => {
        if (!svgRef.current || !worldData || dimensions.width === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const radius = Math.min(dimensions.width * 0.45, 340);
        const projection = d3.geoOrthographic()
            .scale(radius)
            .translate([dimensions.width / 2, radius + 15])
            .precision(0.5);

        const path = d3.geoPath().projection(projection);

        svg.append("path")
            .datum({ type: "Sphere" } as any)
            .attr("fill", "transparent")
            .attr("stroke", "rgba(255,255,255,0.04)")
            .attr("stroke-width", 1);

        const graticule = d3.geoGraticule();
        const gratPath = svg.append("path")
            .datum(graticule() as any)
            .attr("fill", "none")
            .attr("stroke", "rgba(255,255,255,0.02)")
            .attr("stroke-width", 0.5);

        const landPath = svg.append("path")
            .datum(worldData as any)
            .attr("fill", "none")
            .attr("stroke", "rgba(255,255,255,0.12)")
            .attr("stroke-width", 0.7);

        let r0 = 0;
        let frameId: number;

        const rotate = () => {
            r0 += 0.06;
            projection.rotate([r0, -35]);
            gratPath.attr("d", path as any);
            landPath.attr("d", path as any);
            frameId = requestAnimationFrame(rotate);
        };

        rotate();

        return () => cancelAnimationFrame(frameId);
    }, [worldData, dimensions]);

    return (
        <div ref={containerRef} className="w-full max-w-4xl mx-auto h-[160px] md:h-[220px] overflow-hidden opacity-40">
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="w-full h-full block" />
        </div>
    );
}

export default function ContactClient() {
    const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const result = await response.json();
                setErrorMessage(result.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Bağlantı kurulamadı. Lütfen tekrar deneyin.");
            setStatus("error");
        }
    };

    return (
        <main className="flex flex-col min-h-screen bg-brand-bg">
            {/* BAŞLIK ALANI - KESİNLİKLE DOKUNULMADI */}
            <section className="page-header">
                <div className="page-header-content">
                    <ScrollReveal>
                        <h1 className="page-title">İletişim</h1>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">

                    {/* Açıklama Metni */}
                    <ScrollReveal delay={50}>
                        <p className="text-lg md:text-xl text-brand-muted/80 max-w-3xl leading-relaxed">
                            YAGE hakkında merak ettiklerin, etkinlikler, iş birlikleri veya diğer konular için bizimle iletişime geçebilirsin.
                        </p>
                    </ScrollReveal>

                    {/* İLETİŞİM BİLGİLERİ VE FORM KARTLARI */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                            {/* SOL SÜTUN: İletişim Bilgileri */}
                            <div className="lg:col-span-4 bg-brand-surface border border-brand-text/10 rounded-xl p-6 md:p-8 flex flex-col gap-8 shadow-sm">
                                <h2 className="text-xl font-bold text-brand-text border-b border-brand-text/5 pb-4">Bize Ulaşın</h2>

                                <div className="flex flex-col gap-6">
                                    {/* E-posta */}
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-muted flex items-center gap-2">
                                            <Mail size={14} className="text-brand-primary" /> E-posta
                                        </span>
                                        <a href={`mailto:${siteConfig.contact.email}`} className="text-base text-brand-text hover:text-brand-primary transition-colors font-medium pl-5">
                                            {siteConfig.contact.email}
                                        </a>
                                    </div>

                                    {/* Konum */}
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-muted flex items-center gap-2">
                                            <MapPin size={14} className="text-brand-primary" /> Konum
                                        </span>
                                        <p className="text-base text-brand-text leading-relaxed font-medium pl-5">
                                            {siteConfig.contact.addressDetail.split(', ')[0]},<br />
                                            <span className="text-brand-muted font-normal">{siteConfig.contact.addressDetail.split(', ')[1]}</span>
                                        </p>
                                    </div>

                                    {/* Sosyal Medya */}
                                    <div className="flex flex-col gap-2 pt-2 border-t border-brand-text/5">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-muted mb-1">Sosyal Medya</span>
                                        <div className="flex items-center gap-3">
                                            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 bg-brand-bg border border-brand-text/5 rounded-lg text-brand-muted hover:text-brand-social-instagram transition-colors">
                                                <InstagramIcon />
                                            </a>
                                            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 bg-brand-bg border border-brand-text/5 rounded-lg text-brand-muted hover:text-[#0A66C2] transition-colors">
                                                <LinkedinIcon />
                                            </a>
                                            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 bg-brand-bg border border-brand-text/5 rounded-lg text-brand-muted hover:text-white transition-colors">
                                                <GithubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SAĞ SÜTUN: Form Alanı */}
                            <div className="lg:col-span-8 bg-brand-surface border border-brand-text/10 rounded-xl p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-brand-text mb-6 border-b border-brand-text/5 pb-4">Mesaj Gönder</h2>

                                {status === "success" ? (
                                    <div className="bg-brand-bg border border-brand-primary/30 py-12 px-6 rounded-lg flex flex-col items-center justify-center text-center animate-fade-in">
                                        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                                            <CheckCircle2 size={32} className="text-brand-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-text mb-3">Mesajınız başarıyla gönderildi.</h3>
                                        <p className="text-brand-muted text-base max-w-md mb-8 leading-relaxed">
                                            Bize ulaştığınız için teşekkürler. İlettiğiniz mesaj en kısa sürede incelenip tarafınıza dönüş yapılacaktır.
                                        </p>
                                        <button onClick={() => setStatus("idle")} className="inline-flex items-center gap-2 bg-brand-surface border border-brand-text/10 text-brand-text px-8 py-3 rounded-md text-sm font-bold hover:border-brand-primary/50 transition-all uppercase tracking-widest font-mono">
                                            <RefreshCw size={14} /> Yeni Mesaj Gönder
                                        </button>
                                    </div>
                                ) : (
                                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" maxLength={120} value={formData.name} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg border-brand-text/10" />
                                            <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" maxLength={254} value={formData.email} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg border-brand-text/10" />
                                        </div>
                                        <Select
                                            id="subject"
                                            label="Konu"
                                            placeholder="Konu Seçiniz"
                                            options={[
                                                { value: "genel", label: "Genel Bilgi" },
                                                { value: "etkinlik", label: "Etkinlik" },
                                                { value: "is_birligi", label: "İş Birliği" },
                                                { value: "sponsorluk", label: "Sponsorluk" },
                                                { value: "proje", label: "Proje" },
                                                { value: "diger", label: "Diğer" }
                                            ]}
                                            value={formData.subject} onChange={handleChange} disabled={status === "loading"}
                                            className="bg-brand-bg border-brand-text/10"
                                        />
                                        <Textarea id="message" label="Mesaj" placeholder="Mesajınızı buraya yazın..." maxLength={5000} rows={5} value={formData.message} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg border-brand-text/10" />

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-brand-error text-sm bg-brand-error/10 p-3 rounded-md border border-brand-error/20">
                                                <XCircle size={16} className="shrink-0" /><span>{errorMessage}</span>
                                            </div>
                                        )}

                                        <div className="pt-2">
                                            <button type="submit" disabled={status === "loading"} className="w-full sm:w-auto flex justify-center items-center gap-2 bg-brand-primary text-brand-text px-10 py-3.5 text-sm font-bold hover:bg-brand-primary/90 transition-colors duration-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                                                {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</> : <>Mesajı Gönder <ArrowRight size={16} /></>}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* DEKORATİF KÜRE BÖLÜMÜ */}
                    <div className="flex flex-col items-center mt-6">
                        <ScrollReveal delay={120} className="w-full flex flex-col items-center">
                            <HorizonGlobe />
                        </ScrollReveal>
                    </div>

                    {/* İŞLEVSEL HARİTA BÖLÜMÜ */}
                    <div className="flex flex-col w-full mt-2">
                        <ScrollReveal delay={180} className="w-full">
                            <div className="flex items-center justify-between mb-3 px-1">
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-muted font-mono">Bizi Ziyaret Edin</span>
                                <span className="text-xs text-brand-muted/70">Teknoloji Fakültesi Önkuzu Binası</span>
                            </div>
                            <div className="w-full h-[300px] md:h-[320px] bg-brand-surface border border-brand-text/10 rounded-xl overflow-hidden relative shadow-sm">
                                <iframe
                                    title="Gazi Üniversitesi Önkuzu Binası Konumu"
                                    src="https://maps.google.com/maps?q=Gazi%20%C3%9Cniversitesi%20Teknoloji%20Fak%C3%BCltesi%20%C3%96nkuzu%20Binas%C4%B1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-all duration-700"
                                ></iframe>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>
        </main>
    );
}