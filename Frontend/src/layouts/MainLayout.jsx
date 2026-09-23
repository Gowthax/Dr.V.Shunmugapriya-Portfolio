import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { facultyData } from '../data/facultyData';

export default function MainLayout() {
  
  useEffect(() => {
    // Update SEO
    if (facultyData.seo) {
      document.title = facultyData.seo.title || facultyData.name;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && facultyData.seo.description) {
        metaDescription.setAttribute('content', facultyData.seo.description);
      }
    }
  }, []);

  return (
    <>
      <style>{`
        :root {
          --color-primary: ${facultyData.theme.primary};
          --color-secondary: ${facultyData.theme.secondary};
          --color-accent: ${facultyData.theme.accent};
          --color-bg: ${facultyData.theme.background};
          --color-text: ${facultyData.theme.foreground};
          
          /* Fallback static colors for generic usage if needed */
          --color-warm-ivory: ${facultyData.theme.background};
          --color-charcoal-brown: ${facultyData.theme.foreground};
          --color-coral: ${facultyData.theme.primary};
          --color-muted-teal: ${facultyData.theme.secondary};
          --color-warm-sand: ${facultyData.theme.sand || '#E1C895'};
          --color-dusty-lavender: ${facultyData.theme.accent};
        }
      `}</style>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
