import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";

export default function NewPost() {
  return (
    <Modal>
      <Form
        method="POST"
        className="p-4 text-[#e5d5f7] max-w-[22rem] bg-[#5632ae]
       rounded-md shadow-md space-y-3"
      >
        <div className="space-y-1">
          <label className="block font-semibold" htmlFor="body">
            Text
          </label>
          <textarea
            placeholder="Something here"
            className="w-full px-3 py-2 rounded-md
          bg-[#bba1de] text-[#593884]
          placeholder:text-[#593884aa]
          focus:outline-[#5632ae]"
            id="body"
            name="body"
            required
            rows={3}
          />
        </div>
        <div className="space-y-1">
          <label className="block font-semibold" htmlFor="author">
            Your name
          </label>
          <input
            placeholder="Max"
            className="w-full px-3 py-2 rounded-md 
          bg-[#bba1de] text-[#593884]
          placeholder:text-[#593884aa]
          focus:outline-[#815eeb]"
            type="text"
            id="author"
            name="author"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <Link
            className="py-2 px-6 rounded-md
         bg-transparent text-[#e5d5f7]
         hover:opacity-80 transition-opacity duration-300"
            to=".."
          >
            Cancel
          </Link>
          <button
            className="py-2 px-6 rounded-md
         bg-[#34036c] text-[#e5d5f7]
         hover:bg-[#23014a] transition-colors 
         duration-300"
          >
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
