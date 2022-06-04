import Head from 'next/head';
import React from 'react';
import { getArticlesByRubrique, getRubriques } from '../../services';
import { ArticleCard } from '../../components';

const Rubrique = ({ articles, lien }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<>
			<Head>
				<title>Pa'pyrus mag | {firstLetterUpperCase(lien)}</title>
				<link rel='icon' href='/logo-feuille.png' />
			</Head>
			<div >
				{articles.map((article) => <ArticleCard article={article} key={article.titre} />)}
			</div>
		</>
	)
};

export default Rubrique;

export async function getStaticProps({ params }) {
	const data = await getArticlesByRubrique(params.lien);
	return { props: { articles: data, lien: params.lien } };
}

export async function getStaticPaths() {
	const rubriques = await getRubriques();
	return {
		paths: rubriques.map(({ lien }) => ({ params: { lien } })),
		fallback: false
	};
}
