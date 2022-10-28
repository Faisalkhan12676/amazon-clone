import react from "react";
import SubCard from "./SubCard";

const Categorycard = ({ data, namecat }) => {
  return (
    <>
      <div className="card">
        <h3>{namecat}</h3>
        <div className="subcardparent">
          <SubCard subdata={data} />
        </div>
      </div>
    </>
  );
};

export default Categorycard;
