import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

export const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const openBtn = (
        <GiHamburgerMenu
            className="mobile-menu"
            onClick={() => setOpen(!open)}
        />
    )
    const closeBtn = (
        <RiCloseLine
            className="mobile-menu-close"
            onClick={() => setOpen(!open)}
        />
    )
    return (
        <>
            {open ? closeBtn : openBtn}
            {open && (
                <div className="menu navigation active-menu">
                    <div>HOME</div>
                    <div>REPERTOIRE</div>
                    <div>THE ORCHESTRA</div>
                    <div>TICKETS</div>
                    <div>PLAN YOUR VISIT</div>
                    <div>BUY NOW</div>
                </div>
            )}
        </>
    )
}
