import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="md:flex">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </div>
  );
}

export default App;
