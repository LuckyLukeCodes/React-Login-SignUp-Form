import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <span className="text-3xl font-semibold text-[var(--text-color)]">
        Welcome!!
      </span>
      <button
        onClick={handleLogout}
        className="rounded-xl bg-white px-14 py-3 text-blue-600 shadow-sm shadow-white hover:bg-blue-300 hover:text-[var(--text-color)] hover:shadow-blue-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
