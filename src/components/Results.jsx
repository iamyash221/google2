import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";

import { useResultContext } from "../context/ResultContextProvider";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      // if (location.pathname === "/video") {
      //   getResults(`/q=${searchTerm}`);
      // } else {
      //   getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      // }
      getResults(`${location.pathname}/q=${searchTerm}&num=9`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      console.log(results);
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              className="sm:p-3 p-5"
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {/* {results?.map(({ links, id, source, title }) => ( */}
          {results?.map(({ link, title, id }, index) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                {/* <div className="flex gap-4">
                  <a href={link} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div> */}
              </a>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap">
          {results.map((result, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={result.link}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return "ERROR";
  }
};
