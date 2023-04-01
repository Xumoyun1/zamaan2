import React, { useEffect } from 'react'
import Directions from '../components/Directions'
import Header from '../components/Header'
import HeadProject from '../components/HeadProject'
import Footer from "../components/Footer";
import Social from "../components/Social";
import Partners from "../components/Partners";
import Aos from 'aos';


const Home = () => {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1800,
        })
    }, [])

    return (
        <>
            <Header />
            <Directions />
            <HeadProject />
            <Partners />
            <Footer />
            <Social />
        </>
    )
}

export default Home