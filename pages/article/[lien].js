import Head from 'next/head';
import React from 'react';
import { ArticleDetail, Rubriques, ArticleWidget } from '../../components';
import { getArticles, getArticle } from '../../services';

const ArticleDetails = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div>
			<Head>
				<title>Pa'pyrus mag | {firstLetterUpperCase(article.titre)}</title>
				<link rel='icon' href='/logo-feuille.png' />
			</Head>
			<div className='app__article'>
				<div className='app__article--article'>
					<ArticleDetail article={article}/>
				</div>
				<div className='app__article--infoSection'>
					<ArticleWidget
						lien={article.lien}
						rubriques={article.rubriques.map((rubrique) => rubrique.lien)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ArticleDetails;

export async function getStaticProps({ params }) {
	const data = await getArticle(params.lien);
	return { props: { article: data } };
}

export async function getStaticPaths() {
	const articles = await getArticles();
	return {
		paths: articles.map(({ node: { lien } }) => ({ params: { lien } })),
		fallback: false
	};
}
