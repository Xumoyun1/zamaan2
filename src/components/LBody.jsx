import React, { useState } from 'react'
import back_1 from "../images/lbody_back.png";
import back_2 from "../images/lbody_back_2.png";

const LBody = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('LOGO') || []))

    return (
        <>
            <div className="LBody">
                <img src="/img/lbody_4.png" alt="" className="lbody_img_top" />
                <div className="lbody_back" style={{ backgroundImage: `url(${items[0].background_image_2})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-4 mt-4 col-6 d-flex align-items-center justify-content-center">
                                <div className="lbody_back_box">
                                    <div className="lbody_up">
                                        <div className="lbody_up_up" style={{ backgroundColor: items[0].color_1 }}></div>
                                        <div className="lbody_up_box">
                                            <div className="lbody_up_box_l" style={{ backgroundColor: items[0].color_2 }}></div>
                                            <div className="lbody_up_box_r" style={{ backgroundColor: items[0].color_3 }}></div>
                                        </div>
                                    </div>
                                    <div className="lbody_down">
                                        <div className="lbody_down_h">Ультрамариновый</div>
                                        <div className="lbody_down_p">CMYK: 26 / 26 / 54 </div>
                                        <div className="lbody_down_box">
                                            <div className="lbody_down_p">RGB: 17 / 0C / 5B</div>
                                            <div className="lbody_down_box_r" style={{ backgroundColor: items[0].color_4 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="/img/lbody_m_1.png" alt="" className="lbody_main_img" />
                    </div>
                    <div className="col-6">
                        <img src="/img/lbody_m_1.png" alt="" className="lbody_main_img" />
                    </div>
                    <div className="col-12">
                        <div className="lhead_img_box_2" style={{ backgroundImage: `url(${items[0].background_image_3})` }}></div>
                        <img src="/img/lbody_back_2.png" alt="" className="lhead_img_2 d-lg-none d-flex" />
                    </div>
                    <img src="/img/lbody_m_3.png" alt="" className="lhead_img_2" />
                    <img src="/img/lbody_m_4.png" alt="" className="lhead_img_2" />
                    <img src="/img/lbody_m_5.png" alt="" className="lhead_img_2" />
                    <img src="/img/lbody_m_6.png" alt="" className="lhead_img_2" />
                </div>
            </div>
        </>
    )
}

export default LBody