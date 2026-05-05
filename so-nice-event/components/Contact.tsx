import React, { useState } from 'react';

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone?: string;
      message: string;
      submit: string;
    };
    details: {
      title: string;
      emailLabel: string;
      phoneLabel: string;
      addressLabel: string;
    }
  };
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
const WHATSAPP_NUMBER = '212666757403';

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const copy = {
    eyebrow: lang === 'ar' ? 'ابدأ التخطيط' : lang === 'fr' ? 'Commencer votre projet' : 'Start planning',
    sending: lang === 'ar' ? 'جار الارسال...' : lang === 'fr' ? 'Envoi...' : 'Sending...',
    requestTitle: lang === 'ar' ? 'طلب مناسبة جديد' : lang === 'fr' ? 'Nouvelle demande d\'evenement' : 'New Event Request',
    redirecting: lang === 'ar' ? 'جار فتح واتساب...' : lang === 'fr' ? 'Ouverture de WhatsApp...' : 'Redirecting to WhatsApp...',
    error: lang === 'ar' ? 'تعذر فتح واتساب. يرجى المحاولة مرة اخرى.' : lang === 'fr' ? 'Impossible d\'ouvrir WhatsApp. Veuillez reessayer.' : 'Could not open WhatsApp. Please try again.',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');
    try {
      const payload = [
        copy.requestTitle,
        `Name: ${formData.name || '-'}`,
        `Email: ${formData.email || '-'}`,
        `Phone: ${formData.phone || '-'}`,
        `Message: ${formData.message || '-'}`,
      ].join('\n');
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(payload)}`;
      window.location.href = url;
      setStatus('success');
      setResponseMessage(copy.redirecting);
    } catch (error) {
      setStatus('error');
      setResponseMessage(copy.error);
      console.error('WhatsApp redirect error', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#fffaf0] moroccan-pattern">
      <div className="container mx-auto px-6 section-inner">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#be185d]">{copy.eyebrow}</p>
          <h2 className="moroccan-heading text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-lg border border-[#d9a629]/35 bg-white/95 p-5 shadow-2xl shadow-[#831843]/10 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="custom-bg rounded-lg p-7 text-white md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#f7d979]">{content.details.title}</h3>
            <div className="space-y-5 text-white/85">
               <p className="break-words"><strong className="block text-white">{content.details.emailLabel}</strong> <a href="mailto:Soniceevent04@gmail.com" className="hover:underline text-[#f7d979]">Soniceevent04@gmail.com</a></p>
               <p><strong className="block text-white">{content.details.phoneLabel}</strong> <a href="tel:+212666757403" className="hover:underline text-[#f7d979]" dir="ltr">+212 666-757403</a></p>
               <p><strong className="block text-white">{content.details.addressLabel}</strong> Avenue Arreda 13, 80650 Agadir, Maroc</p>
            </div>
            <div className="ornament-rule mt-8 opacity-80" />
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg bg-[#fffaf0] p-5 md:p-7">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{content.form.name}</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full rounded-md border border-[#be185d]/20 bg-white px-4 py-3 outline-none transition focus:border-[#be185d] focus:ring-2 focus:ring-[#d9a629]/40" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{content.form.email}</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full rounded-md border border-[#be185d]/20 bg-white px-4 py-3 outline-none transition focus:border-[#be185d] focus:ring-2 focus:ring-[#d9a629]/40" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{content.form.phone || 'Phone Number'}</label>
              <input type="tel" name="phone" id="phone" dir="ltr" placeholder="+212 666-757403" value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-[#be185d]/20 bg-white px-4 py-3 outline-none transition focus:border-[#be185d] focus:ring-2 focus:ring-[#d9a629]/40" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{content.form.message}</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full resize-y rounded-md border border-[#be185d]/20 bg-white px-4 py-3 outline-none transition focus:border-[#be185d] focus:ring-2 focus:ring-[#d9a629]/40"></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#d9a629] text-[#831843] py-3 px-6 rounded-md text-lg font-bold transition-colors hover:bg-[#f7d979] disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? copy.sending : content.form.submit}
              </button>
            </div>
            <div className="h-6 text-sm text-center">
              <p
                role="status"
                aria-live="polite"
                className={`transition-all duration-500 ease-out 
                  ${status === 'success' || status === 'error' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                  ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {responseMessage}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
