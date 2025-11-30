# Daniel Zamyatin - Portfolio Website

Modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphism design, and bilingual support (EN/RU).

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional)
- **State Management:** Zustand (optional)
- **Form Validation:** React Hook Form + Zod (optional)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Features

- ✨ **Modern Design:** Glassmorphism effects, gradient text, glow animations
- 📱 **Fully Responsive:** Mobile-first design, works on all devices
- 🌐 **Bilingual:** English/Russian language toggle
- ⚡ **Performance:** Optimized for Lighthouse 95+ scores
- 🎯 **SEO Ready:** Proper meta tags, semantic HTML
- 🔄 **Smooth Scrolling:** Animated section transitions
- 📧 **Contact Form:** Working contact form with validation

## 📝 Editing Content

All content is centralized in `lib/config.ts`. Edit this file to update:

- Personal information (name, email, phone, location)
- Professional summary
- Skills and proficiency levels
- Work experience
- Projects (title, description, tech stack, links)
- Tech stack categories
- Education information
- Translations (EN/RU)

**Example:**

```typescript
// lib/config.ts
export const siteConfig = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  // ... more fields
};
```

No need to touch component code - just edit the config file!

## 🖼️ Adding Images

Place images in the `public` directory:

- `public/avatar.png` - Your profile photo
- `public/projects/` - Project screenshots

Reference them in `lib/config.ts`:

```typescript
{
  image: "/projects/my-project.png"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

For contact form functionality, add:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **WCAG AA Compliant:** Accessible design
- **Fast Load Times:** Optimized images and code splitting

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: #0a0a0a;
  --accent: #1e3a8a;
  --gold: #f59e0b;
}
```

### Fonts

Change font in `app/layout.tsx`:

```typescript
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── About.tsx        # About and skills
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Project showcase
│   ├── TechStack.tsx    # Technology table
│   ├── Education.tsx    # Education section
│   ├── Contact.tsx      # Contact form
│   ├── Navigation.tsx   # Sticky nav + back-to-top
│   └── Footer.tsx       # Footer with socials
├── lib/
│   └── config.ts        # All content data (EDIT THIS!)
└── public/
    ├── avatar.png       # Profile photo
    └── projects/        # Project images
```

## 🛠️ Development

```bash
# Type checking
npm run lint

# Format code (if prettier installed)
npm run format
```

## 📄 License

© 2025 Daniel Zamyatin. All rights reserved.

## 🤝 Contact

- **Email:** zamyatin.daniel@gmail.com
- **Phone:** +34 642 37 06 71
- **GitHub:** [@ViVaLaDaniel](https://github.com/ViVaLaDaniel)
- **LinkedIn:** [Daniel Zamyatin](https://www.linkedin.com/in/daniel-zamyatin)
- **Location:** Marbella, Spain

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
