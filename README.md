# 🎓 CampusConnect — Vibrant College Blog Platform

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/Ahtesham831/CampusConnect)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-brightgreen?logo=vercel)](https://campusconnect-ahtesham831.vercel.app)
[![Node version](https://img.shields.io/badge/Node.js-%3E%3D%2020-brightgreen?logo=node.js)](https://nodejs.org)
[![React version](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://react.dev)

**CampusConnect** is a modern, premium, and feature-rich blogging platform designed specifically for college and university campuses. Built with React and Node.js, the platform empowers students, societies, and faculty to share stories, highlight student events, publish academic tutorials, and showcase career development guides.

---

## 🔗 Live Deployments

*   🌐 **Live Web Application (Frontend):** [https://campus-connect-pacv.vercel.app/](https://campus-connect-pacv.vercel.app/)


---

## ✨ Features

*   🎯 **College-Centric Categories:** Blog posts are organized into dedicated academic, life, and career categories:
    *   `Academics` — Course guides, exam tips, spacing repetition study systems.
    *   `Campus Life` — Student clubs, campus budgeting, freshers advice.
    *   `Events & Fest` — Annual fests, club highlights, creative photo guides.
    *   `Careers` — Internship application checklists, career transitions, and AI ethics.
*   ⚡ **AI-Powered Post Generator:** Integrates Gemini AI inside the Admin panel to automatically draft beautiful, comprehensive blog post structures based on a simple title prompt.
*   🖼️ **Optimized Media CDN (ImageKit.io):** Integrates the modern `@imagekit/nodejs` v7 SDK to perform high-performance server-side image uploads. Automatically transforms uploaded image thumbnails to `.webp` with auto-compression and custom widths for blazing-fast loading.
*   📝 **Advanced Rich Text Editor:** A tailored Quill.js implementation equipping authors with standard **Heading 1, Heading 2, Heading 3** selections, blockquotes, lists, links, image embeds, and clean formatting.
*   💬 **Moderated Discussion Boards:** A campus-safe interactive comments system with review stages to keep discussions safe, clean, and community-focused.
*   🔒 **Secure Admin Control:** A separate management dashboard to compose new articles, edit existing posts, toggle publishing statuses, review/delete comments, and monitor posts.

---

## 📂 Project Directory Structure

The repository is organized into a clean monorepo structure containing the React frontend (`client`) and Express backend (`server`):

```text
CampusConnect/
├── client/                     # Frontend Client App (Vite + React.js)
│   ├── public/                 # Static files (icons, SVGs)
│   ├── src/
│   │   ├── assets/             # Logo, pre-loaded mock college articles & custom assets
│   │   ├── components/         # Reusable UI elements (Navbar, Footer, Newsletter, Header)
│   │   ├── pages/
│   │   │   ├── admin/          # Admin Dashboard components (AddBlog, ManageBlogs, Comments)
│   │   │   ├── BlogDetails/    # Complete article view & comments list
│   │   │   ├── Home/           # Dynamic home feed with category tabs & filters
│   │   │   └── MainLayout/     # Base layout component with consistent header/footer
│   │   ├── App.jsx             # React routing setup and global authentication state
│   │   ├── main.jsx            # Application bootstrap & entry point
│   │   └── index.css           # Premium vanilla CSS styling system & variables
│   ├── eslint.config.js        # Linting parameters
│   ├── index.html              # HTML structure template
│   ├── package.json            # Client dependencies, scripts, and build parameters
│   ├── vercel.json             # Vercel configuration for SPA router redirection
│   └── vite.config.js          # Vite compilation overrides
│
└── server/                     # Backend API Server (Node.js + Express.js)
    ├── configs/                # Third-party integrations (MongoDB connection, ImageKit, Gemini AI)
    ├── controllers/            # Controller layers (Blog, Comment, and AI content managers)
    ├── middleware/             # Express routing helpers (Multer storage upload, Auth validation)
    ├── models/                 # Database Mongoose Schemas (Blog.js, Comment.js)
    ├── routes/                 # Express API resource routing (blogRoutes.js)
    ├── .env                    # Server secrets, keys, and configurations (gitignored)
    ├── server.js               # Application main server setup and listener
    └── vercel.json             # Vercel configurations for Node serverless API deployment
```

---

## 🛠️ Tech Stack

### Frontend
*   **React.js** (v18+) & **Vite** (Next-generation compilation)
*   **Quill Editor** (Tailored rich text composer)
*   **Vanilla CSS** (Premium custom design system, glassmorphic touches, and smooth animation transitions)
*   **Axios** (Promise-based HTTP client for fetching backend APIs)

### Backend
*   **Node.js** (v20+) & **Express.js** (API Framework)
*   **MongoDB Atlas & Mongoose** (NoSQL database modelling)
*   **Google Gemini API (`@google/genai`)** (Content generation models)
*   **ImageKit Node SDK (`@imagekit/nodejs` v7)** (Media storage and image optimization transformations)
*   **Multer** (Node middleware handling `multipart/form-data` file uploads)

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/en) (v20 or higher)
*   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster URI
*   [ImageKit.io](https://imagekit.io/) free account (for image upload CDN)
*   [Google Gemini API Key](https://ai.google.dev/) (for AI blog content generation)

---

### 💻 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ahtesham831/CampusConnect.git
    cd CampusConnect
    ```

2.  **Server Configuration:**
    Navigate to the server directory:
    ```bash
    cd server
    ```
    Create a `.env` file in the `server` directory and add the following:
    ```env
    # JWT & Security
    JWT_SECRET="your_jwt_secret_key"
    
    # Admin Panel Access Credentials
    ADMIN_EMAIL="admin@example.com"
    ADMIN_PASSWORD="your_secure_admin_password"
    
    # Database
    MONGODB_URI="your_mongodb_atlas_connection_string"
    
    # ImageKit Keys
    IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
    IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
    IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_imagekit_id"
    
    # Gemini AI
    GEMINI_API_KEY="your_google_gemini_api_key"
    ```
    Install server dependencies:
    ```bash
    npm install
    ```

3.  **Client Configuration:**
    Navigate to the client directory:
    ```bash
    cd ../client
    ```
    Create a `.env` file in the `client` directory and configure your local backend endpoint:
    ```env
    VITE_BASE_URL="http://localhost:3000"
    ```
    Install client dependencies:
    ```bash
    npm install
    ```

---

### 🏃 Running Locally

To start the application locally, you can run both services concurrently:

1.  **Start the Backend Server:**
    In the `server` directory, run:
    ```bash
    npm run server
    ```
    *(Starts server on `http://localhost:3000` with hot-reloading via Nodemon)*

2.  **Start the Frontend App:**
    In a separate terminal, navigate to `client` and run:
    ```bash
    npm run dev
    ```
    *(Starts the Vite dev server on `http://localhost:5173`)*

Open your browser and navigate to `http://localhost:5173` to explore CampusConnect!

---

## 🌐 Deployment on Vercel

The platform is designed to deploy seamlessly on Vercel:

1.  **Deploying Backend (`server`):**
    *   Deploy the `server` folder as a new project on Vercel.
    *   Configure all environment variables in the Vercel Project Settings matching your `server/.env`.
2.  **Deploying Frontend (`client`):**
    *   Deploy the `client` folder as a separate project on Vercel.
    *   Set the `VITE_BASE_URL` environment variable to the production API URL of your backend.

---

## 🤝 Contribution & License

Contributions are welcome! If you'd like to improve the platform, add new widgets, or enhance styles, feel free to fork the repository and open a Pull Request.

Distributed under the MIT License. See `LICENSE` for more details.
