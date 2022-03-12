import React from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';

const ArticleDetail = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className=''>
			<div className=''>
				<img src={article.image.url} alt={article.titre} className='' />
			</div>
			<div className=''>
				<div className=''>
					<div className=''>
						<p className=''>@{article.autheur.nom}</p>
						<p className=''>.</p>
						<div className=''>
							<span className=''>
								{firstLetterUpperCase(
									moment(article.createdAt).locale('fr').format('MMM DD, YYYY')
								)}
							</span>
						</div>
					</div>
				</div>
				<h1 className=''>{article.titre}</h1>
				<RichText content={article.contenu.raw} />
			</div>
		</div>
	);
};

export default ArticleDetail;
