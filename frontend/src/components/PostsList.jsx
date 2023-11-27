import { useLoaderData } from "react-router-dom";
import Post from "./Post";

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul
          className="w-full grid gap-5
          grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]"
        >
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className="text-center text-[#ece1fa] space-y-3">
          <h2 className="font-semibold text-2xl">There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
