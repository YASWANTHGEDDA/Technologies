import './App.css';
import React, { useEffect, useRef } from 'react';
import Coursepick from './components/Coursepick';
import Nav from './components/Nav';
import Webs from './components/Webs';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Fullstack from './components/Fullstack';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';

function App() {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const h1 = h1Ref.current;
    const p = pRef.current;
    const img = imgRef.current;

    // Handle menu button click
    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
    };

    // Add event listener for menu button
    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuClick);
    }

    // Apply animation classes on component mount
    if (h1 && p) {
      h1.classList.add('fade-in-up');
      p.classList.add('fade-in-up');
    }

    // Delay the image animation
    if (img) {
      setTimeout(() => {
        img.classList.add('slide-in-right');
      }, 600);
    }

    // Clean up event listener on unmount
    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuClick);
      }
    };
  }, []);

  const openTab = (evt, tabName) => {
    const tabContent = document.getElementsByClassName("tabcontent");
    const tabLinks = document.getElementsByClassName("tablink");

    // Hide all tab content
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" activeTab", "");
    }

    // Show the selected tab and add "active" class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " activeTab";
  };

  useEffect(() => {
    // By default, open the first tab
    const firstTabLink = document.getElementsByClassName("tablink")[0];
    if (firstTabLink) {
      firstTabLink.click();
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Webs />
            <Coursepick />
            <Frontend />
            <Backend />
            <Fullstack />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
