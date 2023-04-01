import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'



const HeadProject = () => {
    const [items, setItems] = useState([])

    const getItems = () => {
        axios.get(API_PATH + 'main/projects/')
            .then((res) => {
                setItems(res.data)
            })
    }
    useEffect(() => {
        getItems()
    }, [])

    const navigate = useNavigate()
    const link = (pk, id) => {
        console.log(id);
        localStorage.setItem('ID', JSON.stringify(pk))
        if (id === 1) {
            axios.get(API_PATH + `main/web/?search=${pk}`)
                .then((response) => {
                    console.log('adwadwadwadwadwadwadwadwadwadwadwadw');
                    console.log(pk);
                    console.log(response.data)
                    localStorage.setItem('WEB', JSON.stringify(response.data))
                    navigate('/web')
                    window.location.reload();
                })
        }
        if (id === 2) {
            axios.get(API_PATH + `main/app/?search=${pk}`)
                .then((response) => {
                    localStorage.setItem('APP', JSON.stringify(response.data))
                    navigate('/android')
                    window.location.reload();

                })

        }
        if (id === 3) {
            axios.get(API_PATH + `main/smm/?search=${pk}`)
                .then((response) => {
                    localStorage.setItem('ITEMS', JSON.stringify(response.data))
                    navigate('/SMM')
                    window.location.reload();
                })

        }
        if (id === 4) {
            axios.get(API_PATH + `main/logo/?search=${pk}`)
                .then((response) => {
                    console.log(id);
                    console.log(pk);
                    console.log(response.data);
                    localStorage.setItem('LOGO', JSON.stringify(response.data))
                    navigate('/logos')
                    window.location.reload();
                })

        }
    }

    const [navbar, setNavbar] = useState()

    const changeNavbar = () => {
        if (window.scrollY >= 4400) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }


    window.addEventListener('scroll', changeNavbar);



    return (
        <>

            <div className={`HeadProject ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between">


                        {items && items.slice(0, 6).map((item, index) => {
                            return (
                                <div key={index} className="col-lg-6 d-flex flex-md-row flex-column justify-content-between">

                                    <div onClick={() => link(item.id, item.category.id)} className={`${index % 2 === 0 ? "head_proj_box" : "head_proj_box_2"}`}>
                                        <div className="head_proj_text">
                                            <div className="head_proj_h">{item.name}</div>
                                            <div className="head_proj_name">{item.category.name}</div>
                                        </div>
                                        <div className="head_proj_p">{item.description}</div>
                                        <img src={item.image_mainscreen} alt="" className="head_proj_img" />
                                    </div>
                                </div>
                            )
                        })}

                        <div className="head_proj_line">
                        </div>
                        {/* {items && items.slice(3, 6).map((item, index) => {
                            return (
                                <div key={index} className="col-12 d-flex flex-md-row flex-column justify-content-between">
                                    <div className="head_proj_box_2 head_proj_2">
                                        <div className="head_proj_text">
                                            <div className="head_proj_h">{item.name}</div>
                                            <div className="head_proj_name">{item.category.name}</div>
                                        </div>
                                        <div className="head_proj_p">{item.description}</div>
                                        <img src={item.image_mainscreen} alt="" className="head_proj_img" />
                                    </div>
                                </div>
                            )
                        })} */}
                    </div>
                    <div className="row ">
                        <div data-aos="fade-up" className="col-12">
                            <Link to="/portfolio" className=" head_proj">
                                Посмотреть все проекты
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadProject