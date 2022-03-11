import React from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';

const PostDetail = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
			<div className='relative overflow-hidden shadow-md mb-6'>
				<img
					src={article.image.url}
					alt={article.titre}
					className='object-top h-full w-full rounded-t-lg'
				/>
			</div>
			<div className='px-4 lg:px-0'>
				<div className='flex items-center mb-8w-full'>
					<div className='flex items-center justify-center mb-4 w-full lg:w-auto mr-8'>
						<p className='inline align-middle text-gray-400 ml-2 text-lg'>@{article.autheur.nom}</p>
						<p className='px-2 pb-1 font-xl font-bold'>.</p>
						<div className='font-medium text-gray-700'>
							<span className='align-middle text-gray-400'>
								{firstLetterUpperCase(
									moment(article.createdAt).locale('fr').format('MMM DD, YYYY')
								)}
							</span>
						</div>
					</div>
				</div>
				<h1 className='mb-8 text-3xl font-semibold'>{article.titre}</h1>
				<RichText content={article.contenu.raw} />
			</div>
		</div>
	);
};

export default PostDetail;
