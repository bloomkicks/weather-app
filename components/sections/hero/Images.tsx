import Weather from "../../../models/Weather";
import classes from "./Images.module.scss";

const allWeatherImages: { [id: string]: string } = {
  clear: "Clear.png",
  hail: "Hail.png",
  heavy: "HeavyCloud.png",
  "heavy-rain": "HeavyRain.png",
  light: "LightCloud.png",
  "light-rain": "LightRain.png",
  shower: "Shower.png",
  sleet: "Sleet.png",
  snow: "Snow.png",
  thunder: "Thunderstroke.png",
};

const Images = ({ weather }: { weather: Weather }) => {
  const image: string = allWeatherImages[weather.type];

  return (
    <div className={classes.images}>
      <img
        className={classes.bg}
        src="/Cloud-background.png"
        alt=""
      />
      <img
        className={classes.weather}
        src={`/weather/${image}`}
        alt={image.slice(0, -4)}
      />
    </div>
  );
};

export default Images;
