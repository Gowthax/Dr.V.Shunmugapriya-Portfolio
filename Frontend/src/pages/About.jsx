import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { facultyData } from '../data/facultyData';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="container" 
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '8rem' }}
    >
      
      {/* HEADER SECTION WITH SECONDARY IDENTITY */}
      <div style={{ marginBottom: '6rem', position: 'relative' }}>
        {/* Floating Identity System */}
        <motion.div 
          className="about-side-identity"
          style={{ position: 'absolute', right: '-5%', top: '0', display: 'flex', flexDirection: 'column', gap: '3rem', opacity: 0.15, textTransform: 'uppercase', fontFamily: 'var(--font-sans)', letterSpacing: '0.3em', fontSize: '1rem', fontWeight: 600, pointerEvents: 'none', writingMode: 'vertical-rl' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ color: 'var(--color-charcoal-brown)' }}>RESEARCHER</span>
          <span style={{ color: 'var(--color-primary)' }}>EDUCATOR</span>
          <span style={{ color: 'var(--color-secondary)' }}>BIOLOGIST</span>
          <span style={{ color: 'var(--color-charcoal-brown)' }}>MENTOR</span>
        </motion.div>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 5vw, 6rem)', 
          lineHeight: 1.1,
          maxWidth: '800px',
          color: 'var(--color-charcoal-brown)',
          marginBottom: '2rem'
        }}>
          An academic journey shaped by biotechnology, research and scientific inquiry.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', opacity: 0.6 }}>
          ABOUT
        </p>
      </div>

      {/* ASYMMETRIC BIOGRAPHY */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'start',
        marginBottom: '10rem'
      }} className="about-grid">
        
        {/* Left: Portrait */}
        <motion.div 
          style={{ position: 'relative', y: useTransform(scrollYProgress, [0, 1], [0, -100]), cursor: 'none' }}
          whileHover="hover"
        >
           {/* Layered paper backing */}
           <motion.div 
             variants={{ hover: { rotate: 0, scale: 1.02 } }}
             transition={{ type: 'spring', stiffness: 200, damping: 20 }}
             style={{
               position: 'absolute',
               top: '-3%', left: '-3%',
               width: '106%', height: '106%',
               backgroundColor: 'var(--color-warm-ivory)',
               border: '1px solid rgba(48,43,41,0.1)',
               boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
               zIndex: -2,
               transform: 'rotate(-2deg)'
             }}
           />
           <div style={{
              position: 'absolute',
              top: '-5%', left: '-5%',
              width: '110%', height: '110%',
              backgroundColor: 'var(--color-soft-taupe)',
              zIndex: -3,
              transform: 'rotate(1deg)',
              border: '1px solid var(--color-warm-sand)'
           }}></div>
           
           {/* Thin brass/sand-colored line */}
           <motion.div
             variants={{ hover: { scale: 1.05, opacity: 1 } }}
             style={{
               position: 'absolute',
               top: '1rem', left: '1rem', right: '1rem', bottom: '1rem',
               border: '1px solid var(--color-warm-sand)',
               zIndex: 1,
               pointerEvents: 'none',
               opacity: 0.7
             }}
           />

           <motion.img 
            src={facultyData.profileImage} 
            alt="Dr. V. Shunmuga Priya" 
            style={{ 
              width: '100%', 
              height: 'auto',
              filter: 'contrast(1.05) sepia(0.1)',
              objectFit: 'cover',
              boxShadow: '0 20px 40px rgba(48,43,41,0.15)',
              position: 'relative',
              zIndex: 0
            }} 
          />

          {/* Archival caption plate */}
          <motion.div 
            className="about-caption-plate"
            variants={{ hover: { y: 5 } }}
            style={{ 
              position: 'absolute', 
              bottom: '-2rem', 
              right: '2rem', 
              backgroundColor: 'var(--color-charcoal-brown)', 
              color: 'var(--color-warm-ivory)',
              padding: '1rem 1.5rem', 
              border: '1px solid var(--color-warm-sand)', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              zIndex: 2
            }}
          >
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-warm-sand)' }}>
              {facultyData.portraitMetadata?.aboutFrame || "FACULTY PORTRAIT BIO/VP-01"}
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', letterSpacing: '0.05em' }}>
              {facultyData.name}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {facultyData.department}
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Bio details */}
        <div style={{ paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
            {facultyData.name}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
            <div style={{ borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.25rem' }}>Designation</span>
              {facultyData.designation}
            </div>
            <div style={{ borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.25rem' }}>Department</span>
              {facultyData.department}
            </div>
            <div style={{ borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.25rem' }}>Institution</span>
              {facultyData.institution}
            </div>
            <div style={{ borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.25rem' }}>Specialization</span>
              {facultyData.specialization.join(', ')}
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div ref={containerRef} style={{ marginBottom: '10rem', position: 'relative' }}>
        <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4rem', opacity: 0.8 }}>
          Academic Progression
        </h3>
        
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline Line */}
          <motion.div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '2px',
            height: '100%',
            backgroundColor: 'var(--color-primary)',
            scaleY: scrollYProgress,
            transformOrigin: 'top'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {facultyData.education.map((edu, idx) => {
              const institutionData = facultyData.institutions.find(i => i.name === edu.institution);
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0.3, scale: 0.95, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: false, margin: "-200px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{ position: 'relative', cursor: 'default' }}
                >
                  <motion.div 
                    initial={{ backgroundColor: 'var(--color-warm-ivory)', scale: 1 }}
                    whileInView={{ backgroundColor: 'var(--color-primary)', scale: 1.5 }}
                    variants={{ hover: { scale: 1.8, backgroundColor: 'var(--color-coral)' } }}
                    viewport={{ once: false, margin: "-200px" }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute',
                      left: '-2.4rem',
                      top: '0.5rem',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      border: '2px solid var(--color-primary)'
                    }} 
                  />
                  
                  <h4 style={{ fontSize: '3.5rem', color: 'var(--color-charcoal-brown)', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {edu.year}
                  </h4>
                  <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </p>
                  
                  <motion.div 
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.7 }}
                    variants={{ hover: { opacity: 1, color: 'var(--color-primary)' } }}
                  >
                    {institutionData && institutionData.logo && (
                      <motion.img 
                        src={institutionData.logo} 
                        alt={edu.institution} 
                        style={{ height: '24px', width: 'auto', filter: 'grayscale(100%) opacity(0.8)' }}
                        variants={{ hover: { filter: 'grayscale(0%) opacity(1)' } }}
                      />
                    )}
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {edu.institution}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
            
            {facultyData.experience.map((exp, idx) => {
              const institutionData = facultyData.institutions.find(i => i.name === exp.institution);
              return (
                <motion.div 
                  key={`exp-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', cursor: 'default' }}
                >
                  <motion.div 
                    variants={{ hover: { scale: 1.5 } }}
                    style={{
                      position: 'absolute',
                      left: '-2.35rem',
                      top: '0.5rem',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)'
                    }} 
                  />
                  
                  <h4 style={{ fontSize: '3rem', color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {exp.year}
                  </h4>
                  <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                    {exp.role}
                  </p>
                  
                  <motion.div 
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.7 }}
                    variants={{ hover: { opacity: 1, color: 'var(--color-primary)' } }}
                  >
                    {institutionData && institutionData.logo && (
                      <motion.img 
                        src={institutionData.logo} 
                        alt={exp.institution} 
                        style={{ height: '24px', width: 'auto', filter: 'grayscale(100%) opacity(0.8)' }}
                        variants={{ hover: { filter: 'grayscale(0%) opacity(1)' } }}
                      />
                    )}
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {exp.institution}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RESEARCH IDENTITY */}
      <div style={{ marginBottom: '10rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
          Research Identity
        </p>
        
        <div className="research-identity-list" style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { title: 'Phytochemical Analysis', terms: ['phytoconstituents', 'in-vitro approaches'] },
            { title: 'Drug Discovery', terms: ['molecular biology', 'in-silico analysis'] },
            { title: 'Disease Management', terms: ['bioinformatics', 'cancer biology'] }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              whileHover="hover"
              initial="rest"
              style={{
                fontSize: 'clamp(3rem, 6vw, 7rem)',
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.1,
                borderBottom: '1px solid rgba(48,43,41,0.1)',
                padding: '2rem 0',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <motion.span variants={{
                rest: { x: 0, color: 'var(--color-charcoal-brown)' },
                hover: { x: 20, color: 'var(--color-primary)' }
              }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                {item.title}
              </motion.span>
              
              <motion.div variants={{
                rest: { opacity: 0, x: -10 },
                hover: { opacity: 1, x: 0 }
              }} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                 {/* Molecular Line SVG */}
                 <svg width="40" height="2" style={{ marginRight: '1rem' }}>
                    <path d="M 0 1 L 40 1" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="2 2" />
                 </svg>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-end', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>
                    {item.terms.map(term => <span key={term}>{term}</span>)}
                 </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBJECT COMPETENCY */}
      <div>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
          Core Competencies
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {facultyData.subjectCompetency.map((comp, idx) => (
            <div key={comp} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-muted-teal)' }}>
                {String(idx + 1).padStart(2, '0')} —
              </span>
              <span style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.02em' }}>
                {comp}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-side-identity { display: none !important; }
          .about-caption-plate { right: 0.5rem !important; bottom: -1.5rem !important; padding: 0.75rem 1rem !important; }
        }
        .research-identity-list > div:hover .hover-target {
          opacity: 0.5 !important;
        }
      `}</style>
    </motion.div>
  );
}
