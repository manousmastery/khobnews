import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      articlesConnection {
        edges {
          node {
            autheur {
              nom
              id
            }
            createdAt
            extrait
            lien
            titre
            image {
              url
            }
            rubriques {
              nom
              lien
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.articlesConnection.edges;
};
