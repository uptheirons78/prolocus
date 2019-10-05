// import React from "react";
// import Layout from "../components/Layout";
// import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishedDate(formatString: "DD MM YYYY")
//       body {
//         json
//       }
//     }
//   }
// `;

// const Blog = ({ data }) => {
//   const options = {
//     renderNode: {
//       "embedded-asset-block": node => {
//         const alt = node.data.target.fields.title["en-US"];
//         const url = node.data.target.fields.file["en-US"].url;
//         return <img alt={alt} src={url} />;
//       },
//     },
//   };
//   const { title, publishedDate: date, body } = data.contentfulBlogPost;
//   return (
//     <Layout>
//       <h1>{title}</h1>
//       <p>Published: {date}</p>
//       {documentToReactComponents(body.json, options)}
//     </Layout>
//   );
// };

// export default Blog;
