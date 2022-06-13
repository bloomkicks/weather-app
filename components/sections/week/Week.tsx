import Weather from "../../../models/Weather";
import Day from "./Day";
import classes from "./Week.module.scss";

const weekWeather = [
  new Weather("snow", new Date(Date.UTC(2022, 5, 13)), {
    max: 16,
    min: 11,
  }),
  new Weather("sleet", new Date(Date.UTC(2022, 5, 14)), {
    max: 17,
    min: 12,
  }),
  new Weather("sleet", new Date(Date.UTC(2022, 5, 15)), {
    max: 15,
    min: 12,
  }),
  new Weather("sleet", new Date(Date.UTC(2022, 5, 16)), {
    max: 16,
    min: 10,
  }),
  new Weather("sleet", new Date(Date.UTC(2022, 5, 17)), {
    max: 18,
    min: 14,
  }),
];

const Week = () => {
  return (
    <article className={classes.week}>
      {weekWeather.map((dayWeather) => {
        return (
          <Day
            weather={dayWeather}
            key={dayWeather.date!.toLocaleDateString("en-US")}
          />
        );
      })}
    </article>
  );
};

export default Week;
