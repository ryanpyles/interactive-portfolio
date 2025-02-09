import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RightTabsLayout.css";
import Projects from "./Projects";

const tabs = [
  {
    id: "home",
    label: "Home/About Me",
    color: "#FFD700",
    content: {
      title: "Welcome to My Portfolio",
      description: "I'm a full-stack developer specializing in modern web experiences.",
    },
  },
  {
    id: "services",
    label: "Services",
    color: "#FF6347",
    content: {
      title: "What I Offer",
      description: "Web development, branding, UX/UI design, and digital strategy.",
    },
  },
  {
    id: "portfolio",
    label: "Portfolio",
    color: "#87CEFA",
    content: <Projects />,
  },
  {
    id: "contact",
    label: "Contact",
    color: "#32CD32",
    content: {
      title: "Let's Connect",
      description: "Reach out for collaborations or freelance opportunities.",
    },
  },
];

const RightTabsLayout = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="right-tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => toggleTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            className={`expanded-content ${activeTab ? "active" : ""}`}
            key={activeTab}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="content-wrapper">
              {typeof tabs.find((t) => t.id === activeTab).content === "object" ? (
                <>
                  <h1 className="content-title">
                    {tabs.find((t) => t.id === activeTab).content.title}
                  </h1>
                  <p className="content-description">
                    {tabs.find((t) => t.id === activeTab).content.description}
                  </p>
                </>
              ) : (
                tabs.find((t) => t.id === activeTab).content
              )}

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