import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_PATH } from '../tools/constants';

const Navbar = () => {
    const [burger, setBurger] = useState(false);
    const [file, setFile] = useState('')

    const navigate = useNavigate()
    const getFile = () => {
        axios.get(API_PATH + 'main/file/')
            .then((res) => {
                setFile(res.data)
                window.location.replace(`${res.data[0].file}`)
                console.log(res.data);
            })
    }

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1800,
        })

    }, [])


    return (
        <>
            <div data-aos="fade-down" className="Navbar">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-2">
                            <Link to="/"><img src="/img/logo.png" alt="" className="nav_logo" /></Link>
                        </div>
                        <div className={`col-6 d-flex justify-content-between align-items-center nav_a_box ${burger ? 'active' : ''}`}>
                            <Link to="/services" className="nav_a">Услуги</Link>
                            <Link to="/portfolio" className="nav_a">Проекты</Link>
                            <Link to="/about" className="nav_a">О НАС</Link>
                            <Link to="/contact" className="nav_a">Контакты</Link>
                            <a onClick={getFile} href={file ? file[0].file : '#'} className="nav_btn d-lg-none d-flex">Скачать бриф</a>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <a onClick={getFile} href={file ? file[0].file : '#'} className="nav_btn d-none d-lg-flex">Скачать бриф</a>
                        </div>
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_mid "></div>
                            <div className="burger_down"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar