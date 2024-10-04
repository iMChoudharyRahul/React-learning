import React, { useEffect, useState } from "react";
import useLocalStorage from "../../../../customHooks/useLocalStorage";

const LoginPage = () => {
  // const [form, setForm] = useState({email:"", password:""});
  const [password, setPassword] = useState("");
  const { email, setEmail } = useLocalStorage();

  // //if we already add the email  again come to login page
  // useEffect(() => {
  //   let email = localStorage.getItem('email');
  //   if (email) {
  //     setForm({...form, email: email});
  //   }
  // }, []);

  // //we set the email to local storage
  // useEffect(()=> {
  //   localStorage.setItem("email", form.email);
  // }, [form]);

  return (
    <div className="form">
      <h1>Welcome!!</h1>
      <hr />
      <hr />
      <h2>Login to Portal</h2>
      <form>
        {/* <label>Email:</label> */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
