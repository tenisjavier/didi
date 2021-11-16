import React, {useState} from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DropMenu from "./DropMenu";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/header.css";

const Header = ({tagList, linkList, withSearch}) => {
  const [hClick, setHClick] = useState(false);
  const handleHambergerClick = () => setHClick(!hClick);
  const closeMobileMenu = () => setHClick(false);

  return (
      <>
        <nav className="nav-color">
          <Link className="nav-link" to="/cl">
            <StaticImage
              src="../images/didi-logo.png"
              alt="didi logo"
              className="navbar-logo"
              width={100}
            />
          </Link>
          <ul className={hClick ? 'nav-menu active' : 'nav-menu'}>
              {tagList.map( (tag, index) => (
                  tag.drop ?
                  <DropMenu index={index} p_item={tag.cont} p_link={linkList[index].mainPath} items={tag.list} links={linkList[index].secPath}/>
                  :
                  <li className="nav-item" key={index}>
                  <Link className="nav-links" to={linkList[index].mainPath} onClick={closeMobileMenu}>
                  {tag.cont}
                  </Link>
                  </li> 
                 
              ))}
          </ul>
          <button className='menu-icon' onClick={handleHambergerClick}>
              {hClick ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </nav>
      </>   
  );
};

export default Header;
