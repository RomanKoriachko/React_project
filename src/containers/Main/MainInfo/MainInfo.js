import React from 'react'
import arrow from 'assets/arrow.png'
import linkArrow from 'assets/links-arrow.png'
import facebookImg from 'assets/facebook.png'
import googleImg from 'assets/google+.png'
import pinterestImg from 'assets/pinterest.png'
import twitterImg from 'assets/twitter.png'

export const MainInfo = () => {
    return (
        <div className="container">
            <div className="info">
                <div className="tickets">
                    <div>
                        <p>DONEC GRAVIDA JUSTO, HENDRERIT LAOREET</p>
                    </div>
                    <div>
                        <img src={arrow} alt=""></img>
                    </div>
                    <div>
                        <button>BOOK A TICKET</button>
                    </div>
                </div>
                <div className="links">
                    <div className="shortcut-links">
                        <div className="shortcut-links-header">
                            SHORTCUT LINKS
                        </div>
                        <div className="line"></div>
                        <div className="links-list">
                            <ul>
                                <li>
                                    <img src={linkArrow} alt=""></img>Lorem
                                    ipsum
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Praesent
                                    pretium
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>
                                    Pellentesque
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Aliquam
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Etiam
                                    dapibus
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Nunc sit
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Etiam
                                    tempor
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src={linkArrow} alt=""></img>Etiam
                                    dapibus
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Nunc sit
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Etiam
                                    tempor
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Lorem
                                    ipsum
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Praesent
                                    pretium
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>
                                    Pellentesque
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Aliquam
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src={linkArrow} alt=""></img>Praesent
                                    pretium
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>
                                    Pellentesque
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Aliquam
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Etiam
                                    dapibus
                                </li>
                                <li>
                                    <img src={linkArrow} alt=""></img>Nunc sit
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-header">ABOUT US</div>
                        <div className="line"></div>
                        <div className="about-text">
                            <p>
                                <span className="thumbnail">
                                    Lorem ipsum dolor sit
                                </span>{' '}
                                amet pede. Mauris mattis varius. Morbi et
                                malesuada tincidunt, nonummy sed, ullamcorper
                                fringilla, nibh. Cras ut turpis.
                            </p>
                            <p>
                                Aenean nonummy ligula. Etiam ac hendrerit wisi.
                                Morbi egestas, nunc semper id libero.
                            </p>
                        </div>
                        <div className="about-links">
                            <div>Contact us</div>
                            <div>Whrite a message</div>
                            <div>FAQ</div>
                        </div>
                        <div className="about-social">
                            <img src={facebookImg} alt=""></img>
                            <img src={googleImg} alt=""></img>
                            <img src={twitterImg} alt=""></img>
                            <img src={pinterestImg} alt=""></img>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
