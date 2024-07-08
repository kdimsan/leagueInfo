import { patch } from "../patch";

export default function getImageSquareCrop(championName: string) {
  function championNameChange(championName: string) {
    return championName === "FiddleSticks" ? "Fiddlesticks" : championName;
  }

  const finalChampionName = championNameChange(championName);

  const params = {
    imageUrl: `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${finalChampionName}.png`,
    x: 9,
    y: 9,
    width: 103,
    height: 103,
  };
  const croppedImage = `/api/crop?imageUrl=${encodeURIComponent(
    params.imageUrl
  )}&x=${params.x}&y=${params.y}&width=${params.width}&height=${params.height}`;
  return croppedImage;
}
