import Head from 'next/head';
import { ArticleGroup, MainArticleGroup } from '../components';
import { getRecentArticles, getRubriques } from '../services';

export default function Home({ mainArticles, rubriques }) {
	return (
		<div className='homeContainer'>
			<Head>
				<title>Pa'pyrus mag</title>
				<link rel='icon' href='/logo-feuille.png' />
			</Head>
			<MainArticleGroup articles={mainArticles} titre='À la une' />
			{rubriques.map((rubrique) => (
				<ArticleGroup lien={rubrique.lien} titre={rubrique.nom} key={rubrique.lien} />
			))}
		</div>
	);
}

export async function getStaticProps() {
	const [mainArticles, rubriques] = await Promise.all([(await getRecentArticles() || []), (await getRubriques() || [])])
	return { props: { mainArticles, rubriques } };
}