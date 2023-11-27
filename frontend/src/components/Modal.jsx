import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div
        onClick={closeHandler}
        className="fixed top-0 left-0 
      w-full h-screen bg-black/60 z-[1]"
      />
      <dialog
        open
        className="bg-transparent mt-8
        overflow-hidden z-[1] w-full max-w-[22rem] 
        animate__animated animate__fadeInUp"
      >
        {children}
      </dialog>
    </>
  );
}
