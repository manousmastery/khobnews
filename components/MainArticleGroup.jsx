import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { ArticleGroupWrapper } from '../wrapper';
import { ArticleCard } from '../components'

const MainArticleGroup = ({ articles, titre }) => {
    const formatDate = (date) => {
        moment.locale('fr')
        return moment(date).fromNow();
    }

    return (
        <div>
            <div className='homeContainer--mainArticlesGroup'>
                <span className='homeContainer--articleGroupTitle'>{titre}</span>
                <div className='homeContainer--mainArticlesGroup--grid'>
                    {articles.map((article) => {
                        return (
                            // <ArticleCard article={article} />
                            <div className='article' key={article.lien}>
                                <div className='article--image'>
                                    <Link href={`/article/${article.lien}`}>
                                        <img src={article.image.url} alt={article.titre} />
                                    </Link>
                                </div>
                                <div className='article--rubrique'>
                                    <p>{article.rubriques[0].nom}</p>
                                </div>
                                <span className='article--title'>
                                    <Link href={`/article/${article.lien}`}>{article.titre}</Link>
                                </span>
                                <p className='article--content'>{article.extrait}</p>
                                <div className='article--information'>
                                    <p>{article.autheur.nom}</p>
                                    <span>{formatDate(article.createdAt)}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticleGroupWrapper(MainArticleGroup, '')