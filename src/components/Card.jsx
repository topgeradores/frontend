export const Card = (props) => {
    return (
        <div className={props.position}>
            <div className="card" style={{ borderStyle: 'none', marginBottom: '20px' }}>
                <img className="mx-auto"
                    src={props.url}
                    alt={props.alt}
                    width={props.width}
                    height={props.height} />
            </div>
        </div>
    )
}