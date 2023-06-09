import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

const Hollywood = () => {

  const ScrollTop = ()=>{
    window.scroll(0,0);
  }

const nav = useNavigate();
const handleNavigate = (id, item)=>{
  nav(`/itemDetail/${id}`, {state: {itemDetail: item, status: "available"}});
}

const [data, setData] = useState([]);

useEffect(()=>{
  fetch("https://blogappbackend-server.onrender.com/hollywood")
  .then((res)=>res.json())
  .then((res)=>{
    console.log("res", res);
    setData(res);
  })
},[])

  return (
    <Layout>
        <h1 className="head-bolly text-center text-danger my-4">Hollywood</h1>
        {
          data.filter((item)=> item?.category === 'hollywood').map((item, index)=>{
            return(
              <div className='container my-5' key={index} onClick={()=>handleNavigate(item.id, item)}>
                  <div className="row featurette my-4 mx-3">
                    <div className="col-md-7 order-md-2">
                      <h2 className="featurette-heading fw-normal lh-1">
                        {item?.title}
                      </h2>
                      <p className="lead">
                        {item?.description}
                      </p>
                      <p className="text-secondary">Release date: {item?.release_date}</p>
                      <p className="text-primary">IMDB: {item?.imdb}/10</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src={item?.url}
                        alt="hollywood"
                        style={{height:"300px", width:"300px"}}
                        />
                    </div>
                  </div>
                  <hr className="featurette-divider"></hr>
              </div>
            )
          })
        }
        <div className="back-top text-center my-3" onClick={ScrollTop}>
           <i className="fa-solid fa-circle-arrow-up fa-beat fa-2xl"></i>
        </div>
    </Layout>
  )
}

export default Hollywood