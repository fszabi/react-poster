import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";

export default function MainHeader() {
  return (
    <header
      className="container pt-24 pb-8 text-center flex gap-y-3 max-sm:flex-col justify-between
     items-center border-b-2 border-[#ece1fa]"
    >
      <h1 className="text-4xl flex gap-6 items-center text-[#ece1fa]">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link
          to="/create-post"
          className="flex items-center 
        gap-2 py-3 px-6 bg-[#a990fb] text-[#2a2630]
        shadow-md font-bold rounded-md hover:opacity-80 transition-opacity duration-300"
        >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
