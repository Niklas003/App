export default interface FlightPlanAircraft {
  icaocode: string;
  iatacode: {};
  base_type: string;
  icao_code: string;
  iata_code: {};
  name: string;
  reg: string;
  fin: {};
  selcal: {};
  equip: string;
  equip_category: string;
  equip_navigation: string;
  equip_transponder: string;
  fuelfact: string;
  fuelfactor: string;
  max_passengers: string;
  supports_tlr: string;
  internal_id: string;
  is_custom: string;
}

export interface FlightPlanNOTAM {
  source_id: string;
  account_id: string;
  notam_id: string;
  location_id: string;
  location_icao: string;
  location_name: string;
  location_type: string;
  date_created: string;
  date_effective: string;
  date_expire: string;
  date_expire_is_estimated: {};
  date_modified: string;
  notam_schedule: string;
  notam_html: string;
  notam_text: string;
  notam_raw: string;
  notam_nrc: string;
  notam_qcode: string;
  notam_qcode_category: string;
  notam_qcode_subject: string;
  notam_qcode_status: string;
  notam_is_obstacle: {};
}

export interface FlightPlanATC {
  flightplan_text: string;
  route: string;
  route_ifps: string;
  callsign: string;
  flight_type: string;
  flight_rules: string;
  initial_spd: string;
  initial_spd_unit: string;
  initial_alt: string;
  initial_alt_unit: string;
  section18: string;
  fir_orig: string;
  fir_dest: string;
  fir_altn: string;
  fir_etops: {};
  fir_enroute: string[];
}

export interface FlightPlanAirport {
  icao_code: string;
  iata_code: string;
  faa_code: {};
  icao_region: string;
  elevation: string;
  pos_lat: string;
  pos_long: string;
  name: string;
  timezone: string;
  plan_rwy: string;
  trans_alt: string;
  trans_level: string;
  metar: string;
  metar_time: string;
  metar_category: string;
  metar_visibility: string;
  metar_ceiling: string;
  taf: string;
  taf_time: string;
  atis: {},
  notam: FlightPlanNOTAM[]
}

export interface FlightPlanCrew{
    pilot_id: string,
    cpt: string,
    fo: string,
    dx: string,
    pu: string,
    fa: string[]
}

export interface FlightPlanTimes {
    est_time_enroute: string,
    sched_time_enroute: string,
    sched_out: string,
    sched_off: string,
    sched_on: string,
    sched_in: string,
    sched_block: string,
    est_out: string,
    est_off: string,
    est_on: string,
    est_in: string,
    est_block: string,
    orig_timezone: string,
    dest_timezone: string,
    taxi_out: string,
    taxi_in:string,
    reserve_time:string,
    endurance: string,
    contfuel_time: string,
    etopsfuel_time: string,
    extrafuel_time:string,
}

export interface FlightPlanWeights {
    oew: string,
    pax_count: string,
    bag_count: string,
    pax_count_actual: string,
    bag_count_actual: string,
    pax_weigh:string,
    bag_weigh:string,
    freight_add:string,
    cargo:string,
    payload: string,
    est_zfw: string,
    max_zfw: string,
    est_tow: string,
    max_tow: string,
    max_tow_struct: string,
    tow_limit_code: string,
    est_ldw: string,
    max_ldw: string,
    est_ramp: string
}

export interface FlightPlanParams {
  airac: string;
  ofp_layout: string;
  request_id: string;
  sequence_id: string;
  static_id: Record<string, unknown>;
  time_generated: string;
  units: "kgs" | "lbs";
  user_id: string;
  xml_file: string;
}

export interface SimBriefFlightPlan {
  fetch: any;
  params: FlightPlanParams;
  general: any;
  origin: FlightPlanAirport;
  destination: FlightPlanAirport;
  alternate: FlightPlanAirport;
  alternate_navlog: any;
  takeoff_altn: any;
  enroute_altn: any;
  navlog: any;
  etops: any;
  tlr: any;
  atc: FlightPlanATC;
  aircraft: FlightPlanAircraft;
  fuel: any;
  fuel_extra: any;
  times: FlightPlanTimes;
  weights: FlightPlanWeights;
  impacts: any;
  crew: FlightPlanCrew;
  notams: any;
  weather: any;
  sigmets: any;
  text: any;
}
