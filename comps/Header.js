import { faCode, faCog, faBox, faFacebook, faVial} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import { useRouter } from "next/router";

import {useState, useEffect} from 'react';

const Header = () => {
    const router = useRouter();


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
        return () => {
          window.removeEventListener("scroll", hideBar);
        };
      });

    const [isMenuActive, setIsMenuActive] = useState(false);

    function OnMenuClick(e) {
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    }

    function OnOverlayClick(e){
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    }

    return (
        <div className={`header ${isHide && !isMenuActive? '': 'is-active'}`}>
            <div className="wrap">
                <div className="left">
                    <Link href="/">
                        <a className="logo">
                            <img src="https://storage.ko-fi.com/cdn/Kofi_Logo_Blue.svg"></img>
                        </a>
                    </Link>
                </div>
                <div className="right">
                    <a className={`hamburger hamburger--spin d-lg-none ${isMenuActive ? 'is-active': ''}`} type="button" onClick={OnMenuClick}>
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </a>
                    <div onClick={OnOverlayClick} className={`overlay ${isMenuActive ? 'active': ''}`}>
                    </div>
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;