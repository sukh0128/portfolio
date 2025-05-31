"use client";

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Initialize gtag
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(command: string, targetId: string, config?: Record<string, unknown>) {
        window.dataLayer.push([command, targetId, config]);
      }
      gtag('js', new Date().toString());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      });
      
      // Make gtag globally available
      window.gtag = gtag;
    }
  }, [gaId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 