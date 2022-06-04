import React from 'react';

const ArticleGroupWrapper = (Component, classNames) => ({ ...props }) => (
    <div className={`app_container ${classNames}`}>
        <div className={`app__wrapper`}>
        <Component {...props} />
        </div>
    </div>
)
export default ArticleGroupWrapper