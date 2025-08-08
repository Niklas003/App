import { FlightPlanFormat, simbriefBaseURL } from "@/constants/Remote";

export const fetchFlightplan = async (simbriefID: string, format: FlightPlanFormat) => {
  try {
    const response = await fetch(`${simbriefBaseURL}/xml.fetcher.php?userid=${simbriefID}&json=${format}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch {
    return {
      error: "Failed to fetch",
    };
  }
};
