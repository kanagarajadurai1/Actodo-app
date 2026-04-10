function Card(props) {
    return(
        <div className={`${props.bgColor} px-10 py-5 rounded-lg mt-5 text-center flex-grow`}>
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <p className="text-white">{props.subtitle}</p>
          </div>
    )


}
export default Card;
