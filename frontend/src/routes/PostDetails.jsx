import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";

export default function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className="p-4 bg-[#9c7eee]">
          <h1 className="">Could not find post</h1>
          <p className="">
            Unfortunately, the requested post could not be found.
          </p>
          <Link to=".." className="">
            Okay
          </Link>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className="p-4 bg-[#9c7eee] rounded-md shadow-md">
        <p
          className="text-sm font-semibold
       text-[#543280] uppercase"
        >
          {post.author}
        </p>
        <p className="text-xl italic text-[#593884]">{post.body}</p>
      </main>
    </Modal>
  );
}

export async function loader({ params }) {
  const res = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = await res.json();
  return resData.post;
}
