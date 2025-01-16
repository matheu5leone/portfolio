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
  trailingSlash: true,
};

module.exports = nextConfig;
