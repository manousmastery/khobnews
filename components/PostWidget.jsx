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
		<div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>
				{lien ? 'Related articles' : 'Articles récents'}
			</h3>
			{relatedPosts.map((article) => (
				<div key={article.titre} className='flex items-center w-full mb-4'>
					<div className='w-16 flex-none'>
						<img
							alt={article.titre}
							height='60px'
							width='60px'
							className='align-middle rounded-full'
							src={article.image.url}
						/>
					</div>
					<div className='flex-grow ml-4'>
						<p className='text-gray-500 font-sx'>
							{moment(article.createdAt).locale('fr').format('MMM DD, YYYY')}
						</p>
						<Link href={`/article/${article.lien}`} key={article.titre} className='text-md'>
							{article.titre}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
