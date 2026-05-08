import { ArrowRight, Shield, Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { assetUrl } from '../lib/utils';

const features = [
  {
    icon: Shield,
    title: "Gentle Care",
    desc: "A calming environment designed for your comfort and peace of mind."
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    desc: "State-of-the-art facilities for precision and efficient treatments."
  },
  {
    icon: Heart,
    title: "Family First",
    desc: "Comprehensive care for patients of all ages, from infants to seniors."
  },
  {
    icon: Star,
    title: "Elite Results",
    desc: "Excellence in aesthetic dentistry to give you the smile you deserve."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col bg-brand-bg-primary">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={assetUrl('/assets/hero-bg.jpeg')}
            alt="Welcoming dentist with patient"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-bg-primary/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-brand-text-primary"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Where Science <br /> Meets <span className="text-brand-btn-primary italic">Artistry</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text-secondary mb-10 leading-relaxed font-medium">
              Experience dental care redefined. At Sandown Dental, we combine advanced techniques with a personalised touch to transform your oral health and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-btn-primary text-brand-btn-text px-8 py-4 rounded-full font-bold text-center hover:bg-brand-btn-hover transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-shadow"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-brand-surface text-brand-text-primary border border-brand-border px-8 py-4 rounded-full font-bold text-center hover:bg-brand-bg-secondary transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-primary mb-6">Why Choose Sandown Dental?</h2>
            <p className="text-brand-text-secondary font-light leading-relaxed">
              We lead with innovation and follow with compassion. Our practice is built on the foundation of trust, expertise, and exceptional patient experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-surface p-8 rounded-3xl shadow-sm border border-brand-border hover:shadow-xl hover:shadow-brand-shadow transition-all group"
              >
                <div className="w-14 h-14 bg-brand-accent-light rounded-2xl flex items-center justify-center mb-6 text-brand-btn-primary group-hover:bg-brand-btn-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-3">{feature.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
