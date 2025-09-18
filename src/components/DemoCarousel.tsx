import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import demoImage1 from "@/assets/demo-website-1.jpg";
import demoImage2 from "@/assets/demo-website-2.jpg";
import demoImage3 from "@/assets/demo-website-3.jpg";

const demos = [
  {
    id: 1,
    image: demoImage1,
    title: "Professional Services Site",
    description: "Clean, modern design for professional service businesses"
  },
  {
    id: 2,
    image: demoImage2,
    title: "E-commerce Platform",
    description: "Full-featured online store with shopping cart and payment integration"
  },
  {
    id: 3,
    image: demoImage3,
    title: "Restaurant Website",
    description: "Beautiful showcase for restaurants with online reservations"
  }
];

export const DemoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % demos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + demos.length) % demos.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden bg-gradient-cosmic shadow-cosmic border-0">
        <div className="relative h-64 md:h-80 lg:h-96">
          <img
            src={demos[currentIndex].image}
            alt={demos[currentIndex].title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-poppins font-semibold mb-2">
              {demos[currentIndex].title}
            </h3>
            <p className="text-sm text-white/90">
              {demos[currentIndex].description}
            </p>
          </div>
        </div>
      </Card>

      <Button
        variant="cosmic"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 shadow-cosmic"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="cosmic"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 shadow-cosmic"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center space-x-2 mt-4">
        {demos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-accent shadow-gold scale-110" 
                : "bg-muted hover:bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
};