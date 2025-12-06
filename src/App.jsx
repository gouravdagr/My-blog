import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  User,
  Tag,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { posts, blogInfo } from "./data";
import { Analytics } from "@vercel/analytics/react"

// --- Components ---
import { Menu, X, Sun, Moon } from "lucide-react";

// --- ScrollToTop Helper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- Navbar ---
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Initialize state from local storage
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 border-b border-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. LOGO */}
          <Link
            to="/"
            className="text-lg sm:text-2xl font-bold text-white tracking-tight"
          >
            My Professional Blog <span className="text-blue-500">.</span>
          </Link>

          {/* 2. DESKTOP MENU*/}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-white font-medium bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-500 transition shadow-md">Subscribe</a>
            
            {/* Desktop Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition border border-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          {/* END DESKTOP MENU */}

          {/* 3. MOBILE ACTIONS*/}
          <div className="flex items-center space-x-2 md:hidden">
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition border border-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger Menu Button */}
            <button
              className="text-gray-200 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {/* END MOBILE ACTIONS */}

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white transition"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block text-center text-white font-medium bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-300 py-12 mt-20">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-white text-lg font-bold">{blogInfo.name}</h3>
        <p className="mt-2 text-sm">{blogInfo.description}</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-white transition">
          <Github size={20} />
        </a>
        <a href="#" className="hover:text-white transition">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-white transition">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
    <div className="text-center mt-8 text-xs border-t border-gray-800 pt-8">
      {blogInfo.copyright}
    </div>
  </footer>
);

// --- BlogCard ---
const BlogCard = ({ post }) => (
  <Link 
    to={`/post/${post.id}`} 
    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wider">
        <Tag size={12} className="mr-1" /> {post.category}
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition">
        {post.title}
      </h2>
      
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
        {post.summary}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-gray-700">
        <div className="flex items-center text-xs text-gray-400 dark:text-gray-500">
          <User size={12} className="mr-1" /> {post.author}
          <span className="mx-2">•</span>
          <Calendar size={12} className="mr-1" /> {post.date}
        </div>
      </div>
    </div>
  </Link>
);

// --- HomePage ---
const HomePage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
        Welcome to our <span className="text-blue-600">Journal</span>
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        {blogInfo.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  </div>
);

// --- BlogPost ---
const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 mb-8 transition"
      >
        ← Back to all posts
      </Link>

      <div className="mb-8">
        <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-700 pb-8">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              post.author
            )}&background=random`}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {post.author}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
          </div>
        </div>
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-10"
      />

      <div
        className="prose prose-lg prose-blue text-gray-600 dark:text-gray-300 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

// --- Main App ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
