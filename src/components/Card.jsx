export const Card = (props) => {
    return (
        <div className={props.position}>
            <div className="card" style={{ borderStyle: 'none' }}>
                <img className="mx-auto"
                    src={props.url}
                    alt={props.alt}
                    width={props.width}
                    height={props.height} />
            </div>
        </div>
    )
}