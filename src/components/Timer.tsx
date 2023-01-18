import { BlockList } from "net";
import React from "react";

import timeZones from "../time-zones";
type TimerProps = {
  cityOrCountry: string;
};
export const Timer: React.FC<TimerProps> = (props) => {
  let timeZoneInd: number = getIndex(props.cityOrCountry);
  const timeZone: string = timeZones[timeZoneInd].name;
  const [time, setTime] = React.useState(new Date());
  function tick() {
    console.log("tick");
    setTime(new Date());
  }
  React.useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Time in time zone {timeZone}</h3>
      <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>
        Time {time.toLocaleTimeString(undefined, { timeZone })}
      </label>
    </div>
  );
};
function getIndex(cityOrCountry: string): number {
  let index = timeZones.findIndex((element) => {
    return JSON.stringify(element).includes(cityOrCountry);
  });
  return index > -1 ? index : getOurIndex();
}
function getOurIndex(): number {
  return timeZones.findIndex(
    (element) =>
      Intl.DateTimeFormat().resolvedOptions().timeZone === element.name
  );
}
//hw33