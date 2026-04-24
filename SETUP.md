# Interior Design Website - Setup & Getting Started

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## Project Structure Breakdown

```
interior-design/
├── app/
│   ├── layout.tsx              # Root layout with Header & Footer
│   ├── page.tsx                # Homepage - imports all sections
│   └── globals.css             # Tailwind imports + global styles
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Sticky nav with mobile menu
│   │   └── footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── hero.tsx            # Full-screen hero section
│   │   ├── featured-projects.tsx # 4-column project grid
│   │   └── about.tsx           # About/bio section
│   └── projects/
│       └── project-card.tsx    # Reusable project card
├── public/images/              # Static images (add here)
├── package.json
├── tailwind.config.js          # Color & theme config
├── tsconfig.json
└── next.config.js
```

## What's Built (MVP - Basic Features)

✅ **Responsive mobile-first layout**
✅ **Sticky header with hamburger menu**
✅ **Hero section with gradient background**
✅ **Featured projects grid (4 cards)**
✅ **About section with features list**
✅ **Professional footer with social links**
✅ **Tailwind CSS styling with custom colors**
✅ **TypeScript setup**

## Customization Guide

### 1. Update Colors

Edit `tailwind.config.js`:

```javascript
accent: {
  primary: '#1e40af',    // Change to your primary color
  secondary: '#065f46',  // Change to your secondary
  tertiary: '#7c2d12',   // Change to your tertiary
},
```

### 2. Add Project Images

1. Place images in `public/images/`
2. Update project data in `components/sections/featured-projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Living Room',
    description: 'Your description',
    image: '/images/your-image.jpg', // Use local path
  },
  // ... more projects
]
```

### 3. Customize Content

- **Header**: `components/layout/header.tsx` - Update navigation links
- **Hero**: `components/sections/hero.tsx` - Update heading and description
- **About**: `components/sections/about.tsx` - Update personal content
- **Footer**: `components/layout/footer.tsx` - Update social links and email

### 4. Personalize About Section

Edit the About section text in `components/sections/about.tsx` to include information about the special person:

```typescript
<p className="text-neutral-600 leading-relaxed">
  With years of experience in interior design, [INSERT PERSONAL DETAILS HERE]...
</p>
```

## Adding More Pages

To add a new page (e.g., `/contact`):

1. Create `app/contact/page.tsx`
2. Add content
3. Update navigation in `components/layout/header.tsx`

Example:

```typescript
// app/contact/page.tsx
export default function Contact() {
  return (
    <section className="py-20">
      <div className="container">
        <h1>Contact Us</h1>
        {/* Your content */}
      </div>
    </section>
  )
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Vercel auto-detects Next.js and deploys
5. Your site will be live at `your-project.vercel.app`

## Next Steps (Future Features)

- [ ] Add individual project detail pages
- [ ] Create contact form
- [ ] Add blog/journal section
- [ ] Implement project filtering
- [ ] Add animations (scroll, hover effects)
- [ ] Set up image optimization
- [ ] Add newsletter signup
- [ ] Dark mode toggle

## Available Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Need to clean install?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support Files

- **Original Plan**: See `readme.md` for comprehensive site plan
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Lucide Icons**: https://lucide.dev

Happy building! 🎨
