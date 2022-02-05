import React from 'react'
import 'components/Style/Style.scss'
import logo from 'images/logo.png'
import { Mobile } from 'containers/Header/Mobile'

export const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <a href="">
                    <img src={logo} alt="" />
                </a>
                <Mobile />
            </div>
        </div>
    )
}
