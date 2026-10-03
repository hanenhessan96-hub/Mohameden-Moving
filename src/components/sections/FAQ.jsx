import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'هل تشمل خدمة النقل عمليات الفك والتركيب؟',
      answer: 'نعم، نوفر فنيين ونجارين متخصصين لفك كافة أنواع غرف النوم، المطابخ، والستائر والأجهزة وتجهيزها للنقل، ثم إعادة تركيبها بدقة في وجهتك الجديدة.',
    },
    {
      question: 'كيف يتم تغليف القطع الحساسة والأجهزة الكهرومنزليّة؟',
      answer: 'نستخدم أفضل مواد التغليف مثل النايلون المائي، الكرتون المضلع، والبلاستيك الفقاعي (بابلز) لحماية الزجاج والأجهزة والقطع الثمينة من أي خدوش أو صدمات.',
    },
    {
      question: 'هل تتوفر خدمة النقل من الدمام إلى الرياض وجدة وبقية المدن؟',
      answer: 'نعم، لدينا رحلات نقل وشحن منتظمة ومباشرة من الدمام والشرقية إلى كافة مدن ومناطق المملكة مع ضمان وصول الأثاث بحالة ممتازة.',
    },
    {
      question: 'كيف يتم احتساب سعر عملية نقل الأثاث؟',
      answer: 'يتم تحديد السعر بناءً على كمية ونوع الأثاث، المسافة بين الموقعين، وعدد الطوابق، وهل الخدمة تتطلب رافعات (ونش) أو تغليفاً خاصاً. نقدم أسعاراً تنافسية وواضحة بدون أي تكاليف مستترة.',
    },
    {
      question: 'هل تقدمون ضماناً على سلامة العفش والأثاث أثناء النقل؟',
      answer: 'بالتأكيد، نحن نلتزم بالكامل بسلامة جميع منقولاتك وأثاثك من لحظة استلامها وحتى تسليمها وتركيبها في موقعك الجديد.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface-offwhite border-t border-slate-200/80 font-cairo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-border px-3.5 py-1 rounded-full text-brand-primary text-xs font-bold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>إجابات على استفساراتكم</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-4">
            الأسئلة الشائعة حول نقل الأثاث
          </h2>
          <p className="text-base text-body-text">
            إليك الإجابات عن أكثر الأسئلة شيوعاً المتعلقة بخدمات النقل والتغليف والفك والتركيب.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs text-right"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 font-bold text-navy text-base sm:text-lg hover:text-brand-primary transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-body-text leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3">
          <h4 className="text-lg font-bold text-navy">لديك سؤال آخر لم تجد إجابته هنا؟</h4>
          <p className="text-xs sm:text-sm text-body-text max-w-lg mx-auto">
            فريق خدمة العملاء متواجد على مدار الساعة للرد على كافة أسئلتك وتقديم الاستشارة الفنية والمالية مجاناً.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-brand-primary hover:bg-brand-hover text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              اطلب استشارة مجانية
            </button>
            <a
              href="https://wa.me/01021225932"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>تحدث مع الدعم الفني</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
