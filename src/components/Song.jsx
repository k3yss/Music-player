import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container min-h-[60vh]  flex flex-col items-center justify-center ">
      <img className="w-[20%] rounded-[50%]" src={currentSong.cover}></img>
      <h2 className="p-4 pt-12 text-lg font-bold text-[#2e3440]">{currentSong.name}</h2>
      <h3 className="text-base font-normal text-[rgb(100,100,100)] ">{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
