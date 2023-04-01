import React, { useState } from 'react'
import back_1 from "../images/whead_1.png";

const WHead = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('WEB') || []))


    return (
        <>
            <div className="WHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="whead_name">
                                <div className="whead_name_2">
                                    {items[0].name}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="whead_text">
                                <div className="whead_h">
                                    <div className="whead_h_2">
                                        Мобильное приложение
                                    </div>

                                </div>
                                <div className="whead_img_box">
                                    <div className="whead_p_3">
                                        <img alt="" src={items[0].image_service} className="whead_img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-lg-flex d-none"></div>
                        <div className="col-lg-2 col-6">
                            <div className="whead_text">
                                <div className="whead_h">
                                    <div className="whead_h_2">
                                        Клиент
                                    </div>

                                </div>
                                <div className="whead_p">
                                    <div className="whead_p_2">
                                        {items[0].client}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="whead_text">
                                <div className="whead_h">
                                    <div className="whead_h_2">
                                        Сервис
                                    </div>

                                </div>
                                <div className="whead_p">
                                    <div className="whead_p_2">
                                        {items[0].service}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="whead_text">
                                <div className="whead_h">
                                    <div className="whead_h_2">
                                        Сайт
                                    </div>

                                </div>
                                <a href={items[0].site} className="whead_p">
                                    <div className="whead_p_2">
                                        {items[0].site}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='w-100 d-sm-flex d-none' src={items[0].image_full} alt="" />
            <img className='w-100 d-sm-none d-flex' src={items[0].image_mobile} alt="" />

            {/* <div className="whead_img_box_2" style={{ backgroundImage: `url(${items[0].image_background})` }}></div>
            <img src="/img/whead_1.png" alt="" className="ahead_img_2 d-lg-none d-flex" /> */}
        </>
    )
}

export default WHead