import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import React, { useState } from 'react'
import 'styles/style.scss'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
