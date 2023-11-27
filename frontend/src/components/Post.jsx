import { Link } from "react-router-dom";

export default function Post({ id, author, body }) {
  return (
    <Link to={id}>
      <li
        className="list-none p-4 bg-[#9c7eee] 
    rounded-lg shadow-md space-y-1
    animate__animated animate__fadeInUp"
      >
        <p
          className="text-sm font-semibold
       text-[#543280] uppercase"
        >
          {author}
        </p>
        <p className="text-xl italic text-[#593884]">{body}</p>
      </li>
    </Link>
  );
}
