import Images from "./Images";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.places}>
        <button>Search for places</button>
        <button>
          <img src="/my-location.svg" alt="My Location" />
        </button>
      </div>
      <Images weather={{ type: "sleet" }} />
      <h1>15<small>℃</small></h1>
      <h2>Shower</h2>
      <div className={classes.details}>
        <span>Today</span><span>•</span><span>Fri, 5 Jun</span>
      </div>
      <p><img src="/cur-location.svg" alt="Current Location: " /> Helsinki</p>
    </section>
  );
};

export default Hero;
