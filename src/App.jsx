import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen scroll-smooth">
      {/* Header with Navigation */}
      <header className="bg-transparent text-white py-4 fixed w-full top-0 z-20 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* About Me Section */}
        <section id="about" className="mb-12 py-16 bg-background">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="rounded-lg shadow-lg w-80 mb-8 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
              <p className="text-lg text-text">
                I'm a passionate web developer with expertise in creating
                modern, responsive, and user-friendly applications. I enjoy
                leveraging the latest technologies to solve real-world problems
                and deliver seamless user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-background shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform"
                  >
                    <div className="bg-gray-300 h-40"></div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-secondary mb-2">
                        Project {i + 1}
                      </h3>
                      <p className="text-text mb-4">
                        A brief description of the project. Highlight its
                        features, technologies, and purpose.
                      </p>
                      <a
                        href="#"
                        className="text-primary font-semibold hover:underline"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            {/* 3D Placeholder */}
            <div className="h-64 mt-8">
              <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <mesh>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial color="blue" />
                </mesh>
              </Canvas>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-primary to-secondary text-white"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
            <form className="max-w-2xl mx-auto bg-white text-text p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          &copy; {new Date().getFullYear()} My Interactive Portfolio. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
