# 🚀 How to Run Your Portfolio

## Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** package manager

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you're using yarn:
```bash
yarn install
```

Or if you're using bun:
```bash
bun install
```

## Step 2: Run Development Server

Start the development server:

```bash
npm run dev
```

The portfolio will be available at: **http://localhost:8080**

The dev server will automatically reload when you make changes to the code.

## Step 3: Build for Production

When you're ready to deploy, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Step 4: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration Notes

### 1. GitHub Username
Update your GitHub username in `src/components/GitHubStats.tsx`:
```typescript
const githubUsername = "your-github-username";
```

### 2. Resume File
Add your resume PDF to the `public` folder and name it `resume.pdf` for the download button to work.

### 3. Contact Form (EmailJS)
The contact form uses EmailJS. If you want to configure it:
- Create a `.env.local` file in the root directory
- Add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Social Links
Update social media links in:
- `src/components/Hero.tsx` (LinkedIn, GitHub buttons)
- `src/components/Contact.tsx` (social links)
- `src/components/Footer.tsx` (footer links)

### 5. Contact Information
Update contact details in:
- `src/lib/constants.ts` (email)
- `src/components/Contact.tsx` (phone number, location)

---

## 🐛 Troubleshooting

### Port Already in Use
If port 8080 is already in use, you can change it in `vite.config.ts`:
```typescript
server: {
  port: 3000, // Change to any available port
}
```

### Build Errors
If you encounter build errors:
1. Delete `node_modules` folder
2. Delete `package-lock.json` (or `yarn.lock` / `bun.lockb`)
3. Run `npm install` again
4. Try building again

### Missing Assets
Make sure all image assets referenced in `src/components/Projects.tsx` exist in the `src/assets` folder.

---

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

---

## ✨ Your Portfolio is Ready!

Once you run `npm run dev`, your modern, recruiter-focused portfolio will be live at http://localhost:8080!
