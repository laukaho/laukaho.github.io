
export default function Card(props) {

    return(
        <a className={`card ${props.className}`}>
            <div className="image" style={{backgroundImage: props.image}}>
            </div>
            <div className="detail">
                <div className="title font-md">
                    {props.title}
                </div>
                <div className="description">
                    {props.description}
                </div>
                <div className="category">
                    {props.category}
                </div>
            </div>
        </a>
    )
}
