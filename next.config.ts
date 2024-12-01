/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita exportação estática
  images: {
    unoptimized: true, // Desabilita otimização de imagens (necessário para exportação estática)
  },
  basePath: '/portfolio', // Substitua pelo nome do seu repositório
  trailingSlash: true, // Adiciona barra no final das URLs
};

module.exports = nextConfig;
