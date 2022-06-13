import Highlight from "../../../models/Highlight";
import classes from "./Highlights.module.scss";
import Light from "./Light";

const highlights = [
  new Highlight("wind", 7, "mph", "SW"),
  new Highlight("humidity", 84, "percent"),
  new Highlight("visibility", 6.4, "miles"),
  new Highlight("air-pressure", 998, "mb"),
];

const Highlights = () => {
  return (
    <article className={classes.lights}>
      <h3>Today's Highlights</h3>
      {highlights.map((highlight) => {
        return <Light {...highlight} key={highlight.id} />;
      })}
    </article>
  );
};

export default Highlights;
