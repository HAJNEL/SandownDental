import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-accent-light text-brand-text-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Practice Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 pointer-events-none">
              <Logo className="w-8 h-8" variant="dark" />
              <span className="text-xl font-serif font-bold tracking-tight">
                Sandown <span className="text-brand-btn-primary">Dental</span>
              </span>
            </Link>
            <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">
              Excellence in modern dentistry. We combine advanced science with clinical art to deliver transformative care for families and individuals.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sandown_dental?igsh=OXBiN3pwcHc2OHJt&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-btn-primary hover:text-white transition-colors group shadow-sm shadow-brand-shadow"
              >
                <Instagram className="w-5 h-5 text-brand-text-secondary group-hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/share/1BCBZiNZTt/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-btn-primary hover:text-white transition-colors group shadow-sm shadow-brand-shadow"
              >
                <Facebook className="w-5 h-5 text-brand-text-secondary group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-text-secondary text-sm">
              <li><Link to="/" className="hover:text-brand-btn-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-btn-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-btn-primary transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-btn-primary transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-brand-btn-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-brand-text-secondary text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-btn-primary shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/jWbauEaTHHKptoPm8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-btn-primary transition-colors"
                >
                  A103 Sandown business square,<br />passerina road, milnerton rural, 7441
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-btn-primary shrink-0" />
                <span>021 007 3534</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-btn-primary shrink-0" />
                <span>sandowndental35@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Hours</h4>
            <ul className="space-y-4 text-brand-text-secondary text-sm">
              <li className="flex items-center justify-between">
                <span>Mon - Fri</span>
                <span className="text-brand-text-primary font-medium">08:30 - 17:00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Saturday</span>
                <span className="text-brand-text-primary font-medium">08:00 - 12:00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="text-brand-text-primary font-medium">Closed</span>
              </li>
              <li className="flex items-center justify-between mt-4 p-3 bg-brand-surface border border-brand-border rounded-lg text-xs shadow-sm shadow-brand-shadow">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-btn-primary" />
                    <span className="font-medium">Emergency Care</span>
                  </div>
                  <span className="text-brand-text-primary font-bold ml-6">076 792 7444</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border text-center text-brand-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} Sandown Dental. All rights reserved. Professional Dental Corporation.</p>
        </div>
      </div>
    </footer>
  );
}
