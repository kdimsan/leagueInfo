import { Participant } from "../@types/summonerMatches";

export const findSummoner = (
  participantsArray: Participant[],
  searchUserPuuid: string
) => {
  const userDataByMatch = participantsArray.filter(
    (userPuuid) => userPuuid.puuid === searchUserPuuid
  )[0];
  return userDataByMatch;
};
