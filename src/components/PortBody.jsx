import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sticky, StickyContainer } from 'react-sticky'
import { API_PATH } from '../tools/constants'

const PortBody = () => {
    const [project, setProject] = useState([])
    const [category, setCategory] = useState([])
    const [filter, SetFilter] = useState(false)

    useEffect(() => {
        const getProject = () => {
            axios.get(API_PATH + '/main/projects/')
                .then((response) => {
                    setProject(response.data)
                    console.log(response.data)
                })
            axios.get(API_PATH + '/main/category/')
                .then((response) => {
                    setCategory(response.data)
                    console.log(response.data)
                })
        }

        if (filter === false) {
            getProject();
        }

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

    // const getCategory = () => {
    //     axios.get(API_PATH + '/main/category/')
    //         .then((response) => {
    //             setCategory(response.data)
    //             console.log(response.data)
    //         })
    // }

    const handleFilter = (item) => {
        SetFilter(true);
        axios.get(API_PATH + `/main/projects/?search=${item}`)
            .then((response) => {
                setProject(response.data)
                console.log(response.data)
                setPort_body_a(!port_body_a)
            })

    }

    const [port_body_a, setPort_body_a] = useState();


    return (
        <>
            <div className="PortBody">
                <div className="container">
                    <div className="row port_top_line">
                        <div className="col-lg-3 ">
                            <StickyContainer>
                                    <div className="port_body_left">

                                        <div data-aos="fade-up" onClick={() => handleFilter('')} className={`port_body_a ${port_body_a ? 'active' : ''}`}>Все проекты</div>

                                        {category && category.map((item, index) => {
                                            return (
                                                <div data-aos="fade-up" key={index}>
                                                    <div onClick={() => handleFilter(item.id)} className={`port_body_a ${port_body_a ? 'active' : ''}`}>{item.name}</div>
                                                </div>
                                            )
                                        }
                                        )}
                                        <Link to="/contact" className="port_body_link">Начать проект</Link>

                                    </div>
                            </StickyContainer>
                        </div>
                        <div className="col-lg-1  d-lg-flex justify-content-center d-none">
                            <div className="port_mid_line"></div>
                        </div>
                        <div className="col-lg-8  port_top_line_2">
                            <div className="row">


                                {project && project.map((item, index) => {
                                    return (
                                        <div data-aos="fade-up" key={index} onClick={() => link(item.id, item.category.id)} className="col-6 port_prod_bottom">
                                            <div className={`${index % 2 === 0 ? "port_prod_right_box" : "port_prod_right_box_2"}`}>
                                                <div className="port_prod_right_box_top">
                                                    <div className="port_prod_right_box_top_h">{item.name}</div>
                                                    <div className="port_prod_icon_box">
                                                        <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                        <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                                    </div>
                                                </div>
                                                <div className="port_prod_right_box_mid">
                                                    <div className="port_prod_img_box">
                                                        <img src={item.image} alt="" className="port_prod_img" />
                                                    </div>
                                                </div>
                                                <div className="port_prod_right_box_bottom">
                                                    <div className="port_prod_right_box_bottom_1">
                                                        <div className="port_prod_right_box_h">{item.year}</div>
                                                        <div className="port_prod_right_box_p">{item.category.name}</div>
                                                    </div>
                                                    <div className="port_prod_right_box_bottom_2">
                                                        <div className="port_prod_right_box_h">{item.text_1}</div>
                                                        <div className="port_prod_right_box_h">{item.text_2}</div>
                                                        <div className="port_prod_right_box_p">{item.text_3}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}




                                {/* <div className="col-12 port_prod_bottom">
                                    <div className="port_prod_right_box ">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">Besthouse</div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_1.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">Вебсайт</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="port_prod_right_box_2">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">Fly Trusted Skies  </div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_2.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">Вебсайт</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}




                                {/* 
                                <div className="col-12 port_prod_bottom">
                                    <div className="port_prod_right_box ">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">Eco ekspertiza</div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_3.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">Вебсайт</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="port_prod_right_box_2">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">Stroy Baza</div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_4.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">Мобильное приложение</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 port_prod_bottom">
                                    <div className="port_prod_right_box ">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">BioStep</div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_5.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">СММ</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="port_prod_right_box_2">
                                        <div className="port_prod_right_box_top">
                                            <div className="port_prod_right_box_top_h">ChinorKent</div>
                                            <div className="port_prod_icon_box">
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon" />
                                                <img src="/img/port_proj_icon.png" alt="" className="port_prod_icon_2" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_mid">
                                            <div className="port_prod_img_box">
                                                <img src="/img/port_prod_1_6.png" alt="" className="port_prod_img" />
                                            </div>
                                        </div>
                                        <div className="port_prod_right_box_bottom">
                                            <div className="port_prod_right_box_bottom_1">
                                                <div className="port_prod_right_box_h">2022</div>
                                                <div className="port_prod_right_box_p">СММ</div>
                                            </div>
                                            <div className="port_prod_right_box_bottom_2">
                                                <div className="port_prod_right_box_h">UX исследование</div>
                                                <div className="port_prod_right_box_h">Прототип</div>
                                                <div className="port_prod_right_box_p">UI дизайн</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortBody