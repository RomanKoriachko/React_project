import React from 'react'
import { MainOrchestra } from './MainOrchestra/MainOrchestra'
import { MainArticles } from './Articles/MainArticles'
import { MainBetheme } from './MainBetheme/MainBetheme'
import { MainAwards } from './MainAwards/MainAwards'
import { MainInfo } from './MainInfo/MainInfo'

export const Main = () => {
    return (
        <>
            <MainOrchestra />
            <MainArticles />
            <MainBetheme />
            <MainAwards />
            <MainInfo />
        </>
    )
}
