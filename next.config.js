module.exports = {
    images: {
        domains: ['assets-global.website-files.com', "res.cloudinary.com","source.unsplash.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets-global.website-files.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}
