import Images from "./Images";
import classes from "./Hero.module.scss";
import Weather from "../../../models/Weather";

const Hero = ({onSearch}: {onSearch: () => void}) => {
  return (
    <article className={classes.hero}>
      <div className={classes.places}>
        <button onClick={onSearch}>Search for places</button>
        <button>
          <img src="/my-location.svg" alt="My Location" />
        </button>
      </div>
      <Images weather={new Weather('shower')} />
      <h1>
        15<small>°C</small>
      </h1>
      <h2>Shower</h2>
      <div className={classes.details}>
        <span>Today</span>
        <span>•</span>
        <span>Fri, 5 Jun</span>
        <p>
          <img
            src="/cur-location.svg"
            alt="Current Location: "
          />{" "}
          Helsinki
        </p>
      </div>
    </article>
  );
};

export default Hero;
