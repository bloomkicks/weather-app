import { Direction } from "../../../models/Highlight";
import classes from "./WindDirection.module.scss";

const WindDirection = ({
  direction,
}: {
  direction: Direction;
}) => {
  return <div className={classes.direction}>{direction}</div>;
};

export default WindDirection;
