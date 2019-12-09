let env = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: `Pro Loco Nepi`,
    description: `Il sito della Pro Loco Nepi. Ti invitiamo a visitare questo meraviglioso paese della Tuscia immerso nel verde e situato a pochi chilometri da Roma.`,
    author: `@UpTheIrons1978`,
    twitterHandle: "@UpTheIrons1978",
    url: "https://proloconepi.netlify.com/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `green`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `proloco nepi`,
        short_name: `proloco-nepi`,
        start_url: `/`,
        background_color: `#096432`,
        theme_color: `#096432`,
        display: `minimal-ui`,
        icon: `src/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
