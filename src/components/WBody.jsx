import React, { useState } from 'react'

const WBody = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('WEB') || []))

    return (
        <>
            <div className="WBody">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wbody_p wbody_top"><div className="wbody_h">О проекте</div>
                                {/* {items[0].description}     */}
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <img src={items[0].image_glavniy} alt="" className="wbody_img" />
                        </div>

                    </div>
                </div>
                <div className="wbody_main_box">
                    <div className="wbody_main">
                        <img src={items[0].image_dva_1} alt="" className="wbody_img_4" />
                    </div>
                    <div className="wbody_main">
                        <img src={items[0].image_dva_2} alt="" className="wbody_img_4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WBody