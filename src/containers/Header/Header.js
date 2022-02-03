import React from 'react'
import 'components/Style/Style.scss'
import logo from 'images/logo.png'

export const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <a href="">
                    <img src={logo} alt="" />
                </a>
                <div className="menu navigation">
                    <a href="">HOME</a>
                    <a href="">REPERTOIRE</a>
                    <a href="">THE ORCHESTRA</a>
                    <a href="">TICKETS</a>
                    <a href="">PLAN YOUR VISIT</a>
                    <a href="">BUY NOW</a>
                </div>
                <div className="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
