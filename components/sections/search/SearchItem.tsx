import classes from "./SearchItem.module.scss"
 
const SearchItem = ({children}: {children: string}) => { 
 
  return ( 
    <li className={classes.item}>
      {children}
    </li>
  ) 
} 
 
export default SearchItem