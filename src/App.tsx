/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Settings, 
  Construction, 
  Zap, 
  Wind, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  X,
  ChevronRight,
  HardHat,
  Sun,
  ShieldCheck,
  Download,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'parts',
    title: 'Pièces de Rechange',
    description: 'Vente de pièces de rechange pour tout type de véhicules de toutes marques (Pneus, Pompes, Moteurs, Suspensions, etc.).',
    icon: Settings,
    image: '/service-parts.png',
    details: ['Pneus et jantes', 'Pompes à eau et liquide de refroidissement', 'Moteurs et alternateurs', 'Batteries et kits de distribution', 'Filtres et démarreurs']
  },
  {
    id: 'machinery',
    title: 'Engins de Chantier',
    description: 'Fourniture d\'engins lourds pour la construction, rénovation, aménagement et démolition.',
    icon: Construction,
    image: 'https://picsum.photos/seed/excavator/600/400',
    details: ['Tracteurs et Mini-pelles', 'Pelles sur chenilles et sur pneus', 'Bouteurs et Tracteurs sur chenilles', 'Niveleuses et Compacteurs', 'Élévateurs de chantier']
  },
  {
    id: 'trucks',
    title: 'Camions & Trucks',
    description: 'Une large gamme de camions de transport robustes adaptés à vos besoins logistiques.',
    icon: Truck,
    image: 'https://picsum.photos/seed/heavy-truck/600/400',
    details: ['Camions bennes', 'Tracteurs routiers', 'Camions de transport de marchandises', 'Véhicules utilitaires légers']
  },
  {
    id: 'civil',
    title: 'Génie Civil & Construction',
    description: 'Conception, planification et fourniture de matériaux pour vos projets de construction.',
    icon: HardHat,
    image: 'https://picsum.photos/seed/civil-eng/600/400',
    details: ['Conception et Planification', 'Fourniture de matériaux de construction', 'Équipements de chantier', 'Génie civil complet']
  },
  {
    id: 'electrical',
    title: 'Matériels Électriques & Solaire',
    description: 'Installation, dépannage et fourniture de matériels électriques et solutions solaires.',
    icon: Zap,
    image: 'https://picsum.photos/seed/solar-panels/600/400',
    details: ['Moteurs et Batteries', 'Disjoncteurs et Fusibles', 'Éclairages industriels et publics', 'Panneaux solaires et onduleurs', 'Automatisation et domotique']
  },
  {
    id: 'hvac',
    title: 'Climatisation & Froid',
    description: 'Vente, installation et maintenance de climatiseurs et chambres froides.',
    icon: Wind,
    image: 'https://picsum.photos/seed/ac-unit/600/400',
    details: ['Installation de climatiseurs', 'Maintenance préventive et curative', 'Chambres froides industrielles', 'Maintenance du gaz']
  }
];

const CONTACT_EMAIL = 'contact@nes-sarlu.cd';

