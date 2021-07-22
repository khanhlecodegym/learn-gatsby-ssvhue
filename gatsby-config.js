module.exports = {
  siteMetadata: {
    title: 'SSV Hue Sports'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
        options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    'gatsby-transformer-remark'
  ]
};
