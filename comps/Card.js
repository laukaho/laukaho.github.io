import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import styles from "../styles/Card.module.css"
import { lightTheme, darkTheme } from "./Theme"

export default function Card(props) {
    
    return(
        <a className={`${styles.card} ${props.className == "empty" ? styles.empty:""}`}>
            <div className={styles.image} style={{backgroundImage: props.image}}>
            </div>
            <div className={styles.detail}>
                <div className={`${styles.title} font-md`}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
                <div className={styles.category}>
                    {props.category}
                </div>
            </div>
        </a>
    )
}
