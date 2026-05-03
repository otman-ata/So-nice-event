import React, { useState } from 'react';

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
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

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage(''); // Clear previous message

    // This is a placeholder URL. Replace with your actual Google Apps Script Web App URL.
    const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('message', formData.message);

    fetch(SCRIPT_URL, { method: 'POST', body: form })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          setStatus('success');
          setResponseMessage('Your quote request has been sent! We will get back to you shortly.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.error || 'An unknown error occurred.');
        }
      })
      .catch(error => {
        setStatus('error');
        setResponseMessage('There was an issue sending your message. Please check your connection or try again.');
        console.error('Error!', error.message);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{content.details.title}</h3>
            <div className="space-y-4 text-gray-600">
               <p><strong>{content.details.emailLabel}</strong> <a href="mailto:Soniceevent04@gmail.com" className="hover:underline custom-text">Soniceevent04@gmail.com</a></p>
               <p><strong>{content.details.phoneLabel}</strong> <a href="tel:+212666757403" className="hover:underline custom-text" dir="ltr">+212 666-757403</a></p>
               <p><strong>{content.details.addressLabel}</strong> Avenue Arreda 13, 80650 Agadir, Maroc</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{content.form.name}</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7f1d1d] focus:border-[#7f1d1d]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{content.form.email}</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7f1d1d] focus:border-[#7f1d1d]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{content.form.phone || 'Phone Number'}</label>
              <input type="tel" name="phone" id="phone" dir="ltr" placeholder="+212 666-757403" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7f1d1d] focus:border-[#7f1d1d]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{content.form.message}</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7f1d1d] focus:border-[#7f1d1d]"></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full custom-bg text-white py-3 px-6 rounded-md text-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : content.form.submit}
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