# AppNexus.io 📱

A modern, responsive web application for discovering, browsing, and managing mobile applications. Built with React, this platform provides an intuitive interface for users to explore trending apps, view detailed information, and manage their installed applications.

## ✨ Features

- **Browse Applications**: Explore a comprehensive catalog of mobile applications
- **Search & Filter**: Find apps quickly with real-time search and sorting capabilities
- **Trending Apps**: Discover the most popular applications on the platform
- **Detailed App Pages**: View comprehensive information including ratings, downloads, reviews, and descriptions
- **Installation Management**: Track and manage your installed applications
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Interactive Charts**: Visual representation of app ratings using Recharts
- **Toast Notifications**: Real-time feedback for user actions

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Recharts** - Charting library for data visualization
- **React Icons** - Popular icon library
- **React Hot Toast** - Elegant toast notifications
- **Local Storage** - Persistent data storage for installed apps

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/appnexus.git
   cd appnexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🗂️ Project Structure

```
src/
├── Components/
│   ├── Footer.jsx          # Footer component with social links
│   ├── Navbar.jsx          # Navigation bar with routing
│   ├── Tapps.jsx           # Trending app card component
│   ├── Trending.jsx        # Trending apps section
│   └── active.css          # Active link styling
├── Pages/
│   ├── Home.jsx            # Landing page with hero and trending apps
│   ├── Apps.jsx            # All apps page with search and filter
│   ├── AllApps.jsx         # Individual app card component
│   ├── AppDetails.jsx      # Detailed app information page
│   ├── Installaion.jsx     # Installed apps management
│   ├── ErrorPage.jsx       # 404 error page
│   └── Root.jsx            # Root layout component
├── Routes/
│   └── Routes.jsx          # Application routing configuration
├── assets/                 # Static assets (images, icons)
├── index.css              # Global styles and Tailwind imports
└── main.jsx               # Application entry point
```

## 🎯 Key Features Explained

### Home Page
- Hero section with call-to-action buttons for app stores
- Statistics showcase (downloads, reviews, active apps)
- Trending apps section with top 8 applications

### Apps Page
- Complete app catalog with grid layout
- Real-time search functionality
- Sort by downloads (high-to-low or low-to-high)
- Loading states and empty state handling

### App Details Page
- Comprehensive app information
- Download count, ratings, and reviews
- Interactive bar chart showing rating distribution
- Install/Uninstall functionality
- Detailed app description

### Installation Page
- List of all installed applications
- Sort by app size
- One-click uninstall with confirmation toast
- Persistent storage using localStorage

## 🔧 Configuration

### Data Structure
Apps are loaded from `appData.json` with the following structure:

```json
{
  "id": 1,
  "title": "App Name",
  "image": "/path/to/image.png",
  "companyName": "Developer Name",
  "downloads": 10000000,
  "ratingAvg": 4.5,
  "reviews": 50000,
  "size": 25,
  "description": "App description...",
  "ratings": [
    { "name": "5★", "count": 5000000 },
    { "name": "4★", "count": 3000000 },
    // ...
  ]
}
```

### Routing
The application uses React Router with the following routes:
- `/` - Home page
- `/apps` - All apps page
- `/apps/:appID` - App details page
- `/installations` - Installed apps page

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built components
- **Custom CSS** for active navigation links
- **Responsive design** with mobile-first approach

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Local Storage

The application uses localStorage to persist:
- Installed apps list
- App installation status

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Meherul Hasan Sabbir

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS and DaisyUI for beautiful styling
- Recharts for data visualization
- All contributors and supporters

## 📞 Support

For support, email maherulhassan1@gmail.com or open an issue in the repository.

---

Made with ❤️ by BawoolTech