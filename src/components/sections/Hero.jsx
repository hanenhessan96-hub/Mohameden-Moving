import React, { useState } from 'react';
import { 
  Truck, 
  Package, 
  Wrench, 
  ArrowLeft, 
  PhoneCall, 
  MapPin, 
  Calculator,
  Building2,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import heroImage from '../../assets/photo.png';

export default function Hero({ onOpenQuote }) {
  const [selectedCity, setSelectedCity] = useState('الدمام');
  const [movingType, setMovingType] = useState('نقل منزل/شقة');

  const saudiCities = ['الدمام', 'الخبر', 'الظهران', 'القطيف', 'الأحساء', 'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الجبيل'];

  return (
    <section id="home" className="relative bg-surface-offwhite pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden font-cairo border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col text-right">
            
            {/* Business Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full text-brand-primary text-xs sm:text-sm font-bold mb-5 shadow-xs">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
              <span>شركة محمدين لنقل الأثاث - الدمام والمنطقة الشرقية</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-[1.28] tracking-tight mb-5">
              خدمات نقل الأثاث وتغليفه <br className="hidden sm:inline" />
              <span className="text-brand-primary">بأمان تام وراحة بال</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-body-text font-normal leading-relaxed mb-8 max-w-2xl">
              نقدم خدمات نقل وتغليف وفك وتركيب الأثاث المنزلي والمكتبي داخل الدمام وإلى كافة مدن المملكة بأسطول مجهز وأيدي فنية ماهرة.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onOpenQuote}
                className="bg-brand-primary hover:bg-brand-hover text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-[0.99]"
              >
                <span>اطلب عرض سعر مجاني</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <a
                href="tel:01021225932"
                className="bg-white hover:bg-slate-50 text-navy border border-slate-300 hover:border-slate-400 text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-center shadow-xs"
              >
                <PhoneCall className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <span>اتصال مباشر: <span dir="ltr" className="font-mono font-bold">01021225932</span></span>
              </a>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              <div className="flex items-start gap-2.5">
                <div className="p-2 bg-brand-light rounded-lg text-brand-primary shrink-0 border border-blue-100">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">نقل الأثاث</h4>
                  <p className="text-[11px] text-body-muted">منازل ومكاتب</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 bg-brand-light rounded-lg text-brand-primary shrink-0 border border-blue-100">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">تغليف شامل</h4>
                  <p className="text-[11px] text-body-muted">حماية أكيدة</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 bg-brand-light rounded-lg text-brand-primary shrink-0 border border-blue-100">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">فك وتركيب</h4>
                  <p className="text-[11px] text-body-muted">فنيون متخصصون</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 bg-brand-light rounded-lg text-brand-primary shrink-0 border border-blue-100">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">شحن بين المدن</h4>
                  <p className="text-[11px] text-body-muted">تغطية لكافة المدن</p>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Realistic Hero Image & Request Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
              
              {/* Hero Image Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-slate-200">
                <img 
                  src={heroImage} 
                  alt="شركة محمدين لنقل الأثاث - شاحنة نقل مجهزة وفريق محترف" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent flex items-end p-4">
                  <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-md font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-blue-300" />
                    <span>أسطول نقل حديث وفريق احترافي بالدمام والشرقية</span>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="p-5 space-y-3.5 text-right">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-0.5">احسب تكلفة نقل أثاثك</h3>
                  <p className="text-xs text-slate-500">اختر المدينة والخدمة المطلوبة للحصول على تقدير فوري</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">المدينة المراد النقل منها/إليها</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm text-body-dark font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                  >
                    {saudiCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">نوع الخدمة المطلوبة</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['نقل منزل/شقة', 'تغليف أثاث', 'فك وتركيب', 'نقل مكاتب'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setMovingType(type)}
                        className={`py-2 px-2.5 text-xs font-bold rounded-lg border transition-all text-center ${
                          movingType === type
                            ? 'bg-brand-light border-brand-primary text-brand-primary shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-body-text hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>أسعار مناسبة وبدون أي تكاليف خفية</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>ضمان سلامة القطع الثمينة والأجهزة</span>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold py-3 rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 text-sm active:scale-[0.99]"
                >
                  <Calculator className="w-4 h-4" />
                  <span>اطلب تسعيرة دقيقة الآن</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
