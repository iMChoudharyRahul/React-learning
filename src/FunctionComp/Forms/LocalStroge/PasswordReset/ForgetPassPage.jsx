// import React, { useEffect, useState } from 'react'
import useLocalStorage from "../../../../customHooks/useLocalStorage";

const ForgetPassPage = () => {
  const { email, setEmail } = useLocalStorage();
  // const [email, setEmail] = useState("");

  // useEffect(()=> {
  //   let email = localStorage.getItem("email");
  //   if(email) {
  //     setEmail(email);
  //   }
  // });

  // useEffect(()=> {
  //   localStorage.setItem("email", email);
  // }, [email]);

  return (
    <div>
      <h1>Reset Your Password</h1>
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button>Continue</button>
    </div>
  );
};

export default ForgetPassPage;
