/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
}

export default nextConfig
