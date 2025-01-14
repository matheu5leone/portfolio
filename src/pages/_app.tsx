import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <>
      <Head>
        <title>Matheus Leone - Portfolio</title>
        <link rel="icon" href="/portfolio/coroa.png" />
        <meta property="og:title" content="Matheus Leone - Portfolio" />
        <meta property="og:description" content="Learn more about me as a professional." />
        <meta property="og:image" content="/portfolio/coroa.png" />
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              console.log('Google Analytics event sent:', arguments); // Log no console
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${ANALYTICS}');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
