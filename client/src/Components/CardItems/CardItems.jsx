import React, { useContext } from "react";
import "./CardItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
// import img from "../"

const CardItems = () => {
  const { all_product, cardItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="card-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        console.log(e.id , "<<<<<<<<< e")
        if (cardItems[e.id] > 0) {
          return             <div>
          <div className="cart-items-format">
            <img src={e.image} alt="" className="cart-icon-product-icon" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className="cart-items-quantity">
              {cardItems[e.id]}
            </button>
            <p>{e.new_price * cardItems[e.id]}</p>
            <img
              src={remove_icon}
              onClick={() => {
                removeFromCart(e.id);
              }}
              alt=""
            />
          </div>
          <hr />
        </div>
        }
      })}
    </div>
  );
};

export default CardItems;

// {all_product.map((e) => {
//     if (cardItems[e.id] > 0) {
//       return (
//         <div>
//           <div className="cart-items-format">
//             <img src={e.image} alt="" className="cart-icon-product-icon" />
//             <p>{e.name}</p>
//             <p>${e.new_price}</p>
//             <button className="cart-items-quantity">
//               {cardItems[e.id]}
//             </button>
//             <p>${e.new_price * cardItems[e.id]}</p>
//             <img
//               src={remove_icon}
//               onClick={() => {
//                 removeFromCart(e.id);
//               }}
//               alt=""
//             />
//           </div>
//           <hr />
//         </div>
//       );
//     }
//   })}
