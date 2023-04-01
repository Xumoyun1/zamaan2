import React, { useEffect, useState } from "react";
import back_1 from "../images/ahead_1.png";

const AHead = () => {
  const [state, setState] = useState(true)
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('APP') || []))

  return (
    <>
      {/* {items &&
        items.slice(0, 1).map((item, index) => {
          return (
            <> */}
      <div className="AHead">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ahead_name">
                <div className="ahead_name_2">
                  {items[0].name}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="ahead_text">
                <div className="ahead_h">
                  <div className="ahead_h_2">
                    Мобильное приложение
                  </div>
                </div>
                <div className="ahead_img_box">
                  <div className="ahead_p_3">
                    <img
                      alt=""
                      src={items[0].image_service}
                      className="ahead_img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-lg-flex d-none"></div>
            <div className="col-lg-2 col-6">
              <div className="ahead_text">
                <div className="ahead_h">
                  <div className="ahead_h_2">
                    Клиент
                  </div>
                </div>
                <div className="ahead_p">
                  <div className="ahead_p_2">
                    {items[0].client}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="ahead_text">
                <div className="ahead_h">
                  <div className="ahead_h_2">
                    Сервис
                  </div>
                </div>
                <div className="ahead_p">
                  <div className="ahead_p_2">
                    {items[0].service}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="ahead_text">
                <div className="ahead_h">
                  <div className="ahead_h_2">
                    Сайт
                  </div>
                </div>
                <div className="ahead_p">
                  <div className="ahead_p_2">
                    <a href={items[0].site} className="ahead_p">
                      {items[0].site}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className='w-100 d-sm-flex d-none' src={items[0].image_full} alt="" />
      <img className='w-100 d-sm-none d-flex' src={items[0].image_mobile} alt="" />
      {/* <div
        className="ahead_img_box_2"
        style={{ backgroundImage: `url(${items[0].image_background})` }}></div>
      <img
        src="/img/ahead_1.png"
        alt=""
        className="ahead_img_2 d-lg-none d-flex"
      /> */}
      {/* </>
          );
        })} */}
    </>
  );
};

export default AHead;
