import { useLoaderData } from "react-router-dom";
import NewsCart from "../components/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <div className="space-y-5 mx-5">
        {news.map((singleNews) => (
          <NewsCart key={singleNews._id} news={singleNews}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
