import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { ArticleGroupWrapper } from '../wrapper';
import { ArticleCard } from '../components'

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
                <div className='app__mainArticlesGroup--mainArticle not--portrait--only'>
                    <div className='article--image'>
                        <Link href={`/article/${mainArticle.lien}`}>
                            <img src={mainArticle.image.url} alt={mainArticle.titre} />
                        </Link>
                        {/* <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p> */}
                    </div>
                    <div className='article--info'>
                        <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p>
                        <span className='article--title title'>
                            <Link href={`/article/${mainArticle.lien}`}>{mainArticle.titre}</Link>
                        </span>
                        <p className='article--content'>{`${mainArticle.extrait}${mainArticle.extrait}`}</p>
                        <div className='article--information'>
                            <p>{mainArticle.autheur.nom}</p>
                            <span>{formatDate(mainArticle.createdAt)}</span>
                        </div>
                    </div>
                </div>
                <div className='app__mainArticlesGroup--otherArticles'>
                    <div className='app__mainArticlesGroup--article portrait--only'>
                        <div className='article--image'>
                            <Link href={`/article/${mainArticle.lien}`}>
                                <img src={mainArticle.image.url} alt={mainArticle.titre} />
                            </Link>
                            {/* <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p> */}
                        </div>
                        <div className='article--info'>
                            <p className='article--rubrique'>{mainArticle.rubriques[0].nom}</p>
                            <span className='article--title title'>
                                <Link href={`/article/${mainArticle.lien}`}>{mainArticle.titre}</Link>
                            </span>
                            <p className='article--content'>{`${mainArticle.extrait}${mainArticle.extrait}`}</p>
                            <div className='article--information'>
                                <p>{mainArticle.autheur.nom}</p>
                                <span>{formatDate(mainArticle.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                    {otherArticles.map((article) => (
                        <div className='app__mainArticlesGroup--article' key={article.lien}>
                            <div className='article--image'>
                                <Link href={`/article/${article.lien}`}>
                                    <img src={article.image.url} alt={article.titre} />
                                </Link>
                                {/* <p className='article--rubrique'>{article.rubriques[0].nom}</p> */}
                            </div>

                            <div className='article--info'>
                                <p className='article--rubrique'>{article.rubriques[0].nom}</p>
                                <span className='article--title title'>
                                    <Link href={`/article/${article.lien}`}>{article.titre}</Link>
                                </span>
                                {/* <p className='article--content'>{article.extrait}</p> */}
                                <div className='article--information'>
                                    <p>{article.autheur.nom}</p>
                                    <span>{formatDate(article.createdAt)}</span>
                                </div>

                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default ArticleGroupWrapper(MainArticleGroup, '')