import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentArticles, getSimilarArticles } from '../services';

const ArticleWidget = ({ rubriques, lien }) => {
	const [relatedArticles, setRelatedArticles] = useState([]);

	useEffect(
		() => {
			if (lien) {
				getSimilarArticles(rubriques, lien).then((result) => setRelatedArticles(result));
			} else {
				getRecentArticles().then((result) => setRelatedArticles(result));
			}
		},
		[lien]
	);

	return (
		<div className='app__widget'>
			{relatedArticles.length > 0 ?
				(<span>{lien ? 'Vous pourriez aimer' : 'Articles récents'}</span>)
				:
				''
			}
			{relatedArticles.map((article) => (
				<Link href={`/article/${article.lien}`} key={article.titre}>
					<div className='app__widget--article'>
						<img
							alt={article.titre}
							height='60px'
							width='60px'
							className=''
							src={article.image.url}
						/>
						<p className='app__widget--titre'>{article.titre}</p>
						<p className='app__widget--date'>{moment(article.createdAt).locale('fr').fromNow(true)}</p>
					</div>
				</Link>))}
		</div>
	);
};

export default ArticleWidget;
