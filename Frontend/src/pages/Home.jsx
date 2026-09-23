import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { facultyData } from '../data/facultyData';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [hoveredKeyword, setHoveredKeyword] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-height)'
      }} className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          height: '100%'
        }}>
          {/* Left: Text */}
          <div style={{ zIndex: 10 }}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-primary)',
                marginBottom: '1rem'
              }}
            >
              {facultyData.designation} <br/>
              {facultyData.department}
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: 'clamp(4rem, 6vw, 8rem)',
                lineHeight: 1,
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-charcoal-brown)'
              }}
            >
              DR. V.<br/>
              SHUNMUGA PRIYA
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                maxWidth: '550px',
                lineHeight: 1.6,
                fontWeight: 300,
                color: 'var(--color-charcoal-brown)'
              }}
            >
              Exploring <span 
                onMouseEnter={() => setHoveredKeyword('PHYTOCHEMICALS')}
                onMouseLeave={() => setHoveredKeyword(null)}
                style={{ color: hoveredKeyword === 'PHYTOCHEMICALS' ? 'var(--color-coral)' : 'inherit', transition: 'color 0.3s ease', cursor: 'default' }}
              >phytochemicals</span>, <span
                onMouseEnter={() => setHoveredKeyword('MOLECULAR BIOLOGY')}
                onMouseLeave={() => setHoveredKeyword(null)}
                style={{ color: hoveredKeyword === 'MOLECULAR BIOLOGY' ? 'var(--color-muted-teal)' : 'inherit', transition: 'color 0.3s ease', cursor: 'default' }}
              >molecular biology</span> and <span
                onMouseEnter={() => setHoveredKeyword('COMPUTATIONAL APPROACHES')}
                onMouseLeave={() => setHoveredKeyword(null)}
                style={{ color: hoveredKeyword === 'COMPUTATIONAL APPROACHES' ? 'var(--color-dusty-lavender)' : 'inherit', transition: 'color 0.3s ease', cursor: 'default' }}
              >computational approaches</span> toward <span
                onMouseEnter={() => setHoveredKeyword('DISEASE MANAGEMENT')}
                onMouseLeave={() => setHoveredKeyword(null)}
                style={{ color: hoveredKeyword === 'DISEASE MANAGEMENT' ? 'var(--color-coral)' : 'inherit', transition: 'color 0.3s ease', cursor: 'default', borderBottom: hoveredKeyword === 'DISEASE MANAGEMENT' ? '1px solid var(--color-coral)' : 'none' }}
              >disease management</span>.
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            style={{
              position: 'relative',
              height: 'min(60vh, 550px)',
              minHeight: '320px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'none'
            }}
            whileHover="hover"
          >
            {/* Scientific layer (nodes and lines) */}
            <div style={{
              position: 'absolute',
              width: '140%',
              height: '140%',
              background: 'radial-gradient(circle, rgba(229,111,104,0.05) 0%, rgba(247,243,236,0) 60%)',
              zIndex: 0,
              pointerEvents: 'none'
            }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3 }}>
                <path d="M 10 50 Q 50 10 90 50 T 170 50" stroke="var(--color-muted-teal)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="10" cy="50" r="1.5" fill="var(--color-charcoal-brown)" />
                <circle cx="90" cy="50" r="1.5" fill="var(--color-charcoal-brown)" />
                <circle cx="170" cy="50" r="1.5" fill="var(--color-muted-teal)" />
                <path d="M 80 80 Q 120 120 160 80 T 240 80" stroke="var(--color-dusty-lavender)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="80" cy="80" r="1" fill="var(--color-charcoal-brown)" />
              </svg>
            </div>
            
            <div style={{ position: 'relative', width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              {/* Archival offset background */}
              <motion.div 
                variants={{ hover: { x: -15, y: -15, rotate: -2 } }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  position: 'absolute',
                  top: '2%', left: '2%',
                  width: '96%', height: '96%',
                  backgroundColor: 'var(--color-soft-taupe)',
                  border: '1px solid var(--color-warm-sand)',
                  zIndex: 0
                }}
              />

              {/* Botanical / molecular line-art (visible on hover) */}
              <motion.div
                variants={{ hover: { opacity: 0.4 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '-10%', right: '-10%',
                  width: '50%', height: '50%',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              >
                <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-charcoal-brown)" strokeWidth="0.5">
                  <path d="M50 90 Q 70 60 40 40 T 10 10" />
                  <circle cx="40" cy="40" r="2" />
                  <circle cx="10" cy="10" r="1" />
                  <path d="M40 40 L 60 30" strokeDasharray="1 1" />
                  <circle cx="60" cy="30" r="1.5" />
                </svg>
              </motion.div>

              {/* Main Portrait */}
              <motion.img 
                src={facultyData.heroImage} 
                alt={`Portrait of ${facultyData.name}, ${facultyData.designation}`}
                variants={{ hover: { scale: 1.02, x: 5, y: 5 } }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  zIndex: 2,
                  filter: 'contrast(1.05) saturate(1.1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />

              {/* Registration Marks */}
              <div style={{ position: 'absolute', top: '-10px', left: '50%', width: '1px', height: '5px', backgroundColor: 'var(--color-charcoal-brown)', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: '-10px', left: '50%', width: '1px', height: '5px', backgroundColor: 'var(--color-charcoal-brown)', zIndex: 3 }} />
              <div style={{ position: 'absolute', left: '-10px', top: '50%', width: '5px', height: '1px', backgroundColor: 'var(--color-charcoal-brown)', zIndex: 3 }} />
              <div style={{ position: 'absolute', right: '-10px', top: '50%', width: '5px', height: '1px', backgroundColor: 'var(--color-charcoal-brown)', zIndex: 3 }} />

              {/* Corner Geometry */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '1px solid var(--color-primary)', borderLeft: '1px solid var(--color-primary)', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '1px solid var(--color-primary)', borderRight: '1px solid var(--color-primary)', zIndex: 3 }} />

              {/* Vertical Label */}
              <motion.div 
                className="hero-side-label"
                variants={{ hover: { x: 10, opacity: 1 } }}
                initial={{ opacity: 0.6 }}
                style={{
                  position: 'absolute',
                  right: '-2rem',
                  bottom: '10%',
                  writingMode: 'vertical-rl',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-charcoal-brown)',
                  zIndex: 3
                }}
              >
                {facultyData.portraitMetadata?.homeFrame || "BIOTECHNOLOGY · RESEARCH"}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH PATHWAY SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal-brown)', color: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <p style={{
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            color: 'var(--color-warm-sand)',
            marginBottom: '2rem'
          }}>
            Research at the intersection of
          </p>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            lineHeight: 1.2,
            marginBottom: '4rem',
            maxWidth: '800px'
          }}>
            Molecular Biology, Phytochemical Analysis, Bioinformatics, Drug Discovery, and Disease Management.
          </h2>

          <div className="research-pathway" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            borderTop: '1px solid rgba(247, 243, 236, 0.2)',
            paddingTop: '2rem'
          }}>
            {facultyData.researchPathway.map((step, index, arr) => {
              const title = typeof step === 'string' ? step : step.title;
              return (
                <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-sans)', 
                    letterSpacing: '0.1em', 
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    opacity: 0.9
                  }}>{title}</span>
                  {index < arr.length - 1 && (
                    <span style={{ color: 'var(--color-primary)' }}>→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC NUMBERS AS INTERACTIVE ANCHORS */}
      <section className="section container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem',
          textAlign: 'center'
        }}>
          {facultyData.stats.map((stat, i) => (
            <motion.div 
              key={i}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
              onClick={() => navigate(stat.link)}
              style={{ cursor: 'pointer', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 style={{ 
                fontSize: 'clamp(4rem, 6vw, 5rem)', 
                color: hoveredStat === i ? 'var(--color-primary)' : 'var(--color-charcoal-brown)',
                transition: 'color 0.3s ease',
                lineHeight: 1
              }}>
                {stat.value}
              </h3>
              <p className="text-label" style={{ marginTop: '1rem', letterSpacing: '0.1em' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          h1 {
            font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
            margin-bottom: 1rem !important;
          }
          .hero-side-label {
            display: none !important;
          }
          .research-pathway {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          .research-pathway > div > span:nth-child(2) {
            transform: rotate(90deg);
            display: inline-block;
          }
        }
      `}</style>
    </motion.div>
  );
}
