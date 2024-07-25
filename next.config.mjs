// import createNextIntlPlugin from "next-intl/plugin";

//  const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     remotePatterns: [
//         { hostname: "liskartdev.indusnettechnologies.com" },
//     ],
// },};

// export default withNextIntl(nextConfig);



// module.exports = withNextIntl({
//     images: {
//       domains: ['liskartdev.indusnettechnologies.com'],
//     },
//   });
// import  createNextIntlPlugin  from 'next-intl/plugin';
// import withTM from 'next-transpile-modules';

// const withNextIntl = createNextIntlPlugin();

// const config = withNextIntl({
//   images: {
//     domains: ['liskartdev.indusnettechnologies.com'],
//   },
// });

// export default withTM(config);
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'liskartdev.indusnettechnologies.com' },
    ],
  },
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@core'] = path.join(__dirname, 'core');
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/src/Components/Login', // Ensure this path points to where LoginPage is rendered
      },
      // Add more rewrites if necessary
    ];
  },
};

export default withNextIntl(nextConfig);

