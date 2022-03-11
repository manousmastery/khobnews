import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import 'moment/locale/fr';

const PostCard = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
			<div className='relative overflow-hidden shadow-md pb-80 mb-6'>
				<img
					src={article.image.url}
					alt={article.titre}
					className='object-center absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
				/>
			</div>
			<h1 className='transition duration-700 text-center cursor-pointer hover:text-pink-700 text-3xl font-semibold'>
				<Link href={`/article/${article.lien}`}>{article.titre}</Link>
			</h1>
			<div className='block text-center items-center justify-center mb-8 w-full'>
				<div className='flex items-center justify-center mb-4 w-full lg:w-auto mr-8'>
					<p className='inline align-middle text-gray-400 ml-2 text-lg'>@{article.autheur.nom}</p>
					<p className='px-2 pb-1 font-xl font-bold'>.</p>
					<div className='font-medium text-gray-700'>
						<span className='align-middle text-gray-400'>
							{firstLetterUpperCase(moment(article.createdAt).locale('fr').format('MMM DD, YYYY'))}
						</span>
					</div>
				</div>
				<p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
					{article.extrait}
				</p>
				<div className='text-center'>
					<Link href={`/article/${article.lien}`}>
						<span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 tet-lg  font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
							Continuer à lire
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
