import Projects from "./Projects"; // Import Projects Component

const tabs = [
  {
    id: "home",
    label: "Home/About Me",
    color: "#FFD700",
    content: {
      title: "Welcome to My Portfolio",
      description: "I'm a passionate full-stack developer.",
      image: "/path-to-home-image.jpg",
    },
  },
  {
    id: "services",
    label: "Services/Specialties",
    color: "#FF6347",
    content: {
      title: "What I Offer",
      description: "I provide web development, branding, and UX/UI design.",
      image: "/path-to-services-image.jpg",
    },
  },
  {
    id: "portfolio",
    label: "Portfolio",
    color: "#87CEFA",
    content: <Projects />, // Replace text with the Projects component
  },
  {
    id: "contact",
    label: "Contact Me",
    color: "#32CD32",
    content: {
      title: "Let's Connect",
      description: "Reach out for collaborations or freelance opportunities.",
      image: "/path-to-contact-image.jpg",
    },
  },
];
