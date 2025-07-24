import evolveLogo from "@/assets/Evolve_Logo.png";
import chitkaraLogo from "@/assets/Chitkara_Logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Left Logo */}
        <img
          src={evolveLogo}
          alt="Evolve Logo"
          className="h-10 sm:h-12 object-contain"
        />

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-10 text-white font-medium text-sm sm:text-base">
          <a href="#events" className="hover:text-primary transition-colors">Event</a>
          <a href="#team" className="hover:text-primary transition-colors">Team</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Right Logo (Chitkara) */}
        <img
          src={chitkaraLogo}
          alt="Chitkara University"
          className="h-10 sm:h-12 object-contain"
        />
      </div>
    </nav>
  );
};

export default Navigation;
