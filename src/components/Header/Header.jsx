import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="bg-slate-100 p-4 flex justify-between items-center mx-4 border-b-2 border-slate-400">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Profile" />
    </header>
  );
};

export default Header;
