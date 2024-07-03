import React from "react";

interface ChampionVideoProps {
  championKey: string;
  skillButton: string;
}

export default function ChampionVideo({
  skillButton,
  championKey,
}: ChampionVideoProps) {
  return (
    <div className="">
      <video
        controls
        className="rounded-md m-auto lg:h-96"
        src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey.padStart(
          4,
          "0"
        )}/ability_${championKey.padStart(4, "0")}_${skillButton}1.webm`}
      ></video>
    </div>
  );
}
