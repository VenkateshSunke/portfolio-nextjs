# Portfolio Next.js Application

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Easy to customize

## Sections

- **Hero**: Welcome section with call-to-action buttons
- **About**: Personal introduction and background
- **Skills**: Showcase of technologies and tools
- **Projects**: Portfolio of featured projects
- **Contact**: Contact form and social links
- **Footer**: Footer with social media links

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`app/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description

2. **About Section** (`app/components/About.tsx`):
   - Update the about text
   - Change the avatar initials

3. **Skills** (`app/components/Skills.tsx`):
   - Modify skill categories and technologies

4. **Projects** (`app/components/Projects.tsx`):
   - Add your actual projects
   - Update project descriptions and links

5. **Contact** (`app/components/Contact.tsx`):
   - Update email, LinkedIn, and GitHub links
   - Configure form submission (currently just logs to console)

6. **Footer** (`app/components/Footer.tsx`):
   - Update copyright name and social links

7. **Metadata** (`app/layout.tsx`):
   - Update title and description

## Tech Stack

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React**: UI library

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically deploy your Next.js app

## License

This project is open source and available under the [MIT License](LICENSE).
