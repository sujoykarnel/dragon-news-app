import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dignissimos, expedita facere accusantium eveniet quasi veniam ipsa
          nisi officiis possimus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dignissimos, expedita facere accusantium eveniet quasi veniam ipsa
          nisi officiis possimus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dignissimos, expedita facere accusantium eveniet quasi veniam ipsa
          nisi officiis possimus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dignissimos, expedita facere accusantium eveniet quasi veniam ipsa
          nisi officiis possimus.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
