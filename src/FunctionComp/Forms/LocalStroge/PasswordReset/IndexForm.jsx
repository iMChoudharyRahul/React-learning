import React, { useState } from "react";
import Login from "./LoginPage";
import ForgetPass from "./ForgetPassPage";

const IndexForm = () => {
  const [showForm, setShowForm] = useState("login");
  return (
    <div>
      {showForm === "login" ? <Login /> : <ForgetPass />}
      <hr />
      <button
        onClick={() => {
          setShowForm(showForm == "login" ? "reset" : "login");
        }}
      >
        {showForm === "login" ? "Forget Password" : "Back to login"}
      </button>
    </div>
  );
};

export default IndexForm;
