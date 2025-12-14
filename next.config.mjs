/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add this configuration object
    images: {
      // This setting tells Next.js to allow ALL image domains, 
      // which includes local files in the public directory.
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '**',
        },
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;