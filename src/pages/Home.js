import axios from "axios";
import react, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categorycard from "../components/Categorycard";

const Home = () => {
  //json-server --watch Database.json --port 8000
  //getting api data
  const [Adata, setAdata] = useState([]);
  useEffect(async () => {
    try {
      const api = await axios.get("http://localhost:5000/Adata");
      const res = await api.data;
      console.log(res);
      setAdata(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Banner  />
      <div className="container">
        {Adata.map((item, index) => (
          <Categorycard
            key={index}
            namecat={item.catname}
            data={item.category}
          />
        ))}
        <div className="card signincard">
          <h1 className="signin">Sign in for the best experience</h1>
          <button className="btn">sign in</button>
        </div>
      </div>
    </>
  );
};

export default Home;
