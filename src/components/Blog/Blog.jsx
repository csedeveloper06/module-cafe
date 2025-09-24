import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt={`cover picture of the ${title}`} />
      <div className="flex justify-between">
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
