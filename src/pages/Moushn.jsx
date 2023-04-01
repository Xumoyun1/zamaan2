import React from 'react'
import Footer from '../components/Footer'
import Social from '../components/Social'

const Moushn = () => {
    return (
        <>
            <div className="LHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="lhead_name">Softon</div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    3D и Моушен анимации
                                </div>
                                <div className="lhead_img_box">
                                    <img alt="" src='/img/lhead_logo.png' className="lhead_img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-lg-flex d-none"></div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    Клиент
                                </div>
                                <div className="lhead_p">
                                    Softon
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    Сервис
                                </div>
                                <div className="lhead_p">
                                    Брендинг
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="lhead_text">
                                <div className="lhead_h">
                                    Сайт
                                </div>
                                <div className="lhead_p">
                                    Softon.uz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="moshn">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <video className='w-100 mt-5' controls src=""></video>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <Social />

        </>
    )
}

export default Moushn