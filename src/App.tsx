import type React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import WhoAreWe from "./components/WhoAreWe/WhoAreWe"
import WorkingProcess from "./components/WorkingProcess/WorkingProcess"
import WhyEducesol from "./components/WhyEducesol/WhyEducesol"
import HowToUse from "./components/HowToUse/HowToUse"
import Features from "./components/Features/Features"
import HomeFeatures from "./components/Features/HomeFeatures"
import Reviews from "./components/Reviews/Reviews"
import FAQ from "./components/FAQ/FAQ"
import Clients from "./components/Clients/Clients"
import Footer from "./components/Footer/Footer"
import AboutUs from "./components/AboutUs/AboutUs"
import Contact from "./components/Contact/Contact"
import "./App.css"

// HomePage component to display all sections
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <WorkingProcess />
      <WhyEducesol />
      <HowToUse />
      <HomeFeatures />
      <Reviews />
      <FAQ />
      <Clients />
    </>
  )
}

// AnimatedRoutes component to handle transitions
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="page-container">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<WorkingProcess />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

// Main App component with routing
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
