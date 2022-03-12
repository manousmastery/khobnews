import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getArticles = async () => {
	const query = gql`
		query GetArticles {
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

export const getArticle = async (lien) => {
	const query = gql`
		query GetArticle($lien: String!) {
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

export const getArticlesByRubrique = async (lien) => {
	const query = gql`
		query getArticlesByRubrique($lien: String!) {
			articles(where: { rubriques_some: { lien: $lien } }) {
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
	`;
	const result = await request(graphqlAPI, query, { lien });

	return result.articles;
};

export const getRecentArticles = async () => {
	const query = gql`
  query GetArticleDetails(){
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

export const getSimilarArticles = async (rubriques, lien) => {
	const query = gql`
		query GetArticleDetails($lien: String!, $rubriques: [String!]) {
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

export const getRubriques = async () => {
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
