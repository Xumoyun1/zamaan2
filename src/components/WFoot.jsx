import React, { useState } from "react";
import back_1 from "../images/wfoot_5.png";

const WFoot = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("WEB") || [])
  );

  return (
    <>
      <div className="WFoot">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wfoot_name">Проектирование</div>
            </div>
            {items[0].web_images &&
              items[0].web_images.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 col-4 wfoot_box">
                    <img src={item.image} alt="" className="wfoot_img" />
                  </div>
                );
              })}
            <div className="col-12 d-flex justify-content-center">
              <img src={items[0].image_komp} alt="" className="wfoot_img_2" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="wfoot_img_box_2"
        style={{ backgroundImage: `url(${back_1})` }}></div>
      <img
        src="/img/wfoot_5.png"
        alt=""
        className="wfoot_img_2 d-lg-none d-flex"
      />
      <div className="container">
        {/* <div className="row">
          <div className="col-12">
            <div className="wfoot_h_4">Следующие кейсы</div>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <div className="wfoot_box_4">
              <div className="wfoot_img_box_4">
                <img src="/img/afoot_4.png" alt="" className="wfoot_img_4" />
              </div>
              <div className="wfoot_p_4">Eco ekspertiza</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default WFoot;
