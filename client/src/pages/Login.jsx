import React from "react";

export default function Login() {
  return (
    <main className="mt-10">
      <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
      <form className="flex flex-col space-y-3 max-w-[600px] mx-auto">
        <input
          type="text"
          placeholder="username / email"
          className="border border-gray-300 rounded h-[30px] items-center px-3"
        />
        <input
          type="text"
          placeholder="password"
          className="border border-gray-300 rounded h-[30px] px-3"
        />
        <button className="bg-blue-600 rounded p-1 hover:bg-blue-700 active:bg-blue-800 text-white">
          Login
        </button>
      </form>
    </main>
  );
}
