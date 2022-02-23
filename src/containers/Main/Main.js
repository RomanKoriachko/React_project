import React from 'react'
import { MainOrchestra } from './MainOrchestra/MainOrchestra'
import { MainArticles } from './Articles/MainArticles'
import { MainBetheme } from './MainBetheme/MainBetheme'

export const Main = () => {
    return (
        <>
            <MainOrchestra />
            <MainArticles />
            <MainBetheme />
        </>
    )
}
