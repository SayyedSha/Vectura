import  { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
// import Stats from "./components/Stats";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Home, Building2, Briefcase, Calendar, Package, Truck, CheckCircle } from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Complete home relocation with care and precision",
      features: ["Packing & Unpacking", "Furniture Assembly", "Safe Transport"],
    },
    {
      icon: Building2,
      title: "Commercial Moving",
      description: "Office and business relocations with minimal downtime",
      features: ["IT Equipment", "Office Furniture", "Document Security"],
    },
    {
      icon: Briefcase,
      title: "Specialty Moving",
      description: "Piano, artwork, and delicate item transportation",
      features: ["Climate Control", "Custom Crating", "Insurance Coverage"],
    },
  ];

  const process = [
    { icon: Calendar, title: "Book", description: "Schedule your move with our easy booking system" },
    { icon: Package, title: "Pack & Load", description: "Professional packing and careful loading of your items" },
    { icon: Truck, title: "Transport", description: "Safe and secure transportation to your new location" },
    { icon: CheckCircle, title: "Deliver", description: "Unpack and set up your belongings in your new home" },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Cities Covered" },
    { number: "99.9%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! They moved my entire home without a single damaged item.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional team, fair pricing, and amazing customer service. Highly recommended!",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Made our office relocation seamless. The team worked efficiently and professionally.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero isVisible={isVisible} />
      <Services services={services} activeService={activeService} setActiveService={setActiveService} />
      <Process process={process} />
      {/* <Stats stats={stats} />
      <Testimonials testimonials={testimonials} /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
