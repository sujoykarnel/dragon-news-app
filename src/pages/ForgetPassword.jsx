import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    console.log(email);
  };
  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen">
        <div className="p-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center">
            Send a reset mail
          </h2>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Enter Your Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <button className="btn btn-neutral mt-4">Sent</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
