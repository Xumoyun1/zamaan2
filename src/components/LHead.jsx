import React, { useState } from 'react'

const LHead = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('LOGO') || []))

    return (
        <>
            <div className="LHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="lhead_name">
                                <div className="lhead_name_2">
                                    {items[0].name}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    <div className="lhead_h_2">
                                        {items[0].service}
                                    </div>
                                </div>
                                <div className="lhead_img_box">
                                    <div className="lhead_p_3">
                                        <img alt="" src={items[0].image_service} className="lhead_img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-lg-flex d-none"></div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    <div className="lhead_h_2">
                                        Клиент
                                    </div>
                                </div>
                                <div className="lhead_p">
                                    <div className="lhead_p_2">
                                        {items[0].client}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    <div className="lhead_h_2">
                                        Сервис
                                    </div>
                                </div>
                                <div className="lhead_p">
                                    <div className="lhead_p_2">
                                        {items[0].service}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    <div className="lhead_h_2">
                                        Год
                                    </div>
                                </div>
                                <div className="lhead_p">
                                    <div className="lhead_p_2">
                                        <div className="lhead_p">
                                            {items[0].site}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='w-100 d-sm-flex d-none' src={items[0].image_full} alt="" />
            <img className='w-100 d-sm-none d-flex' src={items[0].image_mobile} alt="" />
            {/* 
            <div className="lhead_img_box_2" style={{ backgroundImage: `url(${items[0].image_background})` }}></div>
            <img src="/img/lhead_1.png" alt="" className="lhead_img_2 d-lg-none d-flex" /> */}
        </>
    )
}

export default LHead