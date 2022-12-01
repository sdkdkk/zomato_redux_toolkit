import React, { useState, useEffect } from "react";
import "./OrderFoodOnline.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../../features/Resturants";
import { useNavigate } from "react-router-dom";


const OrderFoodOnline = () => {
  const restaurant = useSelector((state) => state.restaurants);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  console.log(restaurant);

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div class="container">
        <div className="d-flex">
          <div class="col-3">
            <h1 style={{ fontWeight: "700" }}>zomato</h1>
          </div>
          <div class="col-4 ">
            <input
              type="text"
              placeholder="Search for restaurant,cuisine or a dish"
              className="restoinp"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <div
            class="col-2 mt-3 Login"
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            <p>Login</p>
          </div>
          <div
            class="col-2 mt-3 Logout"
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            <p>Logout</p>
          </div>
        </div>
        <div className="col-8 mx-5 mt-5">
          <h1 class=" foodOnlineHeading">
            Order food online in Majura,Udhna,Surat...
          </h1>
        </div>
        {restaurant.loading && <div>Loading...</div>}
        {!restaurant.loading && restaurant.error ? (
          <div>Error:{restaurant.error}</div>
        ) : null}
        {!restaurant.loading && restaurant.restaurants.length
          ? restaurant.restaurants
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.location.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((restaurant) => (
                <>
                  <div class="col cardrestaurant  " onClick={handleClick}>
                    <div class="card " style={{ width: "18rem" }}>
                      <img
                        src={restaurant.img}
                        class="cardresto-img-top"
                        alt="..."
                      />
                      <div class="card-body" style={{ height: "150px" }}>
                        <span className="d-flex ">
                          <h5 class="card-title resto_name">
                            {restaurant.name}
                          </h5>
                          <p
                            className="mx-3  "
                            style={{
                              backgroundColor: "green",
                              height: "22px",
                              borderRadius: "25%",
                              color: "white",
                              fontSize: "15px",
                            }}
                          >
                            {restaurant.rate}☆{" "}
                          </p>
                        </span>
                        <p class="card-text resto_type">{restaurant.type}</p>
                        <p class="card-text resto_type">
                          {restaurant.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))
          : null}
      </div>
    </>
  );
};

export default OrderFoodOnline;
