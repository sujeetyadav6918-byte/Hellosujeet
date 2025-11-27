import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200); // 200px ke baad button dikhana
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-blue-900 text-white shadow-lg hover:bg-blue-700 transition cursor-pointer"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
