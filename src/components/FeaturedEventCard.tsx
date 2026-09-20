import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { CommunityEvent } from "../types";

export default function FeaturedEventCard({ event }: { event: CommunityEvent }) {
    return (
        <Link
            href={`/etkinlikler/${event.slug}`}
            className="group flex flex-col md:grid md:grid-cols-12 bg-brand-surface rounded-xl overflow-hidden border border-brand-text/5 hover:border-brand-text/20 transition-all duration-300 relative h-full focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
        >
            {/* Büyük Fotoğraf Alanı (Mobilde aspect-16/10, masaüstünde sol 6 kolon) */}
            <div className="relative w-full aspect-[16/10] md:aspect-auto md:col-span-6 overflow-hidden bg-brand-surface-lighter border-b md:border-b-0 md:border-r border-brand-text/5">
                {event.image ? (
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-surface-lighter via-brand-surface to-brand-bg p-6 text-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-brand-primary/10 text-brand-primary">
                            <Sparkles size={22} />
                        </div>
                        <span className="text-xs font-mono text-brand-muted uppercase tracking-wider">
              Öne Çıkan Etkinlik
            </span>
                    </div>
                )}
            </div>

            {/* İçerik Alanı (Masaüstünde sağ 6 kolon) */}
            <div className="p-6 md:p-8 md:col-span-6 flex flex-col justify-between">
                <div>
                    {/* Etiketler */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand-primary text-brand-text shadow-sm">
              En Yeni
            </span>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                            <span className="text-xs font-medium tracking-wide text-brand-primary">
                {event.category}
              </span>
                        </div>
                    </div>

                    {/* Başlık */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-text group-hover:text-brand-primary transition-colors leading-tight mb-2.5">
                        {event.title}
                    </h2>

                    {/* Tarih */}
                    <p className="text-xs sm:text-sm text-brand-muted font-normal mb-3.5 flex items-center gap-1.5">
                        <Calendar size={14} className="text-brand-muted shrink-0" />
                        <span>{event.date}</span>
                    </p>

                    {/* Kısa Açıklama */}
                    <p className="text-sm md:text-base text-brand-muted/90 leading-relaxed line-clamp-3 md:line-clamp-4">
                        {event.summary}
                    </p>
                </div>

                {/* Aksiyon Bağlantısı */}
                <div className="pt-5 mt-4 border-t border-brand-text/5 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:text-brand-text transition-colors">
            Etkinliği incele
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
                    {event.location && (
                        <span className="text-xs text-brand-muted font-mono hidden sm:inline-block truncate max-w-[200px]">
              {event.location}
            </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
