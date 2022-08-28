import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `Virtual Lolly App`,
              short_name: `virtual_lolly`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#3f4ab0`,
              display: `standalone`,
              icon: `src/images/lolly.svg`,
          },
      },
      {
          resolve: `gatsby-plugin-offline`,
          options: {
              precachePages: [`/`],
          },
      },
      {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                  include: /\.inline\.svg$/
              }
          }
      },

      'gatsby-plugin-top-layout',
      'gatsby-plugin-mui-emotion',
  ],
}

export default config
