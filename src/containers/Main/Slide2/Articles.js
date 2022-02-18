import React from 'react'
import { ArticleItem } from './ArticleItem'
import { articlesArray } from './articlesArray'

export const Articles = () => {
    return (
        <>
            <div className="cart">
                {articlesArray.map(({ id, image, title, description }) => (
                    <div key={id} className="cart-content">
                        <ArticleItem
                            image={image}
                            title={title}
                            description={description}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
