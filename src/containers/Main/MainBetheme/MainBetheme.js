import React from 'react'
import bethemeImg from 'assets/betheme.jpg'

export const MainBetheme = () => {
    return (
        <div className="container betheme">
            <div
                className="betheme-left"
                style={{
                    backgroundImage: `url(${bethemeImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="betheme-right">
                <div className="betheme-header">BETHEME ORCHESTRA</div>
                <div className="betheme-line"></div>
                <div className="betheme-count">
                    <div>
                        <span>75</span> Integer ultrices
                    </div>
                    <div>
                        <span>12</span> Curabitur et ligula
                    </div>
                </div>
                <div className="betheme-text">
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
