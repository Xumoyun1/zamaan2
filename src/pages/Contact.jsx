import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

const Contact = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [obo, setObo] = useState('')

    const formData = new FormData()
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('proyekt', obo)
    const navigate = useNavigate()
    const post = () => {
        axios.post(API_PATH + 'main/contact/', formData)
            .then((res) => {
                setName('')
                setPhone('')
                setObo('')
                // navigate('/')
            })
            .catch((err) => {
            })
    }


    return (
        <>
            <div className="Contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_name">
                                <div className="contact_name_2">
                                    Контакты
                                </div>
                            </div>
                            <div className="contact_p">
                                <div className="contact_p_2">
                                    По любым вопросам или просто для того, чтобы поздороваться, свяжитесь с нами.
                                </div>
                            </div>

                            <form onSubmit={post} className="contact_inp_box d-none flex-column d-lg-flex">
                                <div className="contact_inp_2">
                                    <input value={name} onChange={e => setName(e.target.value)} required placeholder='Имя' type="text" name="" id="" className="contact_inp" />
                                </div>
                                <div className="contact_inp_2">
                                    <input value={phone} onChange={e => setPhone(e.target.value)} required placeholder='Телефон' type="text" name="" id="" className="contact_inp" />
                                </div>
                                <div className="contact_inp_2">
                                    <input value={obo} onChange={e => setObo(e.target.value)} required placeholder='О проекте' type="text" name="" id="" className="contact_inp" />
                                </div>
                                <button type='submit' className="contact_a">
                                    <div className="contact_a_2">
                                        Отпраить
                                    </div>
                                </button>


                            </form>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-lg-5 d-flex">
                            <div className="contact_box">
                                <div className="contact_box_top">
                                    <div className="contact_box_top_text">
                                        <div className="contact_box_top_up_left">
                                            <div className="contact_box_name">
                                                <div className="contact_box_name_2">
                                                    Телефон
                                                </div>
                                            </div>
                                            <a href='tel:+998908232838' className="contact_box_h">
                                                <div className="contact_box_h_3">
                                                    +998 90 823 28 38
                                                </div>
                                            </a><br />
                                            <a href='tel:+998909362838' className="contact_box_h">
                                                <div className="contact_box_h_3">
                                                    +998 90 936 28 38
                                                </div>
                                            </a>
                                        </div>
                                        <div className="contact_box_top_up_right">
                                            <div className="contact_box_name">
                                                <div className="contact_box_name_2">
                                                    Адрес
                                                </div>
                                            </div>
                                            <div className="contact_box_h_4 contact_box_h_2">
                                                <div className="contact_box_h_3">
                                                    Город Ташкент, Яшнабадский район, Улица Ташсельмаш 8.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact_box_top_text">
                                        <div className="contact_box_top_up_left contact_box_top_up_left_2">
                                            <div className="contact_box_name">
                                                <div className="contact_box_name_2">
                                                    Время работы
                                                </div>
                                            </div>
                                            <div className="contact_box_h">
                                                <div className="contact_box_h_3">Пн-Сб 09:00 - 18:00</div>
                                            </div>

                                        </div>
                                        <div className="contact_box_top_up_right">
                                            <div className="contact_box_name">
                                                <div className="contact_box_name_2">
                                                    Почта
                                                </div>
                                            </div>
                                            <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=zamaangroupuz@gmail.com' className="contact_box_h">
                                                <div className="contact_box_h_3">zamaangroupuz@gmail.com</div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="contact_box_bottom">
                                    <div className="contact_box_name">
                                        <div className="contact_box_name_2">
                                            Cоц. сети
                                        </div>
                                    </div>
                                    <div className="contact_box_soc">
                                        <a target={'_blank'} rel="noreferrer" href="https://t.me/zamaangroupuz" className="contact_box_a">
                                            <div className="contact_box_a_2">
                                                Telegram
                                            </div>
                                        </a>
                                        <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/zamaangroup/" className="contact_box_a">
                                            <div className="contact_box_a_2">
                                                Instagram
                                            </div>
                                        </a>
                                        <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/zamaangroup" className="contact_box_a">
                                            <div className="contact_box_a_2">
                                                Facebook
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="contact_inp_box d-flex flex-column d-lg-none">
                                    <input placeholder='Имя' type="text" name="" id="" className="contact_inp" />
                                    <input placeholder='Телефон' type="number" name="" id="" className="contact_inp" />
                                    <input placeholder='О проекте' type="text" name="" id="" className="contact_inp" />
                                    <a href="" className="contact_a">Отпраить</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact