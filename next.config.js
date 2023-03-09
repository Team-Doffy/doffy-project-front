/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // compiler: {
  //   // styledComponents: true, // styled-components ssr 활성화
  //   // removeConsole: process.env.NODE_ENV === "production", // 배포 시 콘솔 제거
  // },
  
}

export default nextConfig;
