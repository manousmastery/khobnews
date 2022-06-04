import Head from 'next/head';
import { ArticleGroup, MainArticleGroup } from '../components';
import { getRecentArticles, getRubriques } from '../services';
import { motion } from 'framer-motion';

export default function Home({ mainArticles, rubriques }) {
	return (
		<div className='homeContainer'>
			<Head>
				<title>Pa'pyrus mag</title>
				<link rel='icon' href='/logo-feuille.png' />
			</Head>
			<motion.div
				whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
				transition={{ duration: 0.5 }}
			>
				<MainArticleGroup articles={mainArticles} titre='À la une' />
			</motion.div>
			{rubriques.map((rubrique) => (
				<motion.div
					whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
					transition={{ duration: 0.5 }}
					key={rubrique.lien}
				>
					<ArticleGroup lien={rubrique.lien} titre={rubrique.nom} />
				</motion.div>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const [mainArticles, rubriques] = await Promise.all([(await getRecentArticles() || []), (await getRubriques() || [])])
	return { props: { mainArticles, rubriques } };
}