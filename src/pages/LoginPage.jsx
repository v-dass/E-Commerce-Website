import { useState } from "react";


function LoginPage() {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!login.email || !login.password) {

      alert("Please enter email and password.");

      return;
    }

    alert("Login successful!");

  };


  return (

    <div className="login-page">

      <div className="login-box">

        <h1>🔐 Login</h1>

        <form onSubmit={handleSubmit}>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={login.email}
            onChange={(e) =>
              setLogin({
                ...login,
                email: e.target.value
              })
            }
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={login.password}
            onChange={(e) =>
              setLogin({
                ...login,
                password: e.target.value
              })
            }
          />


          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}


export default LoginPage;