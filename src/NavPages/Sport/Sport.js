import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";

import { useNavigate } from "react-router-dom";

const Sport = () => {

  const ScrollTop = () => {
    window.scroll(0, 0);
  };

  const nav = useNavigate();

  const handleNavigate = (id, item)=>{
    nav(`/itemDetail/:${id}`, {state: {itemDetail: item, status:"available"}})
  }

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/sport")
    .then((res)=>res.json())
    .then((res)=>{
      console.log("res", res);
      setData(res);
    })
  },[])

  return (
    <Layout>
      <h1 className="head-bolly text-center text-danger my-4">Sports</h1>
      {data
        .filter((item) => item?.category === "sports")
        .map((item, index) => {
          return (
            <div className="container my-5" key={index} onClick={()=>handleNavigate(item.id, item)}>
              <div className="row featurette my-4 mx-3">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">
                    {item?.title}
                  </h2>
                  <p className="lead">{item?.description}</p>
                  <p className="text-primary">
                    Country of Origin: {item?.origin}
                  </p>
                  <p className="text-danger">
                    Type: {item?.type}
                  </p>
                  <p className="text-body-secondary">
                    Category/ {item?.category}
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src={item?.url}
                    alt="sports"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
            </div>
          );
        })}

      <div className="back-top text-center my-3" onClick={ScrollTop}>
        <i className="fa-solid fa-circle-arrow-up fa-beat fa-2xl"></i>
      </div>
    </Layout>
  );
};

export default Sport;
