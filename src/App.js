import React from 'react';
import './App.css';
import { useState } from "react"
// data
import News from './data/news.json';
import navItemsData from './data/navItems.json';
// components
import AppNav from './components/AppNav/AppNav.js';

// import React Router
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage.js'
import ArticlePage from './pages/ArticlePage.js'

// seed values
const randomArticleIndex = Math.floor(Math.random() * News.length);
const randomArticle = News[randomArticleIndex];

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)
  const [article, setArticle] = useState({
    id: randomArticleIndex,
    title: randomArticle.title,
    abstract: randomArticle.abstract,
    byline: randomArticle.byline,
    image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
    created_date: randomArticle.created_date
  })

  // renders
  return (
    <div>
      <h1>AppNav Componen</h1>
      <hr />
      <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:articleID" element={<ArticlePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

