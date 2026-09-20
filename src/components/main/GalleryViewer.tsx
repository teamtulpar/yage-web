"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

// Verinin events sayfasından veya dışarıdan gelirken kullanacağı standart tip
export interface GalleryPhotoItem {
 id: string | number;
 src: string;
 title?: string;
 date?: string;
 category?: string;
}

interface GalleryViewerProps {
 photos: GalleryPhotoItem[];
 initialIndex?: number | null; // ? eklendi, optional yapıldı
}

export default function GalleryViewer({ photos, initialIndex = null }: GalleryViewerProps) {
 const [selectedIndex, setSelectedIndex] = useState<number | null>(initialIndex);

 // Touch swipe takibi (Mobilde hafif kaydırma için)
 const touchStartX = useRef<number | null>(null);
 const touchEndX = useRef<number | null>(null);

 const filteredPhotos = photos;

 // Lightbox Gezinme Fonksiyonları
 const openLightbox = (index: number) => setSelectedIndex(index);

 const closeLightbox = useCallback(() => {
  setSelectedIndex(null);
 }, []);

 useEffect(() => {
  document.body.style.overflow = selectedIndex === null ? "" : "hidden";
  return () => {
   document.body.style.overflow = "";
  };
 }, [selectedIndex]);

 const nextPhoto = useCallback(() => {
  if (filteredPhotos.length === 0) return;
  setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % filteredPhotos.length));
 }, [filteredPhotos.length]);

 const prevPhoto = useCallback(() => {
  if (filteredPhotos.length === 0) return;
  setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
  );
 }, [filteredPhotos.length]);

 // Klavye Kontrolleri (Esc, Sol Ok, Sağ Ok)
 useEffect(() => {
  if (selectedIndex === null) return;

  const handleKeyDown = (e: KeyboardEvent) => {
   if (e.key === "Escape") {
    closeLightbox();
   } else if (e.key === "ArrowRight") {
    nextPhoto();
   } else if (e.key === "ArrowLeft") {
    prevPhoto();
   }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
 }, [selectedIndex, closeLightbox, nextPhoto, prevPhoto]);

 // Mobil Swipe Olayları
 const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
  touchEndX.current = null;
 };

 const handleTouchMove = (e: React.TouchEvent) => {
  touchEndX.current = e.touches[0].clientX;
 };

 const handleTouchEnd = () => {
  if (touchStartX.current === null || touchEndX.current === null) return;
  const diff = touchStartX.current - touchEndX.current;
  if (diff > 50) {
   nextPhoto();
  } else if (diff < -50) {
   prevPhoto();
  }
  touchStartX.current = null;
  touchEndX.current = null;
 };

 const currentPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

 return (
     <>
      {/* 3. & 7. & 8. FOTOĞRAF IZGARASI (Bento/Masonry düzen: Öne çıkan 2x2, sağında 2 kart üst üste, boşluksuz) */}
      <section className="w-full pb-32" aria-label="Fotoğraf arşivi">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
        {filteredPhotos.map((photo, index) => {
         const isFeatured = index === 0 && filteredPhotos.length >= 3;
         const hasCaption = Boolean(photo.title || photo.date || photo.category);

         return (
             <figure
                 key={photo.id || index}
                 onClick={() => openLightbox(index)}
                 onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                   e.preventDefault();
                   openLightbox(index);
                  }
                 }}
                 tabIndex={0}
                 role="button"
                 aria-label={photo.title ? `${photo.title}: fotoğrafı büyüt` : "Fotoğrafı büyüt"}
                 className={`group relative rounded-xl overflow-hidden border border-brand-text/5 bg-brand-surface-dark cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors hover:border-brand-primary/30 ${
                     isFeatured
                         ? "aspect-[16/10] sm:aspect-[16/9] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full"
                         : "aspect-[16/10] w-full"
                 }`}
             >
              {/* next/image sabit aspect-ratio ile (CLS sıfır) */}
              <Image
                  src={photo.src}
                  alt={photo.title || "YAGE etkinlik fotoğrafı"}
                  fill
                  priority={index < 3}
                  sizes={
                   isFeatured
                       ? "(max-width: 768px) 100vw, 66vw"
                       : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* 4. CAPTION YERİ: Masaüstünde hover'da, mobilde her zaman görünür gradient overlay */}
              {hasCaption && (
                  <figcaption className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 sm:px-5 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 flex flex-col justify-end pointer-events-none">
                   {photo.category && (
                       <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                        {photo.category}
                      </span>
                   )}
                   {photo.title && (
                       <p className="text-sm sm:text-base font-bold text-brand-text leading-snug line-clamp-2 drop-shadow-sm">
                        {photo.title}
                       </p>
                   )}
                   {photo.date && (
                       <span className="text-xs text-brand-muted font-normal mt-1 flex items-center gap-1.5 drop-shadow-sm">
                        <Calendar size={12} className="text-brand-muted/70 shrink-0" />
                        <span>{photo.date}</span>
                      </span>
                   )}
                  </figcaption>
              )}
             </figure>
         );
        })}
       </div>
      </section>

      {/* 5. LIGHTBOX MODAL (Tam ekran, klavye okları, swipe, focus trap) */}
      {currentPhoto && selectedIndex !== null && (
          <div
              role="dialog"
              aria-modal="true"
              aria-label="Fotoğraf detay görünümü"
              onClick={(e) => {
               if (e.target === e.currentTarget) closeLightbox();
              }}
              className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none"
          >
           {/* Üst Çubuk: Sayaç ve Kapat Butonu */}
           <div className="w-full flex items-center justify-between text-brand-muted z-20">
            <span className="text-sm font-mono tracking-wider text-brand-muted">
              {selectedIndex + 1} / {filteredPhotos.length}
            </span>

            <button
                type="button"
                autoFocus
                onClick={closeLightbox}
                aria-label="Kapat (Esc)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-brand-text/10 hover:bg-brand-text/20 text-brand-text text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
             <span>Kapat</span>
             <X size={18} />
            </button>
           </div>

           {/* Orta Alan: Önceki Buton, Fotoğraf, Sonraki Buton (Swipe destekli) */}
           <div
               className="relative flex-1 w-full max-h-[78vh] flex items-center justify-center my-auto"
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
           >
            {/* Sol Ok */}
            <button
                type="button"
                onClick={(e) => {
                 e.stopPropagation();
                 prevPhoto();
                }}
                aria-label="Önceki fotoğraf (Sol ok)"
                className="absolute left-1 sm:left-4 z-20 w-11 h-11 rounded-full bg-brand-bg/60 hover:bg-brand-primary text-brand-text flex items-center justify-center border border-brand-text/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
             <ChevronLeft size={24} />
            </button>

            {/* Büyük Fotoğraf */}
            <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center p-2">
             <Image
                 src={currentPhoto.src}
                 alt={currentPhoto.title || "Tam boyutlu galeri fotoğrafı"}
                 fill
                 priority
                 sizes="100vw"
                 className="object-contain"
             />
            </div>

            {/* Sağ Ok */}
            <button
                type="button"
                onClick={(e) => {
                 e.stopPropagation();
                 nextPhoto();
                }}
                aria-label="Sonraki fotoğraf (Sağ ok)"
                className="absolute right-1 sm:right-4 z-20 w-11 h-11 rounded-full bg-brand-bg/60 hover:bg-brand-primary text-brand-text flex items-center justify-center border border-brand-text/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
             <ChevronRight size={24} />
            </button>
           </div>

           {/* Alt Çubuk: Caption Bilgisi (Yalnızca başlık veya tarih varsa) */}
           {(currentPhoto.title || currentPhoto.date) && (
               <div className="w-full text-center max-w-2xl mx-auto py-2 z-20">
                {currentPhoto.title && (
                    <h3 className="text-base sm:text-lg font-bold text-brand-text leading-snug">
                     {currentPhoto.title}
                    </h3>
                )}
                {currentPhoto.date && (
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 flex items-center justify-center gap-1.5 font-normal">
                     <Calendar size={13} className="text-brand-muted/70" />
                     <span>{currentPhoto.date}</span>
                    </p>
                )}
               </div>
           )}
          </div>
      )}
     </>
 );
}
