import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState({});

  const { userLogin, setUser } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // loging user
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen">
        <div className="p-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center">
            Login Your Account
          </h2>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              {error.login && <label className="label text-red-600">{error.login}</label>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className="text-center font-semibold">
              Don't have an account?{" "}
              <Link className="text-red-500" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
