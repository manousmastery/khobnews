import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import Link from 'next/link';

const ArticleCard = ({ article, className }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const formatDate = (date) => {
		moment.locale('fr')
		return firstLetterUpperCase(moment(date).fromNow(true));
	}

	return (
		<Link href={`/article/${article.lien}`}>
			<div className={`${className}`}>
				<div className='article--image'>
					<img src={article.image.url} alt={article.titre} />
				</div>
				<div className='article--info'>
					<span className='article--title title'>{article.titre}</span>
					<div className='article--information'>
						<p>{article.autheur.nom}</p>
						<span>{formatDate(article.createdAt)}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ArticleCard;
