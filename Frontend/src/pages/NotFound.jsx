import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 5%'
      }}
    >
      <h1 style={{ fontSize: 'clamp(6rem, 15vw, 15rem)', lineHeight: 0.8, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: 'var(--color-charcoal-brown)' }}>
        Page Not Found
      </h2>
      <p style={{ opacity: 0.7, maxWidth: '500px', marginBottom: '3rem', fontSize: '1.125rem' }}>
        The requested academic section could not be located in this portfolio. It may have been moved or is currently being updated.
      </p>
      
      <Link 
        to="/" 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 2rem',
          border: '1px solid var(--color-charcoal-brown)',
          color: 'var(--color-charcoal-brown)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.875rem',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-charcoal-brown)';
          e.currentTarget.style.color = 'var(--color-warm-ivory)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--color-charcoal-brown)';
        }}
      >
        Return to Home
      </Link>
    </motion.div>
  );
}
