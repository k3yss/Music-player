import React from "react";
import { playAudio } from "../util";

function LibrarySong({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    // add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    playAudio(isPlaying,audioRef)
   
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        song.active ? "selected" : ""
      } cursor-pointer flex items-center  py-4 px-8 hover:bg-[rgb(201,255,247)]`}
    >
      <img className="w-[30%]" src={song.cover}></img>
      <div className="song-description pl-4">
        <h3 className="text-[1rem] font-normal text-[rgb(100,100,100)]">
          {song.name}
        </h3>
        <h4 className="text-[0.7rem] font-normal text-[rgb(100,100,100)]">
          {song.artist}
        </h4>
      </div>
    </div>
  );
}

export default LibrarySong;
