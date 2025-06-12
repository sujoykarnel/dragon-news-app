import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ResetPassword = () => {
  const { resetPasswordEmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    resetPasswordEmail(email)
      .then(() => {
        e.target.reset();
        alert(
          `Password Reset Mail has been sent to ${email}. Please check inbox.`
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
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

export default ResetPassword;
