"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import CtaLink from "./CtaLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa değiştiğinde mobil menüyü otomatik kapat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Etkinlikler", path: "/etkinlikler" },
    { name: "Galeri", path: "/galeri" },
    { name: "Ekibimiz", path: "/ekip" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
      <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              scrolled || mobileMenuOpen
                  ? "bg-brand-bg/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
                  : "bg-brand-bg/60 backdrop-blur-sm border-b border-white/5 py-4 md:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* LOGO */}
          <div className="w-auto md:w-1/4 flex justify-start">
            <Link href="/" aria-label="Ana Sayfaya Dön" onClick={() => setMobileMenuOpen(false)}>
              <Image
                  src="/images/logo/yage-logo.png"
                  alt="YAGE"
                  width={160}
                  height={44}
                  className="h-8 md:h-11 w-auto object-contain relative z-50"
                  priority
              />
            </Link>
          </div>

          {/* DESKTOP MENÜ (Mobilde gizli) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                  <Link
                      key={link.path}
                      href={link.path}
                      className={`relative transition-colors duration-300 ${
                          isActive ? "text-brand-primary" : "text-brand-muted hover:text-white"
                      }`}
                  >
                    {link.name}
                    <span
                        className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-brand-primary rounded-full transition-all duration-300 ${
                            isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                        }`}
                    />
                  </Link>
              );
            })}
          </div>

          {/* SAĞ AKSİYONLAR (Mobilde ve Desktopta Görünür) */}
          <div className="flex w-auto md:w-1/4 justify-end items-center gap-2 sm:gap-4">

            {/* TULPAR ALT SİTESİ BUTONU */}
            <Link
                href="[https://tulpar.gaziyage.org](https://tulpar.gaziyage.org)"
                className="group flex items-center gap-1.5 px-2.5 py-1.5 md:px-4 md:py-2 rounded-sm border border-brand-text/10 bg-brand-surface-dark hover:bg-brand-surface-light hover:border-brand-text/20 transition-all duration-300"
                title="TULPAR Ülgen Sistemine Git"
            >
              {/* Kırmızı Sinyal Ledi */}
              <span className="w-1.5 h-1.5 rounded-full bg-brand-error/60 group-hover:bg-brand-error group-hover:shadow-[0_0_8px_var(--color-brand-error)] transition-all duration-300"></span>
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-brand-muted group-hover:text-brand-text transition-colors">
                TULPAR
              </span>
            </Link>

            {/* BİZE KATIL BUTONU */}
            <CtaLink
                href="/katil"
                className="px-4 py-2 text-xs md:px-6 md:py-2.5 md:text-sm whitespace-nowrap"
            >
              Bize Katıl
            </CtaLink>

            {/* HAMBURGER İKONU (Sadece Mobilde) */}
            <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                className="md:hidden text-white relative z-50 p-1.5 -mr-1 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* MOBİL AÇILIR MENÜ (Sıfır tam ekran, sadece aşağı kayan sekme) */}
        <div
            id="mobile-menu"
            className={`absolute top-full left-0 w-full bg-brand-surface border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden origin-top ${
                mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                  <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-semibold tracking-wide transition-colors flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0 ${
                          isActive ? "text-brand-primary" : "text-brand-muted hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
              )
            })}
          </div>
        </div>
      </nav>
  );
}