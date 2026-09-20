import { CommunityEvent } from "../types";

export const eventCategories = ["Eğitim", "Gezi", "Panel", "Sosyal", "Yarışma"];
export const academicYears = ["Tüm Dönemler", "2026-2027", "2025-2026", "2024-2025"];

export const activities = ["YAZILIM", "EĞİTİMLER", "TEKNİK GEZİLER", "YARIŞMALAR", "PROJELER", "AR-GE"];
export const technologies = ["Web Geliştirme", "Yapay Zekâ", "Gömülü Sistemler", "Oyun Geliştirme", "Siber Güvenlik", "Veri Bilimi"];

export const showcaseImages = [
    "/images/galeri/foto-1.png",
    "/images/galeri/foto-2.jpg",
    "/images/galeri/foto-3.jpeg",
    "/images/galeri/foto-4.jpeg",
    "/images/galeri/foto-5.jpeg"
];

export const events: CommunityEvent[] = [
    {
        id: 24,
        slug: "gazi-dataforge-26",
        date: "9 Mayıs 2026",
        isoDate: "2026-05-09",
        academicYear: "2025-2026",
        category: "Yarışma",
        location: "Teknopark Ankara",
        title: "Gazi DataForge'26",
        summary: "Üç öğrenci topluluğunun iş birliğiyle düzenlediğimiz Gazi DataForge 2026 veri bilimi yarışmasında takımlar, gerçek bir veri seti üzerinde çalışarak veri odaklı çözümler geliştirdi.",
        description: "Gazi Üniversitesi Finansal Teknolojiler, Yazılım Araştırma ve Geliştirme ve Veri Bilimi topluluklarının iş birliğiyle düzenlediğimiz Gazi DataForge 2026, Teknopark Ankara - Nar Kuluçka Merkezi'nde gerçekleştirildi. Gün boyu süren veri bilimi yarışmasında farklı disiplinlerden katılımcılar takımlar oluşturarak kendilerine sunulan veri seti üzerinde çalıştı.\n\nEtkinlik boyunca takımlar, veri setini analiz ederek problem üzerinde çalıştı ve elde ettikleri veriler doğrultusunda çözüm geliştirdi. Açılış konuşmasının ardından veri setinin paylaşılmasıyla başlayan maraton, gün boyunca devam eden çalışma ve değerlendirme sürecinin ardından gerçekleştirilen kapanış programıyla tamamlandı. Katılımcılar bu süreçte veri analizi, problem çözme ve takım çalışması becerilerini uygulamalı olarak kullanma fırsatı buldu.\n\nYarışma sonucunda birinciliği Muhammet Emin Korkut, ikinciliği Rıza Yurtseven ve Mertcan Hırlak'tan oluşan Tulpar takımı, üçüncülüğü ise Selman Sezgin ve Emirhan Çoruh'tan oluşan Overfitters takımı elde etti. Dereceye giren tüm takımları tebrik eder, etkinliğe katılan yarışmacılara ve organizasyonun gerçekleştirilmesine katkı sağlayan Finansal Teknolojiler ve Veri Bilimi topluluklarına teşekkür ederiz.",
        image: "/images/etkinlikler/dataforge.png",
        gallery: []
    },
    {
        id: 23,
        slug: "taleworlds-gezisi",
        date: "21 Nisan 2026",
        isoDate: "2026-04-21",
        academicYear: "2025-2026",
        category: "Gezi",
        location: "TaleWorlds Entertainment, Hacettepe Teknokent",
        title: "TaleWorlds Teknik Gezisi",
        summary: "Mount & Blade serisinin geliştiricisi TaleWorlds Entertainment'ı ziyaret ederek profesyonel oyun geliştirme süreçlerini yakından inceledik.",
        description: "Mount & Blade serisinin geliştiricisi TaleWorlds Entertainment'ın Hacettepe Teknokent'teki ofisine teknik bir gezi gerçekleştirdik. Gezi kapsamında profesyonel bir oyun stüdyosunun çalışma ortamını ve oyun geliştirme süreçlerini yakından görme fırsatı bulduk.\n\nZiyaret sırasında TaleWorlds ekibinden profesyonel oyun geliştirme süreçleri ve kullanılan teknolojiler hakkında bilgi aldık. Sektördeki çalışma deneyimlerini ve oyun geliştirme süreçlerine ilişkin tecrübelerini paylaşan ekip üyeleriyle bir araya gelerek merak ettiğimiz konular hakkında sohbet etme fırsatı bulduk.\n\nAyrıca oyun sektöründe kariyer planlayan katılımcılar için sektördeki çalışma ortamını ve profesyonel oyun geliştirme süreçlerini yerinde görmek açısından faydalı bir deneyim oldu.\n\nBizleri ağırlayan ve deneyimlerini paylaşan TaleWorlds Entertainment ekibine teşekkür ederiz.",
        image: "/images/etkinlikler/taleworlds.jpeg",
        gallery: []
    },
    {
        id: 22,
        slug: "unity-egitimi-2026",
        date: "25-26-28 Mart 2026",
        isoDate: "2026-03-25", // Çoklu tarihlerde başlangıç tarihi baz alındı
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Laboratuvar 6",
        title: "Unity Eğitimi",
        summary: "DOTT ve YAGE iş birliğiyle Unity oyun motorunun temelleri ve oyun geliştirme üzerine gerçekleştirdiğimiz üç oturumluk eğitim.",
        description: "DOTT ve YAGE iş birliğiyle, C# eğitiminin devamı olarak düzenlediğimiz Unity Eğitimini tamamladık. Üç oturum boyunca Unity oyun motorunun temel özelliklerini öğrenerek basit bir oyun geliştirme sürecini uygulamalı olarak gerçekleştirdik.\n\nEğitimin ilk oturumunda Unity'nin temel yapısı ve GameObject kullanımı ele alınarak bir Tilemap zemin ve karakter oluşturuldu. İkinci oturumda animasyonlara giriş yapılarak karaktere animasyon ekleme ve animasyonların kullanımı üzerine çalışmalar gerçekleştirildi.\n\nSon oturumda ise Unity Input System kullanılarak karakter kontrolü sağlandı ve karakter hareketleri C# kodlarıyla geliştirildi. Böylece eğitim boyunca oluşturulan temel yapıların bir araya getirilmesiyle basit bir oyun ortaya çıkarıldı.\n\nEğitime katılan tüm katılımcılarımıza teşekkür ederiz.",
        image: "/images/etkinlikler/unity-egitimi.jpg",
        gallery: []
    },
    {
        id: 21,
        slug: "alp-uneri-tea-talk",
        date: "25 Mart 2026",
        isoDate: "2026-03-25",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Laboratuvar 6",
        title: "Otomotivde Siber Güvenlik: Alp Üneri ile Tea Talk",
        summary: "Otomotiv sektöründe siber güvenlik, dijitalleşmeyle ortaya çıkan tehditler ve kariyer üzerine gerçekleştirdiğimiz Tea Talk.",
        description: "Otomotiv sektöründe araçların giderek daha fazla dijitalleşmesiyle birlikte önem kazanan siber güvenlik konularını ele aldığımız Tea Talk etkinliğimizi gerçekleştirdik.\n\nEtkinlikte otomotiv sektöründeki siber güvenlik riskleri, dijital araçlarla birlikte ortaya çıkabilecek güvenlik açıkları ve bu tehditlere karşı geliştirilen çözümler üzerine konuşuldu. Bununla birlikte, otomotiv siber güvenliği alanında kariyer yapmak isteyen katılımcılar için sektördeki çalışma alanları ve kariyer süreci üzerine de değerlendirmeler yapıldı.\n\nKatılımcılar, sektörden bir isimle doğrudan iletişim kurarak merak ettikleri konular hakkında sorularını yöneltme ve otomotiv siber güvenliği alanına ilişkin bilgi edinme fırsatı buldu.",
        image: "/images/etkinlikler/alp-uneri.jpg",
        gallery: []
    },
    {
        id: 20,
        slug: "csharp-egitimi-2026",
        date: "7-8-14-15 Mart 2026",
        isoDate: "2026-03-07",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Laboratuvar 6",
        title: "C# Eğitimi",
        summary: "YAGE ve DOTT iş birliğiyle temel C# programlama ve nesne yönelimli programlama üzerine gerçekleştirdiğimiz dört oturumluk eğitim.",
        description: "YAGE ve DOTT iş birliğiyle düzenlediğimiz dört oturumluk C# Eğitimini tamamladık. Oyun geliştirme ve yazılım alanına ilgi duyan katılımcılar için temel seviyeden başlayan eğitimde, C# dilinin çalışma mantığı ve temel programlama kavramları ele alındı.\n\nEğitimin ilk oturumlarında geliştirme ortamının kurulumu, değişkenler, veri tipleri ve temel kontrol yapıları işlenirken, katılımcılar algoritmalar oluşturarak öğrendikleri konuları uygulama fırsatı buldu. Sonraki oturumlarda yapılan pratiklerle algoritmik düşünme ve problem çözme becerileri üzerine çalışmalar gerçekleştirildi.\n\nEğitimin üçüncü oturumunda Nesne Yönelimli Programlama (OOP) konusuna geçilerek katılımcıların C# bilgileri bir üst seviyeye taşındı. Dört oturumun sonunda temel C# bilgisine sahip olan katılımcıların, eğitim serisinin devamındaki Unity eğitimine geçiş yapabilecek bir altyapı oluşturması hedeflendi.\n\nEğitim boyunca bilgi ve tecrübelerini paylaşan eğitmenimiz Fuat Efe Özdemir'e ve dört oturum boyunca aktif katılım gösteren tüm katılımcılarımıza teşekkür ederiz.",
        image: "/images/etkinlikler/csharp-egitimi.jpeg",
        gallery: []
    },
    {
        id: 19,
        slug: "solidworks-egitimi-2026",
        date: "7-8 Mart 2026",
        isoDate: "2026-03-07",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Teknoloji Fakültesi B Blok",
        title: "Solidworks Eğitimi",
        summary: "YAGE ve TMT iş birliğiyle düzenlediğimiz, temel SolidWorks tasarım ve modelleme eğitimi.",
        description: "YAGE ve TMT iş birliğiyle gerçekleştirdiğimiz SolidWorks Eğitiminde, bilgisayar destekli tasarım süreçlerine yönelik temel çalışmalar gerçekleştirdik.\n\nEğitim kapsamında SolidWorks kullanılarak parça tasarımı, montaj ve teknik resim süreçleri üzerine uygulamalar yapıldı. Katılımcılar, üç boyutlu modelleme ve tasarım süreçlerini uygulamalı olarak deneyimleme fırsatı buldu.",
        image: "/images/etkinlikler/solidworks-egitimi.jpg",
        gallery: []
    },
    {
        id: 18,
        slug: "arduino-egitimi-2026",
        date: "1 Mart 2026",
        isoDate: "2026-03-01",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Laboratuvar 2",
        title: "Arduino Eğitimi",
        summary: "Arduino, algoritma geliştirme ve devre tasarımı üzerine gerçekleştirdiğimiz temel seviye eğitim.",
        description: "YAGE ve TMT iş birliğiyle gerçekleştirdiğimiz Arduino Eğitimini tamamladık. Eğitim kapsamında yazılım ve donanım entegrasyonunun temelini ele alarak katılımcıların Arduino ile çalışma mantığını tanımasını hedefledik.\n\nEğitim sürecinde simülasyon ortamı üzerinden uygulamalar gerçekleştiren katılımcılar, algoritma geliştirme ve temel devre tasarımı konularını pratik ederek yazılım ile donanım arasındaki etkileşimi deneyimleme fırsatı buldu.\n\nBilgi ve tecrübelerini katılımcılarla paylaşan eğitmenimiz Mertcan Hırlak'a ve eğitimimize katılan tüm üyelerimize teşekkür ederiz.",
        image: "/images/etkinlikler/arduino-egitimi.jpeg",
        gallery: []
    },
    {
        id: 17,
        slug: "c-programlama-egitimi",
        date: "27 Şubat 2026",
        isoDate: "2026-02-27",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Laboratuvar 6",
        title: "C Programlama Eğitimi",
        summary: "Algoritma kurma, C dilinin temel yapıları ve problem çözme üzerine gerçekleştirdiğimiz C programlama eğitimi.",
        description: "YAGE ve TMT ortaklığında düzenlediğimiz C Programlama Eğitimini tamamladık. Eğitim kapsamında algoritma kurma mantığından başlayarak C dilinin temel yapı taşları, döngüler, fonksiyonlar ve problem çözme teknikleri üzerinde durduk.\n\nEğitim sürecinde katılımcılar, C programlama dilinin temel yapılarını öğrenmenin yanı sıra algoritmik düşünme ve problem çözme becerilerini geliştirmeye yönelik çalışmalar gerçekleştirdi. Böylece yazılım geliştirme süreçlerinde ihtiyaç duyulan temel programlama becerileri üzerine bir altyapı oluşturuldu.\n\nEğitime gösterdikleri ilgi için tüm katılımcılarımıza ve değerli katkılarından dolayı eğitmenimiz Kerem Aykut'a teşekkür ederiz.",
        image: "/images/etkinlikler/c-egitimi.jpg",
        gallery: []
    },
    {
        id: 16,
        slug: "aselsan-aday-muhendis-tea-talk",
        date: "23 Şubat 2026",
        isoDate: "2026-02-23",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Laboratuvar 6",
        title: "ASELSAN Aday Mühendis: Alperen Demirci ile Tea Talk",
        summary: "ASELSAN Aday Mühendisi Alperen Demirci ile kariyer yolculuğu ve yapay zekâ teknolojileri üzerine gerçekleştirdiğimiz Tea Talk.",
        description: "ASELSAN Aday Mühendisi Alperen Demirci'yi ağırladığımız Tea Talk etkinliğinde, aday mühendislik deneyimi ve mühendislik kariyerinin ilk adımları üzerine konuştuk.\n\nEtkinlikte Alperen Demirci, ASELSAN'daki aday mühendislik sürecini ve kendi kariyer yolculuğunu katılımcılarla paylaşırken, yapay zekâ teknolojilerinin sektördeki güncel yansımalarına da değindi. Katılımcılar, savunma sanayisinde mühendislik kariyerine ilişkin deneyimleri doğrudan dinleme ve merak ettikleri konular hakkında sorularını yöneltme fırsatı buldu.\n\nDeğerli paylaşımları için Alperen Demirci'ye ve katılım sağlayan tüm üyelerimize teşekkür ederiz.",
        image: "/images/etkinlikler/aselsan-teatalk.jpeg",
        gallery: []
    },
    {
        id: 15,
        slug: "havacilik-ve-uzay-zirvesi",
        date: "17 Şubat 2026",
        isoDate: "2026-02-17",
        academicYear: "2025-2026",
        category: "Gezi",
        location: "Gençlik ve Spor Bakanlığı",
        title: "Havacılık ve Uzay Zirvesi Teknik Gezisi",
        summary: "Geleneksel Havacılık ve Uzay Zirvesi'nde havacılık ve uzay sektörünün önde gelen firmalarıyla bir araya geldik.",
        description: "5. Geleneksel Havacılık ve Uzay Zirvesi'ne katılarak havacılık ve uzay sektöründeki güncel çalışmalar ve teknolojiler hakkında bilgi edinme fırsatı bulduk.\n\nEtkinlik kapsamında ROKETSAN, TUSAŞ ve AIRBUS gibi havacılık ve uzay sektöründe faaliyet gösteren firmaların yer aldığı organizasyonu ziyaret ederek farklı projeleri ve sektördeki çalışmaları yakından inceleme fırsatı bulduk. Zirve, sektörün farklı alanlarını ve bu alanlarda yürütülen çalışmaları daha yakından tanımamız açısından önemli bir etkinlik oldu.\n\nKatılım sağlayan tüm üyelerimize teşekkür ederiz.",
        image: "/images/etkinlikler/havacilik-zirvesi.jpeg",
        gallery: []
    },
    {
        id: 14,
        slug: "oyun-gecesi-2025",
        date: "20 Aralık 2025",
        isoDate: "2025-12-20",
        academicYear: "2025-2026",
        category: "Sosyal",
        location: "GSB Saraçoğlu Gençlik Merkezi",
        title: "Oyun Gecesi",
        summary: "YAGE ve DOTT iş birliğiyle gerçekleştirdiğimiz, oyunlar ve eğlence etrafında bir araya geldiğimiz etkinlik.",
        description: "Yazılım Araştırma ve Geliştirme Topluluğu ve Dijital Oyun Tasarımı Topluluğu iş birliğiyle gerçekleştirdiğimiz Oyun Gecesi'nde, katılımcılarla birlikte oyunlar oynayarak keyifli bir akşam geçirdik.\n\nRekabetin, eğlencenin ve etkileşimin ön planda olduğu etkinlikte, farklı topluluklardan katılımcılar oyunlar etrafında bir araya gelerek birlikte vakit geçirme fırsatı buldu.\n\nEtkinliğimize katılan herkese ve mekan desteği sağlayan GSB Saraçoğlu Gençlik Merkezi'ne teşekkür ederiz.",
        image: "/images/etkinlikler/oyun-gecesi.jpeg",
        gallery: []
    },
    {
        id: 13,
        slug: "alparslan-akyildiz-tea-talk",
        date: "19 Aralık 2025",
        isoDate: "2025-12-19",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Laboratuvar 6",
        title: "Alparslan Akyıldız ile Tea Talk",
        summary: "Siber Güvenlik Yöneticisi Alparslan Akyıldız ile siber güvenlik, strateji ve risk yönetimi üzerine Tea Talk.",
        description: "Siber Güvenlik Yöneticisi M. Alparslan Akyıldız'ı ağırladığımız Tea Talk etkinliğinde, siber güvenliğin teknik boyutunun yanı sıra yönetim ve karar alma süreçlerindeki rolü üzerine konuştuk.\n\n“Siber güvenliği anlatmak değil, yönetmek” perspektifiyle gerçekleştirilen etkinlikte; siber güvenliğin strateji, risk yönetimi ve karar alma süreçleriyle nasıl bütünleştiği ele alındı. Alparslan Akyıldız, sektördeki deneyimlerinden yola çıkarak siber güvenlik yönetimine ilişkin görüşlerini ve tecrübelerini katılımcılarla paylaştı.\n\nKatılım sağlayan tüm öğrencilerimize ve değerli paylaşımları için Alparslan Akyıldız'a teşekkür ederiz.",
        image: "/images/etkinlikler/alparslan-akyildiz.jpeg",
        gallery: []
    },
    {
        id: 12,
        slug: "pinet-ali-erdem-sunar-tea-talk",
        date: "19 Aralık 2025",
        isoDate: "2025-12-19",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Laboratuvar 6",
        title: "Pinet Bilişim Ali Erdem Sunar ile Tea Talk",
        summary: "Pinet Bilişim Genel Müdürü Ali Erdem Sunar ile yazılımın operasyonel süreçleri ve sürdürülebilirliği üzerine Tea Talk.",
        description: "Pinet Bilişim Genel Müdürü Ali Erdem Sunar ile gerçekleştirdiğimiz Tea Talk etkinliğinde, yazılım geliştirme süreçlerinin kodlama aşamasının ötesinde nasıl yönetildiği ve sürdürüldüğü üzerine konuştuk.\n\nEtkinlikte gerçek projeler üzerinden yazılımların nasıl ayakta tutulduğu, ölçeklendiği ve operasyonel olarak yönetildiği ele alındı. Ali Erdem Sunar, sektördeki deneyimlerinden yola çıkarak yazılım geliştirmenin yanı sıra operasyonel bakış açısının ve sürdürülebilir yazılım süreçlerinin önemine değindi. Katılımcılar da sektör deneyimlerini doğrudan dinleme ve merak ettikleri konular hakkında sorularını yöneltme fırsatı buldu.\n\nEtkinlik kapsamında katılımcılarımızdan birine staj imkânı da sunuldu. Değerli paylaşımları için Ali Erdem Sunar'a ve etkinliğimize sağladığı ikram desteği için Oskar Pastaneleri'ne teşekkür ederiz.",
        image: "/images/etkinlikler/ali-erdem-sunar.jpeg",
        gallery: []
    },
    {
        id: 11,
        slug: "gdg-devfest-hacettepe-2025",
        date: "30 Kasım 2025",
        isoDate: "2025-11-30",
        academicYear: "2025-2026",
        category: "Gezi",
        location: "Hacettepe Üniversitesi",
        title: "GDG Devfest Hacettepe",
        summary: "Güncel teknolojilerin ele alındığı DevFest Ankara 2025'e katılarak farklı konu başlıklarında gerçekleştirilen oturumları takip ettik.",
        description: "30 Kasım 2025'te Hacettepe Üniversitesi Beytepe Kampüsü Kültür ve Kongre Merkezi'nde düzenlenen DevFest Ankara 2025'e katılım sağladık. GDG Ankara tarafından düzenlenen etkinlikte yapay zekâ, web teknolojileri, mobil uygulama geliştirme ve bulut teknolojileri gibi farklı alanlarda gerçekleştirilen konuşmaları ve oturumları takip etme fırsatı bulduk.\n\nEtkinlik boyunca farklı alanlardan konuşmacıların bilgi ve deneyimlerini paylaştığı oturumlara katılarak güncel teknolojiler ve yazılım dünyasındaki gelişmeler hakkında yeni bilgiler edindik. Gün boyunca gerçekleştirilen oturumların yanı sıra etkinliğin sunduğu topluluk ve networking ortamından da faydalanma fırsatı bulduk.\n\nKatılım sağlayan tüm üyelerimize teşekkür ederiz.",
        image: "/images/etkinlikler/devfest-hacettepe.jpeg",
        gallery: []
    },
    {
        id: 10,
        slug: "linux-egitimi-2025",
        date: "29 Kasım, 1-2-4 Aralık 2025",
        isoDate: "2025-11-29",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Mühendislik Fakültesi",
        title: "Linux Eğitimi",
        summary: "YAGE ve GaziCyber CTF iş birliğiyle düzenlediğimiz dört günlük Linux eğitimi.",
        description: "YAGE ve GaziCyber CTF iş birliğiyle düzenlediğimiz Linux 101 eğitimi, dört oturum boyunca yüz yüze gerçekleştirildi. Eğitimde Linux işletim sisteminin temelleri üzerine çalışmalar yaparak katılımcıların Linux ve siber güvenlik alanlarına yönelik temel bir altyapı edinmeleri hedeflendi.\n\nEğitimin ilk oturumunda katılımcıların sanal makine kurulumları gerçekleştirildi. Sonraki oturumlarda ise Linux ortamında çalışmaya yönelik eğitim ve uygulamalarla devam edildi.\n\nDört günlük eğitim süreci boyunca katılım sağlayan tüm üyelerimize ve iş birliği için GaziCyber CTF ekibine teşekkür ederiz.",
        image: "/images/etkinlikler/linux-egitimi.jpg",
        gallery: []
    },
    {
        id: 9,
        slug: "teknopark-ankara-gezisi",
        date: "21 Kasım 2025",
        isoDate: "2025-11-21",
        academicYear: "2025-2026",
        category: "Gezi",
        location: "Teknopark Ankara",
        title: "Teknopark Ankara Gezisi",
        summary: "Teknopark Ankara'da girişimcilik ekosistemini ve farklı teknoloji girişimlerinin çalışmalarını yakından inceledik.",
        description: "Girişimcilik ve teknoloji ekosistemini yakından tanımak amacıyla Teknopark Ankara'yı ziyaret ettik. Gezi kapsamında iki farklı start-up'ın sunumlarına katılarak geliştirdikleri projeler hakkında bilgi edinme ve çalışmalarını yakından inceleme fırsatı bulduk.\n\nZiyaret sırasında Kaptın Kaptın şirketinin kurucusu Ayşe Secde Gençler ile de bir araya geldik. Kendisi girişimcilik yolculuğunu ve üzerinde çalıştıkları projeleri bizlerle paylaşarak girişimcilik sürecine dair deneyimlerini aktardı.\n\nProgram kapsamında gerçekleştirdiğimiz kampüs turunda ise Teknopark Ankara'daki çalışma ortamlarını, Ar-Ge süreçlerini ve teknopark kültürünü yakından gözlemledik. Böylece teknoloji girişimlerinin çalışma ortamını ve girişimcilik ekosistemini yerinde görme fırsatı bulduk.\n\nEtkinliğimize katkı sağlayan ve deneyimlerini bizlerle paylaşan tüm katılımcılara teşekkür ederiz.",
        image: "/images/etkinlikler/teknopark-ankara.jpeg",
        gallery: []
    },
    {
        id: 8,
        slug: "havelsan-tea-talk",
        date: "21 Ekim 2025",
        isoDate: "2025-10-21",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Laboratuvar 6",
        title: "HAVELSAN - Tea Talk",
        summary: "HAVELSAN mühendisleriyle kariyer yolculukları ve savunma sanayii üzerine gerçekleştirdiğimiz Tea Talk.",
        description: "HAVELSAN mühendisleri Emre Acar, Ali İmre ve Umut Kılıç'ı topluluğumuzda ağırladığımız Tea Talk etkinliğinde, kariyer yolculuklarını ve sektördeki deneyimlerini dinleme fırsatı bulduk.\n\nEtkinlikte Senior Cyber Security Engineer olarak görev yapan Emre Acar, IT Project Manager Ali İmre ve Lead Software Engineer Umut Kılıç; kendi çalışma alanları, kariyer süreçleri ve mühendislik deneyimleri üzerine paylaşımlarda bulundu. Katılımcılar, farklı alanlarda çalışan mühendislerin deneyimlerini doğrudan dinleme ve kariyerleriyle ilgili merak ettikleri soruları yöneltme fırsatı buldu.\n\nDeğerli paylaşımları için Emre Acar, Ali İmre ve Umut Kılıç'a, etkinliğimize sağladığı destek için Hisarönü Sütlü'ye teşekkür ederiz.",
        image: "/images/etkinlikler/havelsan-teatalk.jpg",
        gallery: []
    },
    {
        id: 7,
        slug: "tei-tusas-gokhan-donmez-tea-talk",
        date: "18 Ekim 2025",
        isoDate: "2025-10-18",
        academicYear: "2025-2026",
        category: "Panel",
        location: "Coffe UP - Bahçelievler",
        title: "TEI-TUSAŞ Gökhan Dönmez ile Tea Talk",
        summary: "TEI-TUSAŞ Performans Mühendisi Gökhan Dönmez ile sektörel deneyimler ve kariyer üzerine gerçekleştirdiğimiz Tea Talk.",
        description: "TEI-TUSAŞ Motor Sanayii A.Ş.'de Performans Mühendisi olarak görev yapan Gökhan Dönmez ile gerçekleştirdiğimiz Tea Talk etkinliğinde, havacılık sektöründeki deneyimlerini ve kariyer yolculuğunu dinleme fırsatı bulduk.\n\nEtkinlik boyunca Gökhan Dönmez, sektördeki çalışma deneyimlerini ve kariyer sürecinden edindiği tecrübeleri katılımcılarla paylaştı. Katılımcıların sorularının da ele alındığı etkinlik, sektör hakkında doğrudan deneyimlerden faydalanabilecekleri samimi bir sohbet ortamı sundu.\n\nKatılımı ve değerli paylaşımları için Gökhan Dönmez'e teşekkür ederiz.",
        image: "/images/etkinlikler/tei-tusas.jpg",
        gallery: []
    },
    {
        id: 6,
        slug: "python-egitimi-2025",
        date: "14-16-21-23 Ekim 2025",
        isoDate: "2025-10-14",
        academicYear: "2025-2026",
        category: "Eğitim",
        location: "Samsung Laboratuvarı",
        title: "Python Eğitimi",
        summary: "YAGE ve GaziCyber iş birliğiyle düzenlediğimiz dört oturumluk temel seviye Python eğitimi.",
        description: "YAGE ve GaziCyber iş birliğiyle düzenlediğimiz Temel Seviye Python 101 Eğitimi, programlamaya giriş yapmak isteyen katılımcılarla birlikte dört oturum boyunca gerçekleştirildi.\n\nEğitim kapsamında Python'a giriş, değişkenler ve temel kavramlar, koşullar ve döngüler, koleksiyon veri tipleri ve fonksiyonlar ele alındı. Yüz yüze gerçekleştirilen eğitimlerde katılımcılar, Python'un temel yapılarını öğrenerek programlama konusunda başlangıç seviyesinde bir temel oluşturma fırsatı buldu.",
        image: "/images/etkinlikler/python-egitimi.jpeg",
        gallery: []
    },
    {
        id: 5,
        slug: "tanisma-etkinligi-2025",
        date: "1 Ekim 2025",
        isoDate: "2025-10-01",
        academicYear: "2025-2026",
        category: "Sosyal",
        location: "Teknoloji Fakültesi B Blok",
        title: "Tanışma Etkinliği",
        summary: "Yeni dönemde aramıza katılan üyelerimizle tanışma toplantısı gerçekleştirdik.",
        description: "Topluluğumuza yeni katılan üyelerimizle tanışmak ve önümüzdeki dönemin planlarını paylaşmak üzere tanışma etkinliğimizi gerçekleştirdik.",
        image: "/images/etkinlikler/tanisma-etkinligi-2025.jpg",
        gallery: []
    },
    {
        id: 4,
        slug: "yonetim-kurulu-toplantisi-2025",
        date: "29 Eylül 2025",
        isoDate: "2025-09-29",
        academicYear: "2025-2026",
        category: "Sosyal",
        location: "Teknoloji Fakültesi B Blok",
        title: "Yönetim Kurulu Toplantısı",
        summary: "Yeni akademik yılın ilk yönetim kurulu toplantısında dönemin hedeflerini belirledik.",
        description: "Yeni akademik yılın ilk yönetim kurulu toplantısını gerçekleştirdik. Dönem boyunca yapılması planlanan etkinlikler, eğitimler ve proje hedefleri üzerine fikir alışverişinde bulunduk.",
        image: "/images/etkinlikler/yonetim-kurulu-toplantisi-2025.jpg",
        gallery: []
    },
    {
        id: 3,
        slug: "gazi-teknopark-gezisi",
        date: "19 Aralık 2024",
        isoDate: "2024-12-19",
        academicYear: "2024-2025",
        category: "Gezi",
        location: "Gazi Teknopark",
        title: "Gazi Teknopark Gezisi",
        summary: "Gazi Teknopark'ı ziyaret ederek girişimcilik üzerine bir sunuma ve MIA yöneticileriyle gerçekleştirilen söyleşiye katıldık.",
        description: "Topluluk olarak üniversitemizin girişimcilik ve teknoloji ekosistemini yakından tanımak amacıyla Gazi Teknopark'ı ziyaret ettik. Ziyaret kapsamında akademisyen Sayın Furkan Özcan'ın girişimcilik üzerine gerçekleştirdiği sunumu dinleme fırsatı bulduk.\n\nSunumun ardından Gazi Teknopark'ta faaliyet gösteren MIA şirketinin yöneticileriyle bir araya gelerek şirketin çalışmaları ve girişimcilik süreçleri üzerine bilgilendirici bir sohbet gerçekleştirdik. Etkinlik, üyelerimizin hem girişimcilik konusunda farklı bakış açıları edinmesine hem de üniversitemizin teknopark ekosistemini yakından tanımasına imkan sağladı.\n\nEtkinliğin gerçekleştirilmesine katkılarından dolayı Sayın Ayhan Erdem ve Sayın Furkan Özcan'a, MIA şirketinin yöneticilerine ve katılım sağlayan tüm üyelerimize teşekkür ederiz.",
        image: "/images/etkinlikler/gazi-teknopark.jpg",
        gallery: []
    },
    {
        id: 2,
        slug: "git-ve-github-egitimi",
        date: "1 Kasım 2024",
        isoDate: "2024-11-01",
        academicYear: "2024-2025",
        category: "Eğitim",
        location: "Taşkent Konferans Salonu",
        title: "Git ve GitHub Eğitimi",
        summary: "Git ve GitHub'ın yazılım geliştirme süreçlerindeki kullanımını uygulamalı olarak ele aldığımız ilk eğitim etkinliğimiz.",
        description: "Yazılım Araştırma ve Geliştirme Topluluğu olarak ilk eğitim etkinliğimizi, yazılım geliştirme süreçlerinin önemli araçlarından Git ve GitHub üzerine gerçekleştirdik. ONO Yazılım Takım Lideri Seyfi Kırmızıay'ın eğitmen olarak yer aldığı etkinlik, Teknoloji Fakültesi Taşkent Binası Konferans Salonu'nda düzenlendi.\n\nEtkinlik, Bölüm Başkanımız Ayhan Erdem'in açılış konuşmasıyla başladı. Ardından Seyfi Kırmızıay tarafından Git ve GitHub üzerine uygulamalı bir eğitim gerçekleştirildi. Eğitim boyunca katılımcılar, yazılım geliştirme süreçlerinde kullanılan bu araçlar hakkında pratik çalışmalar yapma fırsatı buldu.\n\nProgramın sonunda gerçekleştirilen soru-cevap bölümünde katılımcılar, Git ve GitHub'ın yanı sıra yazılım geliştirme süreçleriyle ilgili merak ettikleri soruları Seyfi Kırmızıay'a yöneltme fırsatı buldu. Böylece topluluğumuzun ilk eğitim etkinliğini tamamlamış olduk.",
        image: "/images/etkinlikler/git-github.jpg",
        gallery: []
    },
    {
        id: 1,
        slug: "tanisma-etkinligi-2024",
        date: "20 Ekim 2024",
        isoDate: "2024-10-20",
        academicYear: "2024-2025",
        category: "Sosyal",
        location: "Teknoloji Fakültesi B Blok",
        title: "Tanışma Etkinliği",
        summary: "Topluluğumuzun ilk tanışma etkinliğinde amaçlarımızı ve hedeflerimizi paylaştık.",
        description: "Kuruluşumuzun ardından gerçekleştirdiğimiz ilk tanışma etkinliğinde yeni üyelerimizle bir araya geldik.",
        image: "/images/etkinlikler/tanisma-etkinligi-2024.jpg",
        gallery: []
    }
];

// Artık etkinlikleri manuel değil, tarihlerine göre otomatk azalan (en yeniden en eskiye) şekilde sıralayabiliriz.
events.sort((a, b) => {
    if (a.isoDate && b.isoDate) {
        return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
    }
    return b.id - a.id; // Yedeğimiz yine id kalsın
});
