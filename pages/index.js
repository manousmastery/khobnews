import Head from 'next/head';
import { ArticleCard, ArticleWidget, Rubriques } from '../components';
import { getArticles } from '../services';

export default function Home({ articles }) {
	return (
		<div>Page</div>
		// <div className='container mx-auto px-10 mb-8'>
		// 	<Head>
		// 		<title>Khobnews</title>
		// 		<link rel='icon' href='/favicon.ico' />
		// 	</Head>
		// 	<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
		// 		<div className='lg:col-span-8 col-span-1'>
		// 			{articles.map((article) => <ArticleCard article={article.node} key={article.titre} />)}
		// 		</div>
		// 		<div className='lg:col-span-4 col-span-1'>
		// 			<div className='lg:sticky relative top-8'>
		// 				<ArticleWidget />
		// 				<Rubriques />
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export async function getStaticProps() {
	const articles = (await getArticles()) || [];
	return { props: { articles } };
}
