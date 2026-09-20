import { UnitDetail } from "../types";

export const unitDetails: Record<string, UnitDetail> = {
    "Etkinlik ve Organizasyon": {
        shortDesc: "Etkinlik planlama ve yürütme",
        description: "Etkinliklerin planlanması ve süreçlerinin yürütülmesinden sorumlu birimimiz.",
        question: "Etkinlik ve organizasyon alanında çalışmak ilgini çekiyor mu? Düzenlemek istediğin bir etkinlik fikri varsa bahsedebilirsin."
    },
    "Sponsorluk": {
        shortDesc: "Kurumsal iletişim",
        description: "Etkinlik ve projelerimiz için kurumsal iletişim kuran ve sponsorluk süreçlerini yürüten birimimiz.",
        question: "Sponsorluk süreçlerinde yer almak ilgini çekiyor mu? İletişim yeteneklerine güveniyor musun?"
    },
    "Sosyal Medya": {
        shortDesc: "Tasarım ve dijital iletişim",
        description: "Sosyal medya içerikleri ve afiş tasarımları hazırlayan görsel iletişim birimimiz.",
        question: "Hangi tasarım araçlarını kullanıyorsun? (Canva, Photoshop, Illustrator vs.) Daha önce hazırladığın tasarımlar oldu mu?"
    },
    "İletişim": {
        shortDesc: "Üye koordinasyonu",
        description: "Üyelerle iletişimi sağlayan ve etkinlik kayıtlarıyla ilgilenen birimimiz.",
        question: "Üyelerle ve farklı topluluklarla iletişim kurmak gibi görevlerde yer almak ilgini çekiyor mu?"
    },
    "Eğitim ve Proje Geliştirme": {
        shortDesc: "Atölyeler ve AR-GE",
        description: "Eğitim içeriklerini hazırlayan ve TEKNOFEST gibi projelerde takımlarla ilgilenen birimimiz.",
        question: "Özellikle TEKNOFEST veya benzeri yarışmalarda proje geliştirmek istiyor musun? Bildiğin diller veya teknolojiler nelerdir?"
    }
};

export const allUnits = Object.keys(unitDetails);