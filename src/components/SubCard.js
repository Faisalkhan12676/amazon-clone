import react from "react";
import { Link, useNavigate } from "react-router-dom";

const SubCard = (props) => {
  const navigate = useNavigate();

  

  return (
    <>
      {props.subdata.map((item, index) => (
        <div className="subcard" onClick={() => navigate("product",{state: item.products,catename:item.categoryname})}>
          <img src={item.categoryimage} alt="" />
          <p>{item.categoryname}</p>
        </div>
      ))}
    </>
  );
};

export default SubCard;
