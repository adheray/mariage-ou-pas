'use client';

import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID);
      (window as unknown as { gtag: typeof gtag }).gtag = gtag;
    };
  }, []);

  return null;
}
