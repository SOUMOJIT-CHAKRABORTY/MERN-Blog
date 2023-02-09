import React, { useEffect } from "react";

export default function Post() {
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        console.log(posts);
      });
    });
  });

  return (
    <main className="ml-10 mt-10">
      <div className="flex space-x-4 mb-5">
        <div className="w-full ml-4">
          <img
            className="w-full h-full"
            src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?w=1390&crop=1"
          />
        </div>
        <div className="w-full text-left pr-4">
          <p className="font-bold text-lg">
            No rest for Salesforce as activist investor Elliott Management takes
            multibillion stake in company
          </p>
          <p className="flex mb-2 mt-1 text-xs text-gray-400 font-semibold space-x-2 items-center">
            <h2 className="text-gray-500 text-xs">Soumojit Ch</h2>
            <time>23-01-2023 10:45</time>
          </p>

          <p className="text-sm sm:text-lg">
            It's been a tumultuous time at Salesforce recently, and it’s not
            getting any quieter soon. The Wall Street Journal reported last
            night that the company now needs to deal with activist investor
            Elliott Management.
          </p>
        </div>
      </div>

      {/* <div className="flex space-x-2 mb-5">
        <div className="w-full ml-4">
          <img
            className="w-full  h-full"
            src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?w=1390&crop=1"
          />
        </div>
        <div className="w-full text-left mr-4">
          <p className="font-bold text-lg pt-0">
            No rest for Salesforce as activist investor Elliott Management takes
            multibillion stake in company
          </p>
          <p className="flex mb-2 mt-1 text-xs text-gray-400 font-semibold space-x-2 items-center">
            <h2 className="text-gray-500 text-sm">Soumojit Ch</h2>
            <time>23-01-2023 10:45</time>
          </p>
          <p className="text-sm sm:text-lg">
            It's been a tumultuous time at Salesforce recently, and it’s not
            getting any quieter soon. The Wall Street Journal reported last
            night that the company now needs to deal with activist investor
            Elliott Management.
          </p>
        </div>
      </div> */}

      {/* <div className="flex space-x-2 mb-5">
        <div className="w-full ml-4">
          <img
            className="w-full h-full"
            src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?w=1390&crop=1"
          />
        </div>
        <div className="w-full text-left mr-4">
          <p className="font-bold text-xl">
            No rest for Salesforce as activist investor Elliott Management takes
            multibillion stake in company
          </p>
          <p className="flex mb-2 mt-1 text-xs text-gray-400 font-semibold space-x-2 items-center">
            <h2 className="text-gray-500 text-sm">Soumojit Ch</h2>
            <time>23-01-2023 10:45</time>
          </p>
          <p className="text-sm sm:text-lg">
            It's been a tumultuous time at Salesforce recently, and it’s not
            getting any quieter soon. The Wall Street Journal reported last
            night that the company now needs to deal with activist investor
            Elliott Management.
          </p>
        </div>
      </div> */}
    </main>
  );
}
