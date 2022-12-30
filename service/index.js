import { gql, request } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const requestHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
};

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

  const result = await request(graphqlApi, query, {}, requestHeaders);
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
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query, { slug }, requestHeaders);
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
  const result = await request(graphqlApi, query, {}, requestHeaders);
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
              id
              author {
                name
                photo {
                  url
                }
              }
              categories {
                name
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query, { slug }, requestHeaders);
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
  const result = await request(graphqlApi, query, {}, requestHeaders);
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
            description
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
              id
              author {
                name
                photo {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query, { slug }, requestHeaders);
  return result.authorsConnection;
};

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: publishedAt_ASC, last: 2) {
        title
        featuredImage {
          url
        }
        slug
        id
        excerpt
        categories {
          name
        }
        author {
          photo {
            url
          }
          name
        }
      }
    }
  `;
  const result = await request(graphqlApi, query, {}, requestHeaders);
  return result.posts;
};

export const getRelatedPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        id
      }
    }
  `;

  const result = await request(
    graphqlApi,
    query,
    { categories, slug },
    requestHeaders
  );

  return result.posts;
};
