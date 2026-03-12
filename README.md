# gencyo - Digital Agency React Template

A modern, responsive React template built with Vite, featuring multiple homepage variations, dark mode support, and optimized performance.

## Features

- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR
- 🎨 **6 Homepage Variations**: Multiple design options to choose from
- 🌙 **Dark Mode Support**: Built-in dark mode with context API
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚛️ **React 18**: Latest React features and optimizations
- 🎯 **Performance Optimized**: Lazy loading, code splitting, and memoization
- 🔒 **Security**: XSS protection with DOMPurify sanitization
- ♿ **Accessible**: ARIA labels and semantic HTML
- 🎭 **Animations**: Smooth animations with Framer Motion
- 📦 **TypeScript Ready**: TypeScript support included

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 6.0.5** - Build tool and dev server
- **React Router 7.1.5** - Client-side routing
- **Framer Motion 12.4.1** - Animation library
- **Swiper 11.2.2** - Touch slider
- **DOMPurify 3.2.7** - XSS protection

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone or download the template
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Project Structure

```
gencyo-vite/
├── src/
│   ├── assets/          # Images, fonts, and CSS
│   ├── components/      # Reusable React components
│   │   ├── Headers/     # Header variations
│   │   ├── Footers/     # Footer variations
│   │   └── Helper/      # Utility components
│   ├── contexts/        # React contexts (DarkMode)
│   ├── layouts/         # Layout components
│   ├── lib/             # Utility libraries
│   ├── pages/           # Page components
│   ├── section/         # Section components
│   │   ├── Home1/       # Homepage 1 sections
│   │   ├── Home2/       # Homepage 2 sections
│   │   └── ...
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── package.json         # Dependencies
```

## Available Pages

- `/` - Homepage 1
- `/index-2` - Homepage 2
- `/index-3` - Homepage 3
- `/index-4` - Homepage 4
- `/index-5` - Homepage 5
- `/index-6` - Homepage 6
- `/about` - About page
- `/services` - Services page
- `/service-details` - Service details
- `/project` - Projects page
- `/project-details` - Project details
- `/team` - Team page
- `/team-details` - Team member details
- `/blog` - Blog grid
- `/blog-details` - Blog post details
- `/page-contact` - Contact page
- `/faq` - FAQ page
- `/testimonial` - Testimonials page

## Dark Mode

Dark mode is managed through the `DarkModeContext`. To use it in your components:

```jsx
import { useDarkMode } from '../contexts/DarkModeContext';

function MyComponent() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

## Performance Optimizations

- **Lazy Loading**: All route components are lazy-loaded
- **Code Splitting**: Automatic code splitting with React.lazy
- **Memoization**: Components use React.memo, useMemo, and useCallback
- **RequestAnimationFrame**: Progress bars use RAF instead of setInterval
- **Throttled Events**: Scroll events are throttled for better performance
- **Image Optimization**: Images use lazy loading attributes

## Security

- **XSS Protection**: All `dangerouslySetInnerHTML` usage is sanitized with DOMPurify
- **Input Sanitization**: User inputs are sanitized before rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors

Edit CSS variables in `src/assets/css/style.css`:

```css
:root {
  --theme-color1: #6c43e3;
  --theme-color2: #ed8a33;
  /* ... */
}
```

### Adding New Sections

1. Create a new component in `src/section/`
2. Import and use it in your page component

### Modifying Header/Footer

Edit components in `src/components/Headers/` or `src/components/Footers/`

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Traditional Hosting

1. Build: `npm run build`
2. Upload `dist` folder contents to your server

## Support

For support, email support@example.com or create an issue in the repository.

## License

This template is licensed for commercial use. See license file for details.

## Changelog

### Version 1.0.0
- Initial release
- 6 homepage variations
- Dark mode support
- Performance optimizations
- Security improvements
