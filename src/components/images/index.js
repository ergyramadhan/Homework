function Images({image, title}) {
    return (
        <div>
        <img src={image} className="App-logo" alt={title} />
        <p> {title} </p>
        </div>
    )
}

export default Images;