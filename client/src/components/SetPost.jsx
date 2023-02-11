import formatISO9075 from "date-fns/esm/fp/formatISO9075/index.js";
import React from "react";
import { Link } from "react-router-dom";

export default function SetPost({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div className="flex space-x-4 mb-5">
        <div className="w-full ml-4">
          <Link to={`/post/${_id}`}>
            <img
              className="w-full h-full"
              src={"http://localhost:4000/" + cover}
              alt="#"
            />
          </Link>
        </div>
        <div className="w-full text-left pr-4">
          <Link to={`/post/${_id}`}>
            <p className="font-bold text-lg">{title}</p>
          </Link>
          <h2 className="flex mb-2 mt-1 text-xs text-gray-400 font-semibold space-x-2 items-center">
            <p className="text-gray-800 text-xs">{author.username}</p>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </h2>

          <p className="text-sm sm:text-lg">{summary}</p>
        </div>
      </div>
    </>
  );
}
