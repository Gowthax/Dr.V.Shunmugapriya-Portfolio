import { facultyData } from '../data/facultyData';

export default function Footer() {
  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--color-charcoal-brown)',
      color: 'var(--color-warm-ivory)',
      padding: '6rem 5% 4rem',
      marginTop: '8rem'
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem'
      }}>
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-warm-sand)' }}>
            {facultyData.name}
          </h3>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>{facultyData.designation}</p>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>{facultyData.department}</p>
          <p style={{ opacity: 0.8 }}>{facultyData.institution}</p>
        </div>
        
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.875rem', 
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            color: 'var(--color-muted-teal)'
          }}>Contact</h4>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
            <a href={`mailto:${facultyData.contact.email}`} style={{ textDecoration: 'underline' }}>
              {facultyData.contact.email}
            </a>
          </p>
          {facultyData.contact.alternateEmail && (
            <p style={{ opacity: 0.8 }}>
              <a href={`mailto:${facultyData.contact.alternateEmail}`} style={{ textDecoration: 'underline' }}>
                {facultyData.contact.alternateEmail}
              </a>
            </p>
          )}
        </div>
        
        {facultyData.socialLinks && facultyData.socialLinks.length > 0 && (
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.875rem', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              color: 'var(--color-muted-teal)'
            }}>Profiles</h4>
            {facultyData.socialLinks.map(link => (
              <p key={link.platform} style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  {link.platform}
                </a>
              </p>
            ))}
          </div>
        )}
      </div>
      
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(247, 243, 236, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        opacity: 0.6,
        fontSize: '0.875rem'
      }}>
        <p>&copy; {new Date().getFullYear()} {facultyData.name}. All rights reserved.</p>
        <p>Premium Academic Portfolio</p>
      </div>
    </footer>
  );
}
