import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const AFoot = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("APP") || [])
  );
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProject = () => {
      axios.get(API_PATH + "/main/projects/?search=3").then((response) => {
        setProject(response.data);
      });
    };
    getProject();
  }, []);

  const navigate = useNavigate()
  const link = (id) => {
    navigate('/portfolio/')
  };
  return (
    <>
      <div className="AFoot">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="afoot_name">Функционал</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_1} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_2} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_3} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_4} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_5} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_6} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_7} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_8} alt="" className="afoot_img" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="afoot_img_box_2">
                <img
                  src={items[0].image_glavniy}
                  alt=""
                  className="afoot_img_2"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_9} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_10} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_11} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_12} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_13} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_14} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_15} alt="" className="afoot_img" />
            </div>
            <div className="col-lg-3 col-4 afoot_box">
              <img src={items[0].image_16} alt="" className="afoot_img" />
            </div>
          </div>
          <div className="row d-none">
            <div className="col-12">
              <div className="afoot_h_4">Следующие кейсы</div>
            </div>
            {project &&
              project.map((item, index) => {
                return (
                  <div onClick={() => link(item.id)}
                    key={index}
                    className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="afoot_box_4">
                      <div className="afoot_img_box_4">
                        <img
                          src={item.image_service}
                          alt=""
                          className="afoot_img_4"
                        />
                      </div>
                      <div className="afoot_p_4">{item.name}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AFoot;
