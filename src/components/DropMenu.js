import React, {useState} from 'react';
import { Link } from 'gatsby';
import "../styles/dropmenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropMenu = ({index, p_item, p_link, items , links}) => {
    const [click, setClick] = useState(false);
    const [drop, setDrop] = useState(false);
    const handleClick = () => setClick(!click);
    const onMouseEnter = () => {
        if (window.innerWidth < 960){
          setDrop(false);
        }
        else{
          setDrop(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960){
          setDrop(false);
        }
        else{
          setDrop(false);
        }
      };
    return ( 
        <li className="nav-item" key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className="nav-links" to={p_link}> {p_item} <FontAwesomeIcon  icon={faAngleDown}/></Link>
            {
                drop ?
                <ul onClick={handleClick} className={click ? 'drop-menu clicked' : 'drop-menu'}>
                {items.map( (item, index) => (
                    <li key={index}>
                        <Link className="dropdown-link" to={links[index]} onClick={ () => setClick(false) } > 
                            {item} 
                        </Link>
                    </li>
                ))}
                </ul>
                :null
            }
            
        </li>
    );
}
 
export default DropMenu;