const PROJECTS = [
  { id: 1, title: 'Maintenance Minière', category: 'machinery', image: 'https://picsum.photos/seed/mine1/600/450', description: 'Révision complète d\'une flotte d\'engins de terrassement.' },
  { id: 2, title: 'Installation Solaire', category: 'electrical', image: 'https://picsum.photos/seed/solar1/600/450', description: 'Centrale photovoltaïque pour un site industriel à Lubumbashi.' },
  { id: 3, title: 'Construction Entrepôt', category: 'civil', image: 'https://picsum.photos/seed/warehouse1/600/450', description: 'Structure métallique et génie civil pour stockage logistique.' },
  { id: 4, title: 'Fourniture de Camions', category: 'trucks', image: 'https://picsum.photos/seed/truck1/600/450', description: 'Livraison de 10 camions bennes pour un projet d\'infrastructure.' },
  { id: 5, title: 'Climatisation Industrielle', category: 'hvac', image: 'https://picsum.photos/seed/hvac1/600/450', description: 'Installation de systèmes VRF pour un complexe de bureaux.' },
  { id: 6, title: 'Réseau Électrique', category: 'electrical', image: 'https://picsum.photos/seed/grid1/600/450', description: 'Mise en conformité et extension du réseau basse tension.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('parts');
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'Demande de cotation', message: '' });

  useEffect(() => {
    console.log("CONNECTED");
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[NES] ${contactForm.subject} - ${contactForm.name}`);
    const body = encodeURIComponent(
      `Nom: ${contactForm.name}\nEmail: ${contactForm.email}\nObjet: ${contactForm.subject}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#F9F9F9] font-sans text-slate-900">
      {/* Bandeau téléphonique */}
      <div className="bg-[#E31B23] text-white text-[10px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-1 flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
          <span className="font-semibold tracking-wide">Contact direct :</span>
          <a href="tel:+243997662228" className="font-bold hover:underline">
            +243 997 662 228
          </a>
          <span>/</span>
          <a href="tel:+243978005859" className="font-bold hover:underline">
            +243 978 005 859
          </a>
        </div>
      </div>

      {/* Navigation inspirée des sites média (Jeune Afrique) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
          {/* Ligne 1 : menu / logo centré / actions */}
          <div className="flex items-center justify-between h-14 min-[400px]:h-16 gap-4">
          {/* Logo à gauche servant de déclencheur du menu sur mobile */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 sm:p-2 shadow-sm hover:bg-slate-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            >
              <img
                src="/logo.png"
                alt="NES Neema Engineering Supply"
                className="h-6 w-auto object-contain"
              />
            </button>
          </div>

            {/* Titre centré (style Jeune Afrique) */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 flex items-center justify-center"
              aria-label="NES Neema Engineering Supply - Accueil"
            >
              <p className="text-[10px] sm:text-[11px] md:text-xs font-extrabold tracking-[0.18em] uppercase text-center">
                <span className="text-[#1A1A1A]">NEEMA ENGENEERING</span>{' '}
                <span className="text-[#E31B23]">SUPPLY SARLU</span>
              </p>
            </a>

            {/* Action droite : bouton S'abonner uniquement */}
            <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#E31B23] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                S&apos;abonner
              </a>
            </div>

            {/* Icônes rapides sur mobile (recherche + contact) */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                aria-label="Rechercher"
              >
                <Search size={18} />
              </button>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-full bg-[#E31B23] text-[11px] font-bold text-white shadow-sm hover:bg-red-700"
              >
                S&apos;abonner
              </a>
            </div>
          </div>

          {/* Ligne 2 : barre de recherche + navigation rubriques (desktop) */}
          <div className="hidden md:flex items-center gap-6 pb-3">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="search"
                placeholder="Rechercher un service, un projet, une solution..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E31B23]/20 focus:border-[#E31B23] transition"
              />
            </div>

            {/* Rubriques principales */}
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
              {[
                { name: 'Accueil', href: '#home' },
                { name: 'À Propos', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Catalogue', href: '#catalogue' },
                { name: 'Réalisations', href: '#realisations' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 py-1 rounded-full hover:text-[#E31B23] hover:bg-red-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav plein écran inspiré "menu" */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden fixed inset-x-0 top-14 bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-40"
            >
              <div className="px-4 py-8 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E31B23]/20 focus:border-[#E31B23] transition"
                  />
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Accueil', href: '#home' },
                    { name: 'À Propos', href: '#about' },
                    { name: 'Services', href: '#services' },
                    { name: 'Catalogue', href: '#catalogue' },
                    { name: 'Réalisations', href: '#realisations' },
                  ].map((link) => (
                    <a 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="block text-base font-bold text-slate-900 hover:text-[#E31B23] transition-colors py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-14 min-[400px]:pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/construction/1280/720?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-w-0"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 min-[400px]:px-3 min-[400px]:gap-2 rounded-full bg-red-50 text-red-700 text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest mb-4 min-[400px]:mb-6 border border-red-100">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shrink-0"></span>
                <span className="truncate">Expertise & Fiabilité en RDC</span>
              </div>
              <h2 className="text-3xl min-[360px]:text-4xl min-[400px]:text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-5 min-[400px]:mb-8 tracking-tight leading-[1.05]">
                Bâtissons <br />
                <span className="text-red-700">l'Excellence</span> <br />
                Industrielle.
              </h2>
              <p className="text-sm min-[400px]:text-base sm:text-lg text-slate-600 max-w-lg mb-6 min-[400px]:mb-10 leading-relaxed">
                NEEMA ENGENEERING SUPPLY SARLU (NES Sarlu) redéfinit la fourniture industrielle avec des solutions de haute précision pour les secteurs miniers et civils.
              </p>
              <div className="flex flex-wrap items-center gap-3 min-[400px]:gap-4">
                <a href="#services" className="px-5 py-3 min-[400px]:px-8 min-[400px]:py-4 bg-slate-900 text-white rounded-xl min-[400px]:rounded-2xl text-sm min-[400px]:text-base font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-700/20 active:scale-95">
                  Nos Services
                </a>
                <a href="#contact" className="px-5 py-3 min-[400px]:px-8 min-[400px]:py-4 bg-white text-slate-900 border border-slate-200 rounded-xl min-[400px]:rounded-2xl text-sm min-[400px]:text-base font-bold hover:bg-slate-50 transition-all shadow-md active:scale-95">
                  Nous Contacter
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/hero-nes.png" alt="Ingénieur NES sur chantier" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-700/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl min-[480px]:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/about-nes.png" 
                  alt="Ingénieur NES sur chantier" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 min-[480px]:-bottom-12 min-[480px]:-right-12 bg-slate-900 p-6 min-[480px]:p-10 rounded-2xl min-[480px]:rounded-[2.5rem] text-white shadow-2xl z-20 hidden lg:block border-4 min-[480px]:border-8 border-white">
                <p className="text-5xl font-black mb-1 text-red-600">100%</p>
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em]">Engagement Qualité</p>
              </div>
              {/* Decorative grid */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:20px_20px] -z-10"></div>
            </div>
            
            <div className="relative order-1 lg:order-2 min-w-0">
              <h3 className="text-xs min-[400px]:text-sm font-bold text-red-700 uppercase tracking-[0.2em] mb-3 min-[400px]:mb-4">Qui sommes-nous</h3>
              <h4 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 min-[400px]:mb-8 leading-tight">L'Excellence au Service <br className="hidden min-[400px]:block" /> de votre Industrie</h4>
              
              <div className="space-y-4 min-[400px]:space-y-6 text-slate-600 text-sm min-[400px]:text-base leading-relaxed mb-8 min-[400px]:mb-12">
                <p>
                  NEEMA ENGENEERING SUPPLY SARLU (NES Sarlu) s'est imposé comme un acteur incontournable de la fourniture industrielle en République Démocratique du Congo.
                </p>
                <p>
                  Notre force réside dans notre capacité à allier réactivité logistique et expertise technique pointue, garantissant à nos partenaires une continuité opérationnelle sans faille.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 min-[400px]:gap-6 sm:gap-8">
                {[
                  { title: 'Fiabilité', desc: 'Produits certifiés ISO et durables.', icon: ShieldCheck },
                  { title: 'Expertise', desc: 'Techniciens hautement qualifiés.', icon: CheckCircle2 }
                ].map((item, idx) => (
                  <div key={idx} className="group p-4 min-[400px]:p-6 rounded-xl min-[400px]:rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 min-[400px]:w-12 min-[400px]:h-12 bg-white rounded-lg min-[400px]:rounded-xl flex items-center justify-center text-red-700 shadow-sm mb-3 min-[400px]:mb-4 group-hover:bg-red-700 group-hover:text-white transition-all">
                      <item.icon size={20} className="min-[400px]:w-6 min-[400px]:h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-1.5 min-[400px]:mb-2 text-sm min-[400px]:text-base">{item.title}</h5>
                    <p className="text-[11px] min-[400px]:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8 mb-10 sm:mb-16 lg:mb-20">
            <div className="max-w-2xl min-w-0">
              <h3 className="text-xs min-[400px]:text-sm font-bold text-red-700 uppercase tracking-[0.2em] mb-3 min-[400px]:mb-4">Notre Expertise</h3>
              <h4 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Solutions Industrielles <br className="hidden min-[400px]:block" /> sur Mesure</h4>
            </div>
            <p className="text-slate-500 max-w-sm text-xs min-[400px]:text-sm leading-relaxed">
              Nous combinons savoir-faire technique et logistique de pointe pour répondre aux exigences les plus strictes de vos chantiers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl min-[480px]:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col min-w-0"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-3 left-3 min-[400px]:top-6 min-[400px]:left-6 w-10 h-10 min-[400px]:w-12 min-[400px]:h-12 bg-white/90 backdrop-blur-md rounded-xl min-[400px]:rounded-2xl flex items-center justify-center text-red-700 shadow-lg group-hover:bg-red-700 group-hover:text-white transition-all duration-500">
                    <service.icon size={20} className="min-[400px]:w-6 min-[400px]:h-6" />
                  </div>
                </div>
                <div className="p-5 min-[400px]:p-6 sm:p-10 flex-grow min-w-0">
                  <h4 className="text-lg min-[400px]:text-xl sm:text-2xl font-bold text-slate-900 mb-2 min-[400px]:mb-4 group-hover:text-red-700 transition-colors">{service.title}</h4>
                  <p className="text-slate-500 text-xs min-[400px]:text-sm mb-4 sm:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="space-y-2 min-[400px]:space-y-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 min-[400px]:gap-3 text-[11px] min-[400px]:text-xs font-semibold text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-700/30 group-hover:bg-red-700 transition-colors shrink-0"></div>
                        <span className="break-words">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-red-700/5 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xs min-[400px]:text-sm font-bold text-red-700 uppercase tracking-[0.2em] mb-3 min-[400px]:mb-4">Documentation</h3>
            <h4 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 min-[400px]:mb-6">Catalogue NES</h4>
            <p className="text-slate-600 text-sm min-[400px]:text-base mb-8 min-[400px]:mb-12 leading-relaxed px-1">
              Consultez notre catalogue complet : pièces de rechange, engins, camions, matériels électriques et solaire, climatisation et génie civil. Téléchargez le PDF pour une consultation hors ligne.
            </p>
            <a
              href="/catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-[400px]:gap-3 px-5 py-3 min-[400px]:px-10 min-[400px]:py-5 bg-slate-900 text-white rounded-xl min-[400px]:rounded-2xl text-sm min-[400px]:text-base font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-700/20 active:scale-[0.98]"
            >
              <Download size={20} className="min-[400px]:w-6 min-[400px]:h-6 shrink-0" />
              <span className="whitespace-nowrap">Télécharger le catalogue (PDF)</span>
            </a>
          </div>
          {/* Aperçu intégré du catalogue PDF */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="aspect-[3/4] w-full rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <iframe
                src="/catalogue.pdf#view=fitH"
                title="Catalogue NES (PDF)"
                className="w-full h-full"
              />
            </div>
            <p className="mt-3 text-[11px] min-[400px]:text-xs text-slate-500 text-center">
              Si le document ne s&apos;affiche pas correctement dans votre navigateur, utilisez le bouton ci-dessus pour télécharger le catalogue en PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Realisations Section */}
      <section id="realisations" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-xs min-[400px]:text-sm font-bold text-red-700 uppercase tracking-[0.2em] mb-3 min-[400px]:mb-4">Portfolio</h3>
            <h4 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 min-[400px]:mb-8">Nos Réalisations</h4>
            
            {/* Gallery Filters */}
            <div className="flex flex-wrap justify-center gap-1.5 min-[400px]:gap-2 p-1.5 bg-slate-100 rounded-xl min-[400px]:rounded-2xl w-full max-w-full overflow-hidden">
              {['all', 'machinery', 'electrical', 'civil', 'trucks', 'hvac'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-2 min-[400px]:px-6 min-[400px]:py-2.5 rounded-lg min-[400px]:rounded-xl text-[10px] min-[400px]:text-xs font-bold transition-all shrink-0 ${
                    filter === cat 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat === 'all' ? 'Tout' : SERVICES.find(s => s.id === cat)?.title.split(' ')[0] || cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl min-[480px]:rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 min-w-0"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/5]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 min-[400px]:p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-red-500 text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest mb-1 min-[400px]:mb-2">
                      {SERVICES.find(s => s.id === project.category)?.title}
                    </span>
                    <h4 className="text-white font-bold text-base min-[400px]:text-lg sm:text-2xl mb-1 min-[400px]:mb-2">{project.title}</h4>
                    <p className="text-white/60 text-[10px] min-[400px]:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-2 min-[400px]:p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl min-[400px]:rounded-2xl overflow-hidden shadow-2xl my-auto"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  type="button"
                  className="absolute top-3 right-3 min-[400px]:top-6 min-[400px]:right-6 z-10 p-1.5 min-[400px]:p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fermer"
                >
                  <X size={20} className="min-[400px]:w-6 min-[400px]:h-6" />
                </button>
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 min-[400px]:p-6 sm:p-8 md:p-12 flex flex-col justify-center min-w-0">
                    <span className="text-red-700 text-[10px] min-[400px]:text-xs font-bold uppercase tracking-widest mb-1 min-[400px]:mb-2">
                      {SERVICES.find(s => s.id === selectedProject.category)?.title}
                    </span>
                    <h4 className="text-xl min-[400px]:text-2xl sm:text-3xl font-bold text-slate-900 mb-3 min-[400px]:mb-4">{selectedProject.title}</h4>
                    <p className="text-slate-600 text-sm min-[400px]:text-base leading-relaxed mb-5 min-[400px]:mb-8">{selectedProject.description}</p>
                    <button 
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 min-[400px]:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all text-sm min-[400px]:text-base"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="bg-slate-900 rounded-2xl min-[480px]:rounded-3xl lg:rounded-[3.5rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-[100px] -z-0"></div>
            
            <div className="grid lg:grid-cols-2 relative z-10">
              <div className="p-6 min-[400px]:p-8 sm:p-12 lg:p-24 bg-gradient-to-br from-red-700 to-red-900 text-white">
                <h3 className="text-[10px] min-[400px]:text-sm font-bold text-red-200 uppercase tracking-[0.2em] mb-4 min-[400px]:mb-6">Contact</h3>
                <h4 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 min-[400px]:mb-8 tracking-tight">Parlons de votre Projet</h4>
                <p className="text-red-100 mb-8 min-[400px]:mb-12 lg:mb-16 text-sm min-[400px]:text-base sm:text-lg leading-relaxed opacity-80">
                  Nos experts sont disponibles pour analyser vos besoins et vous proposer des solutions techniques optimales.
                </p>
                
                <div className="space-y-6 min-[400px]:space-y-10">
                  <div className="flex items-start gap-4 min-[400px]:gap-8 group">
                    <div className="w-11 h-11 min-[400px]:w-14 min-[400px]:h-14 bg-white/10 rounded-xl min-[400px]:rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-red-700 transition-all duration-300 shrink-0">
                      <Phone size={22} className="min-[400px]:w-7 min-[400px]:h-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 min-[400px]:mb-2">Lignes Directes</p>
                      <div className="space-y-0.5 min-[400px]:space-y-1">
                        <p className="text-base min-[400px]:text-lg sm:text-xl font-bold break-all">+243 810 871 543</p>
                        <p className="text-base min-[400px]:text-lg sm:text-xl font-bold break-all">+243 997 662 228</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 min-[400px]:gap-8 group">
                    <div className="w-11 h-11 min-[400px]:w-14 min-[400px]:h-14 bg-white/10 rounded-xl min-[400px]:rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-red-700 transition-all duration-300 shrink-0">
                      <MapPin size={22} className="min-[400px]:w-7 min-[400px]:h-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 min-[400px]:mb-2">Siège Social</p>
                      <p className="text-sm min-[400px]:text-base sm:text-lg font-bold">N°13 Avenue Chemin Public</p>
                      <p className="text-xs min-[400px]:text-sm opacity-80">Lubumbashi, Haut-Katanga, RDC</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 min-[400px]:p-8 sm:p-12 lg:p-24 bg-white">
                <form className="space-y-5 min-[400px]:space-y-6 sm:space-y-8" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-[400px]:gap-6 sm:gap-8">
                    <div className="space-y-2 min-[400px]:space-y-3">
                      <label className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest text-slate-400">Nom Complet</label>
                      <input type="text" required value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} className="w-full min-w-0 px-4 py-3 min-[400px]:px-6 min-[400px]:py-4 rounded-xl min-[400px]:rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-700/5 focus:border-red-700 transition-all text-base" placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2 min-[400px]:space-y-3">
                      <label className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Professionnel</label>
                      <input type="email" required value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} className="w-full min-w-0 px-4 py-3 min-[400px]:px-6 min-[400px]:py-4 rounded-xl min-[400px]:rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-700/5 focus:border-red-700 transition-all text-base" placeholder="jean@entreprise.com" />
                    </div>
                  </div>
                  <div className="space-y-2 min-[400px]:space-y-3">
                    <label className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest text-slate-400">Objet de la demande</label>
                    <select value={contactForm.subject} onChange={e => setContactForm(f => ({ ...f, subject: e.target.value }))} className="w-full min-w-0 px-4 py-3 min-[400px]:px-6 min-[400px]:py-4 rounded-xl min-[400px]:rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-700/5 focus:border-red-700 transition-all appearance-none cursor-pointer text-base">
                      <option>Demande de cotation</option>
                      <option>Partenariat technique</option>
                      <option>Support & Maintenance</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2 min-[400px]:space-y-3">
                    <label className="text-[9px] min-[400px]:text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <textarea rows={4} required value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} className="w-full min-w-0 px-4 py-3 min-[400px]:px-6 min-[400px]:py-4 rounded-xl min-[400px]:rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-700/5 focus:border-red-700 transition-all resize-y text-base" placeholder="Décrivez votre besoin en quelques mots..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 min-[400px]:py-5 bg-slate-900 text-white rounded-xl min-[400px]:rounded-2xl text-sm min-[400px]:text-base font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-700/20 active:scale-[0.98]">
                    Envoyer la demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 min-[400px]:bottom-6 min-[400px]:right-6 sm:bottom-8 sm:right-8 z-40 w-10 h-10 min-[400px]:w-12 min-[400px]:h-12 bg-white text-slate-900 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all active:scale-90 touch-manipulation"
        aria-label="Retour en haut"
      >
        <ChevronRight size={20} className="min-[400px]:w-6 min-[400px]:h-6 -rotate-90" />
      </motion.button>

      {/* Footer */}
      <footer id="footer" className="py-8 sm:py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 w-full min-w-0">
          {/* Ligne principale : logo, nom, copyright, liens */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 min-w-0">
              <img src="/logo.png" alt="NES Neema Engineering Supply" className="h-8 min-[400px]:h-10 w-auto object-contain shrink-0" />
              <div className="min-w-0">
                <p className="text-xs min-[400px]:text-sm font-bold text-slate-900 break-words">NEEMA ENGENEERING SUPPLY</p>
                <p className="text-[9px] min-[400px]:text-[10px] font-bold text-red-700 uppercase tracking-widest">© 2025 - Tous droits réservés</p>
              </div>
            </div>
            <div className="flex gap-6 min-[400px]:gap-8">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-400 hover:text-red-700 transition-colors p-1" title="Nous écrire"><Mail size={18} className="min-[400px]:w-5 min-[400px]:h-5" /></a>
              <a href="#contact" className="text-slate-400 hover:text-red-700 transition-colors p-1" title="Contact & Adresse"><MapPin size={18} className="min-[400px]:w-5 min-[400px]:h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

