import React from 'react';
import { ArticleDetail, Rubriques, ArticleWidget } from '../../components';
import { getArticles, getArticle } from '../../services';

const ArticleDetails = ({ article }) => {
	return (
		<div className=''>
			<div className=''>
				<div className=''>
					<ArticleDetail article={article} />
				</div>
				<div className=''>
					<div className=''>
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
