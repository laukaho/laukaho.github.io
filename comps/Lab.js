import Link from "next/link"
import styles from "../styles/Lab.module.css"
import {useState, useEffect} from 'react';
import { useCookies } from "react-cookie"


export default function Lab(props) {

    // const [isDark, setIsDark] = useState(false);
    // const [cookies, setCookie, removeCookie] = useCookies(['isDark']);

    return(
        <Link href={props.path} >
            <a className={styles.lab}>
                <span className={styles.image}  style={{backgroundImage: "url(/images/test.png)"}}>
                </span>
                <span className={styles.detail} >
                    <h2 className={styles.title} >
                        {props.post.data.title}
                    </h2>
                    <div className={styles.description}>
                        {props.post.data.description}
                    </div>
                    <span className={styles.date} >{props.post.data.date}</span>
                </span>
            </a>
        </Link>
    )
}

