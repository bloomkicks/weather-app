import { CSSTransition } from "react-transition-group";
import SearchItem from "./SearchItem";
import Cross from "./Cross";
import classes from "./Search.module.scss";

const Search = ({
  onClose,
  isActive,
}: {
  onClose: () => void;
  isActive: boolean;
}) => {
  return (
    <CSSTransition
      timeout={400}
      in={isActive}
      classNames={{
        enterActive: classes.opening,
        enterDone: classes.opening,
        exitActive: classes.closing,
        exitDone: classes.closing,
      }}
    >
      <article className={classes.search}>
        <Cross onClick={onClose} />
        <div>
          <input type="text" placeholder="search location" />
          <button>Search</button>
        </div>
        <ul>
          <SearchItem>London</SearchItem>
          <SearchItem>Barcelona</SearchItem>
          <SearchItem>Long Beach</SearchItem>
        </ul>
      </article>
    </CSSTransition>
  );
};

export default Search;
