import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  ogImage?: string;
};

export const Seo = ({ title = 'Caio Vinícius', description, ogImage }: SeoProps) => {
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

      <meta property="og:type" content="website" />
      <meta property="og:url" content={ process.env.NEXT_PUBLIC_BASE_URL } />
      <meta property="twitter:url" content={ process.env.NEXT_PUBLIC_BASE_URL } />
      <meta property="twitter:card" content="summary_large_image" />

      { ogImage && (
        <>
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
          <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        </>
      ) }

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
};