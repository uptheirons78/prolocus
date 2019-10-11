const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get Templates Path
  const eventiTemplate = path.resolve("./src/templates/eventiTemplate.js");
  const monumentiTemplate = path.resolve(
    "./src/templates/monumentiTemplate.js"
  );
  const ristorantiTemplate = path.resolve(
    "./src/templates/ristorantiTemplate.js"
  );

  // Get Data from Contentful

  /** Data from "Eventi" */
  const eventiResponse = await graphql(`
    query {
      allContentfulEventi {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  /** Data from "Monumenti" */
  const monumentiResponse = await graphql(`
    query {
      allContentfulMonumenti {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  /** Data from "Ristoranti" */
  const ristorantiResponse = await graphql(`
    query {
      allContentfulRistoranti {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  /**
   * Managing all responses from Promises to create single pages
   */
  eventiResponse.data.allContentfulEventi.edges.forEach(edge => {
    createPage({
      component: eventiTemplate,
      path: `/eventi/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  monumentiResponse.data.allContentfulMonumenti.edges.forEach(edge => {
    createPage({
      component: monumentiTemplate,
      path: `/cosa-vedere/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  ristorantiResponse.data.allContentfulRistoranti.edges.forEach(edge => {
    createPage({
      component: ristorantiTemplate,
      path: `/dove-mangiare/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
