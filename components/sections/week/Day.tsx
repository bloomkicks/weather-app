import Weather from "../../../models/Weather";
import classes from "./Day.module.scss";

const Day = ({ weather }: { weather: Weather }) => {
  const date = weather.getFormattedDate();

  return (
    <section className={classes.day}>
      <p>{date!}</p>
      <img
        src={`/weather/${weather.type}.png`}
        alt={weather.type}
      />
      <div>
        <span>{(weather.temperature!.max || "N/A") + "°C"}</span>
        <span>{(weather.temperature!.min || "N/A") + "°C"}</span>
      </div>
    </section>
  );
};

export default Day;
