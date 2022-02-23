import React from 'react'
import { MainOrchestra } from './MainOrchestra/MainOrchestra'
import { MainArticles } from './Articles/MainArticles'
import { MainBetheme } from './MainBetheme/MainBetheme'
import { MainAwards } from './MainOrchestra/MainAwards/MainAwards'

export const Main = () => {
    return (
        <>
            <MainOrchestra />
            <MainArticles />
            <MainBetheme />
            <MainAwards />
        </>
    )
}
