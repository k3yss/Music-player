import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ setLibraryStatus, libraryStatus }) {
  return (
    <nav className="min-h-[10vh] flex justify-around items-center">
      <h1>Waves</h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        style={{
          border: "2px solid rgb(65 65 65)",
          transition: "all 0.3s ease",
        }}
        className="cursor-pointer p-2 hover:bg-slate-400 hover:text-white"
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
