import React, { useState } from 'react';

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      price: "₹15000+",
      image: "/services/brandd.jpg",
      description: "Responsive, SEO-optimized business websites designed to boost your brand's visibility and help convert visitors into customers.",
      benefit: "Increase brand visibility and reach more potential customers."
    },
    {
      title: "Custom Web Applications",
      price: "₹10000+",
      image: "/services/custom.jpg",
      description: "Tailored web applications that improve business efficiency, enhance user experience, and streamline your processes.",
      benefit: "Improve business efficiency with tailored features and functionality."
    },
    {
      title: "Portfolio Websites",
      price: "₹5000+",
      image: "/services/portfolio.jpg",
      description: "Professional portfolio websites to showcase your work, attract clients, and stand out in your industry.",
      benefit: "Attract more clients and stand out in your industry with a stunning portfolio."
    },
    {
      title: "Tour and Travel Websites",
      price: "₹12000+",
      image: "/services/tour.jpg",
      description: "User-friendly travel and tour websites that increase bookings by providing a seamless booking experience.",
      benefit: "Boost your travel agency's bookings and visibility."
    },
    {
      title: "E-commerce Websites",
      price: "₹20000+",
      image: "/services/shop.jpg",
      description: "Custom-built e-commerce websites with integrated payment gateways and inventory management for a seamless shopping experience.",
      benefit: "Grow your business with an online store that drives sales."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div id="services" className="py-20 px-5">
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-3">Services</h2>
      <p className="text-xl text-gray-300 text-center mb-10 max-w-3xl mx-auto">
        We offer a wide range of web development services tailored to meet your business needs, from creating responsive websites to custom web applications that drive growth and engagement.
      </p>

      <div className="flex justify-center items-center relative">
        {/* Main Image */}
        <div className="relative w-7/10 h-[500px] overflow-hidden rounded-xl shadow-lg group">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          {/* Hover Effect Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-500">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-4xl font-bold mb-2 tracking-wider">{services[currentIndex].title}</h3>
              <p className="text-2xl mb-2">{services[currentIndex].price}</p>
              <p className="text-lg mb-4 p-16">{services[currentIndex].description}</p>
              <h1 className="font-bold text-lg">{services[currentIndex].benefit}</h1>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/7006525041"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white py-2 px-6 rounded-full font-medium shadow-lg hover:bg-green-600 mt-6 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 mr-3"
                />
                7006525041
              </a>
            </div>
          </div>
        </div>

        {/* Small Pile of Images */}
        <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-transform duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                }`}
                style={{
                  transform: `translateY(${(index - currentIndex) * 20}px)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => handleArrowClick('left')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full shadow-lg hover:bg-opacity-70"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleArrowClick('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full shadow-lg hover:bg-opacity-70"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Services;
