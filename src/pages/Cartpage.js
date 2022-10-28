import { addDoc ,collection} from "firebase/firestore";
import react from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartproduct from "../components/Cartproduct";
import { db } from "../Firebase";



const Cartpage = () => {
  const cart = useSelector((state) => state.CartReducer.bucket);
  const total = useSelector((state) => state.CartReducer.totalprice);
  console.log(cart);
  const pushdata = (cart,total) =>{
      addDoc(collection(db,"orders"),{
        order: cart,
        total:total,
      })
  }

  return (
    <>
      {cart.length == 0 ? (
        <div className="empty-cart">
          <h1>Cart is empty</h1>
        </div>
      ) : (
        <div className="parent-cart-container">
          <div className="cart-container">
            {cart.map((item, index) => (
              <Cartproduct key={index} data={item} />
            ))}
          </div>
          <div className="card cart-subtotal">
          <h1 className="signin">SUB TOTAL {total}</h1>
          <Link className="btn" to="/" onClick={() => pushdata(cart,total)}>Checkout</Link>
        </div>
        </div>
      )}
    </>
  );
};

export default Cartpage;
