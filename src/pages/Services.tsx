import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Shield, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../lib/utils';

const serviceSections = [
  {
    id: "general",
    title: "General & Preventative Care",
    images: [assetUrl('/assets/stock/stock8.jpeg')],
    content: [
      {
        subtitle: "Comprehensive Oral Examinations",
        text: "Our routine examinations are designed to maintain and protect your oral health through early detection and personalised care as well as oral health education. Each visit includes a thorough assessment of your teeth, gums, and overall oral condition, allowing us to create a tailored treatment plan that supports long-term oral health."
      },
      {
        subtitle: "Professional Scale & Polish",
        text: "A meticulous cleaning treatment that removes plaque, tartar, and surface staining while promoting optimal gum health. This experience leaves your smile feeling exceptionally smooth, refreshed, and visibly brighter."
      }
    ]
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    images: [assetUrl('/assets/stock/stock9.jpeg'), assetUrl('/assets/stock/stock12.jpeg'), assetUrl('/assets/stock/stock11.jpeg')],
    content: [
      {
        subtitle: "Restorations (Fillings)",
        text: "We restore teeth affected by decay or minor damage using advanced, aesthetic materials that blend seamlessly with your natural enamel—preserving structure while restoring strength and function."
      },
      {
        subtitle: "Crowns, Bridges & Implant Crowns",
        text: "Expertly crafted restorations designed to restore both beauty and durability. Crowns protect and strengthen compromised teeth, bridges elegantly replace missing teeth, and implant crowns are securely supported by dental implants to replicate the look, feel, and function of a natural tooth—ensuring a seamless, harmonious, and long-lasting result."
      },
      {
        subtitle: "Root Canal Treatment",
        text: "A precision-based procedure that preserves and restores teeth affected by deep decay or infection. By carefully removing damaged tissue, disinfecting, and sealing the canals, we eliminate discomfort while maintaining your natural tooth—often completed with a custom crown for optimal strength and aesthetics."
      }
    ]
  },
  {
    id: "replacement",
    title: "Tooth Replacement Solutions",
    images: [assetUrl('/assets/stock/stock10.jpeg'), assetUrl('/assets/stock/stock13.jpeg'), assetUrl('/assets/stock/stock14.jpeg')],
    content: [
      {
        subtitle: "Dental Implants",
        text: "A sophisticated, long-term solution for missing teeth. Implants replace the tooth root with a titanium post, supporting a custom crown that replicates the look, feel, and function of a natural tooth. Implant-retained dentures are removable dentures that securely “clip” onto dental implants, providing improved stability, comfort, and confidence compared to traditional dentures while still allowing the patient to remove them for cleaning. Implant-supported dentures, on the other hand, are a more advanced solution where the denture is fully supported by implants and is typically fixed in place or only removed by a dentist, offering superior stability, chewing efficiency, and a more natural feel that closely resembles natural teeth."
      },
      {
        subtitle: "Dentures & Full-Arch Solutions",
        text: "Our bespoke denture solutions are designed to restore function, facial support, and natural aesthetics with exceptional precision and comfort. Options include full and partial dentures to replace missing teeth while preserving remaining structures, as well as chrome cobalt dentures—crafted with a lightweight metal framework for enhanced strength, durability, and a refined fit. Flexi dentures offer a more flexible, comfortable, and discreet alternative, ideal for a natural feel and improved adaptability. Immediate dentures allow you to maintain a complete smile on the same day as tooth removal."
      }
    ]
  },
  {
    id: "ortho",
    title: "Orthodontics & Facial Development",
    images: [assetUrl('/assets/stock/stock1.jpeg')],
    content: [
      {
        subtitle: "Braces",
        text: "A proven orthodontic solution using advanced techniques to gradually align teeth, correct bite issues, and enhance both function and aesthetics."
      },
      {
        subtitle: "Clear Aligners",
        text: "A discreet and modern alternative to traditional braces. These virtually invisible, removable aligners offer flexibility and comfort while gradually creating a beautifully aligned smile."
      },
      {
        subtitle: "Orthopaedodontics (Interceptive orthodontics)",
        text: "Interceptive orthodontics uses fixed appliances to guide jaw growth and facial development in children and adolescents, promoting balance, harmony, and proper alignment. Includes removable appliances, Myobrace, and aligners for kids."
      }
    ]
  },
  {
    id: "aesthetic",
    title: "Aesthetic Dentistry",
    images: [assetUrl('/assets/stock/stock2.jpeg')],
    content: [
      {
        subtitle: "Teeth Whitening",
        text: "A professional brightening treatment that enhances the brilliance of your smile, delivering safe, even, and noticeably luminous results."
      },
      {
        subtitle: "Composite Bonding",
        text: "A refined cosmetic solution that enhances the shape, symmetry, and colour of your teeth using minimally invasive techniques for elegant, natural-looking results."
      }
    ]
  },
  {
    id: "surgical",
    title: "Surgical & Advanced Care",
    images: [assetUrl('/assets/stock/stock3.jpeg'), assetUrl('/assets/stock/stock4.jpeg')],
    content: [
      {
        subtitle: "Routine (Simple) Extractions",
        text: "A gentle and efficient procedure for removing teeth that can be easily accessed, performed with precision to ensure comfort and support smooth healing."
      },
      {
        subtitle: "Surgical Extractions",
        text: "A specialised, precision-driven procedure for removing impacted, broken, or deeply positioned teeth. Using advanced techniques, we minimise trauma, preserve surrounding structures, and ensure optimal healing—supported by tailored anaesthetic and sedation options for complete comfort."
      },
      {
        subtitle: "Frenectomies",
        text: "A precise, minimally invasive procedure to release restrictive soft tissue attachments, improving oral function and supporting speech, feeding, and orthodontic outcomes performed by a laser."
      },
      {
        subtitle: "Sedation and General Anesthesia",
        text: "Sedation dentistry relaxes the patient while they remain conscious and able to respond, ranging from mild relaxation to deeper sedation where the patient may feel drowsy and have little memory of the procedure, but still breathes independently and most performed in the dental chair. General anesthesia, on the other hand, places the patient in a completely unconscious state where they are fully asleep, unaware of the procedure, and require airway and vital sign monitoring throughout."
      }
    ]
  },
  {
    id: "paediatric",
    title: "Paediatric Dentistry",
    images: [assetUrl('/assets/stock/stock5.jpeg'), assetUrl('/assets/stock/stock7.jpeg')],
    content: [
      {
        subtitle: "Caring for Small Smiles",
        text: "Our paediatric dental care is thoughtfully designed to create a gentle, positive, and reassuring experience for children. With a focus on prevention, growth monitoring, and education, we foster healthy habits while ensuring every child feels comfortable, confident, and cared for. Procedures include cleaning, fissures sealants, fillings, extractions, pulpotomies, pulpectomies, frenectomies and orthopaedodontics."
      }
    ]
  },
  {
    id: "sleep",
    title: "Sleep Dentistry",
    images: ["https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop"],
    content: [
      {
        subtitle: "Airway & Sleep Management",
        text: "Sleep dentistry focuses on the management of sleep-related breathing disorders, most commonly snoring and mild to moderate obstructive sleep apnoea. This involves comprehensive sleep analysis to assess airway function and identify underlying causes, followed by the custom design of a mandibular advancement device. This appliance gently repositions the lower jaw during sleep to help keep the airway open, improving breathing, reducing snoring, and enhancing overall sleep quality in a comfortable, non-invasive way."
      }
    ]
  },
  {
    id: "referrals",
    title: "Referrals",
    images: [assetUrl('/assets/stock/stock6.jpeg')],
    content: [
      {
        subtitle: "Our Trusted Network",
        text: "We work closely with a trusted network of dental and medical specialists to ensure our patients receive the highest standard of comprehensive care. When advanced or highly specialised treatment is required, we provide seamless referrals to experienced professionals in fields such as oral surgery, orthodontics, periodontics, prosthodontics and maxillofacial care. Our approach ensures continuity of care, clear communication, and coordinated treatment planning."
      }
    ]
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen pb-24 bg-brand-bg-primary">
      {/* Services Navigation / Jump Links (Carousel) - Moved to top */}
      <div className="sticky top-16 z-40 bg-brand-surface/90 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 relative group">
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-surface shadow-md border border-brand-border flex items-center justify-center text-brand-btn-primary hover:bg-brand-bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex whitespace-nowrap gap-6 md:gap-10 py-5 overflow-x-auto scroll-smooth scrollbar-refined"
          >
            {serviceSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted hover:text-brand-btn-primary transition-all hover:scale-105"
              >
                {section.title.split(' & ')[0]}
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-surface shadow-md border border-brand-border flex items-center justify-center text-brand-btn-primary hover:bg-brand-bg-secondary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-brand-bg-secondary py-16 px-4 sm:px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent-light text-brand-text-primary text-sm font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Excellence in Dental Care
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-primary mb-8 tracking-tight">
            Our Dental Services
          </h1>
          <p className="text-xl text-brand-text-secondary font-light leading-relaxed italic">
            At our practice, dentistry is approached as both a science and an art. We are committed to delivering exceptional care through advanced techniques, refined precision, and a personalised experience—ensuring that every patient receives treatment that is as comfortable as it is transformative.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-32">
        {serviceSections.map((section, idx) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative group">
                <div className={`grid gap-4 ${
                  section.id === 'replacement' || section.id === 'restorative'
                    ? 'grid-cols-2 md:grid-cols-3' 
                    : (section.images.length > 1 ? (section.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3') : 'grid-cols-1')
                }`}>
                   {section.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx} 
                      className={`aspect-[16/10] bg-brand-bg-secondary rounded-[2rem] overflow-hidden shadow-xl shadow-brand-shadow relative group/img ${
                        (section.id === 'replacement' || section.id === 'restorative') && imgIdx === 2 ? 'col-span-2 md:col-span-1' : ''
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${section.title} ${imgIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-text-primary/10 group-hover/img:bg-transparent transition-colors duration-500" />
                    </div>
                  ))}
                </div>
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-btn-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-shadow z-10">
                  0{idx + 1}
                </div>
              </div>
            </div>

            <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
              <h2 className="text-3xl font-serif font-bold text-brand-text-primary mb-8 border-b border-brand-accent-light pb-4">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <h3 className="text-xl font-bold text-brand-text-secondary mb-3 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-bg-secondary flex items-center justify-center text-brand-btn-primary shrink-0">
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      {item.subtitle}
                    </h3>
                    <p className="text-brand-text-secondary font-light leading-relaxed pl-8">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Floating Call to Action */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-btn-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-shadow">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Comprehensive care starts here.</h2>
            <p className="text-brand-bg-primary/80 text-xl font-light mb-12 max-w-2xl mx-auto italic">
              "Every smile tells a story. Let us help you write the next chapter of yours."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-bg-primary text-brand-btn-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-surface transition-all shadow-xl active:scale-95"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
