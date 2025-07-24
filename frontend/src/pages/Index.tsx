import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Import images
import techEventsImg from "@/assets/tech-events.jpg";
import hackathonsImg from "@/assets/hackathons.jpg";
import workshopsImg from "@/assets/workshops.jpg";
import expertTalksImg from "@/assets/expert-talks.jpg";
import heroImage from "@/assets/framer_landing_page_1.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const eventData = [
    {
      title: "Tech Events",
      description:
        "Evolve AI organises tech based events to cultivate the technical minds of the university.",
      image: techEventsImg,
      delay: 0,
    },
    {
      title: "Hackathons",
      description:
        "EVOLVE-AI hackathons are fast-paced AI challenges that foster innovation, teamwork, and real-world problem solving.",
      image: hackathonsImg,
      delay: 200,
    },
    {
      title: "Workshops",
      description:
        "Evolve-AI organises workshops to help students gain practical skills, knowledge and valuable insights relevant to AI.",
      image: workshopsImg,
      delay: 400,
    },
    {
      title: "Expert Talks",
      description:
        "Evolve-AI hosts expert guest lectures to help students gain insights, network with professionals, and shape their AI careers.",
      image: expertTalksImg,
      delay: 600,
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />

        {/* Smooth transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-background md:h-80" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1
            className="text-[200px] uppercase leading-none tracking-tight"
            style={{ fontFamily: '"helvetica-neue-lt-pro-cond", sans-serif' }}
          >
            EVOLVE AI
          </h1>

          <p className="text-lg mt-4 font-medium tracking-wide">
            Where AI Transforms Vision into Reality
          </p>
        </div>

        {/* Section Heading */}
        <div className="absolute bottom-20 w-full text-center z-10">
          <h2 className="text-[30px] sm:text-[70px]  leading-tight text-white">
            What do we organize for you?
          </h2>
        </div>
      </div>

      {/* Events Grid */}
      <main className="pb-16">
        <div className="container mx-auto px-6">
          <section id="events" className="pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 xl:gap-8">
              {eventData.map((event, index) => (
                <div
                  key={event.title}
                  className={`${
                    index === 0
                      ? "lg:mt-0"
                      : index === 1
                      ? "lg:mt-8"
                      : index === 2
                      ? "lg:mt-16"
                      : "lg:mt-24"
                  }`}
                >
                  <EventCard
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    delay={event.delay}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Buttons */}
          <section className="pt-16">
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button variant="modern" size="lg">
                Know More
              </Button>
              <Button variant="ghost" size="lg">
                Made in Framer
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Background FX */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  );
};

export default Index;
