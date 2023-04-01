import React, { useState } from 'react'

const ABody = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('APP') || []))

    return (
        <>
            <div className="ABody">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="abody_p abody_top"><div className="abody_h">О проекте</div>
                            {items[0].description}    
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="abody_img_box_1"><img src={items[0].image_main_1} alt="" className="abody_img_1" /></div>
                        </div>
                        <div className="col-4">
                            <div className="abody_img_box_1"><img src={items[0].image_main_2} alt="" className="abody_img_1" /></div>
                        </div>
                        <div className="col-4">
                            <div className="abody_img_box_1"><img src={items[0].image_main_3} alt="" className="abody_img_1" /></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="abody_img_box_2">
                            <img src={items[0].image_big_1} alt="" className="abody_img_2" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="abody_img_box_2">
                            <img src={items[0].image_big_2} alt="" className="abody_img_2" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ABody