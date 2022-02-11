import React from 'react'
import like1 from 'assets/like1.png'
import like2 from 'assets/like2.png'
import readMore from 'assets/read-more.png'

export const ArticleItem = ({ image, title, description }) => {
    return (
        <div className="cart-content">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="cart-btns">
                <div className="like">
                    <img src={like1} alt="" className="likeBtn1" />
                    <img src={like2} alt="" className="likeBtn2" />
                    <div>0</div>
                </div>
                <div className="read-more">
                    <img src={readMore} alt="" />
                    <p>Read more</p>
                </div>
            </div>
        </div>
    )
}
