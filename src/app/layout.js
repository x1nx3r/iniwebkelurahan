import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kelurahan Kemayoran - Portal Resmi UMKM Surabaya",
    template: "%s | Kelurahan Kemayoran",
  },
  description:
    "Portal resmi Kelurahan Kemayoran, Surabaya. Temukan informasi layanan publik, profil kelurahan, dan direktori UMKM lokal. Dukung ekonomi lokal dengan berbelanja dari UMKM sekitar.",
  keywords: [
    "kelurahan kemayoran",
    "surabaya",
    "umkm kemayoran",
    "layanan publik",
    "krembangan",
    "umkm surabaya",
    "usaha lokal",
    "ekonomi lokal",
    "pemerintahan kelurahan",
  ],
  authors: [{ name: "KKN SDGs Kelompok 11 UPN Veteran Jawa Timur" }],
  creator: "KKN SDGs Kelompok 11",
  publisher: "Kelurahan Kemayoran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kemayoran-sby.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kemayoran-sby.vercel.app",
    siteName: "Kelurahan Kemayoran",
    title: "Kelurahan Kemayoran - Portal Resmi UMKM Surabaya",
    description:
      "Portal resmi Kelurahan Kemayoran, Surabaya. Temukan informasi layanan publik, profil kelurahan, dan direktori UMKM lokal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kelurahan Kemayoran Surabaya - Portal UMKM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelurahan Kemayoran - Portal Resmi UMKM Surabaya",
    description:
      "Portal resmi Kelurahan Kemayoran, Surabaya. Temukan informasi layanan publik dan direktori UMKM lokal.",
    images: ["/og-image.jpg"],
    creator: "@kemayoransby",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "government",
  classification: "Government Website",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "Portal Kelurahan Kemayoran",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Kelurahan Kemayoran",
    "application-name": "Kelurahan Kemayoran",
    "msapplication-TileColor": "#10b981",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Separate viewport export (this fixes the warnings)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#059669" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Government Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Kelurahan Kemayoran",
              alternateName: "Kemayoran Village Office",
              description:
                "Kelurahan Kemayoran, Kecamatan Krembangan, Surabaya",
              url: "https://kemayoran-sby.vercel.app",
              logo: "https://kemayoran-sby.vercel.app/logo.png",
              image: "https://kemayoran-sby.vercel.app/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Krembangan Baru No.49 009, RT.009/RW.01",
                addressLocality: "Kemayoran",
                addressRegion: "Krembangan",
                addressCountry: "ID",
                postalCode: "60176",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-31-3522396",
                contactType: "customer service",
                availableLanguage: "Indonesian",
              },
              email: "info@kemayoran-sby.go.id",
              telephone: "+62-31-3522396",
              openingHours: "Mo-Fr 07:00-16:00",
              areaServed: {
                "@type": "Place",
                name: "Kemayoran, Surabaya",
              },
              parentOrganization: {
                "@type": "GovernmentOrganization",
                name: "Kecamatan Krembangan",
              },
              sameAs: [],
            }),
          }}
        />

        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Surabaya" />
        <meta name="geo.position" content="-7.2574719;112.7520883" />
        <meta name="ICBM" content="-7.2574719, 112.7520883" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Cache control */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Fixed Google Analytics using Next.js Script component */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
