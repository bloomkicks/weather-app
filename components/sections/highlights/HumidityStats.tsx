import classes from "./HumidityStats.module.scss";

const HumidityStats = ({ value }: { value: number }) => {
  return (
    <div className={classes.stats}>
      <div className={classes.scale}>
        <small>0</small>
        <small>50</small>
        <small>100</small>
      </div>
      <div className={classes.line}>
        <span
          className={classes.filled}
          style={{ width: `${value}%` }}
        ></span>
      </div>
      <small>%</small>
    </div>
  );
};

export default HumidityStats;
