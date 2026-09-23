import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredPub, setHoveredPub] = useState(null);
  const location = useLocation();

  const conferenceYears = ['ALL', ...new Set(facultyData.conferences.map(c => c.year))].sort((a, b) => b === 'ALL' ? 1 : a === 'ALL' ? -1 : b - a);

  const filteredConferences = activeFilter === 'ALL' 
    ? facultyData.conferences 
    : facultyData.conferences.filter(c => c.year === activeFilter);

  // Deep linking scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight effect is handled by CSS animation in style block
          element.classList.add('highlight-flash');
        }, 500);
      }
    }
  }, [location]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '8rem' }}
    >
      
      {/* HERO SECTION */}
      <div className="container" style={{ marginBottom: '8rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
          PUBLICATIONS
        </p>
        <h1 style={{ 
          fontSize: 'clamp(4rem, 8vw, 10rem)', 
          lineHeight: 1,
          color: 'var(--color-charcoal-brown)',
          letterSpacing: '-0.02em'
        }}>
          Ideas become evidence.
        </h1>
      </div>

      {/* PUBLICATION ARCHIVE */}
      <div className="container" style={{ marginBottom: '10rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {facultyData.publications.map((pub, idx) => {
            const hasLink = pub.url || pub.doi;
            const targetUrl = pub.url ? pub.url : (pub.doi ? `https://doi.org/${pub.doi.replace('doi:', '')}` : null);
            
            const RowWrapper = hasLink ? 'a' : 'div';
            const rowProps = hasLink ? {
              href: targetUrl,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};

            return (
              <RowWrapper
                {...rowProps}
                key={pub.id || idx}
                id={pub.id}
                onMouseEnter={() => setHoveredPub(idx)}
                onMouseLeave={() => setHoveredPub(null)}
                style={{
                  borderTop: '1px solid rgba(48,43,41,0.2)',
                  borderBottom: idx === facultyData.publications.length - 1 ? '1px solid rgba(48,43,41,0.2)' : 'none',
                  padding: '3rem 2rem',
                  margin: '0 -2rem',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 150px',
                  gap: '2rem',
                  cursor: hasLink ? 'pointer' : 'default',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  backgroundColor: hoveredPub === idx ? 'rgba(247,243,236,1)' : 'transparent',
                  boxShadow: hoveredPub === idx ? '0 20px 40px rgba(48,43,41,0.05)' : 'none',
                  transform: hoveredPub === idx ? 'translateX(10px) scale(1.01)' : 'translateX(0) scale(1)',
                  zIndex: hoveredPub === idx ? 10 : 1,
                  position: 'relative',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                className={`pub-row ${pub.id ? 'anchor-target' : ''}`}
              >
                {/* Subtle background texture on hover */}
                <AnimatePresence>
                  {hoveredPub === idx && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--color-warm-sand) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }}
                    />
                  )}
                </AnimatePresence>
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2rem',
                  color: hoveredPub === idx ? 'var(--color-primary)' : 'inherit',
                  transition: 'color 0.3s ease'
                }}>
                  {pub.year}
                </div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.4, maxWidth: '900px', color: hoveredPub === idx ? 'var(--color-charcoal-brown)' : 'inherit' }}>
                    {pub.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: hoveredPub === idx ? 'var(--color-primary)' : 'var(--color-secondary)', marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>
                    {pub.journal}
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {pub.volume} • {pub.pages}
                  </p>
                  
                  <AnimatePresence>
                    {hoveredPub === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontSize: '0.875rem', opacity: 0.8, paddingTop: '1rem', borderTop: '1px dashed rgba(48,43,41,0.2)' }}>
                          <strong>Authors:</strong> {pub.authors}
                        </p>
                        {pub.doi && !pub.url && (
                          <div style={{ paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
                            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                              DOI: {pub.doi}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end',
                  opacity: hoveredPub === idx ? 1 : 0.2,
                  transform: hoveredPub === idx ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.3s ease',
                  color: 'var(--color-primary)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {hasLink ? (
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ opacity: hoveredPub === idx ? 1 : 0, transition: 'opacity 0.3s', whiteSpace: 'nowrap' }}>Open Paper</span> →
                    </span>
                  ) : (
                    <span>→</span>
                  )}
                </div>
              </RowWrapper>
            );
          })}
        </div>
      </div>

      {/* CONFERENCES SECTION */}
      {facultyData.conferences && facultyData.conferences.length > 0 && (
        <div className="container">
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.6, marginBottom: '4rem' }}>
            CONFERENCES & PRESENTATIONS
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '4rem' }} className="conf-grid">
            
            {/* Filters */}
            <div className="conf-filters" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderRight: '1px solid rgba(48,43,41,0.1)', paddingRight: '2rem' }}>
              {conferenceYears.map(year => (
                <button 
                  key={year}
                  onClick={() => setActiveFilter(year)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    color: activeFilter === year ? 'var(--color-primary)' : 'var(--color-charcoal-brown)',
                    opacity: activeFilter === year ? 1 : 0.5,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    paddingLeft: activeFilter === year ? '1rem' : '0'
                  }}
                >
                  {activeFilter === year && (
                    <motion.span 
                      layoutId="activeYearFilter"
                      style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} 
                    />
                  )}
                  {year}
                </button>
              ))}
            </div>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredConferences.map((conf, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={`${conf.title}-${idx}`}
                    style={{ borderBottom: '1px solid rgba(48,43,41,0.1)', paddingBottom: '2rem' }}
                  >
                    <p style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      {conf.year}
                    </p>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                      {conf.title}
                    </h4>
                    <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
                      {conf.event}
                    </p>
                    <p style={{ fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {conf.institution}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pub-row { grid-template-columns: 1fr !important; gap: 1rem !important; padding: 2rem 0 !important; margin: 0 !important; }
          .conf-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .conf-filters { 
            flex-direction: row !important; 
            flex-wrap: wrap !important; 
            border-right: none !important; 
            border-bottom: 1px solid rgba(48,43,41,0.1) !important; 
            padding-right: 0 !important; 
            padding-bottom: 1.5rem !important; 
          }
        }
        @keyframes highlightFlash {
          0% { background-color: rgba(229,111,104,0.2); }
          100% { background-color: transparent; }
        }
        .highlight-flash {
          animation: highlightFlash 2s ease-out;
        }
      `}</style>
    </motion.div>
  );
}
