import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ rubriques, lien }) => {
	const [ relatedPosts, setRelatedPosts ] = useState([]);

	useEffect(
		() => {
			if (lien) {
				getSimilarPosts(rubriques, lien).then((result) => setRelatedPosts(result));
			} else {
				getRecentPosts().then((result) => setRelatedPosts(result));
			}
		},
		[ lien ]
	);
	return (
		<div className=''>
			<h3 className=''>{lien ? 'Related articles' : 'Articles récents'}</h3>
			{relatedPosts.map((article) => (
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

export default PostWidget;
