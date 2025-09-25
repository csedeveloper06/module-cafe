import PropTypes from "prop-types";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 p-4 ml-4 mt-12 rounded-lg">
      <div>
        <h2 className="text-2xl font-bold mb-4 ml-4">
          Spent time on read: {readingTime} min
        </h2>
      </div>
      <div className="border-b border-slate-400 mb-4"></div>
      <h2 className="text-2xl font-bold mb-4 ml-4">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      <div className="space-y-4 ml-4 bg-slate-100 p-4 rounded-lg">
        {bookmarks.map((blog, idx) => (
          <div
            key={idx}
            className="mb-4 p-2 border border-slate-300 rounded-lg"
          >
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default BookMarks;
