import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className="Header ">
                <video className='header_video' muted loop autoPlay>
                    <source src='/video/header.mp4' type="video/mp4" />
                </video>

                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <div data-aos="fade-up" className="header_p header_p_top">
                                <div className="header_h">
                                    <div className="header_h_2">
                                        Студия разработки
                                    </div>
                                </div>
                                Разработка сайтов, мобильных приложений, CRM систем, телеграм ботов, 3D и моушен анимаций. Реализуем бизнес задачи наших клиентов виде программных <br className='br_1' />
                                продуктов <br className='br_2' /> высокого качества. <Link to="/contact" className="header_a">
                                    Оставить заявку</Link>
                            </div>
                            <img data-aos="fade-up" src="/img/header_1.png" alt="" className="header_img d-sm-flex d-none" />
                            <img data-aos="fade-up" src="/img/header_2.png" alt="" className="header_img d-sm-none d-flex" />
                            <div data-aos="fade-up" className="header_p "><div className="header_h">Услуги</div>
                                Наша цель — создание эффективных и комплексных решений для вашего бизнеса. Мы выполняем работы по дизайну, брендингу, 2D и 3D анимациям, CRM систем и телеграм ботов.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header