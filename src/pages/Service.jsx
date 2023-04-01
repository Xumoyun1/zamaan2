import React from 'react'
import { Link } from 'react-router-dom'
import Directions from '../components/Directions'
import Footer from '../components/Footer'
import Social from '../components/Social'

const Service = () => {
    return (
        <>
            <div className="Services ">
                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <div className="header_p "><div className="header_h"> <div className="header_s_2">Услуги</div>
                            </div>
                                <div className="header_p_12">
                                    <div className="header_p_123">
                                        Наша цель — создание эффективных и комплексных решений для вашего бизнеса. Мы выполняем работы по дизайну, брендингу, 2D и 3D анимациям, CRM систем и телеграм ботов.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Directions />
            <Footer />
            <Social />
        </>
    )
}

export default Service