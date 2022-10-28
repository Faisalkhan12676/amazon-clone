import react from "react";
import { useDispatch } from "react-redux";

const Cartproduct = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="product-cart">
        <div className="product-cart-image">
          <img src={data.productimage} alt="product" />
        </div>
        <div className="product-cart-details">
          <p>{data.productname}</p>
          <p>QUANTITY</p>
          <div className="quantitybox">
            <button onClick={() => dispatch({type:"INCREASE_QTY", payload:{id:data.productid}})}>+</button>
            <input value={data.productquantity} />
            <button onClick={() => dispatch({type:"DECREASE_QTY",payload:{id:data.productid}})}>-</button>
          </div>
          <p>PRICE: {data.productprice}</p>
          <div className="removebtn">
            <button
              className="btn btn-cart"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: { id: data.productid },
                })
              }
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartproduct;
