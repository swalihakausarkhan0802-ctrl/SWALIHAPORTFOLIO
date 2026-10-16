import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SparkleStar } from './illustrations/DecorativeElements';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b-3 border-[#211A1B] ${
        scrolled ? 'bg-[#F4EBDD]/95 backdrop-blur-sm shadow-sm' : 'bg-[#F4EBDD]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Monogram Seal */}
        <a
          href="#"
          className="flex items-center gap-3 group text-[#211A1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#651D32] focus-visible:ring-offset-2 shrink-0"
          aria-label="Swaliha Khan - Home"
        >
          <div className="w-10 h-10 rounded-sm bg-[#651D32] text-[#FBF7F0] brutal-border brutal-shadow-sm flex items-center justify-center font-serif font-black text-lg group-hover:-translate-y-0.5 group-hover:bg-[#211A1B] transition-all">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl tracking-tight leading-none group-hover:text-[#651D32] transition-colors whitespace-nowrap">
              SWALIHA KHAN
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#211A1B]/75 uppercase flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
              <span>AI/ML LEARNER</span>
              <span className="text-[#D7B46A]">✦</span>
              <span>PROGRAMMER</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (4 concise links, single-line) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#211A1B]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 font-sans text-sm font-bold uppercase tracking-wider text-[#211A1B] hover:text-[#651D32] transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#651D32]"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#651D32] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#651D32] text-[#FBF7F0] font-sans font-bold text-xs uppercase tracking-wider brutal-border brutal-shadow hover:bg-[#211A1B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#211A1B] transition-all whitespace-nowrap shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 bg-[#FBF7F0] text-[#211A1B] brutal-border brutal-shadow-sm hover:bg-[#D7B46A] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-3 border-[#211A1B] bg-[#FBF7F0] px-4 pt-4 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#211A1B]/20">
            <span className="font-mono text-xs text-[#211A1B]/70 tracking-widest uppercase">
              INDEX DISPATCH
            </span>
            <SparkleStar size={16} color="#651D32" />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 font-sans font-bold text-base uppercase tracking-wider text-[#211A1B] hover:bg-[#F4EBDD] hover:text-[#651D32] border-2 border-transparent hover:border-[#211A1B] transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#651D32] text-[#FBF7F0] font-sans font-bold text-sm uppercase tracking-wider brutal-border brutal-shadow"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
