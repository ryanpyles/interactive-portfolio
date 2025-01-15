import React from 'react';

const Features = () => {
  const features = [
    { title: 'Project 1', description: 'Description of Project 1.' },
    { title: 'Project 2', description: 'Description of Project 2.' },
    { title: 'Project 3', description: 'Description of Project 3.' },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform"
            >
              <div className="h-40 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-3xl">Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
