import React, { useEffect, useState } from 'react'
import { getRecentArticlesByRubrique } from '../services';
import { ArticleGroupWrapper } from '../wrapper';

const ArticleGroup = ({ lien, titre }) => {
    const [articles, setArticles] = useState([]);

    useEffect(
        () => {
            if (lien)
                getRecentArticlesByRubrique(lien).then((result) => setArticles(result));
        },
        [lien]
    );
    return (
        <>
            <div className='homeContainer--mainArticlesGroup'>
                <span className='homeContainer--articleGroupTitle'>{titre}</span>
                <div className='homeContainer--mainArticlesGroup--grid'>
                    {articles.map((article) => (
                        <div key={article.lien}>{article.titre}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticleGroupWrapper(ArticleGroup, '');