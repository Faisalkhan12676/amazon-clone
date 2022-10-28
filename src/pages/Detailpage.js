import react from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Detailpage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  

  return (
    <>
      {location.state.map((product, index) => (
        <div className="detail-container" key={index}>
          <div className="detail-card">
            <div className="detail-img">
              <img src={product.productimage} alt="" />
            </div>
            <div className="detail-content">
              <p>{product.productname}</p>
              <div className="stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <p>{product.productrating}</p>
                <p>{product.productquantity}</p>
              </div>
              <p>
                <b>{product.productprice.toLocaleString('en-PK',{
                  style: 'currency',
                  currency: 'PKR'
                })}</b>
              </p>
              <button
                className="btn btn-cart"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: { product } })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Detailpage;
