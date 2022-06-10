import React from "react";
import "./Home.css";

const Home = () => {
  var handleChange=(e)=> console.log(e.target.value);
 

  
  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "100vh", width: "45%" }}
    >
      <section className="head-color">
        <p className="ms-5">Type 1/3</p>
      </section>
      {/* drop down menu */}
      <div className="ms-5">
        <select className="ml-5 px-5" onChange={handleChange}>
          <option> Match type </option>
          <option value="Friendly" > Friendly </option>
          <option value="Tournament" > Tournament</option>
        </select>
        test
      </div>
      <div>
        <h6 className="next-button-style ps-5 py-1">NEXT</h6>
      </div>
    </div>
  );
};

export default Home;
