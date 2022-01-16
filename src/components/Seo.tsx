import Head from "next/head";

export interface SeoProps {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string[];
};

export const Seo = ({ title = 'Caio Vinícius', description, ogImage, keywords }: SeoProps) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="title" content={ title } />
      <meta property="og:title" content={ title } />
      <meta property="twitter:title" content={ title } />

      { description && (
        <>
          <meta name="description" content={ description } />
          <meta property="og:description" content={ description } />
          <meta property="twitter:description" content={ description } />
        </>
      ) }

      { keywords && (
        <meta name="keywords" content={keywords.join(', ')} />
      ) }

      <meta property="og:type" content="website" />
      <meta property="og:url" content={ process.env.NEXT_PUBLIC_BASE_URL } />
      <meta property="twitter:url" content={ process.env.NEXT_PUBLIC_BASE_URL } />
      <meta property="twitter:card" content="summary_large_image" />

      { ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="twitter:image" content={ogImage} />
        </>
      ) }

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
};