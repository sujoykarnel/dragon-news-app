import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01").then(
      (res) => res.json().then((data) => setNews(data.data))
    );
  }, []);

  console.log(news);

  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover className="space-x-10">
        {news.map((singleNews) => (
          <Link to={`/news/${singleNews._id}`} key={singleNews._id}>
            {singleNews.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
