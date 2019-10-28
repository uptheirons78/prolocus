# PROLOCUS - Gatsby + Contentful Starter

This is a Gatsby personal Starter Theme built with the purpose to create websites for italian local tourism organization called "Pro Loco".
It can also be adapted for any kind of tourism websites.
Any kind of content is managed fetching data from Contentful.

## Getting started
```
$ git clone https://github.com/uptheirons78/prolocus.git
$ cd prolocus
$ npm install
$ npm start
```
❗ Remember: to run this project you need a Contentful account, a Space and Api Keys

## FEATURES AND TOOLS

#### Contentful
* Data from Contentful fetched with `gatsby-source-contentful` plugin;
* Create `.env.development` file and add two api keys from Contentful: CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN;
* Edit `gatsby-node.js` to create pages from Contentful Api and manage templates;

#### Styles
* styled-components;
* GlobalStyles and css reset in `src/components/styled/GlobalStyles.js`;
* `<ThemeProvider>` inside `src/components/layout.js` ;

#### Animations
* react-spring;
* react-visibility-sensor (to render animations on scroll);

#### Social Sharing
* react-share;

#### Icons
* react-icons;

#### Custom Fonts
* 'Roboto' regular, medium, bold and black;
* Font .woff2 files saved inside `src/static/` folder;
* Css @font-face inside `src/components/styled/GlobalStyles.js` to load it;

#### Favicon
* File favicon.png stored inside `src/static` folder;
* Change `icon: "src/static/favicon.png"` in `"gatsby-plugin-manifest"` inside `gatsby-config.js`;