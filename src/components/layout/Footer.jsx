import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ChevronLeft } from 'lucide-react';
import companyLogo from '../../assets/logo.png';

export default function Footer({ onOpenQuote }) {
  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-8 border-t border-navy-light font-cairo text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">

          {/* Col 1: About & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl inline-block">
              <img src={companyLogo} alt="شركة محمدين لنقل الأثاث" className="h-12 w-auto object-contain bg-white rounded p-1" />
              <div>
                <h3 className="text-lg font-bold text-white">شركة محمدين لنقل الأثاث</h3>
                <p className="text-xs text-slate-300">الدمام وكافة مدن المملكة العربية السعودية</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              متخصصون في خدمات نقل وتغليف وفك وتركيب الأثاث المنزلي والمكتبي بأعلى درجات الأمان والاحترافية. نخدم العائلات والشركات داخل الدمام والشرقية ونوفر الشحن المباشر لكافة مدن المملكة.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>ضمان سلامة العفش</span>
              </span>
              <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 طوال الأسبوع</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white border-b border-white/10 pb-2 inline-block">
              روابط السريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                  <span>خدمات نقل وتغليف الأثاث</span>
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                  <span>مدن وتغطية الشحن</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                  <span>لماذا شركة محمدين</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                  <span>الأسئلة الشائعة</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white border-b border-white/10 pb-2 inline-block">
              معلومات التواصل المباشر
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">المقر الرئيسي:</div>
                  <div className="text-xs text-slate-300">الدمام - المنطقة الشرقية - المملكة العربية السعودية</div>
                </div>
              </div>

              <a 
                href="tel:01021225932" 
                className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                dir="ltr"
              >
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-right w-full">
                  <div className="font-bold text-white">اتصال مباشر:</div>
                  <div className="text-xs font-mono text-slate-200" dir="ltr">01021225932</div>
                </div>
              </a>

              <a 
                href="https://wa.me/01021225932" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors text-emerald-400"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-right w-full">
                  <div className="font-bold text-emerald-300">واتساب 24 ساعة:</div>
                  <div className="text-xs text-emerald-400">انقر هنا لبدء المحادثة المباشرة</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Quote button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Mohameden. جميع الحقوق محفوظة لـ شركة محمدين لنقل الأثاث.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="text-blue-400 hover:text-blue-300 underline font-bold"
            >
              اطلب عرض سعر مجاني
            </button>
            <span>|</span>
            <a href="#home" className="hover:text-slate-200 transition-colors">
              العودة للأعلى ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
