import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/cartSlice";
import { handleDecrement } from "../../features/cartSlice";
import { handleIncrement } from "../../features/cartSlice";
import "../../App.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleInc = (product) => {
    console.log("incr");
    dispatch(handleIncrement(product));
  };
  console.log(products);

  const handleDec = (product) => {
    dispatch(handleDecrement(product));
  };
  
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.product_qty * item.price;
    });
    return total.toFixed(2);
  };
  

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          //   <div key={product.id} className="cartCard">
          //     <img src={product.img} alt="" />
          //     <h5>{product.foodName}</h5>
          //     <h5>{product.price}</h5>
          //     <div>
          //       <div>{product.price}</div>
          //     </div>
          //     {/* <td>{product.price*product.id}</td> */}
          //     <button className="btn" onClick={() => handleRemove(product.id)}>
          //       Remove
          //     </button>
          //   </div>

          <div className="d-flex">
            <div class="col-3">
              <img
                src={product.img}
                class="card-img-top mt-2 mb-2 imgproduct rounded"
                alt="..."
                style={{ height: "200px", width: "250px" }}
              />
            </div>
            <div class="col-7 mt-3 mx-5 productdetails border-bottom">
              <h5 class="card-title foodnamecard">{product.foodName}</h5>
              <p class="card-text">Price: ₹ {product.price}</p>

              <div className="input-group cartInput">
                <button
                  type="button"
                  onClick={() => {
                    handleDec(product);
                  }}
                  className="input-group-text"
                >
                  -
                </button>
                <div className="form-control text-center">
                  {product.product_qty}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleInc(product);
                  }}
                  className="input-group-text"
                >
                  +
                </button>
              </div>
              <div className="cart-product-total-price">
                ${product.price * product.product_qty}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className="total">
        <span>SUBTOTAL:</span>
        <span>${totalPrice()}</span>
      </div>
    </div>
  );
};

export default Cart;
