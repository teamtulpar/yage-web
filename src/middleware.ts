import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// DİKKAT: "export function middleware" kısmı tam olarak böyle olmalıdır
export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    // Güvenlik için fallback (boş string) ekliyoruz
    const hostname = req.headers.get('host') || '';

    // Eğer gelen istek tulpar.gaziyage.org ise /tulpar klasörünü çalıştır
    if (hostname === 'tulpar.gaziyage.org') {
        url.pathname = `/tulpar${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // Aksi halde ana site (gaziyage.org) normal çalışmaya devam et
    return NextResponse.next();
}

// Hangi yolların middleware'den geçeceğini belirler
export const config = {
    matcher: [
        /*
         * Eşleşmemesi gereken yollar (Performans için):
         * - api (API rotaları)
         * - _next/static (Statik dosyalar)
         * - _next/image (Resim optimizasyonu)
         * - images (Kendi resim klasörün)
         * - favicon.ico (Favicon)
         */
        '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    ],
};