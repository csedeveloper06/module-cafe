import PropTypes from "prop-types";

const Bookmark = ({ blog }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{blog.title}</h3>
      <p className="text-gray-600">{blog.author}</p>
    </div>
  );
};

Bookmark.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Bookmark;
