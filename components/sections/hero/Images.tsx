import Weather from "../../../models/Weather";
import classes from "./Images.module.scss";

const Images = ({ weather }: { weather: Weather }) => {
  return (
    <div className={classes.images}>
      <img
        className={classes.bg}
        src="/Cloud-background.png"
        alt=""
      />
      <img
        className={classes.weather}
        src={`/weather/${weather.type}.png`}
        alt={weather.type}
      />
    </div>
  );
};

export default Images;
