const title = "Cuisinomicon 👨‍🍳";
const description = "Recettes de cuisine et de cocktails cabalistiques";
const siteUrl = "https://cuisinomicon.com";

const SEO = {
  title: title,
  description: description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url: "https://cuisinomicon.com/static/og-banner.jpg",
        width: 1920,
        height: 1280,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: siteUrl,
    cardType: "summary_large_image",
  },
};

export default SEO;
