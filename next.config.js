/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/rs-communication',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/rs-communication',
  },
}

export default nextConfig
