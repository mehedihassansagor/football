import React from "react";

const Thirdpage = () => {
  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "100vh", width: "45%" }}
    >
      <section className="head-color">
        <p className="ms-5">Teams 3/3</p>
      </section>
      <div className="d-flex justify-content-between px-5 pt-4">
        <div>
          <input className="mb-5" placeholder="Team 1 Name" type="text" />

          <hr />

          <input className="mt-5" placeholder="Team 1 Name" type="text" />
        </div>
        <div className="mt-5 pt-4">
          <p>VS</p>
        </div>
        <div>
          <select className="ml-5 pe-5 mb-5">
            <option value="male"> Home or Away </option>
            <option value="male"> Home </option>
            <option value="female"> Away</option>
          </select>

          <hr />

          <select className="ml-5 mt-5 pe-5">
            <option value="male"> Home or Away </option>
            <option value="male"> Home </option>
            <option value="female"> Away</option>
          </select>
        </div>
      </div>
      <div className="button-style">
        <button>Back</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Thirdpage;
