import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { facultyData } from '../data/facultyData';
import { motion } from 'framer-motion';
import StaggeredMenu from './StaggeredMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = facultyData.navigation || [];
  
  // Format items for StaggeredMenu
  const staggeredItems = [
    { label: 'HOME', ariaLabel: 'Go to home page', link: '/' },
    ...navLinks.map(link => ({
      label: link.name,
      ariaLabel: `Go to ${link.name}`,
      link: link.path
    }))
  ];
  
  const socialItems = facultyData.socialLinks?.map(social => ({
    label: social.platform,
    link: social.url
  })) || [];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav" style={{
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
            letterSpacing: '0.05em',
            color: 'var(--color-text)'
          }}>
            {facultyData.name}
          </Link>
        </div>
        
        <div style={{ display: 'flex', gap: '3rem' }}>
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
                  transition: 'opacity 0.3s ease',
                  color: 'var(--color-text)'
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
        </div>
      </nav>

      {/* Mobile Navigation (StaggeredMenu) */}
      <div className="mobile-nav">
        <StaggeredMenu
          isFixed={true}
          position="left"
          items={staggeredItems}
          socialItems={socialItems}
          displaySocials={socialItems.length > 0}
          displayItemNumbering={true}
          menuButtonColor="var(--color-text)"
          openMenuButtonColor="var(--color-text)"
          changeMenuColorOnOpen={true}
          colors={['var(--color-warm-ivory)', 'var(--color-soft-taupe)']}
          logoUrl="" // Will be hidden or replaced
          accentColor="var(--color-primary)"
        />
        {/* We overlay our own logo on mobile to match style since StaggeredMenu expects an image URL but we just use text */}
        <Link to="/" className="mobile-nav-logo" style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.25rem', 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--color-text)',
            position: 'fixed',
            top: '2em',
            right: '2em',
            textAlign: 'right',
            zIndex: 41 // Above staggered menu header which is 20
          }}>
            {facultyData.name}
        </Link>
      </div>

      <style>{`
        /* StaggeredMenu resets for this project */
        .mobile-nav .sm-logo { display: none !important; }
        .mobile-nav .staggered-menu-panel { background: var(--color-warm-ivory) !important; color: var(--color-text) !important; }
        .mobile-nav .sm-panel-item { color: var(--color-text) !important; font-family: var(--font-serif); text-transform: uppercase; }
        .mobile-nav .sm-panel-item:hover { color: var(--color-primary) !important; }
        .mobile-nav .sm-panel-title { color: var(--color-text) !important; }
        .mobile-nav .sm-socials-title { color: var(--color-primary) !important; }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
