import Head from "next/head";

const HeadTagForSEO = ({
  title,
  description,
  keywords = [],
  openGraph,
  twitter,
  structuredData,
}) => {
  const keywordContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  const ogImage = openGraph?.images?.[0]?.url || "";
  const ogAlt = openGraph?.images?.[0]?.alt || "";

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <link rel="canonical" href={openGraph?.url} />
      <meta charSet="utf-8" />

      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta
        property="og:description"
        content={openGraph?.description || description}
      />
      <meta property="og:url" content={openGraph?.url} />
      <meta property="og:type" content={openGraph?.type || "website"} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogAlt && <meta property="og:image:alt" content={ogAlt} />}

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content={twitter?.card || "summary_large_image"}
      />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta
        name="twitter:description"
        content={twitter?.description || description}
      />
      <meta name="twitter:image" content={twitter?.images[0] || ogImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default HeadTagForSEO;
