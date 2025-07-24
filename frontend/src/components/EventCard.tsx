import { useState } from "react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const EventCard = ({ title, description, image, delay = 0 }: EventCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group relative animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-card border border-border rounded-2xl p-6 hover:bg-secondary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 relative overflow-hidden rounded-xl">
          <img 
            src={image}
            alt={title}
            className={`w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default EventCard;