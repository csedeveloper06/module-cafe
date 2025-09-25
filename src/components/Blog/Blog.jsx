import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 p-4 border border-slate-300 rounded-lg space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex mt-2">
          <img
            className="w-10 h-10 rounded-full"
            src={author_image}
            alt="author"
          />
          <div className="ml-4">
            <h3 className="text-lg font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
            <CiBookmark className="text-2xl" />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-blue-600 mr-2">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold underline"
        onClick={() => handleMarkAsRead(reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
