"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import ScrollReveal from "../../../components/main/ScrollReveal";
import { siteConfig } from "../../../data/siteData";
import { Input, Textarea, Select } from "../../../components/main/FormElements";

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
            <section className="page-header">
                <div className="page-header-content">
                    <ScrollReveal>
                        <h1 className="page-title mb-6">İletişim</h1>
                        <p className="text-lg md:text-xl text-brand-muted/80 max-w-2xl leading-relaxed">
                            YAGE hakkında merak ettiklerin, etkinlikler, iş birlikleri veya diğer konular için bizimle iletişime geçebilirsin.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pb-24 px-6 pt-16">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                            <div className="md:col-span-4 flex flex-col gap-10">
                                <h2 className="text-2xl font-bold text-brand-text mb-2">Bize Ulaşın</h2>
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">E-posta</h3>
                                        <a href={`mailto:${siteConfig.contact.email}`} className="text-base text-brand-text hover:text-brand-primary transition-colors">
                                            {siteConfig.contact.email}
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">Sosyal Medya</h3>
                                        <ul className="flex flex-col gap-2">
                                            <li><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-base text-brand-text hover:text-brand-social-instagram transition-colors">Instagram</a></li>
                                            <li><a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-base text-brand-text hover:text-brand-social-linkedin transition-colors">LinkedIn</a></li>
                                            <li><a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="text-base text-brand-text hover:text-brand-muted transition-colors">GitHub</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">Konum</h3>
                                        {/* dangerouslySetInnerHTML kaldırıldı, güvenli JSX yapısına geçildi */}
                                        <p className="text-base text-brand-text leading-relaxed">
                                            {siteConfig.contact.addressDetail.split(', ')[0]},<br />
                                            <span className="text-brand-muted">{siteConfig.contact.addressDetail.split(', ')[1]}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-8 md:pl-16">
                                <h2 className="text-2xl font-bold text-brand-text mb-8">Mesaj Gönder</h2>
                                {status === "success" ? (
                                    <div className="bg-brand-surface border border-brand-primary/30 p-10 rounded-sm flex flex-col items-center justify-center text-center animate-fade-in shadow-xl">
                                        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                                            <CheckCircle2 size={32} className="text-brand-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-text mb-3">Mesajınız başarıyla gönderildi.</h3>
                                        <p className="text-brand-muted text-base max-w-md mb-8 leading-relaxed">
                                            Bize ulaştığınız için teşekkürler. İlettiğiniz mesaj en kısa sürede incelenip tarafınıza dönüş yapılacaktır.
                                        </p>
                                        <button onClick={() => setStatus("idle")} className="inline-flex items-center gap-2 bg-brand-surface border border-brand-text/10 text-brand-text px-8 py-3 rounded-sm text-sm font-bold hover:border-brand-primary/50 transition-all uppercase tracking-widest font-mono">
                                            <RefreshCw size={14} /> Yeni Mesaj Gönder
                                        </button>
                                    </div>
                                ) : (
                                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                        <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" maxLength={120} value={formData.name} onChange={handleChange} disabled={status === "loading"} />
                                        <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" maxLength={254} value={formData.email} onChange={handleChange} disabled={status === "loading"} />
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
                                        />
                                        <Textarea id="message" label="Mesaj" placeholder="Mesajınızı buraya yazın..." maxLength={5000} rows={5} value={formData.message} onChange={handleChange} disabled={status === "loading"} />

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-brand-error text-sm bg-brand-error/10 p-3 rounded-sm border border-brand-error/20">
                                                <XCircle size={16} /><span>{errorMessage}</span>
                                            </div>
                                        )}
                                        <div className="mt-2">
                                            <button type="submit" disabled={status === "loading"} className="w-full md:w-auto flex justify-center items-center gap-2 bg-brand-primary text-brand-text px-10 py-3.5 text-sm font-bold hover:bg-brand-text hover:text-brand-bg transition-colors duration-300 rounded-sm disabled:opacity-70 disabled:hover:bg-brand-primary disabled:hover:text-brand-text">
                                                {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</> : <>Mesajı Gönder <ArrowRight size={16} /></>}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
