import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div
      style={{ boxShadow: "2px 2px 50px rgb(204,204,204)" }}
      className={` ${
        libraryStatus ?"active-library": "library"
      } fixed top-0 left-0 w-[20rem] h-full overflow-scroll transition-all ease-in	duration-300`}
    >
      <h2 className="p-8">Library</h2>
      <div className="library-songs ">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
