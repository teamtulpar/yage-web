# YAGE Web

Next.js 16 / React 19 community website.

## Development

Run npm install, npm run dev. Validate with npx eslint app and npm run build.

## Integrated content

Upstream particle hero, shared person cards, back-to-top control, expanded event archive and Google Sheets application endpoint are combined with the existing logo, portraits, project pages and interactive gallery. Gallery photos open in a dialog on /galeri?foto=1. Missing source photographs use text/initial fallbacks rather than broken image URLs.

## Google Sheets

Set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY and GOOGLE_SPREADSHEET_ID in the deployment environment. Share the destination spreadsheet with the service account. Contact messages append to İletişim!A:E; applications append to Başvurular!A:M. Both use RAW cell values and only report success after Google confirms the write. Without configuration, submission is disabled and an email contact is shown. Never commit credentials. The in-memory application rate limiter is best-effort per server instance.
