# GHMO Invitation Generator

This repository contains the **GHMO Invitation Generator**, a React + TypeScript application for generating invitation documents (PDF and JPEG) with a custom letterhead. It has been migrated from Webpack to **Vite** for faster builds and a simpler setup.

---

## 🛠️ Features

- 🔄 **Fast dev** server with HMR via Vite
- 📦 **Production build** optimizations out-of-the-box
- 📄 Generates both PDF and JPEG invitation files
- 🔐 6-digit PIN-based login (via Firebase Auth)
- ⚡ Live preview of invitation changes

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14 or higher
- **npm**, **Yarn**, or **pnpm**

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/rob2rhyme/ghmo-document-generator.git
cd ghmo-document-generator
npm install      # or yarn install, pnpm install
```

### Development

Start the Vite dev server with hot-reload:

```bash
npm run dev
```

By default, the app will be available at `http://localhost:3000/`.

### Production Build

Generate optimized assets for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Build Locally

Serve the production build locally to verify before deploying. You can use Vite's built-in preview:

```bash
npm run preview
```

Or serve the `dist/` folder as a static site using:

````bash
npx serve dist
# or
npx http-server dist
```bash
npm run preview
````

---

## ⚙️ Configuration

### Vite

Your `vite.config.ts` is set up for React and code-splitting:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, hmr: { overlay: false } },
  build: {
    // Customize chunk splitting and warnings
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});
```

### Tailwind CSS & PostCSS

Configured via `tailwind.config.js` and `postcss.config.js`. Ensure `autoprefixer` is installed as a dev dependency:

```bash
npm install -D autoprefixer
```

---

## 📦 Deployment

### Vercel

To deploy to Vercel, include a `vercel.json` at the project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [{ "src": "/(.*)", "dest": "/index.html" }]
}
```

Make sure your `package.json` scripts include:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "start": "vite preview"
}
```

Commit and push to trigger the Vercel build.

---

## 📁 Project Structure

```
├── public/               Static assets served at /
├── src/                  Application source code
│   ├── App.tsx
│   ├── styles/           CSS modules and global styles
│   └── components/       Reusable React components
├── index.html            Vite HTML entrypoint
├── vite.config.ts        Vite configuration
├── postcss.config.js     PostCSS setup (Tailwind, autoprefixer)
├── tailwind.config.js    Tailwind CSS configuration
├── package.json
└── README.md             Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for fixes and enhancements.

---

## 📜 License

This project is open-source under the MIT License.
