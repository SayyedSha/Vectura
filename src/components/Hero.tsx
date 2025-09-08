import React from "react";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";

// Import the required CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  // 1. Define your images for the carousel
  const carouselImages = [
    "src/static/images/AdobeStock_1318579643_Preview.jpeg", // Replace with your image paths
    "src/static/images/AdobeStock_1401571459_Preview.jpeg",
    "src/static/images/AdobeStock_1574627043_Preview.jpeg",
  ];

  // 2. Configure the carousel settings
  const settings = {
    dots: true,          // Show dots for navigation
    infinite: true,      // Loop the carousel
    speed: 500,          // Transition speed in ms
    fade: true,          // Use a fade effect instead of a slide
    autoplay: true,      // Automatically change slides
    autoplaySpeed: 3000, // Time between slides in ms
    slidesToShow: 1,     // Show one slide at a time
    slidesToScroll: 1,   // Scroll one slide at a time
    arrows: false,       // Hide the default navigation arrows
  };

  return (
    <section id="about" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-blue-600 block">Moving Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stress-free relocation with our expert team. We handle everything from packing to unpacking,
              ensuring your move is smooth and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <a href="#contact">Get Free Quote </a> <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="mt-4 relative">
              <div>
                {/* 3. Implement the Slider component */}
                <Slider {...settings}>
                  {carouselImages.map((src, index) => (
                    <div key={index}>
                      <img 
                        src={src} 
                        alt={`Moving service showcase ${index + 1}`} 
                        className="rounded-2xl w-full object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;