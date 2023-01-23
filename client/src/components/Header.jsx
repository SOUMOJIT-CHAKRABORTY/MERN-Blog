import React from "react";

export default function Header() {
  return (
    <main className="p-2.5 my-0">
      <header className="flex justify-between ite border-b-2 shadow-sm py-2 px-3 mx-auto max-w-6xl bg-white sticky top-0 z-10">
        <div className="border-black bg-black text-white p-1 rounded-md font-semibold">
          {" "}
          MyBlog
        </div>
        <div>
          <ul className="space-x-10 flex">
            <li>Login </li>
            <li>Register </li>
          </ul>
        </div>
      </header>
    </main>
  );
}