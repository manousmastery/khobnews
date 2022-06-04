import React, { useEffect, useState } from 'react'
import { getRecentArticlesByRubrique } from '../services';
import { MainArticleGroup } from '../components';

const ArticleGroup = ({ lien, titre }) => {
    const [articles, setArticles] = useState([])
    useEffect(
        () => {
            if (lien)
                getRecentArticlesByRubrique(lien).then((result) => setArticles(result));
        },
        [lien]
    );

    return (
        <>
            {articles.length > 0 ? (
                <MainArticleGroup articles={articles} titre={titre}></MainArticleGroup>
            ) : ""}
        </>
    )
}

export default ArticleGroup;