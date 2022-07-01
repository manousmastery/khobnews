import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { ArticleGroupWrapper } from '../wrapper';

const MainArticleGroup = ({ articles, titre, className }) => {
    const formatDate = (date) => {
        moment.locale('fr')
        return moment(date).fromNow(true);
    }

    return (
        <div className={`app__mainArticlesGroup ${className}`}>
            <span className='app__mainArticlesGroup--title'>{titre}</span>
            <div className='app__mainArticlesGroup--articles'>
                {articles.map((article) => (
                    <Link href={`/article/${article.lien}`} key={article.lien}>
                        <div className='app__mainArticlesGroup--article'>
                            <div className='article--image'>
                                <img src={article.image.url} alt={article.titre} />
                            </div>
                            <div className='article--info'>
                                <p className='article--rubrique'>{article.rubriques[0].nom}</p>
                                <span className='article--title title'>{article.titre}</span>
                                <p className='article--content'>{`${article.extrait}`}</p>
                                <div className='article--information'>
                                    <p>{article.autheur.nom}</p>
                                    <span>{formatDate(article.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                    </Link>))}
            </div>
        </div>
    )
}

export default ArticleGroupWrapper(MainArticleGroup, '')