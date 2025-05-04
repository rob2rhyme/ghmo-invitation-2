<<<<<<< HEAD
# GHMO भजन कार्यक्रम Invitation Generator

A responsive, TypeScript + Bootstrap web app for generating and exporting letter-size invitations for the Greater Harrisburg Magar Organization’s भजन कार्यक्रम.

## 🚀 Features

- **Gradient Header**  
  Purple → Blue background with your logo and **GHMO भजन कार्यक्रम Invitation Generator** welcome text.

- **Custom Font**  
  “GHMO” acronym rendered in the **Akkha Rika** WOFF2 font.

- **Fillable Form**

  - **दिन** (Day) — single-select dropdown
  - **भूमिका** (Role) — single-select dropdown
  - **पूजा प्रकार** (Puja Type) — single-select dropdown
  - **आयोजकको नाम** (Host Name) — text input
  - **ठेगाना** (Address) — text input
  - **मिति** (Date) — date picker with calendar icon
  - **समय** (Time) — time picker with clock icon

- **Live Preview**

  - Desktop: preview shown to the right of the form
  - Mobile: preview below the form
  - **Letter-size canvas** (8.5″×11″) for pixel-perfect export
  - Centered body title **हार्दिक निमन्त्रणा**
  - Dynamic inputs in **bold**, tight signature spacing

- **Export Options**

  - 📄 **Download PDF** (jsPDF, letter format)
  - 🖼️ **Download JPG** (html2canvas → JPEG)

- **Responsive & Accessible**
  - Inline date/time on small screens
  - Evenly-spaced export buttons
  - Reduced font sizes on mobile via media queries

## 📁 Project Structure

ghmo-document-generator/
├── public/
│ └── logo-placeholder.png
├── src/
│ ├── fonts/
│ │ └── Akkha-Rika.woff2
│ ├── components/
│ │ ├── InvitationForm.tsx
│ │ └── PreviewCard.tsx
│ ├── styles/
│ │ └── invitation.css
│ ├── utils/
│ │ └── generateExport.ts
│ └── App.tsx
├── index.html
├── main.tsx
├── tsconfig.json
├── webpack.config.js
└── package.json

## ⚙️ Installation

```bash
git clone https://github.com/rob2rhyme/ghmo-document-generator.git
cd ghmo-document-generator
npm install


npm start        # starts webpack-dev-server at http://localhost:8080

npm run build    # outputs to /dist folder
```
=======
# Letterhead Generator

A Next.js + TypeScript web app that lets users fill out a simple invitation form, preview it in real time at true letter size (8.5″×11″), and download it as either a PDF or a JPEG.  

- **Form** on the left (35% width) ● **Preview** on the right (65% width)  
- Live “what-you-see-is-what-you-print” preview with ½″ page margins  
- Download as PDF (letter format) or high-quality JPEG  
- Responsive: stacks vertically on screens <768px  

![Demo Screenshot](./public/screenshot.png)

---

## Features

- **Pre-assigned multi-select form**  
  - Organization, Event, Date, Time, Address, Phone  
- **Letter-size live preview** with bleed  
- **Download controls**  
  - “Download PDF” → letter-format PDF via `jsPDF`  
  - “Download JPEG” → high-quality JPG via `html2canvas`  
- **Responsive layout**  
  - 35% form / 65% preview on desktop  
  - Vertical stack on mobile (<768px)  

---

## Folder Structure

letterhead-generator/
├── components/
│ ├── LetterheadForm.tsx # Form + download logic
│ └── Preview.tsx # Live preview component
├── pages/
│ ├── index.tsx # Renders form & preview
│ └── api/ # (optional) server-side routes
├── public/
│ └── screenshot.png # Example preview screenshot
├── styles/
│ ├── globals.css # Reset & theme
│ ├── LetterheadForm.module.css
│ └── Preview.module.css
├── utils/
│ └── firebase.ts # (optional) Firestore setup
├── tsconfig.json
├── package.json
└── README.md


---

## Run in Development

```bash
npm install
npm run dev

```
## Build & Start
npm run build
npm run start

Open http://localhost:3000 in your browser.
>>>>>>> 1574f969cdb14bc3a03b3fb7faf16407264c94ba
