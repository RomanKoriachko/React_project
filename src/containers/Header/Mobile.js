import React from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Mobile = () => {
    return (
        <>
            <DesktopMenu />
            <MobileMenu />
        </>
    )
}

// export const Mobile = () => {
//     openMobileMenu()
// }

// function openMobileMenu() {
//     let mobileMenu = document.querySelector('.mobile-menu')
//     let mainMenu = document.querySelector('.navigation')
//     mobileMenu.addEventListener('click', function () {
//         mobileMenu.classList.toggle('active-menu')
//         if (mobileMenu.classList.contains('active-menu')) {
//             mainMenu.classList.add('active-menu')
//         } else {
//             mainMenu.classList.remove('active-menu')
//         }
//     })
// }
