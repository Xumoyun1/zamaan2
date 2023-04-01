import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Directions = () => {

    const location = useLocation()


    return (
        <>
            <div className="Directions">
                <div className="container">
                    <div className={`row ${location.pathname === '/about' ? 'd-none' : ''}`}>
                        <div className="col-12">
                            <div data-aos="fade-up" className="row direct_line">
                                <div className="col-2 dir_col_1">
                                    <div className="direct_num">/01</div>
                                </div>
                                <div className="col-5 dir_col_1">
                                    <div className="direct_h">Разработка сайтов</div>
                                </div>
                                <div className="col-lg-1 dir_col_2">
                                    <div className="direct_num">/01</div>
                                </div>
                                <div className="col-lg-6 h-100 dir_col_2">
                                    <div className="direct_h">Разработка сайтов</div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct_box">
                                        <div className="direct_box_p">Мы разрабатываем интеллектуальные веб-продукты, которые ускоряют бизнес-операции. Перенося ваши бизнес-процессы в высокоэффективные веб-приложения, мы облегчаем ежедневные рабочие операции, оптимизируем совместную работу и рабочие процессы, а также повышаем производительность пользователей.</div>
                                        <div className="direct_box_a">
                                            <a href="" className="direct_a">
                                                <div className="direct_a_h">Посмотреть</div>
                                                <div className="direct_a_l"></div>
                                                <div className="direct_a_p">Прокеты</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="row direct_line">
                                <div className="col-2 dir_col_1">
                                    <div className="direct_num">/02</div>
                                </div>
                                <div className="col-5 dir_col_1">
                                    <div className="direct_h">МОБИЛЬНОЕ
                                        ПРИЛОЖЕНИЕ</div>
                                </div>
                                <div className="col-lg-1 dir_col_2">
                                    <div className="direct_num">/02</div>
                                </div>
                                <div className="col-lg-6 h-100 dir_col_2">
                                    <div className="direct_h">МОБИЛЬНОЕ
                                        ПРИЛОЖЕНИЕ</div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct_box">
                                        <div className="direct_box_p">Мы помогаем компаниям дополнить свои мобильные продукты действительно удобным дизайном UI/UX. Помогая пользователям беспрепятственно перемещаться по мобильному интерфейсу, мы способствуем принятию и вовлечению пользователей, обходим установки и, таким образом, продвигаем бизнес вперед.</div>
                                        <div className="direct_box_a">
                                            <a href="" className="direct_a">
                                                <div className="direct_a_h">Посмотреть</div>
                                                <div className="direct_a_l"></div>
                                                <div className="direct_a_p">Прокеты</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="row direct_line">
                                <div className="col-2 dir_col_1">
                                    <div className="direct_num">/03</div>
                                </div>
                                <div className="col-5 dir_col_1">
                                    <div className="direct_h">РАЗРАБОТКА
                                        ДИЗАЙНА</div>
                                </div>
                                <div className="col-lg-1 dir_col_2">
                                    <div className="direct_num">/03</div>
                                </div>
                                <div className="col-lg-6 h-100 dir_col_2">
                                    <div className="direct_h">РАЗРАБОТКА
                                        ДИЗАЙНА</div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct_box">
                                        <div className="direct_box_p">Мы создадим уникальную, выразительную айдентику для вашего бренда, используя цвета, шрифты, метафоры и все остальное, что создает незабываемые впечатления в Интернете.</div>
                                        <div className="direct_box_a">
                                            <a href="" className="direct_a">
                                                <div className="direct_a_h">Посмотреть</div>
                                                <div className="direct_a_l"></div>
                                                <div className="direct_a_p">Прокеты</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="row direct_line">
                                <div className="col-2 dir_col_1">
                                    <div className="direct_num">/04</div>
                                </div>
                                <div className="col-5 dir_col_1">
                                    <div className="direct_h">3D И МОУШЕН
                                        АНИМАЦИИ </div>
                                </div>
                                <div className="col-lg-1 dir_col_2">
                                    <div className="direct_num">/04</div>
                                </div>
                                <div className="col-lg-6 h-100 dir_col_2">
                                    <div className="direct_h">3D И МОУШЕН
                                        АНИМАЦИИ </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct_box">
                                        <div className="direct_box_p">Мы специализирующаяся на разработке рекламных изображений и видео. Создаем 3D-визуализацию, моушен-дизайн, визуал для рекламных компаний, контент для промо сайтов и сценарии к видео.</div>
                                        <div className="direct_box_a">
                                            <a href="" className="direct_a">
                                                <div className="direct_a_h">Посмотреть</div>
                                                <div className="direct_a_l"></div>
                                                <div className="direct_a_p">Прокеты</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="row direct_line">
                                <div className="col-2 dir_col_1">
                                    <div className="direct_num">/05</div>
                                </div>
                                <div className="col-5 dir_col_1">
                                    <div className="direct_h">CRM, телег-
                                        рамм боты</div>
                                </div>
                                <div className="col-lg-1  dir_col_2">
                                    <div className="direct_num">/05</div>
                                </div>
                                <div className="col-lg-6 h-100 dir_col_2">
                                    <div className="direct_h">CRM, телег-
                                        рамм боты</div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct_box">
                                        <div className="direct_box_p">Мы автоматизируем ваши задачи, увеличим объемы продаж и поможем держать общение с клиентами под контролем.</div>
                                        <div className="direct_box_a">
                                            <a href="" className="direct_a">
                                                <div className="direct_a_h">Посмотреть</div>
                                                <div className="direct_a_l"></div>
                                                <div className="direct_a_p">Прокеты</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`row ${location.pathname === '/about' ? 'd-none' : ''}`}>
                        <div data-aos="fade-up" className="col-12">
                            <Link to='/contact' className=" direct_link">
                                Оставить заявку
                            </Link>
                        </div>
                    </div>
                    <div className={`row ${location.pathname === '/services' ? 'd-none' : ''}`}>
                        <div className="col-12">
                            <div className="header_p header_p_top ">
                                <div className="header_h"><div className="header_s_2">ZAMAAN GROUP</div>
                                </div>
                                <div className="header_p_12">
                                    <div className="header_p_123">
                                        Мы создаем бренды, которые привязаны к людям, новые, полезные и уникальные продукты. Мы работаем, чтобы наши клиенты развивались быстрее конкурентов.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Directions