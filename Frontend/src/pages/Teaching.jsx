import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { facultyData } from '../data/facultyData';

export default function Teaching() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  const [hoveredLab, setHoveredLab] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '8rem', overflowX: 'hidden' }}
    >
      
      {/* HERO SECTION */}
      <div className="container" style={{ marginBottom: '8rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
          TEACHING
        </p>
        <h1 style={{ 
          fontSize: 'clamp(4rem, 8vw, 8rem)', 
          lineHeight: 1.1,
          maxWidth: '900px',
          color: 'var(--color-charcoal-brown)'
        }}>
          Making complex science understandable.
        </h1>
      </div>

      {/* KINETIC TYPOGRAPHY SCROLL */}
      <div ref={containerRef} style={{ padding: '6rem 0', backgroundColor: 'var(--color-charcoal-brown)', color: 'var(--color-warm-ivory)', marginBottom: '10rem', overflow: 'hidden' }}>
        <motion.div style={{ x: xPos, display: 'flex', whiteSpace: 'nowrap', gap: '4rem' }}>
          {facultyData.teachingCategories && facultyData.teachingCategories.map(cat => cat.subjects).flat().concat(facultyData.teachingCategories.map(cat => cat.subjects).flat()).map((subject, idx) => (
            <span key={idx} style={{ 
              fontSize: 'clamp(4rem, 10vw, 12rem)', 
              fontFamily: 'var(--font-serif)',
              WebkitTextStroke: '1px rgba(247, 243, 236, 0.3)',
              color: 'transparent'
            }}>
              {subject}
            </span>
          ))}
        </motion.div>
      </div>

      {/* CURRENT INSTITUTION */}
      <div className="container current-institution-block" style={{ marginBottom: '8rem', display: 'flex', alignItems: 'center', gap: '3rem', borderTop: '1px solid rgba(48,43,41,0.1)', paddingTop: '4rem' }}>
        {(() => {
          const currentExp = facultyData.experience[0];
          const instData = facultyData.institutions.find(i => i.name === currentExp.institution);
          
          return (
            <>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-white)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  padding: '1rem',
                  flexShrink: 0
                }}
              >
                {instData && instData.logo && (
                  <img src={instData.logo} alt={instData.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                )}
              </motion.div>
              
              <div>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.5rem' }}>
                  Current Position • {currentExp.year}
                </p>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-brown)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  {currentExp.role}
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                  {currentExp.institution}
                </p>
              </div>
            </>
          );
        })()}
      </div>

      <div className="container teaching-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', marginBottom: '10rem' }}>
        
        {facultyData.teachingCategories && facultyData.teachingCategories.map((category) => (
          <div key={category.title}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '4rem' }}>
              {category.title}
            </h2>
            
            {category.type === 'practical' ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {category.subjects.map((subject, idx) => (
                  <div 
                    key={subject}
                    onMouseEnter={() => setHoveredLab(idx)}
                    onMouseLeave={() => setHoveredLab(null)}
                    style={{ 
                      borderBottom: '1px solid rgba(48,43,41,0.1)', 
                      padding: '2rem 0',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    <motion.div
                      animate={{ x: hoveredLab === idx ? 20 : 0, color: hoveredLab === idx ? 'var(--color-muted-teal)' : 'var(--color-charcoal-brown)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                      {subject}
                    </motion.div>
                    
                    {hoveredLab === idx && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          opacity: 0.5
                        }}
                      >
                        Practical • Experimental
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {category.subjects.map((subject, idx) => (
                  <motion.div 
                    key={subject}
                    whileHover={{ x: 10 }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '1rem',
                      borderBottom: '1px solid rgba(48,43,41,0.05)',
                      paddingBottom: '1rem',
                      cursor: 'default'
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-sans)', opacity: 0.5 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', lineHeight: 1.2, color: 'var(--color-charcoal-brown)' }}>
                      {subject}
                    </h3>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>

      {/* ACADEMIC CONTRIBUTIONS & MENTORING */}
      <div style={{ backgroundColor: 'var(--color-soft-taupe)', padding: '10rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }} className="teaching-grid">
          
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
              STUDENT MENTORING
            </p>
            <h3 style={{ fontSize: 'clamp(6rem, 12vw, 15rem)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', lineHeight: 0.8 }}>
              {facultyData.stats.projectsGuided}
            </h3>
            <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginTop: '2rem' }}>
              UG Projects Guided
            </p>
          </div>

          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
              ACADEMIC CONTRIBUTIONS
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {facultyData.responsibilities.map((resp, idx) => {
                const parts = resp.split(' In-charge');
                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '1rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>{parts[0]}</span>
                    <span style={{ fontSize: '0.875rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>In-charge</span>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .teaching-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .current-institution-block { flex-direction: column !important; text-align: center !important; gap: 1.5rem !important; }
        }
      `}</style>
    </motion.div>
  );
}
