const initstate = {
  bucket: [],
  totalprice: 0,
};
const CartReducer = (state = initstate, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //check if product exist in bucket if yes then return trueee
      const isProductAdded = state.bucket.find((item) =>
        action.payload.product.productid === item.productid ? true : false
      );
      //yeah its truee so increase the quantity
      if (isProductAdded) {
        isProductAdded.productquantity += 1;
        return {
          ...state,
          bucket: [...state.bucket],
          totalprice: state.totalprice + isProductAdded.productprice,
        };
      } else {
        //no i haven't added this product yet so add it to bucket
        return {
          ...state,
          bucket: [...state.bucket, action.payload.product],
          totalprice: state.totalprice + action.payload.product.productprice,
        };
      }


      
    case "REMOVE_FROM_CART":
      //check if product exist in bucket if yes then return trueee
      const isProductRemoved = state.bucket.find((item) => {
        return action.payload.id === item.productid ? true : false;
      });
      //yeah its truee so decrease the quantity
      if (isProductRemoved) {
        isProductRemoved.productquantity -= 1;
        //if quantity is zero then remove the product from bucket
        if (isProductRemoved.productquantity === 0) {
          return {
            ...state,
            bucket: state.bucket.filter(
              (item) => item.productid !== action.payload.id
            ),
            totalprice: state.totalprice - isProductRemoved.productprice,
          };
        } else {
          //if quantity is not zero then return the new state
          return {
            ...state,
            bucket: [...state.bucket],
            totalprice: state.totalprice - isProductRemoved.productprice,
          };
        }
      }

    //INCREAMENT
    case "INCREASE_QTY":
      //check if product exist in bucket if yes then return trueee
      const is = state.bucket.find((item) =>
        action.payload.id === item.productid ? true : false
      );
      //yeah its truee so increase the quantity
      if (is) {
        is.productquantity += 1;
        return {
          ...state,
          bucket: [...state.bucket],
          totalprice: state.totalprice + is.productprice,
        };
      } else {
        //no i haven't added this product yet so add it to bucket
        return {
          ...state,
          bucket: [...state.bucket, action.payload.product],
          totalprice: state.totalprice + action.payload.product.productprice,
        };
      }


      case "DECREASE_QTY":
         //check if product exist in bucket if yes then return trueee
      const descreaseqty = state.bucket.find((item) => {
        return action.payload.id === item.productid ? true : false;
      });
      //yeah its truee so decrease the quantity
      if (descreaseqty) {
        descreaseqty.productquantity -= 1;
        //if quantity is zero then remove the product from bucket
        if (descreaseqty.productquantity === 0) {
          return {
            ...state,
            bucket: state.bucket.filter(
              (item) => item.productid !== action.payload.id
            ),
            totalprice: state.totalprice - descreaseqty.productprice,
          };
        } else {
          //if quantity is not zero then return the new state
          return {
            ...state,
            bucket: [...state.bucket],
            totalprice: state.totalprice - descreaseqty.productprice,
          };
        }
      }

    default:
      return state;
  }
};

export default CartReducer;
