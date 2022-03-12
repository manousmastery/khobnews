import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import 'moment/locale/fr';

const ArticleCard = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className=''>
			<div className=''>
				<img src={article.image.url} alt={article.titre} className='' />
			</div>
			<h1 className=''>
				<Link href={`/article/${article.lien}`}>{article.titre}</Link>
			</h1>
			<div className=''>
				<div className=''>
					<p className=''>@{article.autheur.nom}</p>
					<p className=''>.</p>
					<div className=''>
						<span className=''>
							{firstLetterUpperCase(moment(article.createdAt).locale('fr').format('MMM DD, YYYY'))}
						</span>
					</div>
				</div>
				<p className=''>{article.extrait}</p>
				<div className=''>
					<Link href={`/article/${article.lien}`}>
						<span className=''>Continuer à lire</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
