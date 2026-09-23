import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { facultyData } from '../data/facultyData';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = facultyData.navigation || [];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex', alignItems: 'center',
        padding: '0 5%',
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(247, 243, 236, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(48, 43, 41, 0.1)' : '1px solid transparent'
      }}>
        <div style={{ flex: 1 }}>
          <Link to="/" style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.5rem', 
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {facultyData.name}
          </Link>
        </div>
        
        <div style={{ display: 'flex', gap: '3rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: isActive ? 1 : 0.6,
                  fontWeight: isActive ? 600 : 400,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <span style={{ color: isActive ? 'var(--color-primary)' : 'inherit' }}>{link.num}</span>
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: 'var(--color-primary)'
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a href="#contact" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            opacity: 0.6
          }}>CONTACT</a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          style={{ 
            display: 'none', 
            background: 'var(--color-charcoal-brown)', 
            border: 'none', 
            cursor: 'pointer',
            padding: '0.75rem',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Menu size={24} color="var(--color-warm-ivory)" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'var(--color-bg)',
              zIndex: 101,
              display: 'flex', flexDirection: 'column',
              padding: '2rem 5%'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={32} color="var(--color-text)" />
              </button>
            </div>
            
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '2rem'
            }}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>HOME</Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
