import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onChangeUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function onChangePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  async function onSubmitLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  }

  return (
    <main className="mt-10">
      <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
      <form
        onSubmit={onSubmitLogin}
        className="flex flex-col space-y-3 max-w-[600px] mx-auto"
      >
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
          placeholder="username / email"
          className="border border-gray-300 rounded h-[30px] items-center px-3"
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
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
