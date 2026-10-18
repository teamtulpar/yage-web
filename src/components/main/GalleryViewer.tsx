"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

export interface GalleryPhotoItem {
 id: number;
 src: string;
 title: string;
 date: string;
 category: string;
 slug: string;
}

interface GalleryViewerProps {
 photos: GalleryPhotoItem[];
 initialIndex?: number | null;
}

export default function GalleryViewer({ photos, initialIndex = null }: GalleryViewerProps) {
 const [currentIndex, setCurrentIndex] = useState<number | null>(initialIndex);

 const closeLightbox = () => setCurrentIndex(null);

 const showNext = useCallback(() => {
  if (currentIndex !== null) {
   setCurrentIndex((prev) => (prev! + 1) % photos.length);
  }
 }, [currentIndex, photos.length]);

 const showPrev = useCallback(() => {
  if (currentIndex !== null) {
   setCurrentIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  }
 }, [currentIndex, photos.length]);

 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
   if (currentIndex === null) return;
   if (e.key === "Escape") closeLightbox();
   if (e.key === "ArrowRight") showNext();
   if (e.key === "ArrowLeft") showPrev();
  };

  window.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";

  return () => {
   window.removeEventListener("keydown", handleKeyDown);
   document.body.style.overflow = "auto";
  };
 }, [currentIndex, showNext, showPrev]);

 if (!photos || photos.length === 0) return null;

 const currentPhoto = currentIndex !== null ? photos[currentIndex] : null;

 return (
     <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {photos.map((photo, index) => (
           <div
               key={photo.id}
               onClick={() => setCurrentIndex(index)}
               className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-brand-surface-dark border border-brand-text/5"
           >
            <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
             <span className="text-brand-primary text-xs font-bold tracking-widest uppercase mb-1">{photo.category}</span>
             <h3 className="text-white font-bold text-base leading-snug line-clamp-2">{photo.title}</h3>
            </div>
           </div>
       ))}
      </div>

      {currentIndex !== null && currentPhoto && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">

           <button
               onClick={closeLightbox}
               className="absolute top-6 right-6 z-[110] p-3 text-white/70 hover:text-white bg-black/50 hover:bg-white/10 rounded-full transition-colors"
               aria-label="Kapat"
           >
            <X size={24} />
           </button>

           <button
               onClick={showPrev}
               className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/50 hover:text-white hover:scale-110 transition-all"
           >
            <ChevronLeft size={36} />
           </button>
           <button
               onClick={showNext}
               className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/50 hover:text-white hover:scale-110 transition-all"
           >
            <ChevronRight size={36} />
           </button>

           <div className="relative w-full h-full max-h-[75vh] md:max-h-[80vh] px-4 md:px-24 flex items-center justify-center">
            <Image
                src={currentPhoto.src}
                alt={currentPhoto.title}
                fill
                sizes="100vw"
                className="object-contain select-none pointer-events-none"
                quality={100}
            />
           </div>

           <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h2 className="text-white text-xl md:text-2xl font-bold mb-2">{currentPhoto.title}</h2>
             <div className="flex items-center gap-4 text-white/60 text-sm font-mono tracking-wider">
              <span>{currentPhoto.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {currentPhoto.date}</span>
             </div>
            </div>

            <Link
                href={`/etkinlikler/${currentPhoto.slug}`}
                onClick={closeLightbox}
                className="shrink-0 flex items-center gap-2 bg-brand-primary text-brand-text px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-colors rounded-sm"
            >
             Etkinliği İncele <ArrowRight size={16} />
            </Link>
           </div>

           <div className="absolute top-8 left-8 text-white/50 font-mono tracking-widest text-sm">
            {currentIndex + 1} / {photos.length}
           </div>
          </div>
      )}
     </>
 );
}