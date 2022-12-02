import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import { add } from "../../features/cartSlice";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { STATUSES } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const hadleClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <div>
        <div className="d-flex">
          <div class="col-4 zomatohead">
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
            class="col-2 mt-3 "
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={hadleClick}
          >
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div class=" d-flex mt-3">
        <div class="col-8 d-flex geeks ">
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/9/18722589/6a97790930139f10493670e8257512b1.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            alt=""
            className="omfirstimg rounded"
          />
        </div>
        <div class="col-2 omsecondimgh ">
          <div class="geeks ">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/18722589/6ac0d68742e2a8821144f5ac777e4dfc.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
              alt=""
              className="rounded omsecondimg"
            />
          </div>
          <div class="geeks ">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/18722589/a9d35dda17ce4276e978de7bc564014c.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
              alt=""
              className="mt-2 rounded omthirdimg"
            />
          </div>
        </div>
      </div>
      <div className="col-9 producthead border-bottom">
        <h1>Om Sai Fast Food </h1>
        <p>Fast Food, Pizza, Burger, Beverages, Shake</p>
        <p>Athwa, Surat</p>
      </div>

      <div className="productsWrapper">
        {products
         .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.foodName.toLowerCase().includes(searchTerm.toLowerCase()) 
          ) {
            return val;
          }
        })
        .map((product) => (
          //   <div style={{ width: "18rem" }}>
          //     <img
          //       src={product.img}
          //       class="card-img-top"
          //       alt="..."
          //       style={{ height: "250px" }}
          //     />
          //     <div class="card-body">
          //       <h5 class="card-title">{product.foodName}</h5>
          //       <p class="card-text">{product.price}</p>
          //       <button
          //         onClick={() => handleAdd(product)}
          //         className="btn btn-primary productbtn"
          //       >
          //         Add to cart
          //       </button>
          //     </div>
          //   </div>
          <div className="d-flex ">
            <div class="col-3 ">
              {" "}
              <img
                src={product.img}
                class="card-img-top mt-2 mb-2 imgproduct rounded"
                alt="..."
                style={{ height: "200px", width: "250px" }}
              />
            </div>
            <div class="col-7 mt-3 mx-5 productdetails border-bottom">
              <h5 class="card-title foodnameproduct">{product.foodName}</h5>
              <h5>
                <span class="fa fa-star checked" style={{color:"orange"}}></span>
                <span class="fa fa-star checked" style={{color:"orange"}}></span>
                <span class="fa fa-star checked" style={{color:"orange"}}></span>
                <span class="fa fa-star" style={{color:"orange"}}></span>
                <span class="fa fa-star"></span>
              </h5>
              <p class="card-text">Price: ₹ {product.price}</p>
              <button
                onClick={() => handleAdd(product)}
                className="btn btn-primary productbtn"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
