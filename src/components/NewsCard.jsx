import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  // console.log(news);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-4">
      <figure className="lg:w-1/2">
        <img
          src={news.thumbnail_url}
          alt="news thumbnail"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="card-title">{news.title}</h2>
        <div className="flex items-center gap-3 mt-2">
          <img
            src={news.author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className="text-sm mt-4">{news.details.slice(0, 200)}...</p>

        <div className="block  justify-between items-center mt-4 space-y-2">
          <div className="badge badge-outline w-full">
            ⭐ {news.rating.number} ({news.rating.badge})
          </div>
          <div className="badge badge-outline w-full">
            👁️ {news.total_view} views
          </div>
          {news.others_info.is_trending && (
            <div className="badge badge-success w-full">Trending</div>
          )}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/news/${news._id}`} className="btn btn-primary btn-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
