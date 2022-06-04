import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { ArticleGroupWrapper } from '../wrapper';

const MainArticleGroup = ({ articles, titre }) => {
    const formatDate = (date) => {
        moment.locale('fr')
        return moment(date).fromNow(true);
    }

    const [mainArticle, ...otherArticles] = articles;

    return (
        <div className='app__mainArticlesGroup'>
            <span className='app__mainArticlesGroup--title'>{titre}</span>
            <div className='app__mainArticlesGroup--articles'>
                <Link href={`/article/${mainArticle.lien}`}>
                    <div className='app__mainArticlesGroup--mainArticle not--portrait--only'>
                        <div className='article--image'>
                            <img src={mainArticle.image.url} alt={mainArticle.titre} />
                        </div>
                        <div className='article--info'>
                            <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p>
                            <span className='article--title title'>{mainArticle.titre}</span>
                            <p className='article--content'>{`${mainArticle.extrait}`}</p>
                            <div className='article--information'>
                                <p>{mainArticle.autheur.nom}</p>
                                <span>{formatDate(mainArticle.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='app__mainArticlesGroup--otherArticles'>
                    <Link href={`/article/${mainArticle.lien}`}>
                        <div className='app__mainArticlesGroup--article portrait--only'>
                            <div className='article--image'>
                                <img src={mainArticle.image.url} alt={mainArticle.titre} />
                            </div>
                            <div className='article--info'>
                                <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p>
                                <span className='article--title title'>{mainArticle.titre} </span>
                                <p className='article--content'>{`${mainArticle.extrait}${mainArticle.extrait}`}</p>
                                <div className='article--information'>
                                    <p>{mainArticle.autheur.nom}</p>
                                    <span>{formatDate(mainArticle.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {otherArticles.map((article) => (
                        <Link href={`/article/${article.lien}`} key={article.lien}>
                            <div className='app__mainArticlesGroup--article'>
                                <div className='article--image'>
                                    <img src={article.image.url} alt={article.titre} />
                                </div>
                                <div className='article--info'>
                                    <p className='article--rubrique'>{article.rubriques[0].nom}</p>
                                    <span className='article--title title'>{article.titre}</span>
                                    <div className='article--information'>
                                        <p>{article.autheur.nom}</p>
                                        <span>{formatDate(article.createdAt)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>))}
                </div>
            </div>
        </div>
    )
}

export default ArticleGroupWrapper(MainArticleGroup, '')