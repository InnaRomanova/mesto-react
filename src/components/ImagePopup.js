function ImagePopup() {
    return(
<div className="popup popup_open-card">
    <div className="popup__content">
      <button
        className="popup__close-button"
        id="Close-card"
        type="button"
        value="close" />
      <figure className="popup__wrapper">
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__caption" />
      </figure>
    </div>
  </div>
    )
}

export default ImagePopup;