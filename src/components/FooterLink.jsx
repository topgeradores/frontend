export const FooterLink = (props) => {
    return (
        <div className="col-sm-4 mb-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
                className={`btn btn-${props.color}`}
                href={props.url}
                target="_blank"
                style={{ width: '85%' }}
            >
                <i className={`${props.icon} inline-block align-text-top`} style={{ fontSize: 24 }} />
                <span> {props.title}</span>
            </a>
        </div>
    )
}
