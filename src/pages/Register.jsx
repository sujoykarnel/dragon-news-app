import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState({});

  const {
    createNewUser,
    setUser,
    updateUserProfile,
    user: logedUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  if (logedUser && logedUser.email) {
    navigate("/");
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 3) {
      setError({ ...error, nameError: "Name must be at least 3 character" });
    }
    const photoUrl = form.get("photo-url");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photoUrl, email, password });

    // create user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="p-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center">Register Here</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="name"
                required
              />
              {error.nameError && (
                <label className="label">{error.nameError}</label>
              )}
              <label className="label">Photo URL</label>
              <input
                name="photo-url"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            <p className="text-center font-semibold">
              Already have an account?{" "}
              <Link className="text-red-500" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
