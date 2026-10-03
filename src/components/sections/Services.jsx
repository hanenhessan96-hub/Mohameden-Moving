import React from 'react';
import { 
  Truck, 
  PackageCheck, 
  Wrench, 
  MapPin, 
  Building2, 
  Boxes, 
  ArrowLeft 
} from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const servicesList = [
    {
      id: 1,
      title: 'نقل الأثاث والعفش',
      description: 'نقل أثاث المنازل والشقق والفلل بطريقة منظمة وآمنة تضمن سلامة كافة المقتنيات.',
      icon: Truck,
      tag: 'الأكثر طلباً',
    },
    {
      id: 2,
      title: 'تغليف الأثاث الاحترافي',
      description: 'تغليف الأثاث والأجهزة والقطع الزجاجية بمواد عالية الجودة لحمايتها أثناء التحميل والنقل.',
      icon: PackageCheck,
      tag: 'حماية كاملة',
    },
    {
      id: 3,
      title: 'فك وتركيب الأثاث',
      description: 'فك وتركيب غرف النوم والمطابخ والأجهزة الكبيرة بعناية بأيدي فنيين متخصصين.',
      icon: Wrench,
      tag: 'فنيون ماهرون',
    },
    {
      id: 4,
      title: 'نقل العفش بين المدن',
      description: 'خدمات نقل وشحن الأثاث من الدمام والشرقية إلى كافة مدن ومحافظات المملكة.',
      icon: MapPin,
      tag: 'شحن آمن',
    },
    {
      id: 5,
      title: 'نقل المكاتب والشركات',
      description: 'نقل وتجهيز أثاث ومعدات المكاتب والشركات مع التزام تام بالمواعيد المحددة.',
      icon: Building2,
      tag: 'حلول أعمال',
    },
    {
      id: 6,
      title: 'تخزين الأثاث والمنقولات',
      description: 'مستودعات مجهزة لحفظ وتخزين الأثاث لفترات قصيرة أو طويلة حسب رغبة العميل.',
      icon: Boxes,
      tag: 'مستودعات آمنة',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-t border-slate-100 font-cairo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-border px-3.5 py-1 rounded-full text-brand-primary text-xs font-bold mb-3 shadow-xs">
            <span>خدماتنا المتكاملة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-4">
            خدمات نقل الأثاث في الدمام والشرقية
          </h2>
          <p className="text-base sm:text-lg text-body-text leading-relaxed">
            نقدم حزمة متكاملة من الخدمات المصممة خصيصاً لتوفير أعلى مستويات الراحة والأمان لأثاثك.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-brand-primary/50 hover:shadow-card transition-all duration-200 flex flex-col justify-between group relative text-right"
              >
                <div>
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-light border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2.5 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-body-text leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Action / CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-brand-primary hover:text-brand-hover flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>طلب عرض سعر</span>
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-semibold">الدمام وكافة المدن</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
