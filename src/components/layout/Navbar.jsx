import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import companyLogo from '../../assets/logo.png';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تغطية المدن', href: '#cities' },
    { name: 'لماذا نحن', href: '#about' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-cairo">
      {/* Top Utility Bar */}
      <div className="bg-navy text-slate-200 text-xs py-2 px-4 border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>الدمام - المملكة العربية السعودية</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>خدمة على مدار 24 ساعة - نقل داخل الدمام وجميع المدن</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:01021225932" 
              className="flex items-center gap-1.5 font-bold hover:text-white transition-colors text-slate-100"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>01021225932</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/01021225932" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب مباشر</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 bg-white ${
        isScrolled 
          ? 'shadow-md py-2.5 border-b border-slate-200' 
          : 'py-3.5 border-b border-slate-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="#home" className="flex items-center gap-2 focus:outline-none rounded-lg">
                <img 
                  src={companyLogo} 
                  alt="شركة محمدين لنقل الأثاث" 
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-body-dark hover:text-brand-primary rounded-lg transition-colors hover:bg-brand-light/60"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="bg-brand-primary hover:bg-brand-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200 flex items-center gap-2 active:scale-[0.98]"
              >
                <span>اطلب عرض سعر مجاناً</span>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenQuote}
                className="sm:hidden bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
              >
                اطلب سعر
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-body-dark hover:bg-slate-100 focus:outline-none border border-slate-200"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-bold text-body-dark hover:text-brand-primary hover:bg-brand-light/50 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuote) onOpenQuote();
                }}
                className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold py-3 rounded-xl text-center transition-colors shadow-xs text-sm"
              >
                اطلب عرض سعر الآن
              </button>
              <a
                href="https://wa.me/01021225932"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-50 text-emerald-800 font-bold py-3 rounded-xl text-center transition-colors border border-emerald-200 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>تواصل مباشر عبر الواتساب</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
