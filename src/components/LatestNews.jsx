import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01").then(
      (res) => res.json().then((data) => setNews(data.data))
    );
  }, []);

  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover className="">
        {news.map((singleNews) => (
          <Link
            className="flex items-center"
            to={`/news/${singleNews._id}`}
            key={singleNews._id}
          >
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <div>{singleNews.title}</div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
