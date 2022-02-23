import React from 'react'
import orchestra from 'assets/orchestra-img.jpg'
import playBtn from 'assets/playbtn.png'

export const MainOrchestra = () => {
    return (
        <div className="container">
            <div
                className="main-orchestra"
                style={{
                    backgroundImage: `url(${orchestra})`,
                }}
            >
                <div className="main-orchestra-header">
                    <span>MORBI VESTIBULUM ID TELLUS COMMODO</span> MATTIS ERAT
                </div>
                <div className="main-orchestra-footer">
                    <div>
                        QUISQUE LOREM TORTOR FRINGILLA SED, VESTIBULUM ID
                        ELEIFEND JUSTO VEL BIBENDUM
                    </div>
                    <div
                        className="main-orchestra-footer-btn"
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
