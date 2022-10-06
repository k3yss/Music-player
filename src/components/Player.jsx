import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="player flex flex-col min-h-[20vh] items-center justify-between">
      <div className="time-control w-1/2  flex">
        <p className="p-4">Start time</p>
        <input className="w-full py-4 px-8" type="range" />
        <p className="p-4">End time</p>
      </div>
      <div className="playcontrol flex justify-between items-center p-4 w-1/2">
        <FontAwesomeIcon className="skip-back cursor-pointer" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play cursor-pointer" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="skip-forward cursor-pointer"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
