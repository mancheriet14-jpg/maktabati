// Dynamic SEO head management: title, meta description, canonical, robots,
// Open Graph, Twitter cards, and JSON-LD structured data per route.
// Uses a single useEffect to update document.head — no extra dependencies.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_DOMAIN = 'https://ourmaktaba.workers.dev';

interface SeoOptions {
  title: string;
  description?: string;
  /** Path relative to site root, e.g. /product/st-5. Defaults to current pathname. */
  path?: string;
  /** robots content. Defaults to 'index, follow'. */
  robots?: string;
  /** Open Graph image URL (absolute or relative). */
  image?: string;
  /** Structured data JSON-LD object(s) to inject. */
  jsonLd?: object | object[];
  /** og:type. Defaults to 'website'. */
  type?: string;
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(data: object | object[], id: string): void {
  const existing = document.head.querySelectorAll(`script[data-seo-jsonld="${id}"]`);
  existing.forEach((s) => s.remove());

  const items = Array.isArray(data) ? data : [data];
  for (const item of items) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', id);
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  }
}

function removeJsonLd(id: string): void {
  document.head.querySelectorAll(`script[data-seo-jsonld="${id}"]`).forEach((s) => s.remove());
}

export function useSeo(opts: SeoOptions): void {
  const location = useLocation();
  const path = opts.path ?? location.pathname;
  const canonical = `${SITE_DOMAIN}${path}`;
  const description = opts.description ?? 'مكتبتي متجر إلكتروني للقرطاسية والحقائب والكتب والأدوات المدرسية في الجزائر، مع توصيل إلى جميع الولايات.';
  const image = opts.image ?? `${SITE_DOMAIN}/img-webp/sliders/logo.webp`;
  const robots = opts.robots ?? 'index, follow';
  const ogType = opts.type ?? 'website';

  useEffect(() => {
    document.title = opts.title;

    upsertMeta('description', description);
    upsertMeta('robots', robots);
    upsertLink('canonical', canonical);

    // Open Graph
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:site_name', 'مكتبتي', 'property');
    upsertMeta('og:locale', 'ar_DZ', 'property');
    upsertMeta('og:title', opts.title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('og:image:alt', 'مكتبتي', 'property');

    // Twitter
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', opts.title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);

    // Structured data
    removeJsonLd('route');
    if (opts.jsonLd) {
      upsertJsonLd(opts.jsonLd, 'route');
    }

    return () => {
      removeJsonLd('route');
    };
  }, [opts.title, description, robots, canonical, image, ogType, opts.jsonLd]);
}

export { SITE_DOMAIN };
