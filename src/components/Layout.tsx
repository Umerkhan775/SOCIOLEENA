import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { cn } from '../lib/utils';

const SOCIAL_LINKS = [
  { icon: faInstagram, href: 'https://www.instagram.com/socioleena/', label: 'Instagram' },
  { icon: faFacebook, href: 'https://www.facebook.com/socioleena', label: 'Facebook' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/aleenaaleem/', label: 'LinkedIn' },
  { icon: faWhatsapp, href: 'https://wa.me/+923412559438', label: 'WhatsApp' },
];

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Story', href: '#story' },
  { name: 'Brands', href: '#brands' },
  {
    name: 'Work',
    href: '#work',
    children: [
      { name: 'Meta Ads Work', href: '#work-meta-ads' },
      { name: 'Shopify Store Design', href: '#work-shopify' },
      { name: 'Social Media Marketing (SMM)', href: '#work-smm' },
    ],
  },
  { name: 'Services', href: '#services', },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <div className="min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative mx-2 mt-3 sm:mx-4 sm:mt-4 md:mx-6 md:mt-6 z-50 glass min-h-16 md:min-h-20 flex items-center justify-between gap-3 px-3 sm:px-6 md:px-10 rounded-2xl md:rounded-3xl backdrop-blur-md bg-black/20 border-0 md:border-white/10 shadow-2xl transition-all duration-300 ease-in-out hover:bg-black/30 hover:shadow-accent/20 hover:border-accent/30">
        <a href="#home" className="shrink-0 text-lg sm:text-2xl md:text-3xl font-serif font-black tracking-tighter text-white transition-all duration-300 hover:text-accent hover:scale-105 truncate max-w-[70vw]">
          SOCIOLEENA<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-8 flex-wrap min-w-0">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative group">
              <a
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-accent hover:scale-105 relative text-ink/60"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
              {link.children && (
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-black/95 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-xs uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-accent transition-colors"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden shrink-0 p-3 -mr-1 text-white touch-manipulation min-w-11 min-h-11"
          onClick={() => {
            const next = !isMenuOpen;
            setIsMenuOpen(next);
            if (!next) setOpenMobileDropdown(null);
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center lg:hidden pt-20 pb-8 px-4 overflow-y-auto overscroll-contain min-h-0 max-h-[100dvh]"
          >
            <div className="flex flex-col items-center gap-5 w-full max-w-sm mx-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="flex flex-col items-center gap-2 w-full">
                  {!link.children ? (
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-lg sm:text-xl font-serif text-center text-white hover:text-accent transition-colors py-1 w-full text-center"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMobileDropdown === link.name}
                        onClick={() => {
                          setOpenMobileDropdown((prev) => (prev === link.name ? null : link.name));
                        }}
                        className="text-lg sm:text-xl font-serif text-center text-white hover:text-accent transition-colors py-1 w-full"
                      >
                        {link.name}
                      </button>
                      {openMobileDropdown === link.name && (
                        <div className="flex flex-col items-center gap-1.5 w-full border-t border-white/10 pt-2 mt-1">
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 hover:text-accent transition-colors text-center px-2 leading-snug max-w-full whitespace-normal break-words"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 mt-6 md:mt-8">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-ink/60 hover:text-accent">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow w-full min-w-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white section-padding border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-white">Let's build something great.</h2>
            <p className="text-white/60 max-w-xs text-sm md:text-base">
              Specializing in Meta Ads, Shopify design, and social media growth for brands that want to scale.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-4 md:mb-6 font-bold text-accent">Navigation</h3>
            <ul className="space-y-3 md:space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-all duration-300 relative group inline-block text-sm md:text-base"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-4 md:mb-6 font-bold text-accent">Connect</h3>
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2026 SocioLeena. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
