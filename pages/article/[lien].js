import React from 'react';
import { ArticleDetail, Rubriques, ArticleWidget } from '../../components';
import { getArticles, getArticle } from '../../services';

const ArticleDetails = ({ article }) => {
	return (
		<div className='container mx-auto px-10 mb-8'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='col-span-1 lg:col-span-8'>
					<ArticleDetail article={article} />
				</div>
				<div className='col-span-1 lg:col-span-4'>
					<div className='relative lg:sticky top-8'>
						<ArticleWidget
							lien={article.lien}
							rubriques={article.rubriques.map((rubrique) => rubrique.lien)}
						/>
						<Rubriques />
					</div>
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
