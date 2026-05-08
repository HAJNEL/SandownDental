import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetUrl } from '../lib/utils';
import { Star, ShieldCheck, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../components/Logo';

const practiceImages = [
  assetUrl('/assets/practice/practice3.jpeg'),
  assetUrl('/assets/practice/practice4.jpeg'),
  assetUrl('/assets/practice/practice5.jpeg'),
]; 

export default function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % practiceImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % practiceImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + practiceImages.length) % practiceImages.length);

  return (
    <div className="pt-20 min-h-screen bg-brand-bg-primary">
      {/* Intro Section */}
      <section className="pt-8 pb-20 bg-brand-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group bg-brand-bg-secondary">
                <AnimatePresence mode="wait">
                  {practiceImages.map((img, i) =>
                    i === currentImage ? (
                      <motion.img
                        key={img}
                        src={img}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        alt="Sandown Dental clinical environment"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : null
                  )}
                </AnimatePresence>
                
                {/* Carousel Navigation */}
                <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3 z-20">
                  {practiceImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentImage === i ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent-light rounded-[2rem] -z-0 hidden md:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-btn-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Our Practice</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-primary mb-8 leading-tight">
                Pioneering Patient-Centric Dental Care in Sandown
              </h1>
              <div className="space-y-6 text-brand-text-secondary font-light leading-relaxed text-lg">
                <p>
                  At Sandown Dental, we believe that a visit to the dentist should be more than just a clinical appointment—it should be an experience of absolute trust and comfort.
                </p>
                <p>
                  Founded by the dynamic sister duo, Gabby and Alicia Paries, our practice is a reflection of our passion for precision and our dedication to family well-being. We have carefully curated an environment where advanced dental technology meets a warm, welcoming atmosphere.
                </p>
                <p>
                  Our philosophy is simple: we treat people, not just teeth. By focusing on preventative education and minimal intervention artistry, we help our patients achieve results that are as sustainable as they are beautiful.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="py-24 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-primary mb-6">Meet Your Clinicians</h2>
          <p className="text-brand-text-secondary max-w-2xl mx-auto font-light">
            Highly skilled, deeply compassionate, and committed to your smile.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Gabby Paries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-surface rounded-[3rem] p-8 shadow-sm border border-brand-border group hover:shadow-xl hover:shadow-brand-shadow transition-all"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={assetUrl('/assets/employees/Gabby.jpeg')}
                  alt="Dr. Gabby Paries"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-2">Dr. Gabby Paries</h3>
              <p className="text-brand-btn-primary font-medium mb-6 text-sm tracking-wide">General dentist | BDS, PGDip</p>
              <p className="text-brand-text-secondary font-light leading-relaxed mb-6">
                Meet Dr. Gabby, a passionate and caring dentist dedicated to creating confident, healthy smiles in a calm and welcoming environment. She has a special interest in frenectomies and interceptive orthodontics, focusing on early intervention to support proper oral development, improve function, and help guide growing smiles into healthy alignment. With a gentle approach and attention to detail, Dr. Gabby provides personalised dental care focused on comfort, aesthetics, and long-term oral health for the whole family.
              </p>
            </motion.div>

            {/* Dr. Alicia Paries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-surface rounded-[3rem] p-8 shadow-sm border border-brand-border group hover:shadow-xl hover:shadow-brand-shadow transition-all"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={assetUrl('/assets/employees/Alicia.png')}
                  alt="Dr. Alicia Paries"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-2">Dr. Alicia Paries</h3>
              <p className="text-brand-btn-primary font-medium mb-6 text-sm tracking-wide">General dentist | BDS, PGDip</p>
              <p className="text-brand-text-secondary font-light leading-relaxed mb-6">
                Meet Dr Alicia Paries, 
                she is passionate about dentistry because it allows her to combine healthcare, precision, and patient care while making a meaningful difference in people’s lives. She believes dentistry not only improves oral health and function, but also restores confidence and wellbeing.
                She holds a Bachelor’s degree with a focus on Minor Oral Surgery, which has strengthened her clinical skills and passion for comprehensive patient care. While she enjoys the surgical aspect of dentistry, Dr Paries especially loves general dentistry for the variety it offers and the lasting relationships built with patients. She is dedicated to creating a comfortable, positive experience while helping patients achieve healthy, confident smiles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-32 bg-brand-bg-primary text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-primary italic">
            "Creating beautiful smiles"
          </h2>
        </motion.div>
      </section>
    </div>
  );
}
