import React from 'react'
import { Articles } from './Articles'
import { MainArticlesHeader } from './MainArticlesHeader'

export const MainArticles = () => {
    return (
        <div className="container-articles">
            <MainArticlesHeader />
            <Articles />
        </div>
    )
}
