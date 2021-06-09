import { faCode, faCog, faBox, faFacebook, faVial, faMoon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import { useRouter } from "next/router";

import {useState, useEffect} from 'react';
import { useCookies } from "react-cookie"

import {useAppContext} from "../pages/_app.js";


const Header = () => {
    const router = useRouter();

    const {isDark, setIsDark} = useAppContext();
    const [cookies, setCookie, removeCookie] = useCookies(['isDark']);


    const [isHide, setIsHide] = useState(false);
    function hideBar(){
      window.scrollY > this.prev && window.scrollY > 60?
      !isHide && setIsHide(true)
      :
      isHide && setIsHide(false);
  
      this.prev = window.scrollY;
    }
    

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", hideBar);
        }
        watchScroll();
        setCookie("isDark", isDark);
        return () => {
          window.removeEventListener("scroll", hideBar);
        };
      });

    useEffect(() => {
        setIsDark(cookies["isDark"] == "true");
    }, []);


    const [isMenuActive, setIsMenuActive] = useState(false);

    function OnMenuClick(e) {
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    }

    function OnOverlayClick(e){
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    }

    function OnDarkClick(e){
        e.preventDefault();
        setIsDark(!isDark);
    }

    return (
        <div className={`header ${isHide && !isMenuActive? '': 'is-active'}`}>
            <div className="wrap">
                <div className="left">
                    <Link href="/">
                        <a className="logo">
                            <img src="./images/logo.png"></img>
                            <span>KA HO</span>
                        </a>
                    </Link>
                </div>
                <div className="right">
                    <button className={`hamburger hamburger--spin d-lg-none ${isMenuActive ? 'is-active': ''}`} type="button" onClick={OnMenuClick}>
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div onClick={OnOverlayClick} className={`overlay ${isMenuActive ? 'active': ''}`}>
                    </div>
                    <div className="menu_container">
                        <ul className={`menu ${isMenuActive ? 'active': ''}`}>
                            <li className={router.pathname == "/projects" ? "active" : ""}>
                                <Link href="/projects">
                                    <a className={`btn_item ${router.pathname == "/projects" ? "active" : ""}`}>
                                        <FontAwesomeIcon className="icon" icon={faCode} />
                                        <span className="label">Projects</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/assets" ? "active" : ""}>
                                <Link href="/assets">
                                    <a className={`btn_item ${router.pathname == "/assets" ? "active" : ""}`}>
                                        <FontAwesomeIcon className="icon" icon={faBox} />
                                        <span className="label">Assets</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/tools" ? "active" : ""}>
                                <Link href="/tools">
                                    <a className={`btn_item ${router.pathname == "/tools" ? "active" : ""}`}>
                                        <FontAwesomeIcon className="icon" icon={faCog} />
                                        <span className="label">Tools</span>
                                    </a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/labs" ? "active" : ""}>
                                <Link href="/labs">
                                    <a className={`btn_item ${router.pathname == "/labs" ? "active" : ""}`}>
                                        <FontAwesomeIcon className="icon" icon={faVial} />
                                        <span className="label">Labs</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <button onClick={OnDarkClick} className={`btn_dark ${isDark ? 'active': ''}`} type="button">
                                    <FontAwesomeIcon className="icon" icon={faMoon} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;