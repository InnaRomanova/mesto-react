import PopupWithForm from "./PopupWithForm"

function RemoveCardPopup({ isOpen, onClose, onRemoveCardPopup, deleteCard }) {
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        onRemoveCardPopup(deleteCard);
        onClose(true)
    };
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            name="confirmation"
            title="Вы уверены?"
            buttonText="Да" />)
}

export default RemoveCardPopup;