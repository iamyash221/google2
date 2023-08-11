import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔍 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📽️ Videos" },
];

export const Links = () => {
  return (
    <div className="flex sm:justif-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        // <NavLink to={url} activeClassN-ame="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
        <NavLink
          to={url}
          //   className="m-2 mb-0"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : "m-2 mb-0"
          }
          //   activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
        // <NavLink/>
      ))}
    </div>
  );
};
