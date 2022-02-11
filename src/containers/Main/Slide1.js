import React from 'react'
import slideImg from 'assets/slide1.jpg'
import playBtn from 'assets/playbtn.png'

export const Slide1 = () => {
    return (
        <div className="container">
            <div
                className="slide1"
                style={{
                    backgroundImage: `url(${slideImg})`,
                }}
            >
                <div className="slide1-header">
                    <span>MORBI VESTIBULUM ID TELLUS COMMODO</span> MATTIS ERAT
                </div>
                <div className="slide1-footer">
                    <div>
                        QUISQUE LOREM TORTOR FRINGILLA SED, VESTIBULUM ID
                        ELEIFEND JUSTO VEL BIBENDUM
                    </div>
                    <div
                        className="slide1-footer-btn"
                        style={{
                            backgroundImage: `url(${playBtn})`,
                        }}
                    ></div>
                    <div>
                        Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                        Suspendisse a pellentesque dui, non felis. Maecenas
                        malesuada elit lectus felis, malesuada ultricies.
                        Curabitur et ligula.
                    </div>
                </div>
            </div>
        </div>
    )
}
