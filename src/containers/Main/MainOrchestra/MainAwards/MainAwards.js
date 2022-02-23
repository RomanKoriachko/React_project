import React from 'react'
import awardsBg from 'assets/awardsBg.jpg'
import award1 from 'assets/award1.png'
import award2 from 'assets/award2.png'
import award3 from 'assets/award3.png'

export const MainAwards = () => {
    return (
        <div className="container">
            <div
                className="awards"
                style={{
                    backgroundImage: `url(${awardsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="awards-header">AWARDS</div>
                <div className="awards-discription">
                    Mauris rhoncus orci in imperdiet placerat. Vestibulum
                    euismod nisl suscipit ligula volutpat, a feugiat urna
                    maximus. Cras massa nibh, tincidunt ut eros a, vulputate
                    consequat odio.
                </div>
                <div className="awards-main">
                    <div>
                        <img src={award1} alt=""></img>
                        <p>DUIS DIGNISSIM MI UT LAOREET MOLLIS</p>
                    </div>
                    <div>
                        <img src={award2} alt=""></img>
                        <p>DUIS DIGNISSIM MI UT LAOREET MOLLIS</p>
                    </div>
                    <div>
                        <img src={award3} alt=""></img>
                        <p>DUIS DIGNISSIM MI UT LAOREET MOLLIS</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="awards-btn">READ MORE ABOUT US</button>
            </div>
        </div>
    )
}
