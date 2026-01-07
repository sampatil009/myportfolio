# Portfolio Website

A simple, beginner-friendly static portfolio website built with Next.js (App Router) and Tailwind CSS.

## Features

- **Static Content Only** - No backend, API, or database required
- **Clean UI** - Minimal and modern design using Tailwind CSS
- **Responsive** - Works on all device sizes
- **Easy to Customize** - Well-commented code for beginners

## Pages

1. **Home** (`/`) - Landing page with name, introduction, and call-to-action button
2. **About** (`/about`) - Brief description and education details
3. **Skills** (`/skills`) - List of technical skills organized by category
4. **Contact** (`/contact`) - Email and phone contact information

## Project Structure

```
myproject/
├── app/
│   ├── layout.js          # Root layout with Navbar and Footer
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.js        # About page
│   ├── skills/
│   │   └── page.js        # Skills page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # This file
```

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## Installation

1. **Install dependencies**
   
   Open your terminal in the project directory and run:
   ```bash
   npm install
   ```
   
   This will install all the required packages including Next.js, React, and Tailwind CSS.

## Running the Project

1. **Start the development server**
   
   Run the following command:
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:3000`

2. **Open in browser**
   
   Open your browser and navigate to `http://localhost:3000`
   
   You should see the portfolio homepage!

3. **Stop the server**
   
   Press `Ctrl + C` in the terminal to stop the development server

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Customization

### Changing Content

- **Home Page**: Edit `app/page.js` to change the name, introduction, and button text
- **About Page**: Edit `app/about/page.js` to update your description and education details
- **Skills Page**: Edit `app/skills/page.js` to modify the skills list
- **Contact Page**: Edit `app/contact/page.js` to update your email and phone number

### Changing Colors

The website uses Tailwind CSS with indigo as the primary color. You can change colors by:
- Editing the color classes in each component file (e.g., `bg-indigo-600` → `bg-blue-600`)
- Or modify `tailwind.config.js` to add custom colors

### Adding New Pages

1. Create a new folder in the `app` directory (e.g., `app/projects/`)
2. Create a `page.js` file inside that folder
3. Add a link to the new page in `components/Navbar.js`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Notes

- This is a static website - no server-side functionality
- All content is hardcoded in the component files
- Perfect for beginners learning Next.js and React
- Easy to deploy to platforms like Vercel, Netlify, or GitHub Pages

## Troubleshooting

**Port 3000 already in use?**
- Stop other applications using port 3000, or
- Run `npm run dev -- -p 3001` to use a different port

**Styles not loading?**
- Make sure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `app/layout.js`

**Page not found?**
- Make sure you're using the correct route paths
- Check that page files are named `page.js` (not `index.js`)

## License

This project is open source and available for learning purposes.
