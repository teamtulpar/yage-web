"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown, RotateCcw } from "lucide-react";
import { events, eventCategories, academicYears } from "../../../data/siteData";
import EventCard from "../../../components/main/EventCard";
import FeaturedEventCard from "../../../components/main/FeaturedEventCard";
import ScrollReveal from "../../../components/main/ScrollReveal";

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("");
    const [activeYear, setActiveYear] = useState("Tüm Dönemler");
    const [searchQuery, setSearchQuery] = useState("");

    const isDefaultView =
        activeCategory === "" &&
        activeYear === "Tüm Dönemler" &&
        searchQuery.trim() === "";

    const filteredEvents = useMemo(() => {
        const q = searchQuery.trim().toLocaleLowerCase("tr-TR");
        return events.filter((e) => {
            const matchCategory =
                activeCategory === "" ||
                e.category.toLocaleLowerCase("tr-TR") === activeCategory.toLocaleLowerCase("tr-TR");

            const cleanEventYear = e.academicYear.replace("–", "-");
            const cleanFilterYear = activeYear.replace("–", "-");
            const matchYear =
                activeYear === "Tüm Dönemler" || cleanEventYear === cleanFilterYear;

            const matchSearch =
                !q ||
                e.title.toLocaleLowerCase("tr-TR").includes(q) ||
                e.summary.toLocaleLowerCase("tr-TR").includes(q) ||
                e.location.toLocaleLowerCase("tr-TR").includes(q) ||
                e.category.toLocaleLowerCase("tr-TR").includes(q);

            return matchCategory && matchYear && matchSearch;
        });
    }, [activeCategory, activeYear, searchQuery]);

    const handleResetFilters = () => {
        setActiveCategory("");
        setActiveYear("Tüm Dönemler");
        setSearchQuery("");
    };

    const featuredEvent = filteredEvents[0];
    const remainingEvents = filteredEvents.slice(1);

    return (
        <main className="min-h-screen bg-brand-bg text-brand-text">
            <header className="page-header">
                <div className="page-header-content w-full">
                    <ScrollReveal>
                        <h1 className="page-title">Etkinlikler</h1>
                    </ScrollReveal>
                </div>
            </header>

            <section className="w-full py-4">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <ScrollReveal delay={100}>
                        <div className="flex flex-col gap-3.5">
                            {/* Kategori Filtreleri */}
                            <div
                                className="flex items-center gap-2 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
                                style={{ scrollbarWidth: "none" }}
                                role="tablist"
                                aria-label="Etkinlik kategorileri"
                            >
                                {eventCategories.map((cat) => {
                                    const isActive = activeCategory === cat;
                                    return (
                                        <button
                                            key={cat}
                                            type="button"
                                            role="tab"
                                            aria-selected={isActive}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                                                isActive
                                                    ? "bg-brand-primary text-brand-text font-semibold shadow-sm"
                                                    : "bg-brand-surface-lighter text-brand-muted hover:text-brand-text hover:bg-brand-surface border border-brand-text/10"
                                            }`}
                                        >
                                            <span>{cat}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Dönem Seçimi ve Arama */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                                <div className="relative shrink-0 sm:w-60">
                                    <label htmlFor="academic-year-select" className="sr-only">
                                        Dönem Seçin
                                    </label>
                                    <select
                                        id="academic-year-select"
                                        value={activeYear}
                                        onChange={(e) => setActiveYear(e.target.value)}
                                        className="w-full appearance-none bg-brand-surface text-brand-text border border-brand-text/10 rounded-sm pl-4 pr-10 py-2.5 text-base sm:text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors cursor-pointer"
                                    >
                                        {academicYears.map((year) => (
                                            <option key={year} value={year} className="bg-brand-surface-dark text-brand-text py-2">
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown
                                        size={16}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
                                    />
                                </div>

                                <div className="relative flex-1 sm:max-w-md">
                                    <Search
                                        size={17}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted"
                                    />
                                    {/* DÜZELTME 2: text-sm yerine mobilde text-base, masaüstünde sm:text-sm */}
                                    <input
                                        aria-label="Etkinlik ara"
                                        type="text"
                                        placeholder="Etkinlik başlığı veya özet ara..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-brand-surface border border-brand-text/10 rounded-sm py-2.5 pl-10 pr-10 text-base sm:text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-text p-1 text-xs transition-colors"
                                            aria-label="Aramayı temizle"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pt-4 pb-28">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <ScrollReveal delay={200}>
                        {!isDefaultView && (
                            <div className="flex items-center justify-between gap-4 py-3 mb-4 border-b border-brand-text/5">
                                <p role="status" className="text-sm text-brand-muted">
                                    <span className="font-semibold text-brand-text">{filteredEvents.length}</span> etkinlik listeleniyor
                                </p>
                                <button
                                    type="button"
                                    onClick={handleResetFilters}
                                    className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-text transition-colors"
                                >
                                    <RotateCcw size={13} />
                                    Filtreleri sıfırla
                                </button>
                            </div>
                        )}

                        {filteredEvents.length === 0 ? (
                            <div className="py-20 px-6 text-center border border-brand-text/10 bg-brand-surface rounded-sm flex flex-col items-center justify-center max-w-lg mx-auto my-8">
                                <div className="w-12 h-12 rounded-full bg-brand-surface-light flex items-center justify-center text-brand-muted mb-4 border border-brand-text/5">
                                    <Search size={22} />
                                </div>
                                <h3 className="text-lg font-semibold text-brand-text mb-2">
                                    Bu filtreyle etkinlik bulunamadı
                                </h3>
                                <p className="text-sm text-brand-muted max-w-sm mb-6 leading-relaxed">
                                    Arama kriterlerinizi değiştirerek veya filtreleri temizleyerek tüm etkinlikleri tekrar görüntüleyebilirsiniz.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleResetFilters}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-bold text-brand-text bg-brand-primary hover:bg-brand-primary/80 transition-colors"
                                >
                                    <RotateCcw size={14} />
                                    Filtreleri Temizle
                                </button>
                            </div>
                        ) : isDefaultView ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredEvent && (
                                    <div className="md:col-span-2 lg:col-span-2">
                                        <FeaturedEventCard event={featuredEvent} />
                                    </div>
                                )}
                                {remainingEvents.map((etkinlik) => (
                                    <div key={etkinlik.id}>
                                        <EventCard event={etkinlik} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredEvents.map((etkinlik) => (
                                    <div key={etkinlik.id}>
                                        <EventCard event={etkinlik} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}