'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);


  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <AppImage
            src="/assets/images/logo1.jpg"
            alt="Tween Technologies logo"
            width={200}
            height={52}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-600 rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-primary bg-primary/8'
                  : scrolled
                  ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/schedule"
            className={`px-4 py-2 text-sm font-600 rounded-lg transition-all duration-200 ${
              scrolled
                ? 'text-muted-foreground hover:text-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Schedule a Call
          </Link>
          <Link
            href="/schedule"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-700 rounded-xl hover:bg-primary/90 transition-all duration-200 magnetic-btn shadow-sm"
          >
            Let&apos;s Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-foreground hover:bg-muted' : 'text-foreground hover:bg-white/60'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-600 rounded-lg transition-colors min-h-[44px] flex items-center ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-4 flex flex-col gap-2">
              <Link
                href="/schedule"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-600 text-foreground hover:text-primary rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Schedule a Call
              </Link>
              <Link
                href="/schedule"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 bg-primary text-primary-foreground text-sm font-700 rounded-xl hover:bg-primary/90 transition-all text-center min-h-[44px] flex items-center justify-center"
              >
                Let&apos;s Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
