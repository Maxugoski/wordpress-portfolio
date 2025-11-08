import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  type?: string;
  imageUrl?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  type = 'website',
  imageUrl = '/wordpress-portfolio/og-image.jpg' // Add a default OG image
}: SEOHeadProps) => {
  const baseUrl = 'https://maxugoski.github.io';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={`${baseUrl}/wordpress-portfolio/`} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${imageUrl}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${baseUrl}/wordpress-portfolio/`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${imageUrl}`} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ugochukwu Ogoke",
          "url": baseUrl,
          "sameAs": [],
          "jobTitle": "WordPress Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "description": "WordPress Developer with 6+ years of experience specializing in custom theme and plugin development."
        })}
      </script>
    </Helmet>
  );
};