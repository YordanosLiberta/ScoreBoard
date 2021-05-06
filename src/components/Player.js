import React from "react";

function Player(props) {
  return (
    <div>
      <li className="Player">
        <p>
          {props.name} (score: {props.score})
        </p>
      </li>
    </div>
  );
}

export default Player;
