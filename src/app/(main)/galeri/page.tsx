import { events } from "../../../data/siteData";
import GalleryViewer, { GalleryPhotoItem } from "../../../components/main/GalleryViewer";

export const metadata = {
    title: "Galeri | YAGE",
    description: "YAGE etkinliklerinden ve buluşmalarından kareler.",
};

export default async function GalleryPage({
                                              searchParams,
                                          }: {
    searchParams: Promise<{ foto?: string }>;
}) {
    const { foto } = await searchParams;
    const n = Number(foto);

    // Etkinliklerden fotoğrafları GalleryPhotoItem objesine çeviriyoruz
    let photoIdCounter = 0;
    const allGalleryPhotos: GalleryPhotoItem[] = events.flatMap((event) => {
        const photos: GalleryPhotoItem[] = [];

        // Etkinliğin kendi (ana) fotoğrafı
        if (event.image) {
            photos.push({
                id: ++photoIdCounter,
                src: event.image,
                title: event.title,
                date: event.date,
                category: event.category
            });
        }

        // Etkinliğin alt fotoğrafları (gallery)
        if (event.gallery && event.gallery.length > 0) {
            event.gallery.forEach((img) => {
                photos.push({
                    id: ++photoIdCounter,
                    src: img,
                    title: event.title,
                    date: event.date,
                    category: event.category
                });
            });
        }

        return photos;
    });

    const initialIndex =
        Number.isInteger(n) && n >= 1 && n <= allGalleryPhotos.length ? n - 1 : null;

    return (
        <main className="min-h-screen bg-brand-bg text-brand-text">
            {/* HEADER */}
            <header className="page-header">
                <div className="page-header-content w-full">
                    <h1 className="page-title">Etkinlik Galerisi</h1>
                </div>
            </header>

            {/* GALERİ VE LIGHTBOX ALANI */}
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    {allGalleryPhotos.length > 0 ? (
                        <GalleryViewer photos={allGalleryPhotos} initialIndex={initialIndex} />
                    ) : (
                        <div className="py-20 text-center border border-brand-text/10 bg-brand-surface rounded-xl flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold text-brand-text mb-2">Henüz fotoğraf yok</h3>
                            <p className="text-sm text-brand-muted max-w-sm">Galeriye daha sonra tekrar göz atın.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
