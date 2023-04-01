import axios from "axios";
import React, { useEffect, useState } from "react";
import back_1 from "../images/wfoot_5.png";
import { API_PATH } from "../tools/constants";

const SFoot = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ITEMS") || [])
  );

  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProject = () => {
      axios.get(API_PATH + "/main/smm/").then((response) => {
        setProject(response.data);
      });
    };
    getProject();
  }, []);

  return (
    <>
      {items &&
        items.slice(0, 1).map((item, index) => {
          return (
            <>
              <div className="SFoot">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="sfoot_h">Посты</div>
                    </div>
                    {item.smm_images &&
                      item.smm_images.map((item2, index2) => {
                        return (
                          <div key={index2} className="col-sm-4 mb-4">
                            <div className="sfoot_img_box">
                              <img
                                src={item2.images}
                                alt=""
                                className="sfoot_img"
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="row">
                    <div className="col-1 d-lg-flex d-none"></div>
                    <div className="col-lg-4 col-6">
                      <div className="sfoot_img_box_3">
                        <img
                          src={item.low_image_1}
                          alt=""
                          className="sfoot_img_2"
                        />
                      </div>
                    </div>
                    <div className="col-2 d-lg-flex d-none"></div>
                    <div className="col-lg-4 col-6">
                      <div className="sfoot_img_box_3">
                        <img
                          src={item.low_image_2}
                          alt=""
                          className="sfoot_img_2"
                        />
                      </div>
                    </div>
                    <div className="col-1 d-lg-flex d-none"></div>
                  </div>
                </div>

                <div
                  className="wfoot_img_box_2"
                  style={{
                    backgroundImage: `url(${item.image_background_2})`,
                  }}></div>
                <img
                  src="/img/wfoot_5.png"
                  alt=""
                  className="wfoot_img_2 d-lg-none d-flex"
                />

                <div className="container">
                  <div className="row d-none">
                    <div className="col-12">
                      <div className="wfoot_h_4">Следующие кейсы</div>
                    </div>
                    {project &&
                      project.map((item, index) => {
                        return (
                          <div key={index} className="col-md-3 col-6 d-flex justify-content-center">
                            <div className="wfoot_box_4">
                              <div className="wfoot_img_box_4">
                                <img
                                  src={item.image_service}
                                  alt=""
                                  className="wfoot_img_4"
                                />
                              </div>
                              <div className="wfoot_p_4">{item.name}</div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default SFoot;
