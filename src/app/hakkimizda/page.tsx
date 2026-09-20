import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { events, teamMembers } from "../../data/siteData";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Hakkımızda",
  description: "Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu olarak merak ettiğimiz şeyleri birlikte öğreniyor, üretiyor ve paylaşıyoruz.",
};

const stats = [
  { value: teamMembers.length, label: "aktif ekip üyesi" },
  { value: events.length, label: "düzenlenen etkinlik" },
  { value: 2023, label: "kuruluş yılı" },
] as const;

const activities = [
  {
    title: "Eğitimler",
    text: "Yazılım dünyasındaki güncel teknolojileri, yalnızca dinleyerek değil, bilgisayarlarımız başında birlikte uygulayarak öğreniyoruz.",
    image: "/images/etkinlikler/csharp-egitimi.jpeg",
    alt: "YAGE teknik eğitiminden bir kare",
  },
  {
    title: "Yarışmalar",
    text: "TEKNOFEST ve Datathon gibi ulusal yarışmalarda takımlar kuruyor, öğrendiklerimizi somut AR-GE projelerine dönüştürüyoruz.",
    image: "/images/etkinlikler/dataforge.png",
    alt: "YAGE üyelerinin yarışma ve hackathon anları",
  },
  {
    title: "Teknik Geziler",
    text: "ASELSAN, TUSAŞ ve TaleWorlds gibi üretim merkezlerini ziyaret edip, mühendislerin çalışma ortamlarını doğrudan inceliyoruz.",
    image: "/images/etkinlikler/taleworlds.jpeg",
    alt: "YAGE üyelerinin teknik gezi fotoğrafı",
  },
  {
    title: "Tea Talk Buluşmaları",
    text: "Sektör profesyonelleriyle çay etrafında bir araya gelip, kariyer yollarını ve gerçek dünya proje deneyimlerini konuşuyoruz.",
    image: "/images/etkinlikler/aselsan-teatalk.jpeg",
    alt: "YAGE Tea Talk buluşmasından bir kare",
  },
  {
    title: "Projeler",
    text: "Öğrendiklerimizi proje ekipleriyle somut ürünlere dönüştürüyor, birlikte üretme deneyimi kazanıyoruz.",
    image: "/images/etkinlikler/dataforge.png",
    alt: "YAGE proje ekibinin çalışmasından bir kare",
  },
] as const;

export default function AboutPage() {
  return (
      <main className="flex flex-col min-h-screen bg-brand-bg">
        {/* Sola Yaslı (Orijinal) Hero Section */}
        <section className="relative w-full pt-48 pb-32 px-6 overflow-hidden" aria-labelledby="about-title">
          <span id="about-hero-image-description" className="sr-only">YAGE üyeleri Teknopark Ankara gezisinde birlikte.</span>

          {/* Arka plan görseli ve sağa doğru azalan karartma */}
          <div className="absolute inset-0 z-0">
            <Image
                src="/images/etkinlikler/teknopark-ankara.jpeg"
                alt="YAGE Topluluğu"
                fill
                className="object-cover object-center opacity-40"
                priority
            />
            {/* Soldan sağa gradient (Soldaki yazıları okunur kılar, sağda görseli açar) */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
            {/* Alttan üste gradient (Alt kısımdaki istatistik bölümüyle yumuşak geçiş) */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-bg to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start text-left">
            <ScrollReveal>
              <p className="text-brand-muted font-mono text-sm tracking-widest uppercase mb-6">
                Gazi Üniversitesi · Teknoloji Fakültesi
              </p>
              <h1 id="about-title" className="text-5xl md:text-7xl font-bold text-brand-text tracking-tight mb-8 leading-tight max-w-3xl">
                Merak ettiğimiz şeyleri birlikte öğreniyoruz.
              </h1>
              <p className="text-lg md:text-xl text-brand-muted/90 max-w-2xl mb-10 leading-relaxed">
                YAGE’de eğitim düzenliyor, şirketleri yerinde görüyor ve sektör deneyimini kampüse taşıyoruz.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="w-full border-y border-brand-text/5 bg-brand-surface-dark/50 relative z-20" aria-label="YAGE sayılarla">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 sm:divide-x divide-brand-text/5">
                {stats.map((stat, index) => (
                    <div key={stat.label} className={`flex flex-col items-center text-center ${index !== 0 ? 'sm:pl-8 md:pl-12' : ''}`}>
                      <strong className="text-4xl md:text-5xl font-bold text-brand-text mb-2">{stat.value}</strong>
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-muted">{stat.label}</span>
                    </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Kurumsal / Samimi Vizyon */}
        <section className="w-full py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                    Farklı disiplinleri aynı hedefte buluşturuyoruz.
                  </h2>
                </div>
                <div className="flex flex-col gap-6 text-brand-muted/90 text-lg leading-relaxed">
                  <p>Biz, yazılım ve teknolojiye farklı noktalardan yaklaşan Gazi Üniversitesi öğrencileriyiz.</p>
                  <p>Yeni başlayan biri de sektörde deneyim kazanmış biri de masaya aynı merakla oturuyor. Etkinliklerimizi bu şeffaflıkla hazırlıyor; öğrendiklerimizi projelerle somutlaştırıyoruz.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Faaliyetler Grid (Yarışmalar Eklendi - 4'lü Grid) */}
        <section className="w-full py-24 px-6 bg-brand-surface-dark/30 border-t border-brand-text/5" aria-labelledby="activities-title">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 text-center md:text-left">
                <h2 id="activities-title" className="text-3xl md:text-4xl font-bold text-brand-text">Neler yapıyoruz?</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {activities.map((activity, index) => (
                  <ScrollReveal key={activity.title} delay={index * 100}>
                    <article className="group flex flex-col bg-brand-surface border border-brand-text/5 rounded-sm overflow-hidden hover:border-brand-text/20 transition-colors h-full">
                      <div className="relative h-48 w-full overflow-hidden bg-brand-surface-lighter">
                        <Image
                            src={activity.image}
                            alt={activity.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-brand-text mb-3">{activity.title}</h3>
                        <p className="text-brand-muted/90 text-sm leading-relaxed">{activity.text}</p>
                      </div>
                    </article>
                  </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Son CTA (Ekibe Yönlendirme) */}
        <section className="w-full py-32 px-6 border-t border-brand-text/5">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight">Arkadaki ekibi tanı.</h2>
              <p className="text-lg text-brand-muted/90 max-w-xl mx-auto mb-10">
                Tüm bu etkinlikleri planlayan, koordinasyonu sağlayan ve YAGE&apos;yi ayakta tutan yönetim kurulumuzla tanışın.
              </p>
              <Link
                  href="/ekip"
                  className="inline-flex items-center gap-2 bg-brand-surface border border-brand-text/10 text-brand-text px-10 py-4 text-sm font-bold hover:border-brand-text/30 hover:bg-brand-surface-light transition-colors duration-300 rounded-sm uppercase tracking-widest font-mono"
              >
                Ekibimizi Görüntüle <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
  );
}
