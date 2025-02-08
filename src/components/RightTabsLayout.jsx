import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RightTabsLayout.css";
import Projects from "./Projects"; // Import the Projects section

const tabs = [
  {
    id: "home",
    label: "Home/About Me",
    color: "#FFD700",
    content: {
      title: "Welcome to My Portfolio",
      description: "I'm a full-stack developer specializing in modern web experiences.",
      image: "/assets/home.jpg",
    },
  },
  {
    id: "services",
    label: "Services/Specialties",
    color: "#FF6347",
    content: {
      title: "What I Offer",
      description: "Web development, branding, UX/UI design, and digital strategy.",
      image: "/assets/services.jpg",
    },
  },
  {
    id: "portfolio",
    label: "Portfolio",
    color: "#87CEFA",
    content: <Projects />, // Loads dynamic GitHub & Vercel projects
  },
  {
    id: "contact",
    label: "Contact Me",
    color: "#32CD32",
    content: {
      title: "Let's Connect",
      description: "Reach out for collaborations or freelance opportunities.",
      image: "/assets/contact.jpg",
    },
  },
];

const RightTabsLayout = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="right-tabs-container">
      {/* Vertical Tabs on the Right */}
      <div className="tabs">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            style={{ backgroundColor: tab.color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id === activeTab ? null : tab.id)}
          >
            {tab.label}
          </motion.div>
        ))}
      </div>

      {/* Expanding Content */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            className="expanded-content"
            key={activeTab}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: tabs.find((t) => t.id === activeTab).color }}
          >
            <div className="content-wrapper">
              {/* Check if content is a component or static */}
              {typeof tabs.find((t) => t.id === activeTab).content === "object" ? (
                <>
                  <motion.h1
                    className="content-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {tabs.find((t) => t.id === activeTab).content.title}
                  </motion.h1>

                  <motion.p
                    className="content-description"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {tabs.find((t) => t.id === activeTab).content.description}
                  </motion.p>

                  <motion.img
                    className="content-image"
                    src={tabs.find((t) => t.id === activeTab).content.image}
                    alt={tabs.find((t) => t.id === activeTab).label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </>
              ) : (
                tabs.find((t) => t.id === activeTab).content
              )}

              {/* Close Button */}
              <button onClick={() => setActiveTab(null)} className="close-btn">
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightTabsLayout;
