'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = 'cookie_consent';

type Consent = 'accepted' | 'refused' | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (consent !== 'accepted' || !GA_ID) return;

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID, { anonymize_ip: true });
    };
  }, [consent]);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setConsent('refused');
    setVisible(false);
  }

  return (
    <>

      {/* Bandeau cookies */}
      {visible && (
        <div
          role="dialog"
          aria-label="Consentement cookies"
          className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-sm text-slate-600 flex-1 leading-snug">
              Ce site utilise Google Analytics pour mesurer son audience.{' '}
              <Link href="/confidentialite" className="underline text-slate-700 hover:text-slate-900">
                En savoir plus
              </Link>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={refuse}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg transition-all"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] rounded-lg transition-all"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
