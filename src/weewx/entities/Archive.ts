import { Column, Entity } from "typeorm";

@Entity("archive")
export class Archive {
  @Column("integer", { primary: true, name: "dateTime", unique: true })
  dateTime: number;

  @Column("integer", { name: "usUnits" })
  usUnits: number;

  @Column("integer", { name: "interval" })
  interval: number;

  @Column("real", { name: "barometer", nullable: true })
  barometer: number | null;

  @Column("real", { name: "pressure", nullable: true })
  pressure: number | null;

  @Column("real", { name: "altimeter", nullable: true })
  altimeter: number | null;

  @Column("real", { name: "inTemp", nullable: true })
  inTemp: number | null;

  @Column("real", { name: "outTemp", nullable: true })
  outTemp: number | null;

  @Column("real", { name: "inHumidity", nullable: true })
  inHumidity: number | null;

  @Column("real", { name: "outHumidity", nullable: true })
  outHumidity: number | null;

  @Column("real", { name: "windSpeed", nullable: true })
  windSpeed: number | null;

  @Column("real", { name: "windDir", nullable: true })
  windDir: number | null;

  @Column("real", { name: "windGust", nullable: true })
  windGust: number | null;

  @Column("real", { name: "windGustDir", nullable: true })
  windGustDir: number | null;

  @Column("real", { name: "rainRate", nullable: true })
  rainRate: number | null;

  @Column("real", { name: "rain", nullable: true })
  rain: number | null;

  @Column("real", { name: "dewpoint", nullable: true })
  dewpoint: number | null;

  @Column("real", { name: "windchill", nullable: true })
  windchill: number | null;

  @Column("real", { name: "heatindex", nullable: true })
  heatindex: number | null;

  @Column("real", { name: "ET", nullable: true })
  et: number | null;

  @Column("real", { name: "radiation", nullable: true })
  radiation: number | null;

  @Column("real", { name: "UV", nullable: true })
  uv: number | null;

  @Column("real", { name: "extraTemp1", nullable: true })
  extraTemp1: number | null;

  @Column("real", { name: "extraTemp2", nullable: true })
  extraTemp2: number | null;

  @Column("real", { name: "extraTemp3", nullable: true })
  extraTemp3: number | null;

  @Column("real", { name: "soilTemp1", nullable: true })
  soilTemp1: number | null;

  @Column("real", { name: "soilTemp2", nullable: true })
  soilTemp2: number | null;

  @Column("real", { name: "soilTemp3", nullable: true })
  soilTemp3: number | null;

  @Column("real", { name: "soilTemp4", nullable: true })
  soilTemp4: number | null;

  @Column("real", { name: "leafTemp1", nullable: true })
  leafTemp1: number | null;

  @Column("real", { name: "leafTemp2", nullable: true })
  leafTemp2: number | null;

  @Column("real", { name: "extraHumid1", nullable: true })
  extraHumid1: number | null;

  @Column("real", { name: "extraHumid2", nullable: true })
  extraHumid2: number | null;

  @Column("real", { name: "soilMoist1", nullable: true })
  soilMoist1: number | null;

  @Column("real", { name: "soilMoist2", nullable: true })
  soilMoist2: number | null;

  @Column("real", { name: "soilMoist3", nullable: true })
  soilMoist3: number | null;

  @Column("real", { name: "soilMoist4", nullable: true })
  soilMoist4: number | null;

  @Column("real", { name: "leafWet1", nullable: true })
  leafWet1: number | null;

  @Column("real", { name: "leafWet2", nullable: true })
  leafWet2: number | null;

  @Column("real", { name: "rxCheckPercent", nullable: true })
  rxCheckPercent: number | null;

  @Column("real", { name: "txBatteryStatus", nullable: true })
  txBatteryStatus: number | null;

  @Column("real", { name: "consBatteryVoltage", nullable: true })
  consBatteryVoltage: number | null;

  @Column("real", { name: "hail", nullable: true })
  hail: number | null;

  @Column("real", { name: "hailRate", nullable: true })
  hailRate: number | null;

  @Column("real", { name: "heatingTemp", nullable: true })
  heatingTemp: number | null;

  @Column("real", { name: "heatingVoltage", nullable: true })
  heatingVoltage: number | null;

  @Column("real", { name: "supplyVoltage", nullable: true })
  supplyVoltage: number | null;

  @Column("real", { name: "referenceVoltage", nullable: true })
  referenceVoltage: number | null;

  @Column("real", { name: "windBatteryStatus", nullable: true })
  windBatteryStatus: number | null;

  @Column("real", { name: "rainBatteryStatus", nullable: true })
  rainBatteryStatus: number | null;

  @Column("real", { name: "outTempBatteryStatus", nullable: true })
  outTempBatteryStatus: number | null;

  @Column("real", { name: "inTempBatteryStatus", nullable: true })
  inTempBatteryStatus: number | null;
}
