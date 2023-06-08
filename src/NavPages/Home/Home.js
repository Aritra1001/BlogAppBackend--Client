import React from "react";
import Layout from "../../Components/Layout/Layout";
// import { store } from "../../Utility/ContextData";
import ControlledCarousel  from "../Home/Carousel";
import Travel from "./Travel";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";

const Home = () => {
  // const [data] = useContext(store);

  const ScrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <Layout>
      <div className="container my-3" >
         <ControlledCarousel/>
      </div>

      <h1 className="head-bolly text-center text-danger my-4">Travel</h1>
      <Travel/>

      <h1 className="head-bolly text-center text-danger my-4">The Latest</h1>
      <Latest/>

      <h1 className="head-bolly text-center text-danger my-4"> Latest Article</h1>
      <LatestArticle/>

      <div className="back-top text-center my-3" onClick={ScrollTop}>
        <i className="fa-solid fa-circle-arrow-up fa-beat fa-2xl"></i>
      </div>
    </Layout>
  );
};

export default Home;
