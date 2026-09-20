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
                  ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-text/10 py-3 shadow-md"
                  : "bg-brand-bg/60 backdrop-blur-sm border-b border-brand-text/5 py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

          <div className="w-auto md:w-1/4 flex justify-start">
            <Link href="/" aria-label="Ana Sayfaya Dön">
              <Image
                  src="/images/logo/yage-logo.png"
                  alt="YAGE"
                  width={160}
                  height={44}
                  className="h-9 md:h-11 w-auto object-contain relative z-50"
                  priority
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                  <Link
                      key={link.path}
                      href={link.path}
                      className={`relative transition-colors duration-300 ${
                          isActive ? "text-brand-primary" : "text-brand-muted hover:text-brand-text"
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

          <div className="hidden md:flex w-1/4 justify-end">
            <CtaLink href="/katil" className="px-6 py-2.5">
              Bize Katıl
            </CtaLink>
          </div>

          <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              className="md:hidden text-brand-text relative z-50 p-2 -mr-2"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                document.body.style.overflow = !mobileMenuOpen ? "hidden" : "unset";
              }}
          >
            {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        <div
            id="mobile-menu"
            className={`fixed inset-0 bg-brand-bg flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
                mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
                <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = "unset";
                    }}
                    className={`text-2xl font-bold tracking-tight transition-colors ${
                        isActive ? "text-brand-primary" : "text-brand-text"
                    }`}
                >
                  {link.name}
                </Link>
            )
          })}

          <CtaLink href="/katil" onClick={() => {
            setMobileMenuOpen(false);
            document.body.style.overflow = "unset";
          }} className="mt-8 px-10 py-4 text-lg">
            Bize Katıl
          </CtaLink>
        </div>
      </nav>
  );
}
