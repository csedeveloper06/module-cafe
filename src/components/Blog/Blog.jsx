import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog Title</h2>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
