import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldCheck } from 'lucide-react';
import companyLogo from '../../assets/logo.png';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromCity: 'الدمام',
    toCity: 'الدمام',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const cityOptions = [
    'الدمام',
    'الخبر',
    'الظهران',
    'القطيف',
    'الأحساء',
    'الجبيل',
    'الرياض',
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'القصيم',
    'حفر الباطن',
    'الخفجي'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/75 backdrop-blur-xs animate-fadeIn font-cairo"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-navy p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={companyLogo} alt="شركة محمدين" className="h-10 w-auto bg-white rounded p-1" />
            <div>
              <h3 className="font-bold text-base text-white">طلب عرض سعر مجاني</h3>
              <p className="text-xs text-slate-300">شركة محمدين لنقل الأثاث بالدمام والمملكة</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy">تم إرسال طلبك بنجاح!</h4>
              <p className="text-sm text-body-text max-w-sm mx-auto leading-relaxed">
                شكراً لتواصلك مع شركة محمدين. سيقوم فريق خدمة العملاء بالتواصل معك عبر الرقم <span dir="ltr" className="font-mono font-bold text-brand-primary">{formData.phone}</span> لتقديم أحدث العروض وتفاصيل السعر.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-brand-primary text-white font-bold px-7 py-3 rounded-xl hover:bg-brand-hover transition-colors text-sm shadow-xs"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy mb-1">الاسم الكريم</label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك بالكامل"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-body-dark font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">رقم الجوال للتواصل</label>
                <input
                  type="tel"
                  required
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-right text-body-dark font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">النقل من مدينة</label>
                  <select
                    value={formData.fromCity}
                    onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-body-dark font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                  >
                    {cityOptions.map((city) => (
                      <option key={`from-${city}`} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">النقل إلى مدينة</label>
                  <select
                    value={formData.toCity}
                    onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-body-dark font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                  >
                    {cityOptions.map((city) => (
                      <option key={`to-${city}`} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">تفاصيل إضافية (اختياري)</label>
                <textarea
                  rows="2"
                  placeholder="عدد الغرف، وجود فك وتغليف، الموعد المتوقع..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-body-dark font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white"
                ></textarea>
              </div>

              <div className="bg-brand-light border border-brand-border rounded-lg p-3 text-xs text-brand-primary font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-brand-primary" />
                <span>نضمن لك سرية بياناتك وتقديم أنسب أسعار النقل والتغليف.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 text-sm active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>إرسال طلب التسعيرة الآن</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
