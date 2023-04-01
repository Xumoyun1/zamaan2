import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <video className='footer_video' muted loop autoPlay>
                    <source src='/video/footer.mp4' type="video/mp4" />
                </video>
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-up" className="col-12">
                            <div className="foot_h">
                                Нам важны ваши цели!
                                Давайте сотрудничать</div>
                        </div>
                    </div>
                    <div className="row ">
                        <div data-aos="fade-up" className="col-12">
                            <Link to="/contact" className=" footer_link">
                                Напишите нам
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer