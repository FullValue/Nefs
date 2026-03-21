import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Video,
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle2,
  Compass,
  Instagram
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
// --- Components ---

const IslamicFiligree = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="1.5" opacity="0.8">
      <rect x="40" y="40" width="120" height="120" transform="rotate(45 100 100)" />
      <rect x="40" y="40" width="120" height="120" />
      <circle cx="100" cy="100" r="50" />
      <circle cx="100" cy="100" r="35" />
      <path d="M100 10 L110 30 L100 50 L90 30 Z" />
      <path d="M100 190 L110 170 L100 150 L90 170 Z" />
      <path d="M10 100 L30 90 L50 100 L30 110 Z" />
      <path d="M190 100 L170 90 L150 100 L170 110 Z" />
    </g>
  </svg>
);

const Navbar = ({ onNavigate }: { onNavigate?: (page: 'home' | 'legal' | 'contact', section?: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
            <img src="/images/logo header ordinateur et footer.png" alt="Nefsy Logo" className="hidden md:block h-12 lg:h-14 w-auto object-contain" />
            <img src="/images/logooo.png" alt="Nefsy Logo" className="md:hidden h-10 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#comment-ca-marche" onClick={(e) => handleNavClick(e, 'comment-ca-marche')} className="text-nefsy-dark hover:text-nefsy-gold transition-colors font-medium text-sm">Comment ça marche</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-nefsy-dark hover:text-nefsy-gold transition-colors font-medium text-sm">Nos Services</a>
            <a href="#confiance" onClick={(e) => handleNavClick(e, 'confiance')} className="text-nefsy-dark hover:text-nefsy-gold transition-colors font-medium text-sm">Confiance & Sécurité</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq-contact')} className="text-nefsy-dark hover:text-nefsy-gold transition-colors font-medium text-sm">FAQ</a>
            <button className="bg-nefsy-gold hover:bg-nefsy-gold-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Télécharger l'App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nefsy-dark hover:text-nefsy-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
        >
          <a href="#comment-ca-marche" className="block text-nefsy-dark font-medium py-2" onClick={(e) => { setIsOpen(false); handleNavClick(e, 'comment-ca-marche'); }}>Comment ça marche</a>
          <a href="#services" className="block text-nefsy-dark font-medium py-2" onClick={(e) => { setIsOpen(false); handleNavClick(e, 'services'); }}>Nos Services</a>
          <a href="#confiance" className="block text-nefsy-dark font-medium py-2" onClick={(e) => { setIsOpen(false); handleNavClick(e, 'confiance'); }}>Confiance & Sécurité</a>
          <a href="#faq" className="block text-nefsy-dark font-medium py-2" onClick={(e) => { setIsOpen(false); handleNavClick(e, 'faq-contact'); }}>FAQ</a>
          <button className="w-full bg-nefsy-gold text-white px-6 py-3 rounded-xl font-medium mt-4">
            Télécharger l'App
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const GoldSparkles = () => {
  const points = [
    { id: 1, top: '15%', left: '15%', size: 24, delay: 0 },
    { id: 2, top: '25%', left: '85%', size: 32, delay: 1.2 },
    { id: 3, top: '55%', left: '10%', size: 20, delay: 0.5 },
    { id: 4, top: '75%', left: '85%', size: 28, delay: 2 },
    { id: 5, top: '40%', left: '80%', size: 16, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {points.map(p => (
        <motion.div
          key={p.id}
          className="absolute text-nefsy-gold flex items-center justify-center drop-shadow-md"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 45, 90]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-0 lg:pt-40 overflow-hidden bg-pattern flex flex-col items-center text-center">
      <GoldSparkles />
      <IslamicFiligree className="absolute top-10 -left-20 w-96 h-96 text-nefsy-gold opacity-[0.15] -z-10 pointer-events-none" />
      <IslamicFiligree className="absolute top-40 -right-20 w-[500px] h-[500px] text-nefsy-gold opacity-[0.15] -z-10 pointer-events-none" />
      {/* Concentric circles background */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] border border-nefsy-gold/10 rounded-full -z-10"></div>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px] border border-nefsy-gold/5 rounded-full -z-10"></div>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] sm:w-[1600px] sm:h-[1600px] border border-nefsy-gold/5 rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nefsy-gold/10 text-nefsy-gold font-medium text-sm mb-6">
            <Star size={16} className="fill-current" />
            <span>L'application n°1 pour votre Omra</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-nefsy-dark leading-tight mb-6 tracking-tight">
            Votre guide de confiance pour la <span className="text-nefsy-gold italic">Omra</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Réservez des guides religieux certifiés pour faciliter votre Omra ou vos visites à Médine. Une plateforme basée sur la confiance, l'éthique et la bienveillance (Amānah).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-16 w-full max-w-[260px] sm:max-w-none mx-auto">
            {/* App Store Button */}
            <button className="w-full sm:w-auto bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <svg viewBox="0 0 384 512" className="w-6 h-6 sm:w-8 sm:h-8 fill-current shrink-0"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="text-left pl-1">
                <div className="text-[9px] sm:text-[10px] leading-none mb-1 uppercase tracking-wider">Télécharger sur l'</div>
                <div className="text-base sm:text-lg font-semibold leading-none">App Store</div>
              </div>
            </button>
            {/* Google Play Button */}
            <button className="w-full sm:w-auto bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <svg viewBox="0 0 512 512" className="w-6 h-6 sm:w-8 sm:h-8 fill-current shrink-0"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className="text-left pl-1">
                <div className="text-[9px] sm:text-[10px] leading-none mb-1 uppercase tracking-wider">Disponible sur</div>
                <div className="text-base sm:text-lg font-semibold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mockups and Floating Elements */}
      <div className="relative w-full max-w-5xl mx-auto h-[420px] sm:h-[500px] lg:h-[550px] mt-4 lg:mt-4">
        
        <motion.div 
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[220px] sm:w-[300px] lg:w-[340px] h-[400px] sm:h-[550px] lg:h-[600px] bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] border-[10px] sm:border-[12px] border-black shadow-2xl overflow-hidden z-20"
        >
          <img src="/images/screen 1.jpeg" alt="Nefsy App Screen" className="w-full h-full object-cover" />
        </motion.div>

        {/* Left Phone */}
        <motion.div 
          initial={{ y: 200, opacity: 0, x: -50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute left-[-2%] sm:left-[5%] lg:left-[10%] bottom-[20px] sm:bottom-[-50px] w-[150px] sm:w-[220px] lg:w-[260px] h-[340px] sm:h-[400px] lg:h-[500px] bg-white rounded-t-[2rem] sm:rounded-t-[2.5rem] border-[8px] sm:border-[10px] border-black shadow-xl overflow-hidden z-10 opacity-90"
        >
          <img src="/images/screen 2.jpeg" alt="Nefsy Left Screen" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Phone */}
        <motion.div 
          initial={{ y: 200, opacity: 0, x: 50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute right-[-2%] sm:right-[5%] lg:right-[10%] bottom-[40px] sm:bottom-[-30px] w-[150px] sm:w-[220px] lg:w-[260px] h-[340px] sm:h-[400px] lg:h-[500px] bg-white rounded-t-[2rem] sm:rounded-t-[2.5rem] border-[8px] sm:border-[10px] border-black shadow-xl overflow-hidden z-10 opacity-90"
        >
          <img src="/images/screen 3.jpeg" alt="Nefsy Right Screen" className="w-full h-full object-cover" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-[12%] sm:top-[15%] left-2 sm:left-[2%] lg:left-[5%] bg-white/95 sm:bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 flex items-center gap-2 sm:gap-4 z-30 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-green-200 bg-green-50/50 backdrop-blur-sm flex items-center justify-center shrink-0">
            <ShieldCheck className="text-green-600 drop-shadow-sm w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <div className="text-[8px] sm:text-xs text-gray-500/80 uppercase tracking-wider font-medium">Paiement</div>
            <div className="font-bold text-xs sm:text-base text-nefsy-dark">100% Sécurisé</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute top-[30%] sm:top-[5%] right-2 sm:right-[2%] lg:right-[5%] bg-white/95 sm:bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 flex items-center gap-2 sm:gap-4 z-30 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-nefsy-gold/30 bg-nefsy-gold/10 backdrop-blur-sm flex items-center justify-center shrink-0">
            <Star className="text-nefsy-gold drop-shadow-sm w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <div className="text-[8px] sm:text-xs text-gray-500/80 uppercase tracking-wider font-medium">Guides</div>
            <div className="font-bold text-xs sm:text-base text-nefsy-dark">Vérifiés & Certifiés</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-[28%] sm:bottom-[20%] left-2 sm:left-[-2%] lg:left-[2%] bg-white/95 sm:bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 flex items-center gap-2 sm:gap-4 z-30 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm flex items-center justify-center shrink-0">
            <Video className="text-blue-500 drop-shadow-sm w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <div className="text-[8px] sm:text-xs text-gray-500/80 uppercase tracking-wider font-medium">Omra Badal</div>
            <div className="font-bold text-xs sm:text-base text-nefsy-dark">Preuves Vidéo</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin size={32} className="text-nefsy-gold" />,
      title: "Choisissez votre service",
      description: "Sélectionnez le type d'accompagnement souhaité : visite guidée, Omra Badal, ou Omra classique seul ou en groupe."
    },
    {
      icon: <ShieldCheck size={32} className="text-nefsy-gold" />,
      title: "Sélectionnez un guide",
      description: "Parcourez les profils de nos guides rigoureusement vérifiés et certifiés pour leur éthique."
    },
    {
      icon: <HeartHandshake size={32} className="text-nefsy-gold" />,
      title: "Réservez en toute sérénité",
      description: "Paiement sécurisé et mise en relation directe. Vivez votre expérience spirituelle l'esprit léger."
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-24 bg-nefsy-light relative overflow-hidden">
      <IslamicFiligree className="absolute top-1/2 -right-40 w-[600px] h-[600px] text-nefsy-gold opacity-[0.15] -translate-y-1/2 pointer-events-none" />
      <IslamicFiligree className="absolute bottom-0 -left-40 w-[400px] h-[400px] text-nefsy-gold opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-nefsy-dark mb-4">Comment ça marche ?</h2>
          <p className="text-gray-600">Un processus simple et transparent en 3 étapes pour vous connecter avec le guide idéal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-nefsy-gold/5 rounded-bl-full -z-10 group-hover:bg-nefsy-gold/10 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-nefsy-gold/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-nefsy-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              <div className="mt-6 text-nefsy-gold font-serif text-5xl opacity-10 absolute bottom-4 right-6">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Omra",
      shortDescription: "Un accompagnement personnalisé pour votre pèlerinage, guidé par des experts locaux.",
      fullDescription: "Accomplissez votre Omra en toute confiance aux côtés de nos guides qualifiés et reconnus pour leur sérieux, leur science et leur éthique. Présents à chaque étape, ils vous accompagnent avec bienveillance afin que vous viviez ce voyage sacré dans la sérénité, la conformité aux rites et la recherche sincère de l’agrément d’Allah.",
      icon: <Compass size={28} />,
      image: "/images/omra.jpg"
    },
    {
      title: "Omra Badal",
      shortDescription: "Faites accomplir la Omra pour un proche malade ou décédé. Preuves vidéo fournies.",
      fullDescription: "Confiez-nous votre Omra Badal : une adoration accomplie avec sérieux, transparence et sincérité. Votre guide vous enverra une courte vidéo à l’entrée en état de sacralisation (Ihram) ainsi qu’à la fin de la Omra, pour vous permettre de vivre chaque étape en toute confiance.",
      icon: <Video size={28} />,
      image: "/images/omra badal.jpg"
    },
    {
      title: "Visite de Makkah",
      shortDescription: "Un voyage au cœur de la foi et de la dévotion sur les traces du Prophète ﷺ.",
      fullDescription: "La visite de Makkah est un voyage au cœur de la foi et de la dévotion : du Jabal Thawr, refuge du Prophète ﷺ, aux plaines sacrées d’Arafât, Mina et Mouzdalifa, jusqu’au Jabal Nour qui abrite la grotte de Hira, chaque étape vous rapproche de l’histoire, des sacrifices et de la lumière de l’Islam, guidé avec soin pour que votre cœur et votre esprit s’élèvent dans la contemplation et la sérénité.",
      icon: <MapPin size={28} />,
      image: "/images/visite mekka.jpg"
    },
    {
      title: "Visite de Médine",
      shortDescription: "Une immersion au cœur de l’histoire et de l’amour du Prophète ﷺ.",
      fullDescription: "La visite de Médine est une immersion au cœur de l’histoire et de l’amour du Prophète ﷺ : entre la Mosquée de Quba, le mont Uhud et ses martyrs, et la douceur des palmeraies, chaque étape est un rappel vivant de foi, de sacrifice et de miséricorde, guidé avec bienveillance pour nourrir votre cœur autant que votre esprit.",
      icon: <MapPin size={28} />,
      image: "/images/visites medine.jpg"
    },
    {
      title: "Visite du Masjid Nabawi",
      shortDescription: "Foi, histoire et émotion guidées par nos experts au sein de la mosquée prophétique.",
      fullDescription: "Masjid Nabawi en toute sérénité : foi, histoire et émotion guidées par nos guides experts.",
      icon: <Star size={28} />,
      image: "/images/masjid nabawi.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white bg-pattern relative overflow-hidden">
      <IslamicFiligree className="absolute top-0 -left-40 w-[700px] h-[700px] text-nefsy-gold opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-nefsy-dark mb-4">Nos Services Premium</h2>
            <p className="text-gray-600">Des prestations sur-mesure pour répondre à tous vos besoins spirituels et logistiques.</p>
          </div>
          <button className="text-nefsy-gold font-medium hover:text-nefsy-gold-dark flex items-center gap-1 transition-colors">
            Voir tous les services <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.01] border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-nefsy-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-nefsy-gold shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-nefsy-dark mb-3 group-hover:text-nefsy-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 italic border-l-2 border-nefsy-gold pl-4 py-2 mb-6 text-sm leading-relaxed">
                        « {service.fullDescription} »
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex items-center text-sm font-medium text-nefsy-dark group-hover:text-nefsy-gold transition-colors focus:outline-none"
                >
                  {expandedIndex === index ? "Moins de détails" : "En savoir plus"} 
                  <ChevronRight size={16} className={`ml-1 transform transition-transform ${expandedIndex === index ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = ({ onNavigate }: { onNavigate?: (page: 'home' | 'legal' | 'contact', section?: string) => void }) => {
  const features = [
    "Vérification d'identité stricte (KYC)",
    "Validation des compétences religieuses",
    "Paiement 100% sécurisé in-app",
    "Support client disponible 24/7",
    "Système d'avis et de notation transparent",
    "Garantie de remboursement sous conditions"
  ];

  return (
    <section id="confiance" className="py-24 bg-nefsy-dark text-white relative overflow-hidden">
      <IslamicFiligree className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-nefsy-gold opacity-[0.1] pointer-events-none" />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nefsy-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nefsy-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              La confiance au cœur de <br /> notre <span className="text-nefsy-gold italic">Amānah</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Chez Nefsy, nous prenons la sécurité et l'éthique très au sérieux. Chaque guide est rigoureusement sélectionné pour vous garantir une expérience spirituelle authentique et sereine.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-nefsy-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a 
              href="/chartesethiques"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('legal', 'charter');
                }
              }}
              className="inline-block bg-nefsy-gold hover:bg-nefsy-gold-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
            >
              Découvrir notre charte éthique
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-nefsy-gold rounded-full flex items-center justify-center shadow-xl">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white">Paiement Sécurisé</h3>
              <p className="text-gray-400 mb-8">
                Votre argent est conservé en toute sécurité jusqu'à la réalisation complète de la prestation. Le guide n'est payé qu'une fois le service validé.
              </p>
              
              <div className="space-y-4">
                {[
                  { step: "1", label: "Réservation", completed: true },
                  { step: "2", label: "Prestation", completed: false },
                  { step: "3", label: "Paiement libéré", completed: false, opacity: "opacity-50" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className={`bg-white/10 rounded-2xl p-4 flex items-center justify-between ${item.opacity || ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-nefsy-gold/20 flex items-center justify-center">
                        <span className="text-nefsy-gold font-bold">{item.step}</span>
                      </div>
                      <span className={`font-medium ${item.completed ? 'text-white' : 'text-gray-400'}`}>{item.label}</span>
                    </div>
                    {item.completed ? (
                      <CheckCircle2 className="text-nefsy-gold" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif text-nefsy-dark mb-4">Contactez-nous</h1>
            <p className="text-gray-600">Une question ? Un besoin spécifique ? Notre équipe est à votre écoute pour vous accompagner.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all bg-white">
                <option value="">Sélectionnez un sujet</option>
                <option value="omra">Réservation Omra / Visite</option>
                <option value="badal">Information Omra Badal</option>
                <option value="partner">Devenir Partenaire</option>
                <option value="other">Autre demande</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>
            <button type="button" className="w-full bg-nefsy-gold hover:bg-nefsy-gold-dark text-white font-medium py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "Comment sont sélectionnés les guides Nefsy ?",
      a: "Chaque guide passe par un processus de vérification très strict : contrôle d'identité complet, vérification des compétences religieuses, et entretien sur l'éthique et le comportement (Amānah)."
    },
    {
      q: "Le paiement est-il sécurisé ?",
      a: "Oui, le paiement s'effectue via une plateforme externe sécurisée. Votre argent est cantonné et n'est versé au guide qu'une fois la prestation validée par vos soins."
    },
    {
      q: "En quoi consiste précisément la Omra Badal ?",
      a: "C'est l'accomplissement d'une Omra par un guide en l'intention d'une personne malade (incapacité physique) ou décédée. Le guide s'engage à envoyer des vidéos de preuve (à l'entrée en Ihram et à la fin) pour garantir la bonne exécution de la mission."
    },
    {
      q: "Comment s'organise le point de rendez-vous ?",
      a: "Si votre hôtel est à proximité du Haram (moins de 500m), le guide vient vous y chercher. Sinon, vous fixez ensemble un point de rendez-vous clair via la messagerie de l'application."
    }
  ];

  return (
    <section className="py-24 bg-nefsy-light relative" id="faq-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Left Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-nefsy-dark mb-4">Questions Fréquentes</h2>
              <p className="text-gray-600">Tout ce que vous devez savoir pour réserver en toute tranquillité.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-nefsy-dark">{faq.q}</span>
                    <ChevronRight className={`text-nefsy-gold transform transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-6 pt-0 text-gray-600 border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Right Column */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-nefsy-dark mb-2">Contactez-nous</h3>
              <p className="text-gray-600 text-sm">Une question ? Un besoin spécifique ? Notre équipe est à votre écoute.</p>
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="omra">Réservation Omra / Visite</option>
                  <option value="badal">Information Omra Badal</option>
                  <option value="partner">Devenir Partenaire</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-nefsy-gold focus:border-transparent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="button" className="w-full bg-nefsy-gold hover:bg-nefsy-gold-dark text-white font-medium py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-2">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate?: (page: 'home' | 'legal' | 'contact', section?: string) => void }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#111111] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={(e) => handleNavClick(e as any, 'home')}>
              <img src="/images/logo header ordinateur et footer.png" alt="Nefsy Logo" className="h-16 lg:h-20 w-auto object-contain bg-white rounded-lg p-2 max-w-full" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Vivez votre pèlerinage en toute sérénité. L'application de confiance pour vos visites et votre Omra.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nefsy2026?igsh=MWFyenRwNjd3aG1pZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-[14px] border border-nefsy-gold/40 flex items-center justify-center text-nefsy-gold/80 hover:border-nefsy-gold hover:text-nefsy-gold transition-all cursor-pointer">
                <Instagram size={22} className="stroke-[1.5]" />
              </a>
              <a href="https://www.tiktok.com/@nefsy2026?_r=1&_t=ZG-94hCTpQVcfI" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-12 h-12 rounded-[14px] border border-nefsy-gold/40 flex items-center justify-center text-nefsy-gold/80 hover:border-nefsy-gold hover:text-nefsy-gold transition-all cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.26 6.32 6.33 6.33 0 0 0 6.31-6.32V10a8.1 8.1 0 0 0 4.79 1.54v-3.32a4.42 4.42 0 0 1-2.77-1.53z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-nefsy-gold transition-colors text-left block">Visites Guidées</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-nefsy-gold transition-colors text-left block">Omra Badal</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-nefsy-gold transition-colors text-left block">Omra</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-nefsy-gold transition-colors text-left block">À propos</a></li>
              <li><a href="/chartesethiques" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'charter'); }} className="hover:text-nefsy-gold transition-colors text-left block">Notre Charte Éthique</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }} className="hover:text-nefsy-gold transition-colors text-left block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Légal</h4>
            <ul className="space-y-4 text-sm text-gray-400 flex flex-col items-start">
              <li><a href="/mentionslegales" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'mentions'); }} className="hover:text-nefsy-gold transition-colors text-left">Mentions Légales</a></li>
              <li><a href="/CGVU" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'cgvu'); }} className="hover:text-nefsy-gold transition-colors text-left">Conditions Générales</a></li>
              <li><a href="/politiquedeconfidentialite" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'privacy'); }} className="hover:text-nefsy-gold transition-colors text-left">Politique de Confidentialité</a></li>
              <li><a href="/politiquedannulation" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'cancellation'); }} className="hover:text-nefsy-gold transition-colors text-left">Politique d'Annulation</a></li>
              <li><a href="/chartesethiques" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('legal', 'charter'); }} className="hover:text-nefsy-gold transition-colors text-left">Chartes Éthiques</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mt-8 flex flex-col items-center gap-6">
          <p className="text-nefsy-gold text-2xl sm:text-3xl lg:text-4xl font-arabic tracking-wide select-none opacity-90 pb-2" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-500 uppercase tracking-widest text-center">
            <span>© 2026 Nefsy. Tous droits réservés.</span>
            <span className="hidden md:inline text-white/20">—</span>
            <span>Designed by Ulycom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LegalPage = ({ section, onNavigate }: { section: string, onNavigate: (page: 'home' | 'legal' | 'contact', section?: string) => void }) => {
  const sections = [
    { id: 'mentions', title: 'Mentions Légales', path: '/mentionslegales' },
    { id: 'cgvu', title: 'Conditions Générales', path: '/CGVU' },
    { id: 'privacy', title: 'Politique de Confidentialité', path: '/politiquedeconfidentialite' },
    { id: 'cancellation', title: "Politique d'Annulation", path: '/politiquedannulation' },
    { id: 'charter', title: 'Chartes Éthiques', path: '/chartesethiques' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-32">
              <h3 className="font-serif text-xl text-nefsy-dark mb-6">Documents Légaux</h3>
              <nav className="space-y-2">
                {sections.map(s => (
                  <a
                    key={s.id}
                    href={s.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('legal', s.id);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                      section === s.id 
                        ? 'bg-nefsy-gold/10 text-nefsy-gold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-nefsy-dark'
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
              {section === 'cgvu' && (
                <div className="prose prose-nefsy max-w-none">
                  <h1 className="text-3xl font-serif text-nefsy-dark mb-8">2. CONDITIONS GÉNÉRALES DE VENTE ET D'UTILISATION (CGVU)</h1>
                  
                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 1 – Identification de la société</h3>
                  <p><strong>Raison sociale :</strong> SMHRJU</p>
                  <p><strong>Siège social :</strong> 78 Avenue des Champs Élysées, 75008 Paris, France</p>
                  <p><strong>Numéro d'immatriculation :</strong> 100957091</p>
                  <p><strong>Objet :</strong> Plateforme de mise en relation entre pèlerins et guides pour l'organisation de prestations religieuses (Omra, visites guidées, Omra Badal).</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 2 – Documents Contractuels</h3>
                  <p>L'utilisation de l'application et la souscription à une prestation impliquent l'acceptation sans réserve des présentes CGVU ainsi que des documents suivants, disponibles en consultation permanente dans l'application :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                    <li>La Charte du Pèlerin.</li>
                    <li>Le Règlement des Guides Religieux.</li>
                    <li>Le Code de Conduite et Règles Opérationnelles des Guides.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 3 – Description du Service</h3>
                  <p className="text-gray-600">L'application permet aux pèlerins de réserver des prestations de guidage à Makkah et Médine, incluant l'accompagnement religieux, les visites historiques et la réalisation de l'Omra Badal.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 4 – Engagements des Parties</h3>
                  <p className="text-gray-600"><strong>Engagements du Pèlerin :</strong> Le pèlerin s'engage à fournir des informations exactes, à respecter les horaires, les consignes de sécurité et les principes éthiques de l'Islam.</p>
                  <p className="mt-2 text-gray-600"><strong>Engagements du Guide :</strong> Le guide s'engage à une mission d'intérêt général fondée sur le Coran et la Sounna. Il a l'obligation de porter son gilet officiel pour identification et de respecter une ponctualité stricte.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 5 – Dispositions spécifiques aux prestations</h3>
                  <p className="text-gray-600"><strong>Omra Badal :</strong> Le guide a l'obligation de réaliser et transmettre deux vidéos (entrée en ihram et fin de mission) pour attester de l'accomplissement.</p>
                  <p className="mt-2 text-gray-600"><strong>Prise en charge :</strong> Si l'hôtel est à moins de 500m du Masjid Al-Haram, le guide s'y rend directement. Au-delà, un point de rendez-vous est fixé d'un commun accord.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 6 – Prix et Modalités de Paiement</h3>
                  <p className="text-gray-600">Les prix sont indiqués dans l'application au moment de la réservation. Le paiement s'effectue exclusivement en ligne via une plateforme sécurisée externe. Aucune donnée bancaire n'est stockée par l'application. La validation du paiement vaut acceptation de la mission par le guide et des présentes conditions par le pèlerin.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 7 – Responsabilité</h3>
                  <p className="text-gray-600">Le pèlerin demeure responsable de ses effets personnels, de son état de santé et du respect des lois locales.</p>
                  <p className="mt-2 text-gray-600">Le guide est responsable de l'exécution fidèle de sa mission (Amānah) devant les pèlerins et devant Allah.</p>
                  <p className="mt-2 text-gray-600">La société SMHRJU agit en tant qu'intermédiaire et ne saurait être tenue responsable en cas de force majeure ou de fait imputable à l'utilisateur.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 8 – Propriété Intellectuelle</h3>
                  <p className="text-gray-600">L'ensemble des contenus de l'application (logos, interfaces, textes) est la propriété exclusive de SMHRJU. Toute reproduction ou prêt de compte utilisateur/guide est strictement interdit.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Article 9 – Droit applicable et Litiges</h3>
                  <p className="text-gray-600">Les présentes CGVU sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence des tribunaux de Paris.</p>
                </div>
              )}

              {section === 'privacy' && (
                <div className="prose prose-nefsy max-w-none">
                  <h1 className="text-3xl font-serif text-nefsy-dark mb-8">3. POLITIQUE DE CONFIDENTIALITÉ (NORME RGPD)</h1>
                  <p className="text-gray-600">La protection de vos données est une priorité. Nous traitons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Collecte et Utilisation des données</h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li><strong>Données d'inscription :</strong> Nous collectons vos informations d'identité et documents nécessaires à l'organisation de la mission.</li>
                    <li><strong>Santé :</strong> Le pèlerin est responsable de signaler toute information médicale importante pour sa propre sécurité durant le parcours.</li>
                    <li><strong>Organisation des rencontres et Logistique :</strong> Aucune donnée de géolocalisation en temps réel (GPS) n'est collectée par l'application. Les lieux de rendez-vous et de prise en charge sont convenus de gré à gré entre le pèlerin et le guide via la messagerie sécurisée. Le pèlerin fournit les informations logistiques nécessaires (nom de l'hôtel, numéro de chambre pour les personnes à mobilité réduite) pour permettre la prestation.</li>
                    <li><strong>Médias et Preuves :</strong> Pour les prestations de Omra Badal, des fichiers multimédias (vidéos et photos) sont collectés et transmis pour attester de la réalisation des rites conformément aux engagements du guide.</li>
                    <li><strong>Partage des données :</strong> Pour le bon déroulement de la mission, les informations nécessaires (nom, besoins spécifiques, médias de preuve) sont partagées exclusivement entre le pèlerin et le guide concerné. Aucune donnée n'est vendue à des tiers commerciaux.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Messagerie Interne et Confidentialité</h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li><strong>Accès :</strong> La messagerie entre le pèlerin et le guide est activée uniquement après la validation du paiement du service.</li>
                    <li><strong>Usage :</strong> Les échanges doivent se limiter exclusivement au cadre de la mission spirituelle et logistique.</li>
                    <li><strong>Conservation :</strong> Conformément au principe de minimisation du RGPD, les messages ne sont pas conservés de manière permanente. Ils sont supprimés de nos serveurs actifs après la clôture de la mission, sauf nécessité de traitement d'un litige.</li>
                    <li><strong>Éthique :</strong> Il est strictement interdit aux guides d'utiliser cette messagerie pour détourner la clientèle ou proposer des services privés hors plateforme.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Sécurité et Droits des utilisateurs</h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li><strong>Protection :</strong> Aucune donnée bancaire n'est stockée par l'application, les transactions étant traitées par un prestataire de paiement externe sécurisé.</li>
                    <li><strong>Hébergement :</strong> Vos données sont stockées sur des serveurs sécurisés chez un hébergeur professionnel garantissant un haut niveau de protection et de confidentialité.</li>
                    <li><strong>Droits :</strong> Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</li>
                    <li><strong>Suppression de compte :</strong> Conformément aux exigences d'Apple et de Google, un bouton de suppression de compte est disponible dans les réglages de l'application, entraînant l'effacement définitif de vos données personnelles (hors obligations légales de conservation).</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Responsabilité du Compte</h3>
                  <p className="text-gray-600">L'utilisateur est seul responsable de la confidentialité de ses identifiants. Toute substitution, prêt ou partage de compte est une violation grave de l'engagement de confiance (Amānah).</p>
                </div>
              )}

              {section === 'cancellation' && (
                <div className="prose prose-nefsy max-w-none">
                  <h1 className="text-3xl font-serif text-nefsy-dark mb-8">4. POLITIQUE D'ANNULATION ET DE REMBOURSEMENT</h1>
                  <p className="text-gray-600">Cette politique s'applique à toute prestation réservée via l'application. L'achat d'une prestation vaut acceptation sans réserve de ces conditions.</p>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Délais et Frais applicables</h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li><strong>Annulation anticipée (plus de 48h avant) :</strong> Toute prestation peut être annulée sans frais jusqu'à 48 heures avant son début, ouvrant droit à un remboursement intégral.</li>
                    <li><strong>Annulation tardive (moins de 48h avant) :</strong> Pour toute annulation effectuée moins de 48 heures avant la prestation, une retenue de 25% de la somme totale est appliquée. Ces frais correspondent à la gestion, la réservation et l'organisation déjà engagées.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Modalités de demande</h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li><strong>Procédure :</strong> Les demandes d'annulation doivent impérativement être formulées par écrit via le canal officiel de communication de l'application.</li>
                    <li><strong>Absences :</strong> En cas d'absence du pèlerin ou de retard injustifié, aucun remboursement ne sera accordé, la prestation étant considérée comme engagée.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-nefsy-dark mt-8 mb-4">Cas de force majeure</h3>
                  <p className="text-gray-600">En cas d'événement exceptionnel (maladie grave justifiée, décision administrative ou événement imprévisible), chaque situation sera étudiée avec équité et bienveillance par nos services.</p>
                </div>
              )}

              {section === 'mentions' && (
                <div className="prose prose-nefsy max-w-none">
                  <h1 className="text-3xl font-serif text-nefsy-dark mb-8">1. MENTIONS LÉGALES</h1>
                  <p className="text-gray-600 mb-6 font-medium">L'application est éditée par la société SMHRJU.</p>
                  
                  <div className="space-y-4 text-gray-600">
                    <p><strong>Siège social :</strong> 78 Avenue des Champs Élysées, 75008 Paris, France.</p>
                    <p><strong>Numéro d'immatriculation :</strong> 100957091 (RCS Paris).</p>
                    <p><strong>Contact :</strong> contact@nefsy.fr.</p>
                    <p><strong>Propriété intellectuelle :</strong> L'ensemble des contenus (textes, logos, interfaces, vidéos) est la propriété exclusive de SMHRJU. Toute reproduction ou exploitation non autorisée est strictement interdite.</p>
                  </div>
                </div>
              )}

              {section === 'charter' && (
                <div className="prose prose-nefsy max-w-none">
                  <h1 className="text-3xl font-serif text-nefsy-dark mb-8">5. LES CHARTES ÉTHIQUES</h1>
                  
                  {/* CHARTE DU PÈLERIN */}
                  <h2 className="text-2xl font-serif text-nefsy-gold mt-12 mb-6 border-b border-gray-100 pb-2">5.1. Charte du pèlerin</h2>
                  <h3 className="text-xl font-bold text-nefsy-dark mb-4">Préambule</h3>
                  <p className="text-gray-600 mb-6">
                    Cette charte a pour objectif d’établir un cadre clair, éthique et respectueux entre le pèlerin et l’organisateur, afin de garantir le bon déroulement du pèlerinage dans un esprit de sérénité, de responsabilité et de conformité aux principes religieux et organisationnels. Elle s’appuie sur des principes islamiques de responsabilité, d’honnêteté, de bienveillance et de patience.
                  </p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">1. Engagement du pèlerin</h3>
                  <p className="text-gray-600 mb-2">Le pèlerin s’engage à :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Respecter les règles religieuses et les consignes données par le guide religieux.</li>
                    <li>Adopter un comportement respectueux envers les autres pèlerins, le guide, et les autorités locales.</li>
                    <li>Se conformer aux horaires, aux programmes et aux instructions logistiques communiqués.</li>
                    <li>Fournir des informations exactes lors de l’inscription (identité, documents, besoins spécifiques).</li>
                  </ul>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm">« Le croyant est celui dont les gens ont confiance pour leurs biens et leurs personnes. »<br/><span className="text-xs text-gray-500">(Rapporté par at-Tirmidhi, n°2629 – hadith Hassan-Sahih)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">2. Responsabilité personnelle</h3>
                  <p className="text-gray-600 mb-2">Chaque pèlerin demeure responsable de :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Ses effets personnels.</li>
                    <li>Son état de santé et de toute information médicale importante devant être signalée en amont.</li>
                    <li>Le respect des lois et règlements en vigueur dans le pays d’accueil.</li>
                  </ul>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm">« Chaque homme est responsable de ce qu’il a à charge. »<br/><span className="text-xs text-gray-500">(Rapporté par Muslim, Livre de la foi, Hadith 182)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">3. Prestations et services</h3>
                  <p className="text-gray-600 mb-6">Les prestations proposées (accompagnement religieux, visites, Omra Badal, services spécifiques, etc.) sont clairement définies au moment de l’achat. Toute prestation achetée vaut acceptation pleine et entière de la présente charte.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">4. Conditions d’annulation et de remboursement</h3>
                  <p className="text-gray-600 mb-6">Toute prestation achetée peut être annulée jusqu’à 48 heures avant le début de la prestation. Toute annulation effectuée moins de 48 heures avant la prestation ouvre droit à un remboursement déduction faite de 25% de la somme totale, correspondant aux frais de gestion, de réservation et d’organisation. Les demandes d’annulation doivent impérativement être formulées par écrit via le canal officiel de communication.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">5. Cas de force majeure</h3>
                  <p className="text-gray-600 mb-6">En cas de force majeure (maladie grave justifiée, décision administrative, événement exceptionnel), chaque situation sera étudiée avec équité et bienveillance, dans la mesure du possible.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">6. Esprit du pèlerinage</h3>
                  <p className="text-gray-600 mb-6">Le pèlerin est invité à garder à l’esprit que le Hajj et la Omra sont avant tout des actes d’adoration. La patience, la bienveillance, le respect et l’intention sincère font partie intégrante de l’expérience spirituelle.</p>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm">« Celui qui est patient obtient la victoire et la récompense d’Allah. »<br/><span className="text-xs text-gray-500">(Rapporté par al-Bukhari et Muslim)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">7. Acceptation de la charte</h3>
                  <p className="text-gray-600 mb-12">L’inscription et l’achat d’une prestation valent acceptation sans réserve de la présente charte.</p>

                  {/* RÈGLEMENT DES GUIDES RELIGIEUX */}
                  <h2 className="text-2xl font-serif text-nefsy-gold mt-12 mb-2 border-b border-gray-100 pb-2">5.2. Règlement des Guides Religieux</h2>
                  <p className="text-gray-500 italic mb-6 text-sm">Fondé sur le Coran et la Sounna authentique</p>
                  
                  <h3 className="text-xl font-bold text-nefsy-dark mb-4">Préambule</h3>
                  <p className="text-gray-600 mb-6">
                    Le guide religieux exerce une mission noble dans les Lieux Saints de l'Islam. Il est dépositaire d'une amānah (dépôt sacré) envers Allah ﷻ, envers les pèlerins et envers l'application qui lui confie cette responsabilité. Il s'engage à accomplir sa mission dans le strict respect du Coran, de la Sounna authentique du Prophète Muhammad ﷺ, et des principes éthiques définis dans le présent règlement.
                  </p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 1 – Intention et sincérité (Ikhlāṣ)</h3>
                  <p className="text-gray-600 mb-6">Le guide s'engage à renouveler son intention exclusivement pour Allah ﷻ, dans le but de servir les pèlerins, de les accompagner dans leurs rites et de transmettre un enseignement authentique, sans recherche de prestige, de notoriété ou de gain personnel illicite.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 2 – Conformité au Coran et à la Sounna</h3>
                  <p className="text-gray-600 mb-2">Le guide s'engage à :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Enseigner et appliquer uniquement ce qui est établi par le Coran et la Sounna authentique</li>
                    <li>Éviter toute innovation religieuse (bid'a) ou pratique infondée</li>
                    <li>Adopter un comportement conforme à la voie prophétique : pudeur, patience, douceur, justice, humilité et respect</li>
                  </ul>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 3 – Amānah et interdiction de détournement de clientèle</h3>
                  <p className="text-gray-600 mb-2">Il est strictement interdit au guide de :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Exploiter, récupérer ou détourner à des fins personnelles la clientèle générée par l'application</li>
                    <li>Contacter les pèlerins en dehors du cadre officiel pour proposer des services privés, parallèles ou concurrents</li>
                    <li>Utiliser sa fonction religieuse ou sa position spirituelle pour obtenir un avantage personnel</li>
                  </ul>
                  <p className="text-gray-600 font-bold mb-4">Tout manquement à cet article constitue une trahison manifeste de l'amānah.</p>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8 space-y-4">
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« أَدِّ الْأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ »</p>
                    <p className="italic text-gray-700 text-sm">« Rends le dépôt à celui qui te l’a confié. »<br/><span className="text-xs text-gray-500">(Abū Dāwūd, at-Tirmidhī – authentique)</span></p>
                    <div className="border-t border-gray-200 pt-4"></div>
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« لَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ »</p>
                    <p className="italic text-gray-700 text-sm">« N’a pas de foi celui qui n’a pas de loyauté. »<br/><span className="text-xs text-gray-500">(Ahmad – authentifié)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 4 – Responsabilité religieuse et morale</h3>
                  <p className="text-gray-600 mb-2">Le guide est conscient que tout manquement à ce règlement engage :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Sa responsabilité professionnelle</li>
                    <li>Et surtout sa responsabilité devant Allah ﷻ</li>
                  </ul>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« وَإِذَا اؤْتُمِنَ خَانَ »</p>
                    <p className="italic text-gray-700 text-sm">« Lorsqu’on lui confie un dépôt, il trahit. »<br/><span className="text-xs text-gray-500">(Al-Bukhārī et Muslim)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 5 – Engagement formel</h3>
                  <p className="text-gray-600 mb-12">En acceptant sa mission, le guide reconnaît avoir pris connaissance du présent règlement et s'engage à le respecter intégralement, en demandant l'aide d'Allah ﷻ pour honorer cette responsabilité avec droiture et sincérité.</p>

                  {/* CODE DE CONDUITE */}
                  <h2 className="text-2xl font-serif text-nefsy-gold mt-12 mb-2 border-b border-gray-100 pb-2">5.3. Code de Conduite et Règles Opérationnelles</h2>
                  <p className="text-gray-500 italic mb-6 text-sm">Applicable à toutes les prestations de guidage</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 1 – Respect du cadre professionnel</h3>
                  <p className="text-gray-600 mb-2">Le guide s’engage à respecter :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Les règles, procédures et directives de l'application</li>
                    <li>Les engagements pris envers les pèlerins</li>
                    <li>Le cadre organisationnel et professionnel mis en place</li>
                  </ul>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« المسلمون على شروطهم »</p>
                    <p className="italic text-gray-700 text-sm">« Les musulmans sont tenus de respecter leurs engagements. »<br/><span className="text-xs text-gray-500">(Abū Dāwūd – authentique)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 2 – Port obligatoire du gilet officiel</h3>
                  <p className="text-gray-600 mb-2">Le guide s’engage à porter systématiquement le gilet officiel de la marque de l'application :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                    <li>Lors de toutes les visites guidées à Makkah et à Médine</li>
                    <li>Lors des déplacements officiels avec les pèlerins</li>
                    <li>Lors de toute prestation effectuée au nom de l'application</li>
                  </ul>
                  <p className="text-gray-600 mb-6">Ce port est obligatoire pour des raisons d’identification, de sécurité et de professionnalisme.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 3 – Interdiction de délégation et de prêt de compte</h3>
                  <p className="text-gray-600 mb-2">Le guide s’engage à :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                    <li>Utiliser exclusivement son propre compte personnel sur l'application</li>
                    <li>Ne jamais prêter, partager ou céder son compte à un tiers</li>
                    <li>Ne jamais envoyer une autre personne à sa place, quelle qu'en soit la raison</li>
                  </ul>
                  <p className="text-gray-600 font-bold mb-4">Toute substitution ou prêt de compte constitue une violation grave de l’amānah et un manquement professionnel majeur.</p>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْؤولٌ عَنْ رَعِيَّتِهِ »</p>
                    <p className="italic text-gray-700 text-sm">« Chacun de vous est un responsable, et chacun sera interrogé au sujet de ceux dont il a la charge. »<br/><span className="text-xs text-gray-500">(Al-Bukhārī et Muslim)</span></p>
                  </div>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 4 – Protection et respect des pèlerins</h3>
                  <p className="text-gray-600 mb-6">Le guide agit exclusivement dans l’intérêt des pèlerins, sans pression financière, sans exploitation émotionnelle ou religieuse, sans abus d’autorité, et dans le respect total de leur dignité, de leur intimité et de leur sécurité.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 5 – Ponctualité</h3>
                  <p className="text-gray-600 mb-6">Le guide est tenu à une ponctualité stricte pour toutes les prestations. Tout retard injustifié constitue un manquement à l’amānah confiée.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 6 – Prise en charge des pèlerins</h3>
                  <p className="text-gray-600 mb-2">Pour toute prestation :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Le guide se rend à l’hôtel du pèlerin lorsque celui-ci est situé dans un périmètre de 500 mètres autour du Masjid Al-Haram</li>
                    <li>Au-delà de ce périmètre, le point de rendez-vous est défini conjointement entre le guide et le pèlerin, dans un lieu accessible et sécurisé</li>
                    <li>Le guide assure la prise en charge complète du pèlerin jusqu'à la fin de la prestation</li>
                  </ul>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 7 – Prise en charge des PMR (Personnes à Mobilité Réduite)</h3>
                  <p className="text-gray-600 mb-2">Pour toute prestation PMR, le guide s’engage à :</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Se rendre directement à la chambre du pèlerin</li>
                    <li>Assurer la prise en charge avec fauteuil roulant dès la chambre</li>
                    <li>Accompagner le pèlerin durant toute la prestation</li>
                    <li>Redéposer le pèlerin dans sa chambre en fin de service</li>
                  </ul>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 8 – Comportement général</h3>
                  <p className="text-gray-600 mb-6">Le guide doit faire preuve en toute circonstance de respect, patience, bienveillance, discrétion et sens du service.<br/>Il représente l'application, la mission religieuse et l'image de l'Islam dans les Lieux Saints.</p>

                  <h3 className="text-lg font-bold text-nefsy-dark mb-3">Article 9 – Engagement à honorer</h3>
                  <p className="text-gray-600 mb-4">Dans le cadre d'une Omra Badal, le guide a l'obligation de réaliser une courte vidéo au moment de l'entrée en état de sacralisation (ihram), ainsi qu'une seconde vidéo après l'accomplissement complet de la Omra. Ces vidéos doivent être transmises au demandeur afin d'attester de la bonne exécution de la mission.</p>
                  <p className="text-gray-600 mb-4">Toute mission acceptée doit être pleinement honorée.<br/>Toute tâche, mission ou prestation acceptée par le guide via l'application doit être pleinement honorée, sauf cas de force majeure dûment justifié.<br/>L'acceptation d'une mission constitue un engagement moral, religieux et professionnel.</p>
                  <div className="bg-nefsy-light/50 p-4 rounded-xl border-l-4 border-nefsy-gold mb-8">
                    <p className="italic text-gray-700 text-sm text-right" dir="rtl">« يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ »</p>
                    <p className="italic text-gray-700 text-sm">« Ô vous qui avez cru, respectez vos engagements. »<br/><span className="text-xs text-gray-500">(Coran, Al-Mā'idah, 5:1)</span></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRouteState = (pathname: string): { page: 'home' | 'legal' | 'contact', section?: string } => {
  const path = decodeURIComponent(pathname).toLowerCase();
  
  if (path === '/contact') return { page: 'contact' };
  if (path === '/cgvu') return { page: 'legal', section: 'cgvu' };
  if (path === '/politiquedeconfidentialite' || path === '/politiquedeconfidentialité') return { page: 'legal', section: 'privacy' };
  if (path === '/politiquedannulation' || path === '/politiqued\'annulation') return { page: 'legal', section: 'cancellation' };
  if (path === '/mentionslegales' || path === '/mentions-legales') return { page: 'legal', section: 'mentions' };
  if (path === '/chartesethiques' || path === '/chartes-ethiques') return { page: 'legal', section: 'charter' };
  
  return { page: 'home' };
};

const getPathFromState = (page: string, section?: string) => {
  if (page === 'contact') return '/contact';
  if (page === 'legal') {
    if (section === 'cgvu') return '/CGVU';
    if (section === 'privacy') return '/politiquedeconfidentialite';
    if (section === 'cancellation') return '/politiquedannulation';
    if (section === 'mentions') return '/mentionslegales';
    if (section === 'charter') return '/chartesethiques';
  }
  return '/';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal' | 'contact'>('home');
  const [legalSection, setLegalSection] = useState<string>('cgvu');

  useEffect(() => {
    const handlePopState = () => {
      const state = getRouteState(window.location.pathname);
      setCurrentPage(state.page);
      if (state.page === 'legal' && state.section) {
        setLegalSection(state.section);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (page: 'home' | 'legal' | 'contact', section?: string) => {
    setCurrentPage(page);
    if (page === 'legal' && section) {
      setLegalSection(section);
    }
    const path = getPathFromState(page, section);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-nefsy-gold selection:text-white">
      <Navbar onNavigate={handleNavigation} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <HowItWorks />
            <Services />
            <Trust onNavigate={handleNavigation} />
            <FAQ />
          </>
        )}
        {currentPage === 'legal' && (
          <LegalPage section={legalSection} onNavigate={handleNavigation} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
