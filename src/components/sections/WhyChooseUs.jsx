import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  ArrowLeft,
  Clock,
  Award
} from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const features = [
    {
      id: 1,
      title: 'عناية وحماية فائقة الأمان',
      description: 'نتعامل مع كل قطعة أثاث بعناية فائقة واستخدام أدوات وتغليف مخصص يضمن حمايتها الكاملة.',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'فريق فني خبرة ومتخصص',
      description: 'نجارون وفنيون متخصصون في فك وتركيب مختلف أنواع الأثاث والمطابخ والأجهزة بدقة عالية.',
      icon: Users,
      badge: 'خبرة عريقة',
    },
    {
      id: 3,
      title: 'التزام بالمواعيد والسرعة',
      description: 'نلتزم بالوصول وتنفيذ عملية النقل في المواعيد المحددة بدقة متناهية ودون أي تأخير.',
      icon: Clock,
    },
    {
      id: 4,
      title: 'تغطية شاملة داخل وخارج الدمام',
      description: 'خدمات سريعة وموثوقة داخل الدمام والشرقية ونقل مباشر إلى كافة مدن ومناطق المملكة.',
      icon: MapPin,
    },
  ];

  const stats = [
    { number: '+10', label: 'سنوات من الخبرة' },
    { number: '+5,000', label: 'عميل راضٍ' },
    { number: '100%', label: 'ضمان سلامة العفش' },
    { number: '24/7', label: 'دعم وخدمة متواصلة' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-surface-offwhite border-t border-slate-200/80 font-cairo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">

          {/* Right Column: Title, Supporting text & CTA */}
          <div className="lg:col-span-5 flex flex-col text-right">
            
            <div className="inline-flex items-center gap-2 self-start bg-brand-light border border-brand-border px-3.5 py-1 rounded-full text-brand-primary text-xs font-bold mb-4 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>جودة والتزام بالخدمة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-snug tracking-tight mb-4">
              لماذا تختار شركة محمدين لنقل الأثاث؟
            </h2>

            <p className="text-base sm:text-lg text-body-text leading-relaxed mb-8">
              نحن نركز على تقديم تجربة نقل سلسة ومنظمة تجعلك مطمئناً على كل قطعة في منزلك من البداية حتى التسليم.
            </p>

            {/* Quote Action Button */}
            <div>
              <button
                onClick={onOpenQuote}
                className="bg-brand-primary hover:bg-brand-hover text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center sm:inline-flex gap-2.5 group active:scale-[0.99]"
              >
                <span>اطلب عرض سعر الآن</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>

          </div>

          {/* Left Column: 4 Feature Items Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-brand-primary/50 hover:shadow-card transition-all duration-200 text-right group"
                  >
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-brand-light border border-brand-border flex items-center justify-center text-brand-primary mb-4.5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-body-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Trust Stats Bar */}
        <div className="bg-navy rounded-2xl p-8 text-white shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-700/60">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
