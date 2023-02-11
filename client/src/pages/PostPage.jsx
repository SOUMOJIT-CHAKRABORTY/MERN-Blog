import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) =>
      response.json().then((postInfo) => setPostInfo(postInfo))
    );
  }, [id]);

  if (!postInfo) return "";

  return (
    <>
      <div className=" space-x-4 mb-5">
        <div className="w-full ml-4">
          <img
            className="w-full h-full"
            src={`http://localhost:4000/${postInfo.cover}`}
            alt="#"
          />
        </div>
        <div className="w-full text-left pr-4">
          <p className="font-bold text-lg">{postInfo.title}</p>
          <h2 className="flex mb-2 mt-1 text-xs text-gray-400 font-semibold space-x-2 items-center">
            {/* <p className="text-gray-800 text-xs">{author.username}</p> */}
            {/* <time>{formatISO9075(new Date(createdAt))}</time> */}
          </h2>
          <p
            className="text-sm sm:text-lg"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          ></p>
        </div>
      </div>
    </>
  );
}
