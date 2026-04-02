import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, TrendingUp, CheckCircle2, X, Mail, MessageCircle, Award } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

import shopifyVideo1 from '../assets/videos/shopify 1.mp4';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';

const BRANDS = [
  { name: "Muqeeriyam", desc: "Marketing agency, worked as a social media manager.", logo: "/images/logos/logo 1.webp" },
  { name: "Dynarca", desc: "E-commerce clothing brand, worked as a Meta Ads expert.", logo: "/images/logos/logo 2.webp" },
  { name: "LURE", desc: "E-commerce custom dresses brand, worked as a Meta Ads expert and Shopify store designer.", logo: "/images/logos/logo 3.webp" },
  { name: "Muqeeriyam", desc: "E-commerce watches brand, worked as a Meta Ads expert.", logo: "/images/logos/logo 4.webp" }
];

const TOOLS = [
  { name: "Canva", logo: "/images/logos/canva.webp" },
  { name: "Inflact", logo: "/images/logos/inflact.webp" },
  { name: "Gemini", logo: "/images/logos/gemini 2.webp" },
  { name: "Buffer", logo: "/images/logos/Buffer.webp" },
  { name: "Claude", logo: "/images/logos/claude.webp" },
  { name: "AnswerThePublic", logo: "/images/logos/answerthepublic.webp" },
  { name: "Sora AI", logo: "/images/logos/sora.webp" },
  { name: "Elevenlabs", logo: "/images/logos/elevenlabs.webp" },
  { name: "Meta Business Suite", logo: "/images/logos/meta 2.webp" },
  { name: "Manychat", logo: "/images/logos/manychat 2.webp" },
  { name: "Grammarly", logo: "/images/logos/grammerly 2.webp" },
  { name: "Edits app", logo: "/images/logos/editsapp 2.webp" },
];

const SERVICES = [
  { title: "META ADS", desc: "I plan, build, and scale Facebook and Instagram ad campaigns that generate real results - leads, sales, and brand awareness.", icon: "🎯" },
  { title: "SOCIAL MEDIA MANAGEMENT", desc: "Consistent content, a clear brand voice, and an audience that actually grows. I manage your Instagram and Facebook presence so you can focus on running your business.", icon: "📱" },
  { title: "SHOPIFY STORE DESIGN", desc: "I design and set up Shopify stores built for e-commerce: clean, branded, and ready to sell.", icon: "🛍️" },
  { title: "TYPOGRAPHY VIDEO EDITING", desc: "Scroll-stopping typography reels, scripted, edited, and ready to post. The same style that grew my own audience to 800+ followers", icon: "🎬" }
];

const TESTIMONIALS = [
  {
    quote: "Aleena's Meta Ads strategy completely transformed our ROAS. We saw a 3x increase in sales within the first month of working together.",
    author: "Sarah J.",
    company: "LURE",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The Shopify store design is clean, professional, and most importantly, it converts. Our bounce rate dropped by 40% after the redesign.",
    author: "Ahmed K.",
    company: "Muqeezayan",
    image: "https://picsum.photos/seed/ahmed/100/100"
  },
  {
    quote: "Working with SocioLeena was a breeze. Her social media management kept our brand consistent and growing while we focused on operations.",
    author: "Team",
    company: "MUDASSIR SOFTWORKS",
    image: "https://picsum.photos/seed/team/100/100"
  }
];

const CERTS = [
  { title: "Digital Marketing Certificate", issuer: "Innovista", year: "2025", image: "/images/brands/image 1.webp" },
  { title: "Facebook Ads Course Certificate", issuer: "Innovista", year: "2025", image: "/images/brands/image 2.webp" },
];

const SERVICE_SECTION_IDS = {
  "META ADS": "meta-ads",
  "SOCIAL MEDIA MANAGEMENT": "social-media-management",
  "SHOPIFY STORE DESIGN": "shopify-store-design",
};

function useVideoAutoplay() {
  const videoRef = React.useRef(null);
  const [playFailed, setPlayFailed] = React.useState(false);

  const handleManualPlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => setPlayFailed(false)).catch(() => setPlayFailed(true));
    }
  };

  return { videoRef, playFailed, handleManualPlay };
}

function MobileOptimizedVideo({ src }) {
  const { videoRef, playFailed, handleManualPlay } = useVideoAutoplay();

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        controls
        preload="metadata"
        className="absolute inset-0 z-10 w-full h-full object-contain"
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', WebkitPlaysinline: true }}
      />
      {playFailed && (
        <button
          onClick={handleManualPlay}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 text-white font-bold w-full h-full min-h-[44px] min-w-[44px]"
        >
          <span className="bg-accent px-4 py-2 rounded-full text-black font-semibold text-sm">Tap to Play</span>
        </button>
      )}
    </>
  );
}

