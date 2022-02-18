import React, { useState } from 'react'
import like1 from 'assets/like1.png'
import like2 from 'assets/like2.png'
import readMore from 'assets/read-more.png'
import PropTypes from 'prop-types'

export const ArticleItem = ({ image, title, description, likeCount }) => {
    const [bgImage, setbgImage] = useState(like1)
    const [like, setLike] = useState(likeCount)
    const onLikeClick = () => {
        setLike((value) => {
            if (value === likeCount) {
                return like + 1
            } else if (value > likeCount) {
                return like - 1
            }
        })
        setbgImage((value) => (value === like1 ? like2 : like1))
        console.log(bgImage)
    }

    return (
        <>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="cart-btns">
                <div className="like">
                    <button
                        onClick={onLikeClick}
                        style={{
                            background: `url(${bgImage})`,
                            // backgroundRepeat: 'no-repeat',
                            // backgroundPosition: 'center',
                            // backgroundSize: '20px',
                        }}
                    />
                    <div>{like}</div>
                </div>
                <div className="read-more">
                    <img src={readMore} alt="" />
                    <p>Read more</p>
                </div>
            </div>
        </>
    )
}

ArticleItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number,
}
ArticleItem.defaultProps = {
    image: '/images/noimage.jpg',
}
