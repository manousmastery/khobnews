import React from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';

const ArticleDetail = ({ article }) => {
	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className='app__articleDetail'>
			<span className='app__articleDetail--titre'>{article.titre}</span>
			<span className='app__articleDetail--autheur'>Par {article.autheur.nom}</span>
			<span className='app__articleDetail--date'>
				{`${firstLetterUpperCase(moment(article.createdAt).locale('fr').fromNow()
				)}, ${firstLetterUpperCase(
					moment(article.createdAt).locale('fr').format('MMM DD, YYYY')
				)}` }
			</span>
			<img src={article.image.url} alt={article.titre} className='' />
			<RichText content={article.contenu.raw} />
		</div>
	);
};

export default ArticleDetail;
