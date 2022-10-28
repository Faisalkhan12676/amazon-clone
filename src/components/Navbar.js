import react from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {
    const img = "https://pngimg.com/uploads/amazon/amazon_PNG11.png";
    const cart = useSelector((state) => state.CartReducer.bucket);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/"><img src={img} alt="" /></Link>
        </div>
        <div className="location">
          <i className="bx bx-current-location"></i>
          <div className="content">
            <p>
              deliver to <br />
              <b>Pakistan</b>
            </p>
          </div>
        </div>
        <div className="search">
          <input type="text" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <div className="content">
          <p>
            hello, sign in <br />
            <b>Accounts & Lists</b>
          </p>
        </div>
        <div className="content">
          <p>
            returns <br />
            <b>& Orders</b>
          </p>
        </div>
        <div className="content-cart">
          <Link to="cart" ><i className="bx bxs-cart"> {cart == 0 ? "" : <span>{cart.length}</span> }</i></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
