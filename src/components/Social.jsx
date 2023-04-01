import React from 'react'

const Social = () => {
    return (
        <>
            <div className="Social">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-between flex-lg-row flex-column">
                            <div className="soc_box">
                                <div className="soc_name">
                                    <a target={'_blank'} rel="noreferrer" href='https://www.instagram.com/zamaangroup/' className="soc_h">INSTAGRAM</a>
                                    <a target={'_blank'} rel="noreferrer" href='https://www.instagram.com/zamaangroup/' className="soc_img"><img src="/img/instagram.png" alt="" /></a>
                                </div>
                                <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/zamaangroup/" className="soc_p">@zamaangroup_In</a>
                            </div>
                            <div className="soc_box">
                                <div className="soc_name">
                                    <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/zamaangroup' className="soc_h">Facebook</a>
                                    <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/zamaangroup' className="soc_img"><img src="/img/facebook.png" alt="" /></a>
                                </div>
                                <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/zamaangroup" className="soc_p">@zamaangroup</a>
                            </div>
                            <div className="soc_box">
                                <div className="soc_name">
                                    <a target={'_blank'} rel="noreferrer" href='https://t.me/zamaangroupuz' className="soc_h">Telegram</a>
                                    <a target={'_blank'} rel="noreferrer" href='https://t.me/zamaangroupuz' className="soc_img"><img src="/img/telegram.png" alt="" /></a>
                                </div>
                                <a target={'_blank'} rel="noreferrer" href="https://t.me/zamaangroupuz" className="soc_p">@zamaangroup</a>
                            </div>
                            <div className="soc_box">
                                <div className="soc_name">
                                    <a href='tel:+998908232838' className="soc_h">+998(90) 823 28 38</a>
                                    <a href='tel:+998908232838' className="soc_img"><img src="/img/telephone.png" alt="" /></a>
                                </div>
                                <a href="tel:+998908232838" className="soc_p">@zamaangroup</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social