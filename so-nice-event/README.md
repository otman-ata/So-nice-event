# So Nice Event - Wedding & Event Planning Website

A beautiful, modern website for So Nice Event - an event planning company based in Agadir, Morocco.

## 🌟 Features

- **Multilingual Support**: French, English, and Arabic
- **Responsive Design**: Works on all devices
- **Interactive Gallery**: Showcase your beautiful events
- **Contact Form**: Direct email submissions via Google Apps Script
- **Services Showcase**: Wedding, Private Events, and Corporate Events
- **Blog Section**: Share tips and stories
- **Smooth Animations**: Elegant fade-in effects

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## 🚀 Quick Start

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the steps

2. **Install Dependencies**
   ```bash
   cd so-nice-event
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   - Navigate to: http://localhost:3000

## 📂 Project Structure

```
so-nice-event/
├── components/         # React components
│   ├── Header.tsx     # Navigation with logo
│   ├── Footer.tsx     # Footer with logo
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services section
│   ├── Gallery.tsx    # Image gallery
│   ├── Contact.tsx    # Contact form
│   └── ...
├── lib/
│   ├── images.ts      # Image paths configuration
│   └── translations.ts # Multilingual content
├── public/
│   └── assets/
│       ├── logos/     # Logo files (PNG)
│       └── images/    # Website images (JPEG)
└── ...
```

## 🖼️ Adding Images

### Logos
Place your logo files in `public/assets/logos/`:
- `main-logo.png` - Colored logo (for scrolled header)
- `logo-white.png` - White logo (for hero and footer)

### Gallery Images
Add gallery images to `public/assets/images/`:
- Name them: `gallery-1.jpeg`, `gallery-2.jpeg`, etc.
- Images will automatically appear in the gallery

### Other Images
- `hero-bg.jpeg` - Hero background
- `about-us.jpeg` - About section image
- `service-wedding.jpeg` - Wedding service image
- `service-private.jpeg` - Private events image
- `service-corporate.jpeg` - Corporate events image

## 🛠️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 📧 Contact Form Setup

The contact form uses Google Apps Script. Make sure to:
1. Set up your Google Apps Script (see `google-apps-script.js`)
2. Update the form submission URL in the contact component

## 🎨 Customization

- **Colors**: Edit the CSS custom properties in your components
- **Content**: Update `lib/translations.ts` for text content
- **Images**: Replace files in `public/assets/`

## 📱 Contact Information

- **Phone**: +212 666-757403
- **Email**: Soniceevent04@gmail.com
- **Location**: Avenue Arreda 13, 80650 Agadir, Morocco
- **Instagram**: @so_nice_event_

## 📄 License

© 2025 So Nice Event. All rights reserved.
