import PopupWithForm from "./PopupWithForm"

function RemoveCardPopup ({ isOpen, onClose}) {
    return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    name="confirmation"
    title="Вы уверены?"
    buttonText="Да" />)
}

export default RemoveCardPopup;