import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mariage-ou-pas.fr';

  return [
    {
      url: base,
      lastModified: '2026-04-24',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: '2026-04-24',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/blog/mariage-vs-pacs-fiscalite`,
      lastModified: '2026-04-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/blog/economies-impots-mariage-exemples`,
      lastModified: '2026-04-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/blog/quotient-conjugal-comment-ca-marche`,
      lastModified: '2026-04-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
