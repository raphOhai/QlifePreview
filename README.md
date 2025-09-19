# Qlife App

A modern Next.js application built with the latest web development technologies.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Query (TanStack Query)** - Powerful data synchronization
- **shadcn/ui** - Beautiful, accessible React components
- **ESLint** - Code linting and formatting

## 🛠️ Features

- ✅ Server-side rendering with Next.js App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling with dark mode support
- ✅ React Query for data fetching and caching
- ✅ shadcn/ui components (Button, Card included)
- ✅ ESLint configuration
- ✅ Import aliases configured (@/*)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

The project is already set up! Just run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add form
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
│   └── utils.ts       # shadcn/ui utils
└── providers/         # React providers
    └── query-provider.tsx # React Query provider
```

## 🎨 Styling

This project uses Tailwind CSS with custom CSS variables for theming. The color palette and styling system is configured through:

- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles and CSS variables
- `components.json` - shadcn/ui configuration

## 📊 Data Fetching

React Query is configured and ready to use. Example usage:

```tsx
import { useQuery } from '@tanstack/react-query'

function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['my-data'],
    queryFn: () => fetch('/api/data').then(res => res.json()),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return <div>{data}</div>
}
```

## 🌙 Dark Mode

Dark mode is supported out of the box with Tailwind CSS. Use the `dark:` prefix for dark mode styles:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content that adapts to dark mode
</div>
```

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Use the Next.js build plugin
- **Railway**: Deploy with zero configuration
- **Docker**: Use the included Dockerfile (if added)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.