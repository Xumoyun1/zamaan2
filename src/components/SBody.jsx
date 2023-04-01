import axios from 'axios';
import React, { useEffect, useState } from 'react'
import back_1 from "../images/sbody_3.png";
import { API_PATH } from '../tools/constants';


const SBody = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('ITEMS') || []))


    return (
        <>
            {items && items.slice(0, 1).map((item, index) => {
                return (
                    <>
                        <div key={index} className="SBody">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sbody_p sbody_top"><div className="sbody_h">О проекте</div>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sbody_img_box_1"><img src={item.image_second_1} alt="" className="sbody_img_1" /></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sbody_img_box_1"><img src={item.image_second_2} alt="" className="sbody_img_1" /></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sbody_img_box_1"><img src={item.image_second_3} alt="" className="sbody_img_1" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="SBody2">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-lg-4 sbody_2_col">
                                        <div className="sbody_2_box">
                                            <div className="sbody_2_h">Пост</div>
                                            <div className="sbody_2_text">
                                                <div className="sbody_2_p">
                                                    {item.post_text}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sbody_2_img" style={{ backgroundImage: `url(${item.post_image})` }}></div>
                                </div>

                            </div>
                            <img src={item.post_image} alt="" className="sbody_3_img" />

                        </div>
                    </>
                )
            })}

        </>
    )
}

export default SBody