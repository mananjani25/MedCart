# MedCart - Order Confirmation System

A modern, responsive order confirmation platform built with **Next.js 14** and **Tailwind CSS**. This application provides a seamless user experience for confirming medicine orders with real-time order tracking and prescription verification.
---

## ✨ Features

- **Order Confirmation Page** - Display successful order placement with order number and details
- **Prescription Review** - Real-time prescription verification status
- **Order Summary Sidebar** - Quick overview of order details with item breakdown
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Modern UI** - Clean and professional interface using Tailwind CSS
- **Header Navigation** - Consistent navigation across all pages
- **Image Optimization** - Next.js Image optimization for fast loading

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | ^14.2.5 | React framework for production |
| **React** | ^18.3.1 | UI library |
| **TypeScript** | ^5.5.3 | Type-safe JavaScript |
| **Tailwind CSS** | ^3.4.4 | Utility-first CSS framework |
| **PostCSS** | ^8.4.39 | CSS processing |
| **ESLint** | ^8.57.0 | Code quality and linting |

---

## 📁 Project Structure

```
MedCart-master/
├── app/                              # Next.js app directory
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout component
│   └── page.tsx                      # Home page (order confirmation)
│
├── components/                        # Reusable React components
│   ├── Header.tsx                    # Navigation header
│   ├── Header.module.css             # Header styles (CSS Module)
│   ├── OrderConfirmation.tsx         # Order confirmation display
│   ├── OrderConfirmation.module.css  # Order confirmation styles
│   ├── OrderSummarySidebar.tsx       # Order summary sidebar
│   └── OrderSummarySidebar.module.css # Sidebar styles
│
├── public/                            # Static assets
│   └── assets/
│       ├── tick.png                  # Success checkmark icon
│       ├── prescription.png          # Prescription form icon
│       ├── celebration.svg           # Celebration animation asset
│       ├── cart.svg                  # Shopping cart icon
│       ├── logo.svg                  # Brand logo
│       ├── arrow.svg                 # Navigation arrows
│       ├── edit.svg                  # Edit action icon
│       ├── login.svg                 # Login icon
│       ├── plus.svg                  # Add/plus icon
│       ├── curve_design.png          # Price display icon
│       └── dolo.png                  # Product image
│
├── Configuration Files
│   ├── package.json                  # Project dependencies
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tailwind.config.ts            # Tailwind CSS setup
│   ├── next.config.js                # Next.js configuration
│   ├── postcss.config.mjs            # PostCSS plugins
│   ├── .eslintrc.json                # ESLint rules
│   └── .gitignore                    # Git ignored files
│
└── Documentation
    └── README.md                     # This file
```

---

### 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MedCart.git
   cd MedCart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

---

## ▶️ Running the Project

### Development Mode

Start the development server with hot-reload enabled:

```bash
npm run dev
# or
yarn dev
```

The application will be available at: **http://localhost:3000**

### Production Build

Build the project for production:

```bash
npm run build
# or
yarn build
```

### Start Production Server

Run the optimized production build:

```bash
npm start
# or
yarn start
```

### Linting

Check code quality and style:

```bash
npm run lint
# or
yarn lint
```

---

## 📦 Building for Production

### Step-by-Step Build Process

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

## 🧩 Project Components

### 1. **Header Component** (`components/Header.tsx`)
- Navigation bar at the top of the page
- Displays brand logo and navigation menu
- Styled with CSS Modules for scoped styling
- Responsive design (hidden on mobile, visible on desktop)

### 2. **OrderConfirmation Component** (`components/OrderConfirmation.tsx`)
- Main content area showing order success
- Displays order number (e.g., 122334455)
- Shows prescription review status
- Includes order details and next steps
- Features product cards with images

### 3. **OrderSummarySidebar Component** (`components/OrderSummarySidebar.tsx`)
- Right-side summary panel
- Shows order breakdown
- Displays item list with prices
- Sticky positioning for easy reference
- Responsive layout (stacks on mobile)

### 4. **Layout Component** (`app/layout.tsx`)
- Root layout for the entire application
- Includes metadata and head configuration
- Provides consistent structure across pages

---

## 🎨 Styling & Design

### CSS Framework
- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-scoped styles
- **Responsive Design** using Tailwind's breakpoints:
  - `md:` - Medium screens (768px+)
  - `lg:` - Large screens (1024px+)

### Design Principles
- Mobile-first approach
- Clean, professional UI
- Consistent color scheme
- Easy-to-read typography
- Optimized whitespace

### Key Responsive Classes
- `md:flex-row` - Desktop layout
- `md:overflow-y-auto` - Scrollable sections
- `md:sticky` - Fixed positioning on desktop
- `lg:h-auto` - Auto height on large screens

---

## 🔧 Configuration Files

### `package.json`
- Project metadata and dependencies
- NPM scripts for development, build, and linting

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (e.g., `@/components`)

### `tailwind.config.ts`
- Tailwind CSS customization
- Theme configuration

### `next.config.js`
- Next.js framework configuration
- Image optimization settings

### `.eslintrc.json`
- Code quality rules
- ESLint configuration


---

## 📁 Component Files Structure

### Each component now has TWO files:

1. **Component File (.tsx)** - Contains JSX/React logic
2. **CSS Module File (.module.css)** - Contains all styles

Example:
```
components/
├── Header.tsx              ← React component
├── Header.module.css       ← Component styles
```

## 🎨 CSS Modules Usage

### In Component Files:
```tsx
import styles from './ComponentName.module.css';

// Use styles like:
<div className={styles.container}>
<button className={styles.button}>
```

### Benefits:
- Scoped styles (no naming conflicts)
- Better organization
- Easier maintenance
- Type-safe (with TypeScript)







## 🎯 Key Takeaways

1. **Single Assets Location**: Only `/public/assets/`
2. **CSS Modules**: One `.module.css` per component
3. **No UI Changes**: Identical appearance
4. **Better Organization**: Separation of concerns
5. **Maintainability**: Easier to update and debug
