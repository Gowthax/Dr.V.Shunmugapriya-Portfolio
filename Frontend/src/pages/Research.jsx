import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { facultyData } from '../data/facultyData';

export default function Research() {
  const [activeDomain, setActiveDomain] = useState(null);
  
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
      transition={{ duration: 0.8 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '8rem' }}
    >
      
      {/* HERO SECTION */}
      <div className="container" style={{ marginBottom: '8rem', position: 'relative' }}>
        {/* Subtle background environment */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '140%', opacity: 0.15, pointerEvents: 'none', zIndex: -1 }}>
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <path d="M 0 50 Q 25 10 50 50 T 100 50" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
              <path d="M 0 70 Q 35 30 70 70 T 100 30" fill="none" stroke="var(--color-muted-teal)" strokeWidth="0.5" />
              <circle cx="25" cy="30" r="1" fill="var(--color-charcoal-brown)" />
              <circle cx="75" cy="70" r="1" fill="var(--color-charcoal-brown)" />
              <polygon points="50,10 60,30 40,30" fill="none" stroke="var(--color-charcoal-brown)" strokeWidth="0.5" />
           </svg>
        </div>

        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
          RESEARCH
        </p>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 5vw, 6rem)', 
          lineHeight: 1.1,
          maxWidth: '900px',
          color: 'var(--color-charcoal-brown)'
        }}>
          From phytochemical investigation to computational drug discovery.
        </h1>
      </div>

      {/* RESEARCH UNIVERSE */}
      <div style={{
        backgroundColor: 'var(--color-charcoal-brown)',
        color: 'var(--color-warm-ivory)',
        padding: '8rem 0',
        marginBottom: '10rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract scientific background */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%', height: '150%',
          background: 'radial-gradient(circle, rgba(93, 166, 165, 0.05) 0%, rgba(48, 43, 41, 0) 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ display: 'inline-block', position: 'relative' }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-warm-sand)', position: 'relative', zIndex: 2 }}>
                {facultyData.researchDomains.central}
              </h2>
              {/* Central animated ring */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '140%', border: '1px dashed var(--color-primary)', borderRadius: '50%', opacity: 0.5, zIndex: 1, animation: 'rotate 30s linear infinite' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '140%', height: '160%', border: '1px solid rgba(229,111,104,0.2)', borderRadius: '50%', zIndex: 1, animation: 'rotate 45s linear reverse infinite' }}></div>
            </motion.div>
            <p style={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginTop: '2rem' }}>Central Research Focus</p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {facultyData.researchDomains.nodes.map((node, idx) => {
              const isActive = activeDomain === node.name;
              const isDimmed = activeDomain !== null && activeDomain !== node.name;
              
              return (
                <motion.div 
                  key={node.name}
                  onMouseEnter={() => setActiveDomain(node.name)}
                  onMouseLeave={() => setActiveDomain(null)}
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                    opacity: isDimmed ? 0.4 : 1,
                    borderColor: isActive ? 'var(--color-primary)' : 'rgba(247, 243, 236, 0.2)'
                  }}
                  style={{
                    border: '1px solid rgba(247, 243, 236, 0.2)',
                    padding: '2rem',
                    borderRadius: '24px',
                    width: 'calc(33.333% - 2rem)',
                    minWidth: '300px',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'rgba(247, 243, 236, 0.05)' : 'rgba(247, 243, 236, 0.02)',
                    backdropFilter: 'blur(5px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="research-node"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-muted-teal)', transition: 'background-color 0.3s' }}></div>
                    <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.05em' }}>{node.name}</h3>
                  </div>
                  
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(247,243,236,0.1)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {node.related.map(rel => (
                        <span key={rel} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: 'rgba(247,243,236,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', color: 'var(--color-warm-sand)' }}>
                          {rel}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PHD CASE STUDY & PATHWAY */}
      <div className="container" style={{ marginBottom: '10rem' }} ref={containerRef}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }} className="phd-grid">
          <div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-sans)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Research Case Study
            </h3>
            <p style={{ opacity: 0.6, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>
              Anna University • {facultyData.stats.find(s => s.label.includes('PH.D.'))?.value || '2021'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.1em' }}>Target</span>
                <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>Matrix Metalloproteinases</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.1em' }}>Approach</span>
                <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>In-silico + In-vitro</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.1em' }}>Molecular Focus</span>
                <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>Phytoconstituents</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.1em' }}>Application</span>
                <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>Cancer Metastasis</span>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <h4 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.3, marginBottom: '6rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(48,43,41,0.1)' }}>
              Matrix metalloproteinase inhibition property of phytoconstituents for the management of cancer metastasis through in-silico and in-vitro approaches.
            </h4>
            
            {/* Animated Pathway */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
              {/* Dynamic Line */}
              <motion.div style={{
                position: 'absolute',
                left: '23px',
                top: '20px',
                width: '2px',
                height: 'calc(100% - 40px)',
                backgroundColor: 'var(--color-primary)',
                scaleY: scrollYProgress,
                transformOrigin: 'top',
                zIndex: 0
              }} />

              {facultyData.researchPathway && facultyData.researchPathway.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '3rem', position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
                  <motion.div 
                    initial={{ backgroundColor: 'var(--color-warm-ivory)', borderColor: 'var(--color-muted-teal)' }}
                    whileInView={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '48px', height: '48px', 
                      borderRadius: '50%', 
                      border: '2px solid var(--color-muted-teal)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal-brown)',
                      backgroundColor: 'var(--color-warm-ivory)',
                      flexShrink: 0
                    }}>
                    {String(idx + 1).padStart(2, '0')}
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0.3, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ paddingTop: '0.5rem' }}
                  >
                    <h5 style={{ fontSize: '1.5rem', letterSpacing: '0.05em', color: 'var(--color-charcoal-brown)', marginBottom: '0.5rem' }}>{step.title}</h5>
                    <p style={{ opacity: 0.7, fontFamily: 'var(--font-sans)' }}>{step.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PATENT INNOVATION */}
      {facultyData.patents && facultyData.patents.length > 0 && facultyData.patents.map(patent => (
        <div key={patent.applicationNo} style={{
          backgroundColor: 'var(--color-charcoal-brown)',
          color: 'var(--color-warm-ivory)',
          padding: '10rem 0',
          marginBottom: '10rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle particle system */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}>
            <svg width="100%" height="100%">
               {[...Array(20)].map((_, i) => (
                 <circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r={Math.random() * 2 + 1} fill="var(--color-primary)" />
               ))}
               <path d="M 10% 20% Q 30% 50% 80% 90%" stroke="var(--color-secondary)" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
          </div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem', color: 'var(--color-warm-sand)' }}>
                  INNOVATION & PATENT
                </p>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontFamily: 'var(--font-serif)', lineHeight: 0.9, marginBottom: '4rem', color: 'var(--color-primary)', maxWidth: '1000px' }}>
                  {patent.title}
                </h2>
              </div>
              
              <div className="patent-details" style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap', borderTop: '1px solid rgba(247,243,236,0.1)', paddingTop: '4rem' }}>
                {patent.applicationNo && (
                  <div>
                    <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>Application No.</p>
                    <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>{patent.applicationNo}</p>
                  </div>
                )}
                {patent.filed && (
                  <div>
                    <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>Filed</p>
                    <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>{patent.filed}</p>
                  </div>
                )}
                {patent.published && (
                  <div>
                    <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>Published</p>
                    <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-secondary)' }}>{patent.published}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* FUNDED PROJECT */}
      {facultyData.fundedProjects && facultyData.fundedProjects.length > 0 && facultyData.fundedProjects.map((project, idx) => (
        <div key={idx} className="container" style={{ marginBottom: '4rem' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
            FUNDED RESEARCH
          </p>
          <div style={{ borderTop: '2px solid var(--color-charcoal-brown)', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ maxWidth: '600px' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.source}</h3>
                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-secondary)' }}>{project.programme}</p>
              </div>
              <div style={{ textAlign: 'right', minWidth: '200px' }}>
                <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>{project.year}</p>
                <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>{project.amount} • {project.status}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .phd-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .research-node { width: 100% !important; min-width: 100% !important; }
          .patent-details { gap: 2rem !important; padding-top: 2rem !important; }
        }
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
}
