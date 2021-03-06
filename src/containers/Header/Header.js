import React from 'react'
import logo from 'assets/logo.png'
import { Mobile } from 'containers/Header/Mobile'

export const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="logo" />
                <Mobile />
            </div>
        </div>
    )
}
