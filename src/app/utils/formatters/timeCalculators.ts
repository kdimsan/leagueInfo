export const lastTimePlayedConverter = (unixDate: number) => {
  var date = new Date(unixDate);
  const formatted = date.toLocaleString();
  return formatted;
};

export function calcularDiferencaTempo(gameEndTimestamp: number) {
  const currentTimestamp = new Date().getTime();
  const differenceInMilliseconds = currentTimestamp - gameEndTimestamp;

  if (differenceInMilliseconds < 60000) {
    const differenceInMinutes = Math.floor(
      differenceInMilliseconds / 1000 / 60
    );
    return { difference: differenceInMinutes, unit: "minute(s)" };
  } else if (differenceInMilliseconds < 3600000) {
    const differenceInHours = Math.floor(
      differenceInMilliseconds / 1000 / 60 / 60
    );
    return { difference: differenceInHours, unit: "hour(s)" };
  } else {
    const differenceInHours = Math.floor(
      differenceInMilliseconds / 1000 / 60 / 60
    );

    if (differenceInHours < 24) {
      return { difference: differenceInHours, unit: "hour(s)" };
    } else {
      const differenceInDays = Math.floor(
        differenceInMilliseconds / 1000 / 60 / 60 / 24
      );
      return { difference: differenceInDays, unit: "day(s)" };
    }
  }
}

export const secondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinuts = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${formattedMinuts}:${formattedSeconds}`;
};
