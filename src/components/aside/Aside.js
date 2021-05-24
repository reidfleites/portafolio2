import { Link } from "react-router-dom";
import foto from "../../images/ich.jpg";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

import {ImHome} from "react-icons/im";

import{RiCodeBoxFill} from "react-icons/ri";
import{GiSkills} from "react-icons/gi";
import {AiOutlineMail} from "react-icons/ai";


function Aside() {
  return (
    <div className="transp">
      <div className="aside">
        <div>
          <img src={foto} alt="ich" />
          <h4>REINIER</h4>
        </div>
        {/* <label htmlFor="menu-icon">
          <TiThMenu className="menu-icon" />
        </label>
        <input type="checkbox" className="check-box" id="menu-icon" /> */}
        <ul className="nav-ul">
          <li>
            <Link className="nav--link" to="/">
              <ImHome className="mobil-icon"/><strong>Home</strong>
            </Link>
          </li>
          <li className="link-pro">
            <Link className="nav--link" to="/projects">
              <RiCodeBoxFill className="mobil-icon"/><strong>Projects</strong>
            </Link>
          </li>
          <li>
            <Link className="nav--link" to="/about">
              <GiSkills className="mobil-icon"/><strong>About</strong>
            </Link>
          </li>
          <li>
            <Link className="nav--link" to="/contacts">
            <AiOutlineMail className="mobil-icon"/><strong>Contact </strong>
            </Link>
          </li>
        </ul>
        <div className="footer">
          <ul className="icons-menu">
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" >
                <TiSocialTwitter className="icon-twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
                <TiSocialInstagram className="icon-instagram icon" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer" >
                <TiSocialFacebook className="icon-facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/reidfleites?tab=repositories" target="_blank" rel="noopener noreferrer" >
                <AiFillGithub className="icon-github icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Aside;
