import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import {  useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orderFoodOnline");
  };

  return (
    <div className="col-md-12">
      <div className="headerz">
        <img
          src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1669354749~exp=1669355349~hmac=926739c45b33dbafb4bc542a5cb29f4510c69605ec08289ac1b85f35b4bf3133"
          className="head_img img-responsive center-block "
          alt=""
        />
      </div>
      <div className="text">
        <h1 className="main_heading">zomato</h1>
        <h3 className="description">
          Discover the best food &amp; drinks in{" "}
          <span className="next-line">Surat</span>
        </h3>
      </div>
      <div className=" col-md-8 ">
        <div className="searchContainer">
          <input type="text" placeholder="Search for Restaurant..." />
          <span>
            <i class="fa-solid fa-magnifying-glass" />{" "}
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div
            class="card cardz"
            onClick={handleClick}
            style={{  cursor: "pointer" }}
          >
            <img
              src="https://wallpapercave.com/wp/wp8558388.jpg"
              class="online-img-top rounded"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Order Online</h5>
              <p class="card-text">stay home and order to your doorstep</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="card cardz" >
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/982/460/30/sunset-dining-by-the-sea-wallpaper-preview.jpg"
              class="dining-img-top rounded"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dining</h5>
              <p class="card-text">View the city's favaurite dining venues</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="card cardz " >
            <img
              src="https://wallpaperaccess.com/full/1490303.jpg"
              class="card-img-top rounded"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Order Online</h5>
              <p class="card-text">Explore the city's top nightlife outlets</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
