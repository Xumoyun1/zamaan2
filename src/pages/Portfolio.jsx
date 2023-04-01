import Aos from 'aos'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import PortBody from '../components/PortBody'
import PortHead from '../components/PortHead'
import Social from '../components/Social'

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1800,
        })
    }, [])

    return (
        <>
            <PortHead />
            <PortBody />
            <Partners />
            <Footer />
            <Social />
        </>
    )
}

export default Portfolio