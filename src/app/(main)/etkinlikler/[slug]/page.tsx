import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag, Image as ImageIcon } from "lucide-react";
import { events } from "../../../../data/siteData";
import ScrollReveal from "../../../../components/main/ScrollReveal";
import GalleryViewer from "../../../../components/main/GalleryViewer";

// Next.js 15+ için params bir Promise olarak tanımlanmalı
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const event = events.find((e) => e.slug === resolvedParams.slug);

  if (!event) return { title: "Etkinlik Bulunamadı" };

  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventDetail({ params }: Props) {
  // Params objesini asenkron olarak çözüyoruz
  const resolvedParams = await params;
  const event = events.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const hasGallery = event.gallery && event.gallery.length > 0;

  return (
      <main className="flex flex-col min-h-screen bg-brand-bg pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <ScrollReveal>
            <Link
                href="/etkinlikler"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-text transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Tüm Etkinliklere Dön
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-widest uppercase text-brand-muted mb-6">
            <span className="flex items-center gap-1.5 bg-brand-surface px-3 py-1.5 rounded-sm border border-brand-text/5">
              <Tag size={14} /> {event.category}
            </span>
              <span className="flex items-center gap-1.5 bg-brand-surface px-3 py-1.5 rounded-sm border border-brand-text/5">
              <Calendar size={14} /> {event.date}
            </span>
              <span className="flex items-center gap-1.5 bg-brand-surface px-3 py-1.5 rounded-sm border border-brand-text/5">
              <MapPin size={14} /> {event.location}
            </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight mb-8 leading-tight">
              {event.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-12 bg-brand-surface-dark border border-brand-text/5">
              {event.image ? (
                  <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                  />
              ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-muted/30">
                    <ImageIcon size={48} className="mb-2" />
                    <span className="text-sm font-mono tracking-widest uppercase">Görsel Bulunamadı</span>
                  </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="prose prose-invert prose-brand max-w-none">
              {event.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-brand-muted/90 leading-relaxed mb-6">
                    {paragraph}
                  </p>
              ))}
            </div>
          </ScrollReveal>

          {hasGallery && (
              <ScrollReveal delay={400}>
                <div className="mt-16 pt-16 border-t border-brand-text/5">
                  <h2 className="text-2xl font-bold text-brand-text mb-8 tracking-tight">Etkinlikten Kareler</h2>
                  <GalleryViewer photos={event.gallery!.map((src, id) => ({ id, src, title: event.title, date: event.date, category: event.category }))} />
                </div>
              </ScrollReveal>
          )}
        </div>
      </main>
  );
}
