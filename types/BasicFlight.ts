import { FlightPlanParams } from "./FlightPlan";

export default interface BasicFlight {
    origin: string,
    destination: string,
    departUTC: string,
    arrivalUTC: string,
    aircraft: string,
    callsign: string,
    flightPlanParams: FlightPlanParams 
}