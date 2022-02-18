import React from 'react'
import { ArticleItem } from './ArticleItem'
import { articlesArray } from './articlesArray'

export const Articles = () => {
    return (
        <>
            <div className="cart">
                {articlesArray.map(
                    ({ id, image, title, description, likeCount }) => (
                        <div key={id} className="cart-content">
                            <ArticleItem
                                image={image}
                                title={title}
                                description={description}
                                likeCount={likeCount}
                            />
                        </div>
                    )
                )}
            </div>
            <div className="more">
                <button>DISCOVER MORE</button>
            </div>
        </>
    )
}
