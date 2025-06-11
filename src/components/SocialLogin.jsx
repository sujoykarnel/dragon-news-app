import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, gitHubSignIn, setUser } = useContext(AuthContext);

  const handleClickGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  const handleClickGitHubSignIn = (e) => {
    e.preventDefault();
    gitHubSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full space-y-2">
        <div onClick={handleClickGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle> Login With Google
        </div>
        <div onClick={handleClickGitHubSignIn} className="btn">
          <FaGithub></FaGithub> Login With Github
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
