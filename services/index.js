import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query GetPosts {
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

export const getPost = async (lien) => {
	const query = gql`
		query GetPost($lien: String!) {
			article(where: { lien: $lien }) {
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
				contenu {
					raw
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query, { lien });

	return result.article;
};

export const getRecentPosts = async () => {
	const query = gql`
  query GetPostDetails(){
    articles(
      orderBy: createdAt_ASC
      last: 3
    ){
      createdAt
      extrait
      lien
      titre
      image {
        url
      }
    }
  }`;

	const result = await request(graphqlAPI, query);

	return result.articles;
};

export const getSimilarPosts = async (rubriques, lien) => {
	const query = gql`
		query GetPostDetails($lien: String!, $rubriques: [String!]) {
			articles(
				where: { lien_not: $lien, AND: { rubriques_some: { lien_in: $rubriques } } }
				last: 3
			) {
				createdAt
				extrait
				lien
				titre
				image {
					url
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { rubriques, lien });

	return result.articles;
};

export const getCateogries = async () => {
	const query = gql`
		query GetCategories {
			rubriques {
				nom
				lien
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.rubriques;
};
