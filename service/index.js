import { gql, request } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            excerpt
            title
            slug
            featuredPost
            author {
              name
              createdAt
            }
            categories {
              name
            }
            stage
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.postsConnection;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      postsConnection(where: { slug: $slug }) {
        edges {
          node {
            featuredPost
            excerpt
            slug
            title
            updatedAt
            createdAt
            author {
              bio
              name
              id
            }
            content {
              text
            }
            categories {
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query, { slug });
  return result.postsConnection;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categoriesConnection {
        edges {
          node {
            name
            slug
            createdAt
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.categoriesConnection;
};

export const getCategory = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      categoriesConnection(where: { slug: $slug }) {
        edges {
          node {
            name
            id
            slug
            createdAt
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query, { slug });
  return result.categoriesConnection;
};

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authorsConnection {
        edges {
          node {
            bio
            name
            slug
            photo {
              url
            }
            posts {
              title
            }
            subheading
            subio
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.authorsConnection;
};

export const getAuthor = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      authorsConnection(where: { slug: $slug }) {
        edges {
          node {
            name
            bio
            photo {
              url
            }
            posts {
              categories {
                name
              }
              createdAt
              excerpt
              featuredImage {
                url
              }
              title
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query, { slug });
  return result.authorsConnection;
};
