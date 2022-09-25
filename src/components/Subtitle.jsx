export const Subtitle = (props) => {
    return (
        <div className="col-12">
            <h5 className={`text-${props.color} fw-bolder text-center mt-2`}>{props.text}</h5>
        </div>
    )
}