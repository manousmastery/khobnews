import React from 'react';
import { getArticlesByRubrique, getRubriques } from '../../services';
import { ArticleCard } from '../../components';

const Rubrique = ({ articles }) => {
	if (articles.length > 0)
		return (
			<div className=''>
				{articles.map((article) => <ArticleCard article={article} key={article.titre} />)}
			</div>
		);
	else return <p>Il n'y a aucun article dans cette rubrique.</p>;
};

export default Rubrique;

export async function getStaticProps({ params }) {
	const data = await getArticlesByRubrique(params.lien);
	return { props: { articles: data } };
}

export async function getStaticPaths() {
	const rubriques = await getRubriques();
	return {
		paths: rubriques.map(({ lien }) => ({ params: { lien } })),
		fallback: false
	};
}
