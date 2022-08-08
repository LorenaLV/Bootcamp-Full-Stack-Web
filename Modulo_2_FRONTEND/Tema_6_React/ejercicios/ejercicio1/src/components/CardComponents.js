
export default function CardComponents(props) {
  return (
    <div class="card w-50 m-auto">
        <img src={props.imgUrl} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.parapraph}</p>
            <a href={props.href} className="btn btn-primary">{props.linkText}</a>
        </div>
    </div>
  )
}
