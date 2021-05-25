
import { faCode, faCog, faFlask, faBox, faFacebook, faBorderNone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo, faTwitter, faPatreon, faGithub, faGit} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link"


export default function Footer() {

    return(
        <footer className="footer">
            <div className="wrap">
                <div className="social">
                    <a href="https://github.com/laukaho" target="_blank" className="btn_social">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/kaholau_dev" target="_blank" className="btn_social">
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </a>
                    <a href="https://itch.io/profile/laukaho" target="_blank" className="btn_social">
                        <FontAwesomeIcon className="icon" icon={faItchIo} />
                    </a>
                    <a href="https://www.patreon.com/kaholau" target="_blank" className="btn_social">
                        <FontAwesomeIcon className="icon" icon={faPatreon} />
                    </a>
                </div>
                <div className="copyright">
                Copyright © 2021 All rights reserved
                </div>
            </div>
        </footer>
    )
}
