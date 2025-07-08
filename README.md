# Gocha - Bookmark Manager

![Gocha Logo](./src/assets/drop.svg)

_A modern and minimalist application for managing your favourite bookmarks_

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.0-646cff?style=flat-square&logo=vite)
![Sass](https://img.shields.io/badge/Sass-1.58.0-cc6699?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📋 Description

**Gocha** is a web application that allows users to save, edit, and delete their favourite bookmarks. The application validates URLs before storing them and uses the browser's localStorage for data persistence.

## ✨ Features

- 🔖 **Complete bookmark management**: Create, edit, and delete
- 🔍 **Smart search**: Find your bookmarks quickly
- 📄 **Pagination**: Efficient navigation with 20 items per page
- 🗑️ **Bulk deletion**: Clear all bookmarks with a single click
- ✅ **URL validation**: Verifies URLs are valid before saving
- 💾 **Local persistence**: Data is saved in localStorage
- 📱 **Responsive design**: Works on mobile and desktop devices

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 6.0.0
- **Routing**: React Router DOM 6.8.0
- **Styling**: Sass/SCSS
- **HTTP Client**: Axios 1.3.2
- **Code Quality**: ESLint + Prettier

## 🚀 Installation and Usage

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gocha
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser** at `http://localhost:3000`

### Available Scripts

```bash
pnpm dev      # Start the development server
pnpm build    # Build the application for production
pnpm preview  # Preview the production build
pnpm format   # Format code with Prettier
pnpm lint     # Run ESLint and fix errors automatically
```

## 📱 Functionality

### User Stories

- **🏠 Home page**: Users access `/` to begin the flow
- **➕ Create bookmark**: Users can add links to save them as bookmarks
- **✏️ Edit bookmark**: Users can edit previously saved bookmarks
- **🗑️ Delete bookmark**: Users can delete individual bookmarks
- **🗑️ Delete all**: Users can delete all bookmarks with a single button
- **📄 Navigation**: Users can navigate through different pages of the list
- **🔍 Search**: Users can search for specific bookmarks in the list

## 📊 Data Model

### Bookmark

```javascript
{
  id: Date,        // Unique timestamp identifier
  url: String      // Bookmark URL (validated)
}
```

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── Bookmarks/          # Bookmark-related components
│   ├── Navigation/         # Navigation components (Brand, Pagination)
│   ├── Tokens/            # Reusable components (Buttons)
│   └── Utils/             # Utilities (Form, SearchBar, Error)
├── contexts/              # React Context for global state management
├── pages/                # Main application pages
├── styles/               # Organised SASS architecture
│   ├── abstracts/        # Variables, mixins, functions
│   ├── base/            # Reset, base, typography
│   ├── components/      # Component styles
│   └── pages/          # Page styles
└── assets/              # Images, icons, and static resources
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Licence

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 🔮 Roadmap

- [ ] Cloud synchronisation
- [ ] Categories and tags for bookmarks
- [ ] Import/export bookmarks
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Favourites and rating system

---

_Made with ❤️ by the Gocha team_
