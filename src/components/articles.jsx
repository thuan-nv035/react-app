import React, { useState } from "react";
const api = {
  key: "358a0f2f34bd446987cf461bc88e0176",
  base: "https://newsapi.org/v2/everything/?",
};

const Articles = () => {
  const [article, setArticle] = useState({});
  const [query, setQuery] = useState("");
  const search = (evt) => {
    if (evt.key === "Enter") {
      // https://newsapi.org/v2/everything/?q=tesla&from=2022-03-20&sortBy=publishedAt&apiKey=358a0f2f34bd446987cf461bc88e0176
      fetch(
        `${api.base}q=${query}&from=2022-04-20&sortBy=popularity&apiKey=${api.key}`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setArticle(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-xl mt-4 pt-4 text-black font-bold">
            CGI BY TONIC
          </h1>
          <br />
          <h6 className="text-gray-500 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
            sed?
          </h6>
          <div className="flex mt-2">
            <div className="w-full h-1 text-center bg-gray-500  "></div>
          </div>
          <div className="flex justify-start">
            <span className="mx-4 font-bold mt-1">ALL</span>
            <span className="mx-4 font-bold mt-1">ACCESSORIES</span>
            <span className="mx-4 font-bold mt-1">CARS</span>
            <span className="mx-4 font-bold mt-1">SUPER</span>
          </div>
          <br />
          <div className="py-20 px-20">
            <div className="flex items-center justify-center">
              <div className="flex border-2 rounded">
                <input
                  type="text"
                  className="px-4 py-2 w-80"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
              </div>
            </div>
            {/* <div className="py-20 px-4">
              <div className="flex justify-between items-center flex-wrap">
                {article.map((item, index) => {
                  return (
                    <div className="blogs bg-white mr-5 w-3/12" key={index}>
                      <img
                      src ={item.urlToImage} 
                      />
                      <div className="p-5">
                        <h1 className="text-2xl font-bold text-green-800 py-2">
                          {item.title}
                        </h1>
                        <p className="bg-white text-sm text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
