import HumidityStats from "./HumidityStats";
import WindDirection from "./WindDirection";
import Highlight from "../../../models/Highlight";
import classes from "./Light.module.scss";

const Light = (highlight: Highlight) => {
  const { title, value, measureSign } = highlight;
  const isPercent = measureSign === "percent";

  return (
    <section className={classes.light}>
      <p>{title}</p>
      <h2>
        {value}
        <small className={isPercent ? classes.percent : ""}>
          {" "}
          {isPercent ? "%" : measureSign}
        </small>
      </h2>
      {highlight.isWind && (
        <WindDirection direction={highlight.windDirection!} />
      )}
      {highlight.isHumidity && (
        <HumidityStats value={highlight.value} />
      )}
    </section>
  );
};

export default Light;
