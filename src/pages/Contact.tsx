import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../components/Logo';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "32c8adbb-bb9f-44ce-844c-0cab68000a04");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong. Please try again later.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-bg-primary">
      <Helmet>
        <title>Contact Us | Book an Appointment at Sandown Dental</title>
        <meta name="description" content="Ready for your smile journey? Contact Sandown Dental in Milnerton to book your checkup, cleaning, or consultation. Call 021 007 3534 today." />
      </Helmet>
      <section className="bg-brand-bg-secondary py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Logo className="w-12 h-12 mb-6 text-brand-btn-primary" />
            <span className="text-brand-btn-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-primary mb-8 tracking-tight">
              Let's Start Your <br /><span className="text-brand-btn-primary">Smile Journey</span>
            </h1>
            <p className="text-lg text-brand-text-secondary font-light leading-relaxed mb-10 max-w-lg">
              Have a question or ready to book your first appointment? Reach out to us today. Our friendly team is here to assist you with any inquiries.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-surface rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-btn-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-lg font-serif font-bold text-brand-text-primary">021 007 3534</div>
                  <div className="text-xs font-semibold text-brand-btn-primary mt-1">Emergency: 076 792 7444</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-surface rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-btn-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-serif font-bold text-brand-text-primary">sandowndental35@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-surface rounded-2xl shadow-sm border border-brand-border flex items-center justify-center text-brand-btn-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-1">Address</div>
                  <a 
                    href="https://maps.app.goo.gl/jWbauEaTHHKptoPm8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-serif font-bold text-brand-text-primary hover:text-brand-btn-primary transition-colors"
                  >
                    A103 Sandown business square, passerina road, milnerton rural, 7441
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-surface rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-brand-shadow relative z-10 border border-brand-border"
          >
            {formStatus === 'success' ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand-accent-light text-brand-btn-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-4">Message Received!</h3>
                <p className="text-brand-text-secondary mb-8 font-light">Thank you for reaching out. A member of our team will contact you shortly to confirm your details.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-brand-btn-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text-muted uppercase tracking-wider ml-1">First Name</label>
                    <input
                      name="first_name"
                      required
                      type="text"
                      className="w-full bg-brand-input-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-btn-primary/20 focus:bg-white transition-all text-brand-text-primary placeholder:text-brand-text-muted"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text-muted uppercase tracking-wider ml-1">Last Name</label>
                    <input
                      name="last_name"
                      required
                      type="text"
                      className="w-full bg-brand-input-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-btn-primary/20 focus:bg-white transition-all text-brand-text-primary placeholder:text-brand-text-muted"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-muted uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-brand-input-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-btn-primary/20 focus:bg-white transition-all text-brand-text-primary placeholder:text-brand-text-muted"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-muted uppercase tracking-wider ml-1">Preferred Service</label>
                  <select 
                    name="service"
                    className="w-full bg-brand-input-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-btn-primary/20 focus:bg-white transition-all text-brand-text-primary"
                  >
                    <option>General Checkup</option>
                    <option>Cleaning</option>
                    <option>Fillings</option>
                    <option>Root canals</option>
                    <option>Crown and bridge</option>
                    <option>Implants</option>
                    <option>Extraction</option>
                    <option>Dentures</option>
                    <option>Orthodontics</option>
                    <option>Teeth Whitening</option>
                    <option>Frenectomies</option>
                    <option>Sleep dentistry</option>
                    <option>Other / Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-muted uppercase tracking-wider ml-1">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-brand-input-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-btn-primary/20 focus:bg-white transition-all resize-none text-brand-text-primary placeholder:text-brand-text-muted"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  disabled={formStatus === 'sending'}
                  type="submit"
                  className="w-full bg-brand-btn-primary text-brand-btn-text font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-btn-hover transition-all disabled:opacity-50 shadow-xl shadow-brand-shadow active:scale-[0.98]"
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-brand-bg-secondary relative">
        <div className="absolute inset-0 grayscale contrast-125 opacity-20">
           {/* Placeholder for an actual map - in a real app we'd use Google Maps API */}
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center">
            <MapPin className="w-12 h-12 text-brand-text-muted" />
          </div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-brand-surface p-6 rounded-2xl shadow-xl border border-brand-border">
            <h4 className="font-serif font-bold text-brand-text-primary mb-2 underline decoration-brand-btn-primary underline-offset-4">Sandown Dental</h4>
            <p className="text-sm text-brand-text-secondary mb-4 text-center">A103 Sandown business square,<br />paserina road, 7441</p>
            <a 
              href="https://maps.app.goo.gl/jWbauEaTHHKptoPm8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-link text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              Get Directions
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
