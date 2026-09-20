"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import ScrollReveal from "../../../components/main/ScrollReveal";
import { unitDetails, allUnits } from "../../../data/siteData";
import { Input, Textarea, Select } from "../../../components/main/FormElements";

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
            ...prev, primaryUnit: unit, unitAnswer: "",
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
        <main className="flex flex-col min-h-screen bg-brand-bg">
            <section className="page-header">
                <div className="max-w-3xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-brand-primary rounded-sm"></div>
                            <span className="font-mono text-xs tracking-widest uppercase text-brand-muted">Yönetim Kurulu Başvurusu</span>
                        </div>
                        <h1 className="page-title mb-4">Yönetim Kuruluna Katıl</h1>
                        <p className="text-base md:text-lg text-brand-muted/90 leading-relaxed mb-4">
                            YAGE&apos;nin mutfağında yer almak, etkinlikleri organize eden ve projeleri yürüten çekirdek ekibimize katılmak için başvurunu gönderebilirsin.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pb-32 px-6 pt-12">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-brand-surface border border-brand-text/5 rounded-sm p-6 md:p-12 shadow-lg shadow-brand-bg/20">
                        {status === "success" ? (
                            <ScrollReveal>
                                <div className="flex flex-col items-center text-center animate-fade-in py-10">
                                    <CheckCircle2 size={56} className="text-brand-primary mb-6" />
                                    <h2 className="text-2xl font-bold text-brand-text mb-3">Başvurun alındı.</h2>
                                    <p className="text-brand-muted text-base max-w-md mb-8 leading-relaxed">
                                        YAGE&apos;ye katılmak istediğin için teşekkürler. Başvurunu inceleyip belirttiğin adresinden sana ulaşacağız.
                                    </p>
                                    <button onClick={() => router.push('/')} className="text-sm font-bold text-brand-text bg-brand-text/5 px-6 py-3 rounded-sm hover:bg-brand-text/10 transition-colors flex items-center gap-2">
                                        Ana Sayfaya Dön <ArrowRight size={16} />
                                    </button>
                                </div>
                            </ScrollReveal>
                        ) : (
                            <ScrollReveal delay={50}>
                                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-brand-text border-b border-brand-text/5 pb-2">Kişisel Bilgiler</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="md:col-span-2">
                                                <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" maxLength={120} value={formData.name} onChange={handleChange} disabled={status === "loading"} />
                                            </div>
                                            <Input id="facultyDept" label="Fakülte / Bölüm" placeholder="Örn: Teknoloji Fakültesi / Bilgisayar Müh." maxLength={150} value={formData.facultyDept} onChange={handleChange} disabled={status === "loading"} />
                                            <Select
                                                id="grade"
                                                label="Sınıf"
                                                options={[{ value: "Hazırlık", label: "Hazırlık" }, { value: "1. Sınıf", label: "1. Sınıf" }, { value: "2. Sınıf", label: "2. Sınıf" }, { value: "3. Sınıf", label: "3. Sınıf" }, { value: "4. Sınıf", label: "4. Sınıf" }]}
                                                value={formData.grade} onChange={handleChange} disabled={status === "loading"}
                                            />
                                            <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" maxLength={254} value={formData.email} onChange={handleChange} disabled={status === "loading"} />
                                            <Input id="phone" type="tel" label="Telefon" optional placeholder="0555 555 55 55" maxLength={25} value={formData.phone} onChange={handleChange} disabled={status === "loading"} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-brand-text border-b border-brand-text/5 pb-2">Birim Tercihi</h2>
                                        <div className="flex flex-col gap-3">
                                            <label className="text-sm font-medium text-brand-text/90">Öncelikli olarak hangi birimde görev almak istersin? <span className="text-brand-error">*</span></label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {allUnits.map((unit) => (
                                                    <button
                                                        key={unit} type="button" onClick={() => handlePrimaryUnitSelect(unit)}
                                                        className={`p-3 text-left border rounded-sm transition-all duration-200 ${
                                                            formData.primaryUnit === unit ? "border-brand-primary bg-brand-primary/10 text-brand-text" : "border-brand-text/5 bg-brand-surface hover:border-brand-text/20"
                                                        }`}
                                                    >
                                                        <span className="text-sm font-bold block">{unit}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {formData.primaryUnit && (
                                            <div className="mt-2 animate-fade-in-up flex flex-col gap-6">
                                                <div className="bg-brand-surface border border-brand-primary/20 p-4 rounded-sm">
                                                    <p className="text-sm text-brand-muted/90 mb-3"><strong className="text-brand-primary">{formData.primaryUnit}:</strong> {unitDetails[formData.primaryUnit].description}</p>
                                                    <Textarea id="unitAnswer" label={unitDetails[formData.primaryUnit].question} placeholder="Kısaca anlatabilirsin..." maxLength={1500} rows={3} value={formData.unitAnswer} onChange={handleChange} disabled={status === "loading"} />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-medium text-brand-text/90">Başka birimlerde de değerlendirilmek ister misin? <span className="text-brand-muted/50 font-normal">(Opsiyonel - En fazla 2)</span></label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {allUnits.filter(u => u !== formData.primaryUnit).map(unit => (
                                                            <button
                                                                key={unit} type="button" onClick={() => toggleSecondaryUnit(unit)}
                                                                className={`px-3 py-2 text-xs font-medium border rounded-sm transition-colors ${
                                                                    formData.secondaryUnits.includes(unit) ? "border-brand-text/30 text-brand-text bg-brand-text/10" : "border-brand-text/5 text-brand-muted bg-brand-surface hover:bg-brand-surface-light"
                                                                }`}
                                                            >
                                                                {unit}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-brand-text border-b border-brand-text/5 pb-2">Seni Tanıyalım</h2>
                                        <Textarea id="experiences" label="Daha Önce Yaptığın Çalışmalar" optional placeholder="Yer aldığın topluluklar veya projeler..." maxLength={1500} rows={3} value={formData.experiences} onChange={handleChange} disabled={status === "loading"} />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input id="github" type="url" label="GitHub" optional placeholder="GitHub profil bağlantın" maxLength={250} value={formData.github} onChange={handleChange} disabled={status === "loading"} />
                                            <Input id="linkedin" type="url" label="LinkedIn" optional placeholder="LinkedIn profil bağlantın" maxLength={250} value={formData.linkedin} onChange={handleChange} disabled={status === "loading"} />
                                        </div>
                                        <Textarea id="additionalInfo" label="Eklemek İstediğin Bir Şey Var mı?" optional placeholder="Paylaşmak istediğin diğer detaylar..." maxLength={1500} rows={2} value={formData.additionalInfo} onChange={handleChange} disabled={status === "loading"} />
                                    </div>

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-brand-error text-sm bg-brand-error/10 p-3 rounded-sm border border-brand-error/20">
                                            <XCircle size={16} /><span>Başvuru gönderilemedi. Lütfen tekrar deneyin.</span>
                                        </div>
                                    )}

                                    <div className="pt-4 flex justify-end border-t border-brand-text/5">
                                        <button type="submit" disabled={status === "loading" || !isFormValid} className="w-full md:w-auto flex justify-center items-center gap-2 bg-brand-primary text-brand-text px-10 py-3.5 text-sm font-bold hover:bg-brand-primary/80 transition-colors duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                            {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</> : <>Başvuruyu Gönder <ArrowRight size={16} /></>}
                                        </button>
                                    </div>
                                </form>
                            </ScrollReveal>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
