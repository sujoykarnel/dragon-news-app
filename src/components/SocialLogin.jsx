import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full space-y-2">
        <div className="btn">
          <FaGoogle></FaGoogle> Login With Google
        </div>
        <div className="btn">
          <FaGithub></FaGithub> Login With Github
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
