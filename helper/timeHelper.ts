export const getCurrentUnixTime = (): number => {
  return Math.floor(Date.now() / 1000);
}

export const getHoursBetweenUnixTimes = (startUnixTime: number, endUnixTime: number): number => {
  const diffInSeconds = endUnixTime - startUnixTime;
  return diffInSeconds / 3600;
}