import Images from "./Images";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <article className={classes.hero}>
      <div className={classes.places}>
        <button>Search for places</button>
        <button>
          <img src="/my-location.svg" alt="My Location" />
        </button>
      </div>
      <Images weather={{ type: "shower" }} />
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
