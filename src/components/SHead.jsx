import React, { useState } from 'react'
import back_1 from "../images/shead_1.png";

const SHead = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('ITEMS') || []))

    return (
        <>
            {items && items.slice(0, 1).map((item, index) => {
                return (
                    <>
                        <div className="SHead">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="shead_name">
                                            <div className="shead_name_2">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="shead_text">
                                            <div className="shead_h">
                                                <div className="shead_h_2">
                                                    СММ продвижение
                                                </div>
                                            </div>
                                            <div className="shead_img_box">
                                                <div className="shead_p_3">
                                                    <img alt="" src={item.image_service} className="shead_img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 d-lg-flex d-none"></div>
                                    <div className="col-lg-2 col-6">
                                        <div className="shead_text">
                                            <div className="shead_h">
                                                <div className="shead_h_2">
                                                    Клиент
                                                </div>

                                            </div>
                                            <div className="shead_p">
                                                <div className="shead_p_2">
                                                    {item.client}
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="shead_text">
                                            <div className="shead_h">
                                                <div className="shead_h_2">
                                                    Сервис
                                                </div>

                                            </div>
                                            <div className="shead_p">
                                                <div className="shead_p_2">
                                                    {item.service}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="shead_text">
                                            <div className="shead_h">
                                                <div className="shead_h_2">
                                                    Сайт
                                                </div>
                                            </div>
                                            <div className="shead_p">
                                                <div className="shead_p_2">
                                                    <a className='shead_p' href={item.site}>{item.site}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img className='w-100 d-sm-flex d-none' src={items[0].image_full} alt="" />
                        <img className='w-100 d-sm-none d-flex' src={items[0].image_mobile} alt="" />

                        {/* <div className="shead_img_box_2" style={{ backgroundImage: `url(${item.image_background})` }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="mb-4 col-lg-4 col-sm-6">
                                        <img src={item.image_main_1} alt="" className="shead_img" />
                                    </div>
                                    <div className="mb-4 col-lg-4 col-sm-6">
                                        <img src={item.image_main_2} alt="" className="shead_img" />
                                    </div>
                                    <div className="mb-4 col-lg-4 col-sm-6">
                                        <img src={item.image_main_3} alt="" className="shead_img" />
                                    </div>
                                </div>
                            </div>
                        </div> */}

{/* 
                        <img className='w-100 d-sm-flex d-none' src={items[0].image_full} alt="" />
                        <img className='w-100 d-sm-none d-flex' src={items[0].image_mobile} alt="" /> */}

                    </>
                )
            })}
        </>
    )
}

export default SHead