import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LatestArticle = () => {

  const a = new Date();
  const date = a.getDate();
  const month = a.getMonth() + 1;
  const year = a.getFullYear();
  const currDate = date + "/" + month + "/" + year;

  const nav = useNavigate();
  const handleNavigate = (id, item)=>{
    nav(`/itemDetail/${id}`, {state: {itemDetail: item, status: "available"}});
  }

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://blogappbackend-server.onrender.com/")
    .then((res)=>res.json())
    .then((res)=>{
      console.log("res", res);
      setData(res);
    })
  },[])

  return (
    <>
      {data
        .filter((item) => item?.category === 'LatestArticle')
        .map((item, index) => {
          return (
            <div className="container my-5" key={index} onClick={()=>handleNavigate(item.id, item)}>
              <div className="row featurette my-4 mx-3">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1 my-2">
                    {item?.title}
                  </h2>
                  <p className="lead my-3">{item?.description}</p>
                  <p className=" text-muted">Today's date: {currDate}</p>
                  <p className="text-secondary">Category: {item?.category}</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src={item?.url}
                    alt="LatestArticles"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
            </div>
          );
        })}
    </>
  );
};

export default LatestArticle;
