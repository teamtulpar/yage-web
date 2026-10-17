"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import ScrollReveal from "../../components/main/ScrollReveal";
import { unitDetails, allUnits } from "../../data/siteData";
import { Input, Textarea, Select } from "../../components/main/FormElements";

export default function JoinClient() {
    const router = useRouter();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "", facultyDept: "", grade: "", email: "", phone: "",
        primaryUnit: "", unitAnswer: "", secondaryUnits: [] as string[],
        experiences: "", github: "", linkedin: "", additionalInfo: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePrimaryUnitSelect = (unit: string) => {
        setFormData(prev => ({
            ...prev, primaryUnit: unit,
            secondaryUnits: prev.secondaryUnits.filter(u => u !== unit)
        }));
    };

    const toggleSecondaryUnit = (unit: string) => {
        setFormData(prev => {
            if (prev.secondaryUnits.includes(unit)) return { ...prev, secondaryUnits: prev.secondaryUnits.filter(u => u !== unit) };
            if (prev.secondaryUnits.length >= 2) return prev;
            return { ...prev, secondaryUnits: [...prev.secondaryUnits, unit] };
        });
    };

    const isFormValid = formData.name.trim() !== "" && formData.facultyDept.trim() !== "" &&
        formData.grade !== "" && formData.email.trim() !== "" &&
        formData.primaryUnit !== "" && formData.unitAnswer.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        setStatus("loading");
        try {
            const response = await fetch("/api/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setStatus(response.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="relative flex flex-col min-h-screen w-full bg-brand-bg overflow-hidden">

            {/* --- ARKA PLAN DESENİ (KAYDIRILABİLİR - ABSOLUTE) --- */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        background: 'radial-gradient(100% 100% at 0% 0%, rgba(20, 20, 25, 1) 0%, rgba(9, 9, 11, 1) 100%)',
                        mask: 'radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMask: 'radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)'
                    }}
                >
                    {/* Işık Hüzmeleri */}
                    <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0) 100%)', mask: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgba(0,0,0,0) 36%, rgb(0,0,0) 55%, rgba(0,0,0,0.13) 67%, rgb(0,0,0) 78%, rgba(0,0,0,0) 97%)', WebkitMask: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgba(0,0,0,0) 36%, rgb(0,0,0) 55%, rgba(0,0,0,0.13) 67%, rgb(0,0,0) 78%, rgba(0,0,0,0) 97%)', transform: 'skewX(45deg)' }} />
                    <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0) 100%)', mask: 'linear-gradient(90deg, rgba(0,0,0,0) 11%, rgb(0,0,0) 25%, rgba(0,0,0,0.55) 41%, rgba(0,0,0,0.13) 67%, rgb(0,0,0) 78%, rgba(0,0,0,0) 97%)', WebkitMask: 'linear-gradient(90deg, rgba(0,0,0,0) 11%, rgb(0,0,0) 25%, rgba(0,0,0,0.55) 41%, rgba(0,0,0,0.13) 67%, rgb(0,0,0) 78%, rgba(0,0,0,0) 97%)', transform: 'skewX(45deg)' }} />
                    <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0) 100%)', mask: 'linear-gradient(90deg, rgba(0,0,0,0) 9%, rgb(0,0,0) 20%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.424) 40%, rgb(0,0,0) 48%, rgba(0,0,0,0.267) 54%, rgba(0,0,0,0.13) 78%, rgb(0,0,0) 88%, rgba(0,0,0,0) 97%)', WebkitMask: 'linear-gradient(90deg, rgba(0,0,0,0) 9%, rgb(0,0,0) 20%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.424) 40%, rgb(0,0,0) 48%, rgba(0,0,0,0.267) 54%, rgba(0,0,0,0.13) 78%, rgb(0,0,0) 88%, rgba(0,0,0,0) 97%)', transform: 'skewX(45deg)' }} />
                </div>

                {/* Gürültü ve Nokta (Dot) Deseni */}
                <div
                    className="absolute inset-0 opacity-[0.03] bg-repeat mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")', backgroundSize: '150px' }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: "24px 24px" }}
                />

                {/* Alt Kısım Geçişi - Arka planın kesilmemesi için uzatılmış fade efekti */}
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-brand-bg via-brand-bg/90 to-transparent pointer-events-none" />
            </div>
            {/* --- ARKA PLAN BİTİŞ --- */}

            {/* İçerik */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {/* Üst Bilgi / Başlık Alanı (Daha Okunabilir ve Dengeli Renkler) */}
                <section className="pt-32 pb-12 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 bg-brand-surface border border-brand-text/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-text">Başvurular Açık</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight drop-shadow-sm">Yönetim Kuruluna Katıl</h1>
                            <div className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto flex flex-col gap-4 drop-shadow-sm">
                                <p>
                                    Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu (YAGE) olarak, yeni dönemde bizimle birlikte çalışacak ekip arkadaşlarımızı arıyoruz.
                                </p>
                                <p>
                                    Bu ekipte yer almak için üst düzey teknik bilgiye ihtiyacın yok. Aradığımız temel kriterler: <strong className="text-brand-text font-semibold">Sorumluluk bilinci, öğrenme hevesi ve takım çalışmasına yatkınlık.</strong>
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Form Alanı */}
                <section className="w-full pb-32 px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto">
                        {status === "success" ? (
                            <ScrollReveal>
                                <div className="bg-brand-surface/80 backdrop-blur-xl border border-brand-text/10 rounded-sm p-10 flex flex-col items-center text-center animate-fade-in shadow-2xl">
                                    <CheckCircle2 size={56} className="text-brand-primary mb-6" />
                                    <h2 className="text-2xl font-bold text-brand-text mb-3">Başvurun alındı.</h2>
                                    <p className="text-brand-muted text-base max-w-md mb-8 leading-relaxed">
                                        YAGE'ye katılmak istediğin için teşekkürler. Başvurunu inceleyip belirttiğin e-posta adresinden sana ulaşacağız.
                                    </p>
                                    <button onClick={() => router.push('/')} className="text-sm font-bold text-brand-text bg-brand-text/5 border border-brand-text/10 px-6 py-3 rounded-sm hover:bg-brand-text/10 transition-colors flex items-center gap-2">
                                        Ana Sayfaya Dön <ArrowRight size={16} />
                                    </button>
                                </div>
                            </ScrollReveal>
                        ) : (
                            <ScrollReveal delay={50}>
                                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>

                                    {/* 1. KISIM: Kişisel Bilgiler */}
                                    <div className="bg-brand-surface/80 backdrop-blur-xl border border-brand-text/10 p-6 md:p-10 rounded-sm flex flex-col gap-6 shadow-xl">
                                        <h2 className="text-xl font-bold text-brand-text border-b border-brand-text/5 pb-3">1. Kişisel Bilgiler</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="md:col-span-2">
                                                <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" maxLength={120} value={formData.name} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                            </div>
                                            <Input id="facultyDept" label="Fakülte / Bölüm" placeholder="Örn: Teknoloji Fakültesi / Bilgisayar Müh." maxLength={150} value={formData.facultyDept} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                            <Select
                                                id="grade"
                                                label="Sınıf"
                                                placeholder="Sınıf Seçiniz"
                                                options={[{ value: "Hazırlık", label: "Hazırlık" }, { value: "1. Sınıf", label: "1. Sınıf" }, { value: "2. Sınıf", label: "2. Sınıf" }, { value: "3. Sınıf", label: "3. Sınıf" }, { value: "4. Sınıf", label: "4. Sınıf" }]}
                                                value={formData.grade} onChange={handleChange} disabled={status === "loading"}
                                                className="bg-brand-bg/50"
                                            />
                                            <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" maxLength={254} value={formData.email} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                            <Input id="phone" type="tel" label="Telefon" optional placeholder="0555 555 55 55" maxLength={25} value={formData.phone} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                        </div>
                                    </div>

                                    {/* 2. KISIM: Birim Tercihi */}
                                    <div className="bg-brand-surface/80 backdrop-blur-xl border border-brand-text/10 p-6 md:p-10 rounded-sm flex flex-col gap-8 shadow-xl">
                                        <h2 className="text-xl font-bold text-brand-text border-b border-brand-text/5 pb-3">2. Birim Tercihi</h2>

                                        <div className="flex flex-col gap-3">
                                            <label className="text-sm font-medium text-brand-text/90">Öncelikli olarak hangi birimde görev almak istersin? <span className="text-brand-error">*</span></label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {allUnits.map((unit) => (
                                                    <button
                                                        key={unit} type="button" onClick={() => handlePrimaryUnitSelect(unit)}
                                                        className={`p-3.5 text-left border rounded-sm transition-colors duration-200 ${
                                                            formData.primaryUnit === unit ? "border-brand-primary bg-brand-primary/10 text-brand-text" : "border-brand-text/10 bg-brand-bg/50 hover:border-brand-text/30 text-brand-muted hover:text-brand-text"
                                                        }`}
                                                    >
                                                        <span className="text-sm font-bold block">{unit}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            {formData.primaryUnit && (
                                                <p className="text-sm text-brand-muted mt-1 animate-fade-in">
                                                    <strong className="text-brand-primary font-medium">{formData.primaryUnit}:</strong> {unitDetails[formData.primaryUnit].description}
                                                </p>
                                            )}
                                        </div>

                                        <Textarea
                                            id="unitAnswer"
                                            label={formData.primaryUnit ? unitDetails[formData.primaryUnit].question : "Bu birimde neden görev almak istiyorsun?"}
                                            placeholder="Kısaca anlatabilirsin..."
                                            maxLength={1500}
                                            rows={3}
                                            value={formData.unitAnswer}
                                            onChange={handleChange}
                                            disabled={status === "loading"}
                                            className="bg-brand-bg/50"
                                        />

                                        <div className="flex flex-col gap-3">
                                            <label className="text-sm font-medium text-brand-text/90">Başka birimlerde de değerlendirilmek ister misin? <span className="text-brand-muted/50 font-normal">(Opsiyonel - En fazla 2)</span></label>
                                            <div className="flex flex-wrap gap-2">
                                                {allUnits.filter(u => u !== formData.primaryUnit).map(unit => (
                                                    <button
                                                        key={unit} type="button" onClick={() => toggleSecondaryUnit(unit)}
                                                        disabled={!formData.primaryUnit}
                                                        className={`px-3 py-2 text-xs font-medium border rounded-sm transition-colors ${
                                                            formData.secondaryUnits.includes(unit) ? "border-brand-text/30 text-brand-text bg-brand-text/10" : "border-brand-text/5 text-brand-muted bg-brand-bg/50 hover:bg-brand-surface-light disabled:opacity-50 disabled:cursor-not-allowed"
                                                        }`}
                                                    >
                                                        {unit}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. KISIM: Seni Tanıyalım */}
                                    <div className="bg-brand-surface/80 backdrop-blur-xl border border-brand-text/10 p-6 md:p-10 rounded-sm flex flex-col gap-6 shadow-xl">
                                        <h2 className="text-xl font-bold text-brand-text border-b border-brand-text/5 pb-3">3. Seni Tanıyalım</h2>
                                        <Textarea id="experiences" label="Daha Önce Yaptığın Çalışmalar" optional placeholder="Yer aldığın topluluklar veya projeler..." maxLength={1500} rows={3} value={formData.experiences} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <Input id="github" type="url" label="GitHub" optional placeholder="GitHub profil bağlantın" maxLength={250} value={formData.github} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                            <Input id="linkedin" type="url" label="LinkedIn" optional placeholder="LinkedIn profil bağlantın" maxLength={250} value={formData.linkedin} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                        </div>
                                        <Textarea id="additionalInfo" label="Eklemek İstediğin Bir Şey Var mı?" optional placeholder="Paylaşmak istediğin diğer detaylar..." maxLength={1500} rows={2} value={formData.additionalInfo} onChange={handleChange} disabled={status === "loading"} className="bg-brand-bg/50" />
                                    </div>

                                    {/* Hata Mesajı ve Gönder Butonu */}
                                    <div className="flex flex-col gap-4">
                                        {status === "error" && (
                                            <div className="flex items-center justify-center gap-2 text-brand-error text-sm bg-brand-error/10 p-4 rounded-sm border border-brand-error/20">
                                                <XCircle size={16} /><span>Başvuru gönderilemedi. Lütfen tekrar deneyin.</span>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading" || !isFormValid}
                                            className="w-full flex justify-center items-center gap-2 bg-brand-primary text-brand-text px-10 py-4 text-sm font-bold hover:bg-brand-primary/80 transition-colors duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                                        >
                                            {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Gönderiliyor...</> : <>Başvuruyu Gönder <ArrowRight size={18} /></>}
                                        </button>
                                    </div>

                                </form>
                            </ScrollReveal>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}