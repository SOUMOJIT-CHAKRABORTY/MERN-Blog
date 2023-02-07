import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  const username = userInfo?.username;

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  return (
    <main className="p-2.5 my-0">
      <header className="flex justify-between items-center border-b-2 shadow-sm py-2 px-3 mx-auto max-w-6xl bg-white sticky top-0 z-10">
        <div
          className="border-black bg-black text-white p-1 rounded-md font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          {" "}
          MyBlog
        </div>
        <div>
          <ul className="space-x-10 flex">
            {username && (
              <>
                <Link to="/create">Create new post</Link>
              </>
            )}
            {!username && (
              <li className="cursor-pointer" onClick={() => navigate("/login")}>
                Login
              </li>
            )}
            {username && <p onClick={logout}>Logout</p>}

            {!username && (
              <li
                className="cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register{" "}
              </li>
            )}
          </ul>
        </div>
      </header>
    </main>
  );
}
