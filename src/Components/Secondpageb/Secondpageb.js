import React from "react";

const Secondpageb = () => {
  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "100vh", width: "45%" }}
    >
      <section className="head-color">
        <p className="ms-5">General 2/3</p>
      </section>
      <div className="d-flex justify-content-between px-4 pt-4">
        <input className="pe-5" placeholder="Start Date & Time" type="text" />
        <input className="pe-5" placeholder="End Date & Time" type="text" />
      </div>
      <br />
      <div className="d-flex justify-content-between px-4 pt-4">
        <div>
          <input className="pe-5 " placeholder="Match Location" type="text" />
          <br />
          <br />
          <br />
          <input className="pe-5 " placeholder="Tounament Name" type="text" />
        </div>

        <div>
          <input
            className="pe-5"
            style={{ paddingBottom: "100%" }}
            placeholder="Comments"
            type="text"
          />
        </div>
      </div>
      <div className="button-style">
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Secondpageb;
