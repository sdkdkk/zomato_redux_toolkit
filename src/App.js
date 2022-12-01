import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderFoodOnline from './Components/OrderFoodOnline/OrderFoodOnline';
import Products from './Components/product/Products';
import Cart from './Components/product/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route exact path="orderFoodOnline" element={<OrderFoodOnline/>} />
          <Route exact path="products" element={<Products/>} />
          <Route exact path="cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
