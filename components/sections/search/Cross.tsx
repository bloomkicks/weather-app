import classes from "./Cross.module.scss";

const Cross = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className={classes.cross}>
      <span></span>
      <span></span>
    </button>
  );
};

export default Cross;
