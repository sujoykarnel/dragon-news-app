import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";
import Q_Zone from "../Q_Zone";

const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Q_Zone></Q_Zone>
    </div>
  );
};

export default RightNav;