export default function Home() {
  const [showMetaAdsModal, setShowMetaAdsModal] = React.useState(false);
  const [showShopifyModal, setShowShopifyModal] = React.useState(false);
  const [activePortfolioItem, setActivePortfolioItem] = React.useState(null);

  return (
    <div className="flex flex-col bg-black w-full min-w-0 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="home"
        className="relative w-full bg-[#FF2D78] flex flex-col items-center overflow-hidden min-h-[90vh] sm:min-h-screen mt-4 sm:mt-8 md:mt-10 pt-10 sm:pt-16 md:pt-20 rounded-b-[3rem] sm:rounded-b-[5rem] md:rounded-b-[6rem] shadow-2xl mb-6 md:mb-8"
      >
        <div className="w-full relative z-20 px-1 sm:px-8">
          <nav className="flex flex-row flex-nowrap justify-center items-center gap-1 min-[400px]:gap-2 sm:gap-4 w-full pb-2">
            <a href="#story" className="flex-shrink-0 whitespace-nowrap border-[1.5px] border-white text-white rounded-full px-2 min-[400px]:px-3 sm:px-5 py-1 sm:py-1.5 text-[8.5px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest bg-transparent hover:bg-white hover:text-[#FF2D78] transition text-center">ABOUT</a>
            <a href="#work" className="flex-shrink-0 whitespace-nowrap border-[1.5px] border-white text-white rounded-full px-2 min-[400px]:px-3 sm:px-5 py-1 sm:py-1.5 text-[8.5px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest bg-transparent hover:bg-white hover:text-[#FF2D78] transition text-center">WORK</a>
            <a href="#services" className="flex-shrink-0 whitespace-nowrap border-[1.5px] border-white text-white rounded-full px-2 min-[400px]:px-3 sm:px-5 py-1 sm:py-1.5 text-[8.5px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest bg-transparent hover:bg-white hover:text-[#FF2D78] transition text-center">SERVICES</a>
            <a href="#contact" className="flex-shrink-0 whitespace-nowrap border-[1.5px] border-white text-white rounded-full px-2 min-[400px]:px-3 sm:px-5 py-1 sm:py-1.5 text-[8.5px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest bg-transparent hover:bg-white hover:text-[#FF2D78] transition text-center">CONTACT</a>
          </nav>
        </div>

        <div className="relative flex-1 w-full flex items-end justify-center mt-8 sm:mt-12 overflow-hidden">
          <h1 className="absolute top-[15%] sm:top-[28%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] sm:text-[13vw] md:text-[clamp(8rem,14vw,14rem)] font-black uppercase tracking-tight text-white z-0 whitespace-nowrap pointer-events-none">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              SOCIOLEENA
            </motion.div>
          </h1>
          <motion.div
            className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex justify-center"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img
              src="images/brands/main.png"
              alt="Aleena Portrait"
              className="w-full object-cover object-bottom h-[65vh] sm:h-[85vh] translate-y-6 sm:translate-y-10"
              style={{ mixBlendMode: 'normal' }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} className="section-padding bg-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center px-4 sm:px-6 md:px-12">
          <div className="relative aspect-square rounded-3xl overflow-hidden order-2 lg:order-1 lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 w-full">
            <img
              src="images/brands/4th image.webp"
              alt="Aleena working"
              loading="lazy"
              width="1200"
              height="1200"
              className="w-full h-full object-contain grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight text-white text-balance break-words">
              HELPING BRANDS <span className="text-accent italic">WIN</span> WITH META ADS, SOCIAL MEDIA & SHOPIFY!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 md:mb-8 leading-relaxed">
              I'm Aleena, the voice behind SocioLeena: a Meta Ads strategist, social media manager, and Shopify store designer from Pakistan. I help e-commerce brands generate sales, build a scroll-stopping presence, and create stores that actually sell. No fluff, just results.
            </p>
            <div className="flex gap-3 items-center justify-center lg:justify-start flex-nowrap overflow-x-auto py-2">
              <a href="https://www.instagram.com/socioleena/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex-shrink-0 flex items-center justify-center border border-white rounded-full"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="https://www.facebook.com/socioleena" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex-shrink-0 flex items-center justify-center border border-white rounded-full"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="https://www.linkedin.com/in/aleenaaleem/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex-shrink-0 flex items-center justify-center border border-white rounded-full"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
              <a href="https://wa.me/+923412559438" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex-shrink-0 flex items-center justify-center border border-white rounded-full"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex-shrink-0 flex items-center justify-center border border-white rounded-full"><FontAwesomeIcon icon={faTiktok} size="lg" /></a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* My Story Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="story" className="scroll-mt-28 section-padding bg-accent text-white rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white mb-3 text-center sm:text-left">About</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-8 md:mb-12 text-white">MY STORY:</h2>
          <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
            <p>
              I'm Aleena — a self-taught digital marketer from Pakistan who started this journey at 16, with an old phone, zero budget, and no mentor.
            </p>
            <p>
              No course told me how to cold DM strangers and land a client with no portfolio. No one taught me how to build a Shopify store, run Meta campaigns, and manage social media, all at once, for real businesses, with real money on the line. I figured it out anyway.
            </p>
            <p>
              In 1.5 years, I've worked with clothing brands, managed ad budgets, designed stores that convert, and grown my own audience from zero, landing clients directly from Instagram before I even hit 500 followers. I don't just know the theory. I've done the work.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Brands Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="brands" className="scroll-mt-28 section-padding bg-accent text-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white mb-3 text-center">Clients</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-12 md:mb-16 text-center text-white">BRANDS I'VE WORKED WITH:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch max-w-4xl mx-auto px-4 sm:px-6">
          {BRANDS.map(brand => (
            <div key={brand.name} className="flex flex-col justify-center group bg-white md:bg-white/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <div className="bg-white rounded-full flex shrink-0 items-center justify-center overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-lg border border-black/5">
                  <img src={brand.logo} alt={brand.name} loading="lazy" width="300" height="300" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-black text-left leading-tight">{brand.name}</h3>
              </div>
              <p className="text-base md:text-lg text-black/80 text-left">{brand.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio / Work — Meta Ads */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="work" className="scroll-mt-28 section-padding bg-black text-white rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-accent mb-3 text-center">Work</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white text-center mb-10 md:mb-16">
          My Portfolio
        </h2>
        <div id="work-meta-ads" className="scroll-mt-28 max-w-4xl mx-auto w-full px-4 sm:px-6 md:px-12">
          <div className="mb-8 md:mb-12 text-left">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-accent mb-3">
              Meta Ads Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Meta Ads Showcase
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 w-full justify-items-stretch sm:justify-items-start">
            {[
              {
                src: "images/work/work 2.webp",
                alt: "Meta Ads results screenshot 1",
                title: "Meta Ads Results",
                desc: "Generated 247 message conversations, 4.42% CTR, CPC as low as Rs. 5",
              },
              {
                src: "images/work/work1.webp",
                alt: "Meta Ads results screenshot 2",
                title: "Messaging Campaign",
                desc: "CPC and 247 messaging conversations (last 14 days)",
              },
            ].map((item) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
                className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-black/40 flex flex-col h-full w-full max-w-md sm:max-w-none min-h-[44px]"
                onClick={() => setActivePortfolioItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePortfolioItem(item);
                  }
                }}
              >
                <div className="relative bg-black/20">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width="1200"
                    height="700"
                    className="w-full h-48 sm:h-52 md:h-60 object-contain object-center p-4"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-white font-bold text-base md:text-xl leading-snug">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-sm md:text-base mt-2 leading-relaxed min-h-[3rem]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work — Shopify Store Design */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="work-shopify" className="scroll-mt-28 section-padding bg-black text-white rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col gap-6 mb-10 md:mb-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          <div>
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-accent mb-3">Shopify Store Design</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white">Store Design Showcase</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          {[
            {
              media: 'video',
              src: shopifyVideo1,
              alt: "LURE Shopify store walkthrough video",
              title: "Store walkthrough",
              desc: "The brief: build a complete Shopify store from scratch—branded, structured, and ready to sell. What I did: designed the full store including homepage, product pages, collections, and overall brand aesthetic so every section guides visitors toward buying. The result: a clean, professional store that represents the brand and delivers a smooth buying experience.",
            },
            {
              media: 'image',
              src: `/images/work/${encodeURIComponent('Lure website hompage desktop.webp')}`,
              alt: "LURE Shopify homepage desktop design",
              title: "Homepage — desktop",
              desc: "Homepage layout for LURE: strong hero, clear navigation, and collection paths built to convert browsers into buyers.",
            },
            {
              media: 'image',
              src: `/images/work/${encodeURIComponent('footer dektop.webp')}`,
              alt: "LURE Shopify footer desktop",
              title: "Footer & trust — desktop",
              desc: "Footer and supporting sections with policies, trust signals, and structured links to keep the experience polished end-to-end.",
            },
          ].map((item) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className={`group bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/40 min-h-[44px] ${item.media === 'image' ? 'cursor-pointer' : ''}`}
              onClick={item.media === 'image' ? () => setActivePortfolioItem(item) : undefined}
              role={item.media === 'image' ? 'button' : undefined}
              tabIndex={item.media === 'image' ? 0 : undefined}
              onKeyDown={
                item.media === 'image'
                  ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePortfolioItem(item);
                    }
                  }
                  : undefined
              }
            >
              <div className="relative">
                {item.media === 'video' ? (
                  <ShopifyVideoPlayer src={item.src} />
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width="1200"
                      height="700"
                      className="w-full h-48 sm:h-52 md:h-60 object-contain object-center p-3"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </>
                )}
              </div>
              <div className="p-6">
                <p className="text-white font-bold text-lg md:text-xl mb-2">{item.title}</p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl mx-auto text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-snug mb-8">
            Want a store for your
            <br />
            <span className="text-accent">Ecommerce brand?</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent text-black px-8 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-accent min-h-[44px]"
          >
            Message me
          </a>
        </div>
      </motion.section>
      {/* Work — Social Media Marketing (SMM) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="work-smm" className="scroll-mt-28 section-padding bg-white text-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-serif font-bold tracking-tight text-center mb-8 sm:mb-12">
            Feed Design &amp; Visual Strategy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center mb-10 sm:mb-12">
            {[
              { label: "Instagram feed design example 1", src: "/images/services/image 2.webp" },
              { label: "Instagram feed design example 2", src: "/images/services/image 1.webp" },
            ].map((item) => (
              <div
                key={item.label}
                className="w-full max-w-[210px] sm:max-w-[260px] md:max-w-[300px] overflow-hidden bg-black/5 rounded-2xl p-4 sm:p-5 md:p-6">
                <img src={item.src} alt={item.label} loading="lazy" width="800" height="1200" className="w-full h-full object-contain rounded-xl shadow-sm" />
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-black/85 leading-relaxed max-w-4xl mx-auto text-center font-medium">
            My own Instagram is my biggest proof. I transformed my feed from a scattered beginner profile into a clean,
            niche-focused brand page that is intentional, aesthetic, and built to attract the right audience. The result? 800+
            followers, inbound client messages, and 2 clients landed before hitting 500 followers. This is exactly what I
            do for your brand.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-bold tracking-wide text-center px-2">
            <span className="uppercase tracking-wide sm:tracking-widest">FOLLOW ALONG —</span>
            <a
              href="https://www.instagram.com/socioleena/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline underline-offset-4 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              @socioleena
            </a>
          </div>
        </div>
      </motion.section>

      {/* Client Content Section (Alternate Design) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 mb-6 md:mb-8 bg-accent text-white relative overflow-hidden w-full mx-2 sm:mx-4 md:mx-6 rounded-3xl">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-accent bg-[length:200%_200%] pointer-events-none"
        />
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 md:px-12 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-center mb-8 md:mb-12 text-white">
            Content Created For Client — Clothing Brand
          </h2>
          <div className="w-full">
            <div className="flex flex-row items-center justify-between py-3 sm:py-4 px-1 sm:px-8 gap-2 w-full min-w-0 max-w-4xl mx-auto mb-2">
              <p className="text-xs sm:text-base font-black uppercase tracking-wider md:tracking-[0.2em] text-black text-center rounded-full px-4 py-2 sm:py-3 bg-white cursor-pointer leading-tight w-full max-w-[45%] min-h-[44px] flex items-center justify-center">
                First Slide
              </p>
              <p className="text-xs sm:text-base font-black uppercase tracking-wider md:tracking-[0.2em] text-black text-center cursor-pointer rounded-full px-4 py-2 sm:py-3 bg-white leading-tight w-full max-w-[45%] min-h-[44px] flex items-center justify-center">
                Last Slide
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 place-items-center bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/20 max-w-4xl mx-auto w-full min-w-0 hover:shadow-none transition-all duration-300">
              <img
                src="/images/services/carouselmaker_image 2.webp"
                alt="Content created for client clothing brand"
                loading="lazy"
                width="900"
                height="900"
                className="w-full max-w-xl object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/services/carouselmaker_image 3.webp"
                alt="Content created for client clothing brand"
                loading="lazy"
                width="900"
                height="900"
                className="w-full max-w-xl object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/services/carouselmaker_image 1.webp"
                alt="Content created for client clothing brand"
                loading="lazy"
                width="900"
                height="900"
                className="w-full max-w-xl object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/services/carouselmaker_image 4.webp"
                alt="Content created for client clothing brand"
                loading="lazy"
                width="900"
                height="900"
                className="w-full max-w-xl object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-center mt-8 sm:mt-10">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-4 sm:px-8 sm:py-5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-black transition-all min-h-[44px] w-full sm:w-auto max-w-sm flex items-center justify-center cursor-pointer border-2 border-black"
              >
                Chat with me
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Story Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative section-padding py-24 sm:py-32 overflow-hidden bg-black text-white mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 border border-white/10"
      >
        {/* Glow Background Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-4xl h-[500px] bg-accent/20 blur-[140px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Story Strategy
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8">
              Story<span className="text-accent italic">Strategy.</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium text-balance max-w-3xl mx-auto leading-relaxed">
              Here's how I use stories to communicate with an audience in a way that feels human, not promotional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 sm:gap-12 lg:gap-16 w-full mx-auto mt-16">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative group flex flex-col items-center w-full max-w-[320px] mx-auto"
              >
                <div className="absolute top-0 w-full h-[500px] bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border-[6px] border-white/10 group-hover:border-white/20 w-[80vw] sm:w-[260px] md:w-full aspect-[9/16] max-w-[320px] mx-auto bg-black shadow-2xl shrink-0 transition-all duration-500 overflow-hidden hover:scale-[1.03] z-10">
                  <MobileOptimizedVideo src={video1} />
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative group flex flex-col items-center w-full max-w-[320px] mx-auto"
              >
                <div className="absolute top-0 w-full h-[500px] bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border-[6px] border-white/10 group-hover:border-white/20 w-[80vw] sm:w-[260px] md:w-full aspect-[9/16] max-w-[320px] mx-auto bg-black shadow-2xl shrink-0 transition-all duration-500 overflow-hidden hover:scale-[1.03] z-10">
                  <MobileOptimizedVideo src={video2} />
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative group flex flex-col items-center w-full max-w-[320px] mx-auto"
              >
                <div className="absolute top-0 w-full h-[500px] bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border-[6px] border-white/10 group-hover:border-white/20 w-[80vw] sm:w-[260px] md:w-full aspect-[9/16] max-w-[320px] mx-auto bg-black shadow-2xl shrink-0 transition-all duration-500 overflow-hidden hover:scale-[1.03] z-10">
                  <MobileOptimizedVideo src={video3} />
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Services Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="services" className="scroll-mt-28 section-padding bg-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-accent mb-3 text-center">Services</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-16 md:mb-20 text-center text-white">MY SERVICES:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              id={SERVICE_SECTION_IDS[service.title] ?? undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="scroll-mt-28 p-8 md:p-12 bg-accent border-2 border-accent/20 rounded-3xl hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all group"
            >
              <div className="flex flex-wrap items-start gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-black text-white px-4 sm:px-6 md:px-8 py-3 rounded-full font-bold uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm inline-flex items-center gap-2 max-w-full text-left leading-snug">
                  <Star size={16} fill="white" className="shrink-0" /> <span className="break-words">{service.title}</span>
                </div>
              </div>
              <p className="text-lg md:text-xl text-black leading-relaxed group-hover:text-black/80 transition-colors font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 sm:mt-24 text-center px-4">
          <a href="#contact" className="bg-accent text-black px-8 py-5 sm:px-12 sm:py-6 rounded-full font-black uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center justify-center border-2 border-accent text-sm sm:text-base w-full sm:w-auto max-w-md mx-auto min-h-[44px]">
            LET'S WORK TOGETHER
          </a>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="certifications" className="scroll-mt-28 section-padding bg-bg rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-8 font-serif leading-tight text-white">Certifications <br /> <span className="italic text-accent">& Expertise.</span></h1>
          <p className="text-lg sm:text-xl text-white/70 mb-16 max-w-2xl mx-auto">Verified skills and industry-standard certifications that guarantee quality results for your brand.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-accent transition-all group"
              >
                {c.image && (
                  <div className="w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden bg-black/20 border border-white/5">
                    <img
                      src={c.image}
                      alt={`${c.title} Certificate`}
                      loading="lazy"
                      width="1200"
                      height="900"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Award size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-2">{c.title}</h3>
                    <p className="text-sm text-white/60 uppercase tracking-widest">{c.issuer} • {c.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} className="section-padding bg-accent text-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black mb-3 text-center">Tools</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-12 sm:mb-16 md:mb-20 text-center text-white">SOME OF MY FAVOURITE TOOLS:</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-3 min-[400px]:grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
          {TOOLS.map(tool => (
            <div key={tool.name} className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-full md:h-auto md:aspect-square bg-white rounded-full flex items-center justify-center p-4 sm:p-5 md:p-6 shadow-sm border-0 hover:border-0 hover:shadow-2xl hover:shadow-black/20 transition-all">
                <img src={tool.logo} alt={tool.name} loading="lazy" width="200" height="200" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs sm:text-sm text-white uppercase tracking-wide sm:tracking-widest font-bold text-center leading-tight group-hover:text-black transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-padding relative overflow-hidden rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 text-white py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#ff457a" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168, 6, 82, 0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255, 0, 170, 0.12),transparent_60%)] opacity-60" />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/80 mb-3">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white">Client Feedback</h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Real words from real clients—focused on results, clarity, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group h-full rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-8 sm:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.32)] hover:bg-white/15 hover:border-white/25 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-[#ff457a]" />
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} size={18} className="text-[#ff457a]" fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-white/95 min-h-[4rem]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/15 bg-white/5 shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      loading="lazy"
                      width="100"
                      height="100"
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-base md:text-lg truncate">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wider truncate">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Free Audits Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id="free-audits" className="section-padding bg-accent text-white rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 py-16 sm:py-20 md:py-24">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black mb-3 text-center">Audits</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-12 md:mb-16 text-center text-white">FREE AUDITS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
          <div className="p-5 md:p-8 bg-black border-2 border-white/20 rounded-3xl hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all group">
            <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-white">Brand: Jewelry Ecommerce Brand, India</h3>
            <div className="text-sm sm:text-base text-white/80 leading-relaxed group-hover:text-white transition-colors space-y-4 text-left font-bold">
              <p><strong className="text-accent underline underline-offset-4 decoration-accent/30 decoration-2">How it Started:</strong> The brand reached out after seeing my free audit covering their store, ad strategy, and social media presence.</p>
              <p><strong className="text-accent underline underline-offset-4 decoration-accent/30 decoration-2">What I Found:</strong></p>
              <ul className="list-decimal list-outside ml-6 space-y-3">
                <li><strong>Checkout Process Too Long:</strong> Their checkout was asking for excessive information — email, contact, address, and additional unnecessary fields. Every extra step a customer has to complete is a reason to abandon the cart. I recommended shortening the checkout to only essential fields to reduce drop-offs.</li>
                <li><strong>Landing Page Speed Issues:</strong> The website was slow to load due to heavy images, cluttered design, and excessive code. Slow loading directly kills conversions, especially on mobile. I recommended compressing images, removing unnecessary clutter, and cleaning up heavy code.</li>
              </ul>
            </div>
          </div>
          <div className="p-5 md:p-8 bg-black border-2 border-white/20 rounded-xl hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all group">
            <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-white">Brand: Home & Tech Accessories Ecommerce Store, Pakistan</h3>
            <div className="text-sm sm:text-base text-white/80 leading-relaxed group-hover:text-white transition-colors space-y-4 text-left font-bold">
              <p><strong className="text-accent underline underline-offset-4 decoration-accent/30 decoration-2">How it Started:</strong> The brand owner reached out through LinkedIn. I offered a free audit covering their store, ad strategy, and social media presence.</p>
              <p><strong className="text-accent underline underline-offset-4 decoration-accent/30 decoration-2">What I Found:</strong></p>
              <ul className="list-decimal list-outside ml-6 space-y-3">
                <li><strong>Ads Landing on Wrong Pages:</strong> Their ad creatives were directing traffic to incorrect or irrelevant pages — meaning people clicked the ad expecting one thing and landed somewhere completely different. This kills trust and wastes ad spend immediately.</li>
                <li><strong>Empty Pages Listed on Store:</strong> Several product pages on the store were completely empty but still visible and listed. An empty page tells a customer the brand is unfinished and unprofessional. I recommended either removing them or completing them before running any traffic.</li>
                <li><strong>Homepage Too Short:</strong> The homepage lacked enough content to build trust or guide the visitor. A homepage needs to tell the customer who you are, what you sell, and why they should buy — all within seconds.</li>
                <li><strong>No Organic Social Media Presence:</strong> The brand had zero organic content strategy. I recommended a content plan focused on product showcases, customer reviews, giveaways, and engagement-based content to build an audience alongside paid ads.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 text-center px-4">
          <a href="#contact" className="bg-black text-accent px-8 py-5 sm:px-12 sm:py-6 rounded-full font-black uppercase tracking-wider sm:tracking-widest hover:bg-accent hover:text-black transition-all inline-flex items-center justify-center border-2 border-white/20 text-sm sm:text-base w-full sm:w-auto max-w-md mx-auto min-h-[44px]">
            GET YOUR FREE AUDIT
          </a>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} className="section-padding bg-black rounded-3xl mx-2 sm:mx-4 md:mx-6 mb-6 md:mb-8 text-center px-4 py-16 sm:py-20 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-10 sm:mb-16 text-white text-balance leading-tight max-w-5xl mx-auto">
          READY TO GROW YOUR BRAND — LET'S CONNECT
        </h2>
        <a href="#contact" className="bg-accent text-white px-8 py-5 sm:px-12 sm:py-6 rounded-full font-black uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center justify-center border-2 border-accent text-sm sm:text-base w-full sm:w-auto max-w-md mx-auto min-h-[44px]">
          LET'S CONNECT
        </a>
      </motion.section>

      {/* Contact Section (last) */}
      <ContactLinksSection id="contact" />
      <MetaAdsModal isOpen={showMetaAdsModal} onClose={() => setShowMetaAdsModal(false)} />
      <ShopifyModal isOpen={showShopifyModal} onClose={() => setShowShopifyModal(false)} />
      <PortfolioItemModal item={activePortfolioItem} onClose={() => setActivePortfolioItem(null)} />
    </div>
  );
}

function ContactLinksSection({ id }) {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} id={id} className="scroll-mt-28 section-padding bg-accent text-white rounded-3xl mb-8 py-16 sm:py-20 md:py-24 mx-2 sm:mx-4 md:mx-6">
      <div className="max-w-6xl w-full mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-8 text-white">
          Let&apos;s <span className="italic text-white">Connect</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/90 font-medium">Reach out directly through social media, phone, or email.</p>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-black w-full rounded-3xl sm:rounded-[4rem] px-3 sm:px-10 py-6 sm:py-12 mt-8 sm:mt-16 mb-12 gap-5 lg:gap-6 shadow-2xl border border-white/5">
          
          {/* Left Side: Social Media Icons */}
          <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-4 w-full lg:w-max overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1 lg:pb-0">
            <a href="https://www.instagram.com/socioleena/" target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md hover:text-[#FF2D78] hover:-translate-y-1 bg-white/5 hover:bg-[#FF2D78]/10 transition-all p-1.5 sm:p-3 rounded-full flex-shrink-0 flex items-center justify-center min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px]"><FontAwesomeIcon icon={faInstagram} className="text-[14px] sm:text-lg" /></a>
            <a href="https://www.facebook.com/socioleena" target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md hover:text-[#FF2D78] hover:-translate-y-1 bg-white/5 hover:bg-[#FF2D78]/10 transition-all p-1.5 sm:p-3 rounded-full flex-shrink-0 flex items-center justify-center min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px]"><FontAwesomeIcon icon={faFacebook} className="text-[14px] sm:text-lg" /></a>
            <a href="https://www.linkedin.com/in/aleenaaleem/" target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md hover:text-[#FF2D78] hover:-translate-y-1 bg-white/5 hover:bg-[#FF2D78]/10 transition-all p-1.5 sm:p-3 rounded-full flex-shrink-0 flex items-center justify-center min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px]"><FontAwesomeIcon icon={faLinkedin} className="text-[14px] sm:text-lg" /></a>
            <a href="https://wa.me/+923412559438" target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md hover:text-[#FF2D78] hover:-translate-y-1 bg-white/5 hover:bg-[#FF2D78]/10 transition-all p-1.5 sm:p-3 rounded-full flex-shrink-0 flex items-center justify-center min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px]"><FontAwesomeIcon icon={faWhatsapp} className="text-[14px] sm:text-lg" /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md hover:text-[#FF2D78] hover:-translate-y-1 bg-white/5 hover:bg-[#FF2D78]/10 transition-all p-1.5 sm:p-3 rounded-full flex-shrink-0 flex items-center justify-center min-w-[36px] sm:min-w-[44px] min-h-[36px] sm:min-h-[44px]"><FontAwesomeIcon icon={faTiktok} className="text-[14px] sm:text-lg" /></a>
          </div>

          {/* Right Side: Phone & Email */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 w-full lg:w-max">
            <div className="flex items-center justify-center gap-2 sm:gap-3 group bg-white/10 hover:bg-white/20 transition-all px-3 sm:px-8 py-2.5 sm:py-5 rounded-full w-full md:w-auto cursor-pointer shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] text-[#FF2D78] shrink-0" />
              <a href="tel:+923412559438" className="text-[11px] sm:text-base font-bold text-white group-hover:text-[#FF2D78] transition-colors whitespace-nowrap">+92 341 2559438</a>
            </div>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 group bg-white/10 hover:bg-white/20 transition-all px-3 sm:px-8 py-2.5 sm:py-5 rounded-full w-full md:w-auto cursor-pointer shadow-sm">
              <Mail className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] text-[#FF2D78] shrink-0" />
              <a href="mailto:rajputaleena02@gmail.com" className="text-[11px] sm:text-base font-bold text-white group-hover:text-[#FF2D78] transition-colors truncate">rajputaleena02@gmail.com</a>
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}

function PortfolioItemModal({ item, onClose }) {
  const videoRef = React.useRef(null);
  const [playFailed, setPlayFailed] = React.useState(false);

  const normalizedSrc = item?.src.startsWith("http")
    ? item.src
    : item?.src.startsWith("/")
      ? item.src
      : `/${item?.src}`;

  const isVideo = item && (item.media === 'video' || /\.mp4(\?|$)/i.test(normalizedSrc));

  React.useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => setPlayFailed(true));
    }
  }, [isVideo, normalizedSrc]);

  const handleManualPlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => setPlayFailed(false)).catch(() => setPlayFailed(true));
    }
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90dvh] overflow-y-auto mx-2 sm:mx-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex justify-between items-start gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black break-words pr-2">{item.title}</h2>
              <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0">
                <X size={28} className="text-black" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-lg shadow-black/15 border border-gray-200 min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 border-4 border-black/10 border-t-black/40 rounded-full animate-spin"></div>
              </div>
              {isVideo ? (
                <>
                  <video
                    ref={videoRef}
                    src={normalizedSrc}
                    className="relative z-10 w-full h-full object-contain max-h-[min(75vh,640px)] mx-auto"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', WebkitPlaysinline: true }}
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    referrerPolicy="no-referrer"
                  />
                  {playFailed && (
                    <button
                      onClick={handleManualPlay}
                      className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 text-white font-bold w-full h-full min-h-[44px] min-w-[44px]"
                    >
                      <span className="bg-accent px-4 py-2 rounded-full text-black font-semibold text-sm">Tap to Play</span>
                    </button>
                  )}
                </>
              ) : (
                <img
                  src={normalizedSrc}
                  alt={item.alt}
                  loading="lazy"
                  width="1400"
                  height="900"
                  className="relative z-10 w-full h-auto object-contain bg-white"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">{item.desc}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Meta Ads Modal Component
function MetaAdsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90dvh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black break-words">Meta Ads Campaign Results</h2>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              >
                <X size={28} className="text-black" />
              </button>
            </div>

            <div className="space-y-10 sm:space-y-12">
              {/* Campaign Overview */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Campaign Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Generated 247 message conversations for a custom clothing brand at Rs. 34/conversation, a 4.42% CTR with CPC as low as Rs. 5.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">247</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">Conversations</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">Rs. 34</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">Per Action</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">4.42%</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">CTR</div>
                  </div>
                </div>
              </div>

              {/* Campaign Images */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black">Campaign Creatives</h3>
                <div className="space-y-8">
                  <div className="group max-w-3xl mx-auto w-full">
                    <div className="rounded-2xl overflow-hidden mb-4 bg-white p-4 shadow-lg shadow-black/10 border border-gray-100">
                      <img
                        src="/images/work/work 2.webp"
                        alt="Meta Ads results screenshot 1"
                        loading="lazy"
                        width="1400"
                        height="900"
                        className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300 origin-center"
                      />
                    </div>
                    <p className="text-base font-medium text-gray-600 text-center">
                      Generated 247 message conversations, 4.42% CTR, CPC as low as Rs. 5
                    </p>
                  </div>

                  <div className="group max-w-3xl mx-auto w-full">
                    <div className="rounded-2xl overflow-hidden mb-4 bg-white p-4 shadow-lg shadow-black/10 border border-gray-100">
                      <img
                        src="/images/work/work1.webp"
                        alt="Meta Ads results screenshot 2"
                        loading="lazy"
                        width="1400"
                        height="900"
                        className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300 origin-center"
                      />
                    </div>
                    <p className="text-base font-medium text-gray-600 text-center">
                      CPC and 247 messaging conversations (last 14 days)
                    </p>
                  </div>

                  <div className="group max-w-3xl mx-auto w-full">
                    <div className="rounded-2xl overflow-hidden mb-4 bg-white p-4 shadow-lg shadow-black/10 border border-gray-100">
                      <img
                        src="/images/work/work2.webp"
                        alt="Meta Ads results screenshot 3"
                        loading="lazy"
                        width="1400"
                        height="900"
                        className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300 origin-center"
                      />
                    </div>
                    <p className="text-base font-medium text-gray-600 text-center">
                      Campaign + Ads manager results breakdown (last 30 days)
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 text-black">Strategy Used</h4>
                  <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Targeted custom audiences based on interests and behaviors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>A/B tested multiple ad creatives and copy variations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Optimized for conversation events with proper tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Daily monitoring and bid adjustments for performance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 text-black">Key Achievements</h4>
                  <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Achieved industry-leading cost per conversation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Generated qualified leads for the clothing brand</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Exceeded CTR benchmarks for the industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Delivered measurable ROI for the client</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tools Used */}
              <div className="bg-accent/10 p-6 sm:p-8 rounded-3xl">
                <h4 className="text-xl sm:text-2xl font-bold mb-6 text-black">Tools & Platforms Used</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <span className="bg-accent text-black px-5 py-3 rounded-full text-sm sm:text-base font-bold">Meta Ads Manager</span>
                  <span className="bg-accent text-black px-5 py-3 rounded-full text-sm sm:text-base font-bold">Facebook Business Suite</span>
                  <span className="bg-accent text-black px-5 py-3 rounded-full text-sm sm:text-base font-bold">Meta Pixel</span>
                  <span className="bg-accent text-black px-5 py-3 rounded-full text-sm sm:text-base font-bold">Google Analytics</span>
                  <span className="bg-accent text-black px-5 py-3 rounded-full text-sm sm:text-base font-bold">Canva</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Shopify Store Design Modal Component
function ShopifyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90dvh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black break-words">Shopify Store Design - LURE</h2>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              >
                <X size={28} className="text-black" />
              </button>
            </div>

            <div className="space-y-10 sm:space-y-12">
              {/* Project Overview */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Project Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete e-commerce store redesign for LURE, a premium clothing brand. Built from scratch with modern design principles, optimized for conversions, and fully responsive across all devices.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">40%</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">Bounce Rate Drop</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">Mobile Optimized</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="text-4xl font-bold text-accent mb-2">3x</div>
                    <div className="text-sm uppercase tracking-wide font-bold text-gray-500">Conversion Boost</div>
                  </div>
                </div>
              </div>

              {/* Design Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 text-black">Design Features</h4>
                  <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Modern, minimalist design with premium feel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Optimized product galleries and carousels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Streamlined checkout process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Brand-consistent color scheme and typography</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 text-black">Technical Implementation</h4>
                  <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Custom Liquid templating for unique sections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>SEO-optimized meta tags and structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Fast loading with optimized images</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp size={24} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Integrated with payment gateways</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Shopify Video Player Component
function ShopifyVideoPlayer({ src }) {
  const { videoRef, playFailed, handleManualPlay } = useVideoAutoplay();

  return (
    <div className="relative group w-[80vw] sm:w-[260px] md:w-[280px] lg:w-[320px] aspect-[9/16] mx-auto bg-black/5 rounded-xl overflow-hidden shadow-sm">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-8 border-4 border-black/10 border-t-black/40 rounded-full animate-spin"></div>
      </div>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 z-10 w-full h-full object-contain"
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', WebkitPlaysinline: true }}
        muted
        playsInline
        controls
        preload="metadata"
        referrerPolicy="no-referrer"
      />
      {playFailed && (
        <button
          onClick={handleManualPlay}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 text-white font-bold w-full h-full min-h-[44px] min-w-[44px]"
        >
          <span className="bg-accent px-4 py-2 rounded-full text-black font-semibold text-sm">Tap to Play</span>
        </button>
      )}
    </div>
  );
}
