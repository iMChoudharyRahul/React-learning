import React from "react";
import CheckUserStatus from "./CheckUserStatus";
import SaveButton from "./SaveBuuton";

const CheckUser = () => {
  return (
    <>
      <div>
        <h1>Check User network Status</h1>
        <hr />
        <CheckUserStatus />
      </div>
      <h3>Example</h3>
      <SaveButton />
    </>
  );
};

export default CheckUser;
