import { createContext, useContext, useState } from "react";
import React from "react";

const ResultContext = createContext();
const baseUrl = "https://seo-api.p.rapidapi.com/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("elon musk");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-Proxy-Location": "EU",
        "X-User-Agent": "desktop",
        "X-RapidAPI-Key": "1eb8e62537msh99dbd059e658277p176636jsn7f02ca17d5d8",
        "X-RapidAPI-Host": "seo-api.p.rapidapi.com",
      },
    });
    const data = await response.json();

    console.log(type);

    if (type.includes("/news")) {
      // console.log({ data });
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    console.log(data);

    // setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
