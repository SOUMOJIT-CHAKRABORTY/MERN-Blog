import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <main className="p-2.5 my-0">
      <header className="flex justify-between ite border-b-2 shadow-sm py-2 px-3 mx-auto max-w-6xl bg-white sticky top-0 z-10">
        <div
          className="border-black bg-black text-white p-1 rounded-md font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          {" "}
          MyBlog
        </div>
        <div>
          <ul className="space-x-10 flex">
            <li className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register{" "}
            </li>
          </ul>
        </div>
      </header>
    </main>
  );
}
