import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main className="container max-w-[50rem] py-16 grid place-items-center">
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const resData = await res.json();
  return resData.posts;
}
