import Link from "next/link"
import styles from "../styles/Lab.module.css"



export default function Lab(props) {
    console.log(props);
    return(
        <Link href={props.path} >
            <a className={styles.lab}>
                <span className={styles.image}  style={{backgroundImage: "url(/images/test.png)"}}>
                </span>
                <span className={styles.detail} >
                <span className={styles.title} >
                    {props.post.data.title}<span className={styles.date} >{props.post.data.date}</span>
                </span>
                <span className={styles.description}>
                    {props.post.data.description}
                </span>
                </span>
            </a>
        </Link>
    )
}

