import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-lille.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      // Blog hub → moverz.fr
      // Blog articles → moverz.fr
      // Quartiers lille (6 pages)
      { source: '/lille/', destination: 'https://moverz.fr/lille/', permanent: true },
      { source: '/lille/centre/', destination: 'https://moverz.fr/lille/centre/', permanent: true },
      { source: '/lille/lomme/', destination: 'https://moverz.fr/lille/lomme/', permanent: true },
      { source: '/lille/moulins/', destination: 'https://moverz.fr/lille/moulins/', permanent: true },
      { source: '/lille/vieux-lille/', destination: 'https://moverz.fr/lille/vieux-lille/', permanent: true },
      { source: '/lille/wazemmes/', destination: 'https://moverz.fr/lille/wazemmes/', permanent: true },
      // Hub quartiers lille
      // Corridors depuis lille (6 pages)
      { source: '/lille-vers-espagne/', destination: 'https://moverz.fr/lille-vers-espagne/', permanent: true },
      { source: '/lille-vers-lyon/', destination: 'https://moverz.fr/lille-vers-lyon/', permanent: true },
      { source: '/lille-vers-marseille/', destination: 'https://moverz.fr/lille-vers-marseille/', permanent: true },
      { source: '/lille-vers-nantes/', destination: 'https://moverz.fr/lille-vers-nantes/', permanent: true },
      { source: '/lille-vers-paris/', destination: 'https://moverz.fr/lille-vers-paris/', permanent: true },
      { source: '/lille-vers-toulouse/', destination: 'https://moverz.fr/lille-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-lille/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-lille/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-lille/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
