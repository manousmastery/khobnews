import Head from 'next/head';
import { ArticleCard, ArticleWidget, Rubriques } from '../components';
import { getRecentArticles } from '../services';
import Link from 'next/link';

export default function Home({ articles }) {
	return (
		<div className='homeContainer'>
			<Head>
				<title>Pa'pyrus mag</title>
				<link rel='icon' href='/logo-feuille.png' />
			</Head>
			<div className='homeContainer--mainArticlesGroup'>
				<span className='homeContainer--articleGroupTitle'>À la une</span>
				<div className='homeContainer--mainArticlesGroup--grid'>
					{articles.map((article) => {
						return (
							<div className='article' key={article.lien}>
								<div className='article--image'>
									<Link href={`/article/${article.lien}`}>
										<img src={article.image.url} alt={article.titre} />
									</Link>
								</div>
								<div className='article--rubrique'>
									<p>{article.rubriques[0].nom}</p>
								</div>
								<span className='article--title'>
									<Link href={`/article/${article.lien}`}>{article.titre}</Link>
								</span>
								<p className='article--content'>{article.extrait}</p>
								<div className='article--information'>
									<p>{article.autheur.nom}</p>
									<span>Il y a une heure</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const articles = (await getRecentArticles()) || [];
	return { props: { articles } };
}
