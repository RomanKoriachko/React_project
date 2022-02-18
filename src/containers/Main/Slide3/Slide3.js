import React from 'react'
import slide3img from 'assets/slide3.jpg'

export const Slide3 = () => {
    return (
        <div className="container slide3">
            <div
                className="slide3-left"
                style={{
                    backgroundImage: `url(${slide3img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="slide3-right">
                <div className="slide3-header">BETHEME ORCHESTRA</div>
                <div className="slide3-line"></div>
                <div className="slide3-count">
                    <div>
                        <span>75</span> Integer ultrices
                    </div>
                    <div>
                        <span>12</span> Curabitur et ligula
                    </div>
                </div>
                <div className="slide3-text">
                    Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
                    eleifend mi vel, maximus justo. Maecenas mi tortor,
                    pellentesque a aliquam ut, fringilla eleifend lectus.
                    Maecenas ultrices tellus sit amet sem placerat tempor.
                    Maecenas eget arcu venenatis.
                </div>
                <div>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
