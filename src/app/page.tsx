import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Calendar, Rocket } from "lucide-react";

import ScrollReveal from "@/src/components/main/ScrollReveal";
import AnimatedCounter from "@/src/components/main/AnimatedCounter";
import EventCard from "@/src/components/main/EventCard";
import AetherHero from "@/src/components/main/AetherHero";
import PersonCard from "@/src/components/main/PersonCard";
import CtaLink from "@/src/components/main/CtaLink";

import { events, activities, teamMembers, showcaseImages, sponsors } from "@/src/data/siteData";

export default function Home() {
  const featuredTeam = teamMembers.filter(member => member.isFeatured).slice(0, 8);

  return (
      <main className="flex flex-col min-h-screen">
        <AetherHero />

        <div className="bg-brand-surface-dark">
          <section className="py-24 md:py-32 px-6 relative z-10">
            <ScrollReveal className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-7">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-tight tracking-tight">
                    Sadece teoride kalmıyor, <br className="hidden md:block"/>
                    <span className="text-brand-muted">birlikte üretiyoruz.</span>
                  </h2>
                </div>
                <div className="md:col-span-5 flex flex-col gap-6 text-lg text-brand-muted/90 leading-relaxed font-medium mt-2">
                  <p>
                    YAGE, yazılım ve teknoloji alanında kendini geliştirmek isteyen öğrencileri bir araya getirir. Eğitimler, teknik geziler, söyleşiler ve çalışma grupları aracılığıyla farklı alanlarda bilgi edinme ve uygulama imkânı sunar.
                  </p>
                  <p>
                    Topluluk faaliyetlerinin yanı sıra proje ekipleriyle birlikte çalışmalar yürütüyor, edinilen bilgilerin uygulamaya aktarılmasını destekliyoruz. YAGE&apos;nin temel amacı, öğrencilerin üniversite hayatları boyunca birlikte öğrenebilecekleri, üretebilecekleri ve kendilerini geliştirebilecekleri bir ortam oluşturmak.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <div className="flex overflow-hidden py-8 relative select-none border-y border-brand-text/5 bg-brand-surface-darker">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-surface-darker to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-surface-darker to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-fit animate-marquee-slow">
              <div className="flex items-center shrink-0">
                {activities.map((activity, i) => (
                    <div key={`act-1-${i}`} className="flex items-center">
                      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-muted/40 uppercase whitespace-nowrap">
                        {activity}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50 mx-16 md:mx-32"></span>
                    </div>
                ))}
              </div>
              <div className="flex items-center shrink-0">
                {activities.map((activity, i) => (
                    <div key={`act-2-${i}`} className="flex items-center">
                      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-muted/40 uppercase whitespace-nowrap">
                        {activity}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50 mx-16 md:mx-32"></span>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:divide-x divide-white/5">
                  <div className="flex flex-col items-center justify-center">
                    <Users className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={700} suffix="+" />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">Topluluk Üyesi</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Calendar className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={events.length} />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">Düzenlenen Etkinlik</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Rocket className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={2} />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">AR-GE Projesi</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

        <section className="py-24 bg-brand-surface border-t border-b border-brand-text/5">
          <ScrollReveal delay={0}>
            <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-brand-text uppercase tracking-widest">Bizden Kareler</h2>
              <Link href="/galeri" className="content-link">
                Tüm galeri <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex overflow-x-auto md:overflow-hidden h-64 md:h-[450px] snap-x snap-mandatory hide-scrollbar w-[calc(100%-48px)] max-w-[1104px] mx-auto gap-3 rounded-2xl">
              {showcaseImages.map((image, i) => (
                  <Link
                      href={`/galeri?foto=${i + 1}`}
                      aria-label={`Fotoğraf ${i + 1}: galeride büyüt`}
                      key={i}
                      className="shrink-0 h-full bg-brand-surface-lighter snap-center relative group overflow-hidden w-[82%] rounded-xl md:w-auto md:min-w-0 md:flex-1 md:transition-[flex-grow] md:duration-1000 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:flex-[2.2] block cursor-pointer"
                  >
                    {image.startsWith("/") ? (
                        <Image src={image} alt={`YAGE Vitrin ${i + 1}`} fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono z-0">IMG_{i+1}</div>
                    )}
                    <div className="absolute inset-0 bg-brand-bg/10 md:group-hover:bg-transparent transition-colors duration-1000 pointer-events-none z-10"></div>
                  </Link>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="etkinlikler" className="py-24 px-6 bg-brand-bg">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-text tracking-tight">Son Etkinlikler</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {events.slice(0, 3).map((event, i) => (
                  <ScrollReveal key={event.id} delay={i * 100}>
                    <EventCard event={event} />
                  </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="flex justify-center">
                <Link href="/etkinlikler" className="content-link">
                  Tüm Etkinlikleri İncele <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="katil" className="py-16 px-6 relative overflow-hidden border-y border-brand-text/5 bg-brand-surface-darker">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[100px] bg-brand-text/5 blur-[50px] rounded-full pointer-events-none z-0"></div>

          <ScrollReveal className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 tracking-tight">
                Yönetim Kurulunda Yer Al
              </h2>
              <p className="text-brand-muted text-sm md:text-base">
                YAGE&apos;nin etkinliklerini koordine eden, sponsorluklarını yürüten ve topluluğun altyapısını şekillendiren çekirdek ekibe katıl.
              </p>
            </div>

            <CtaLink href="/katil" className="shrink-0 px-8 py-4">
              Başvuru Formu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </CtaLink>
          </ScrollReveal>
        </section>

        <section className="py-32 px-6 bg-brand-bg">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-brand-text tracking-tight">Yönetim Kurulu</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12 mb-16">
              {featuredTeam.map((member, i) => (
                  <ScrollReveal key={i} delay={i * 50}>
                    <PersonCard member={member} />
                  </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="flex justify-center">
                <Link href="/ekip" className="content-link">
                  Tüm Ekibi İncele <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 bg-brand-surface-dark border-t border-brand-text/5 px-6">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-brand-muted/40 uppercase mb-20">İş birlikleri ve Destekçiler</h2>

              <div className="flex flex-wrap justify-center items-end gap-16 md:gap-32">
                {sponsors.map((sponsor, i) => (
                    <div key={i} className="group cursor-pointer flex flex-col items-center gap-6">
                      <span className="text-sm md:text-base font-bold text-brand-muted/50 uppercase tracking-widest group-hover:text-brand-text transition-colors duration-500">
                        {sponsor.name}
                      </span>

                      <div className="w-40 h-16 md:w-48 md:h-20 relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        {sponsor.logo.startsWith("/") ? (
                            <Image src={sponsor.logo} alt={sponsor.name} fill sizes="(max-width: 768px) 160px, 192px" className="object-contain" />
                        ) : (
                            <span className="flex items-center justify-center w-full h-full border border-brand-text/5 text-brand-muted/20 font-mono text-sm tracking-widest">[ LOGO ]</span>
                        )}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
  );
}
