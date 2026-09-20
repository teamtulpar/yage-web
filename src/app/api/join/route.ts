import { NextResponse } from "next/server";
import { google } from "googleapis";

// Basit Memory-based Rate Limiter (Serverless ortamda tam koruma sağlamaz, Turnstile/reCaptcha önerilir)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 dakika

export async function POST(req: Request) {
    try {
        // IP Adresini al (Vercel başlıklarından)
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown_ip";

        // Rate Limiting Kontrolü
        const now = Date.now();
        const ipData = rateLimitMap.get(ip);

        if (ipData) {
            if (now - ipData.timestamp < RATE_LIMIT_WINDOW_MS) {
                if (ipData.count >= RATE_LIMIT_MAX_REQUESTS) {
                    return NextResponse.json({ error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
                }
                ipData.count++;
            } else {
                rateLimitMap.set(ip, { count: 1, timestamp: now });
            }
        } else {
            rateLimitMap.set(ip, { count: 1, timestamp: now });
        }

        const body = await req.json();
        const {
            name, facultyDept, grade, email, phone, primaryUnit,
            unitAnswer, secondaryUnits, experiences, github, linkedin, additionalInfo
        } = body;

        // Form Doğrulama
        if (![name,facultyDept,grade,email,primaryUnit,unitAnswer].every(v => typeof v === "string" && v.trim() && v.length <= 5000) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (secondaryUnits !== undefined && (!Array.isArray(secondaryUnits) || secondaryUnits.length > 2 || !secondaryUnits.every(v=>typeof v === "string" && v.length <= 100))) || [phone,experiences,github,linkedin,additionalInfo].some(v=>v !== undefined && (typeof v !== "string" || v.length > 5000))) {
            return NextResponse.json({ error: "Zorunlu alanları doldurunuz." }, { status: 400 });
        }

        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SPREADSHEET_ID) return NextResponse.json({error:"Başvuru formu henüz kullanıma açık değil."},{status:503});
        // Google Yetkilendirmesi
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // İkincil birimleri aralarına virgül koyarak string'e çevir
        const secondaryUnitsString = secondaryUnits && secondaryUnits.length > 0 ? secondaryUnits.join(", ") : "-";

        // Tabloya eklenecek veri dizisi
        const trTime = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });
        const appendData = [
            [
                trTime, name, facultyDept, grade, email, phone || "-",
                primaryUnit, unitAnswer, secondaryUnitsString,
                experiences || "-", github || "-", linkedin || "-", additionalInfo || "-"
            ]
        ];

        // Veriyi Sheets'e yazma
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: "Başvurular!A:M",
            valueInputOption: "RAW",
            requestBody: {
                values: appendData,
            },
        });

        return NextResponse.json({ success: true, message: "Başvuru başarıyla alındı." }, { status: 200 });

    } catch (error) {
        console.error("Sheets Hatası (Join):", error);
        return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
    }
}