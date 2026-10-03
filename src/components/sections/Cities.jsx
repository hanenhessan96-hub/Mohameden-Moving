import React from 'react';
import { MapPin, Navigation, Truck, ArrowLeft } from 'lucide-react';

export default function Cities({ onOpenQuote }) {
  const regions = [
    {
      title: 'المنطقة الشرقية (المركز الرئيسي)',
      mainCity: 'الدمام',
      cities: ['الدمام', 'الخبر', 'الظهران', 'القطيف', 'الأحساء', 'الجبيل', 'الخفجي', 'حفر الباطن'],
      badge: 'خدمة دقيقة ومباشرة',
    },
    {
      title: 'المنطقة الوسطى والغربية',
      mainCity: 'الرياض وجدة',
      cities: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الطائف', 'الينبع'],
      badge: 'رحلات شحن يومية',
    },
    {
      title: 'بقية مناطق المملكة',
      mainCity: 'كافة المحافظات',
      cities: ['القصيم (بريدة وعنيزة)', 'حائل', 'تبوك', 'نجران', 'جازان', 'أبها والباحة'],
      badge: 'نقل وتوصيل شامل',
    },
  ];

  return (
    <section id="cities" className="py-16 lg:py-24 bg-white border-t border-slate-200/80 font-cairo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-border px-3.5 py-1 rounded-full text-brand-primary text-xs font-bold mb-3 shadow-xs">
            <Navigation className="w-3.5 h-3.5" />
            <span>شبكة تغطية واسعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-4">
            تغطية نقل الأثاث داخل الدمام وإلى كافة المدن
          </h2>
          <p className="text-base sm:text-lg text-body-text leading-relaxed">
            نوفر رحلات نقل وتوصيل يومية ومجهزة من الدمام والشرقية إلى جميع مدن ومحافظات المملكة العربية السعودية.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {regions.map((region, idx) => (
            <div 
              key={idx}
              className="bg-surface-offwhite border border-slate-200 rounded-2xl p-6 hover:border-brand-primary/50 hover:shadow-card transition-all duration-200 text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-brand-light rounded-xl text-brand-primary border border-brand-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-white text-brand-primary rounded-md border border-slate-200">
                    {region.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2">{region.title}</h3>
                <p className="text-xs font-semibold text-brand-hover mb-4">تشمل المدن التالية:</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {region.cities.map((city, cIdx) => (
                    <span 
                      key={cIdx}
                      className="bg-white border border-slate-200 text-body-dark text-xs font-medium px-3 py-1.5 rounded-lg shadow-2xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full bg-white hover:bg-brand-primary hover:text-white text-brand-primary font-bold py-2.5 px-4 rounded-xl border border-brand-border transition-colors text-xs flex items-center justify-center gap-2"
              >
                <span>طلب نقل لهذه المنطقة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Banner CTA for Inter-City Moving */}
        <div className="bg-brand-light border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-primary text-white rounded-xl shrink-0 hidden sm:block">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy mb-1">هل تحتاج إلى نقل أثاث بين مدينتين؟</h4>
              <p className="text-xs sm:text-sm text-body-text">نضمن لك وصول أثاثك وسيارات الشحن في أسرع وقت وبأعلى معايير السلامة والأمان.</p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-brand-primary hover:bg-brand-hover text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-xs text-xs sm:text-sm whitespace-nowrap active:scale-[0.98]"
          >
            اطلب تسعيرة النقل بين المدن
          </button>
        </div>

      </div>
    </section>
  );
}
