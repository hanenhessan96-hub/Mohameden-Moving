import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenQuote }) {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3 font-cairo">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/01021225932"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-floating transition-transform hover:scale-105 active:scale-95 group relative"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute left-full ml-3 bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
          تواصل عبر الواتساب 01021225932
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="tel:01021225932"
        className="w-11 h-11 bg-brand-primary hover:bg-brand-hover text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 group relative"
        aria-label="اتصال مباشر"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute left-full ml-3 bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
          اتصال مباشر 01021225932
        </span>
      </a>
    </div>
  );
}
