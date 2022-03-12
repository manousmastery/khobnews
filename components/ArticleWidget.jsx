import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentArticles, getSimilarArticles } from '../services';

const ArticleWidget = ({ rubriques, lien }) => {
	const [ relatedArticles, setRelatedArticles ] = useState([]);

	useEffect(
		() => {
			if (lien) {
				getSimilarArticles(rubriques, lien).then((result) => setRelatedArticles(result));
			} else {
				getRecentArticles().then((result) => setRelatedArticles(result));
			}
		},
		[ lien ]
	);
	return (
		<div className=''>
			<h3 className=''>{lien ? 'Related articles' : 'Articles récents'}</h3>
			{relatedArticles.map((article) => (
				<div key={article.titre} className=''>
					<div className=''>
						<img
							alt={article.titre}
							height='60px'
							width='60px'
							className=''
							src={article.image.url}
						/>
					</div>
					<div className=''>
						<p className=''>{moment(article.createdAt).locale('fr').format('MMM DD, YYYY')}</p>
						<Link href={`/article/${article.lien}`} key={article.titre} className=''>
							{article.titre}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ArticleWidget;
