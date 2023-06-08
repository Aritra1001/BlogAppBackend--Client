import React from "react";
import Layout from "../Components/Layout/Layout";
import { useLocation } from "react-router-dom";

const ItemDetails = () => {
  const location = useLocation();
  console.log("location", location);

  return (
    <Layout>
      <h1 className="text-center my-3"> Item Details</h1>
      <div className="container-detail row align-center my-4">
        <div className="col-lg-6" >
          <img
            src={location?.state?.itemDetail?.url}
            alt="item"
            style={{ height:"100%", width: "100%" }}
          />
        </div>
        <div className="col-lg-5  my-2 text-center">
          <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>
            {location?.state?.itemDetail?.title}
          </h2>
          <p style={{ fontSize: "25px" }}>
            {location?.state?.itemDetail?.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetails;
