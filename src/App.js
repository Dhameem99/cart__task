import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "./card";
import Cart from "./cart";
import Topbar from "./topbar";
import Header from "./header";

function App() {
  
  const Products = [
    {
      id: 1,
      name: "iwatch series 8",
      price: 20000,
      img: "https://i.gadgets360cdn.com/products/large/apple-watch-series-db-679x800-1662577879.jpg",
    },
    {
      id: 2,
      name: "oneplus 10 pro",
      price: 70000,
      img: "https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg",
    },
    {
      id: 3,
      name: "ipad mini ",
      price: 25000,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1631751019000",
    },
    {
      id: 4,
      name: "samsung s22 ultra",
      price: 108999,
      img: "https://m.media-amazon.com/images/I/71PvHfU+pwL._SX679_.jpg",
    },
    {
      id: 5,
      name: "iphone 14 pro",
      price: 100000,
      img: "https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png",
    },
    {
      id: 6,
      name: "iphone 14 pro max",
      price: 150000,
      img: "https://cdn-files.kimovil.com/default/0007/75/thumb_674941_default_big.jpg",
    }]
    const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([]);

  let addToCart = (Product) => {
    setCartItems([...cartItems, Product]);
  };

  let removeFromCart = (Product) => {
    const indexval = cartItems.findIndex((obj) => obj.id === Product.id);
    cartItems.splice(indexval, 1);
    setCartItems([...cartItems]);
  };  

  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                 <Topbar/>          
            </div>
            </nav>
            <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
             <Header/>
            </div>
            </header>
          
    <div className="container">
      <div className="row">
        <div className="col-lg-8 ">
          <div className="row">
            {Products.map((Product) => {
              return <Card Product={Product} addToCart={addToCart} cartItems={cartItems}/>;
            })}
          </div>
        </div>
        <div className="col-lg-4 py-2">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;