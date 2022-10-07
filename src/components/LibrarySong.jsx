import React from "react";

function LibrarySong({ song, songs, setCurrentSong, id, audioRef, isPlaying }) {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play(); 
        });
      }
    }
    audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className="library-song cursor-pointer flex items-center  py-4 px-8 hover:bg-[rgb(201,255,247)]"
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
