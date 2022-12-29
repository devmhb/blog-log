import { gql, request } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(first: 50) {
        edges {
          node {
            excerpt
            title
            slug
            featuredPost
            author {
              name
              createdAt
              photo {
                url
              }
            }
            featuredImage {
              url
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
              raw
            }
            categories {
              name
            }
            featuredImage {
              url
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
            featuredImage {
              url
            }
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
            posts {
              title
              excerpt
              featuredImage {
                url
              }
              slug
            }
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
              slug
            }
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
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query, { slug });
  return result.authorsConnection;
};
