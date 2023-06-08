import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Travel = () => {

  const method = new Date();
  const date = method.getDate();
  const month = method.getMonth() + 1;
  const year = method.getFullYear();
  const currDate = date + "/" + month + "/" + year;
  console.log("curr date", currDate);

  const nav = useNavigate();
  const handleNavigate = (id, item)=>{
    nav(`/itemDetail/${id}`, {state: {itemDetail: item, status: "available"}});
  }

  const [data, setData] = useState([]);

 
  useEffect(()=>{
    fetch("http://localhost:8080/")
    .then((res)=>res.json())
    .then((res)=>{
      console.log("res", res);
      setData(res);
    })
  },[])

  return (
    <div className="container">
      {/* <div className="row align-center travel-item"> */}
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 ">
        {data
          .filter((item) => item?.category === "Travel")
          .map((item, index) => {
            return (
              // <div className="my-3 col-lg-3 col-md-6 " key={index}>
              //   <div className="card border-primary card-container" style={{ width: "18rem" }}>
              //     <img src={item?.url} className="card-img-top" alt="travel" height="230px"/>
              //     <div className="card-body">
              //       <h5 className="card-title">{item?.title}</h5>
              //       <p className="card-text">
              //         {item?.description}
              //       </p>
              //       <p className="card-text text-muted">
              //         {currDate} / {item?.category}
              //       </p>
              //       <button href="/" className="btn btn-primary">
              //         Go somewhere
              //       </button>
              //     </div>
              //   </div>
              // </div>

              <div className="col " key={index}>
                <div className="card border-primary">
                  <img
                    src={item?.url}
                    className="card-img-top"
                    alt="travel"
                    style={{ height: "250px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item?.title}</h5>
                    <p className="card-text">{item?.description}</p>
                    <p className="card-text text-muted">
                      {currDate} / {item?.category}
                    </p>
                    <button className="btn btn-primary" onClick={()=>handleNavigate(item.id, item)}>
                      Continue reading
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Travel;
