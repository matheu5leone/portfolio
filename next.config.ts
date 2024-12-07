const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProd && { output: 'export' }), // Habilita exportação estática
  images: {
    unoptimized: true, // Desabilita otimização de imagens (necessário para exportação estática)
  },
  trailingSlash: true,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },// Adiciona barra no final das URLs
};

module.exports = nextConfig;
