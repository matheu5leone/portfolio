const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProd && { output: 'export' }), // Habilita exportação estática
  basePath: '/portfolio',
  images: {
    unoptimized: true, // Desabilita otimização de imagens (necessário para exportação estática)
    loader: 'default',
    path: '/portfolio/', // Ajuste o caminho para as imagens com basePath
  },
  trailingSlash: true, // Adiciona barra no final das URLs
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: false, // Isso evita problemas com detecção automática
  },
};

module.exports = nextConfig;
