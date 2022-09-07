import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef()

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: ({ avatar: avatarRef.current.value }) /* Значение инпута, полученное с помощью рефа */
        })
    }

    return (
        <PopupWithForm isOpen={isOpen} name="avatar" onClose={onClose} onSubmit={handleSubmit}
            children={<form
                className="form"
                id="form-avatar"
                name="avatar"
                method="post"
                noValidate="">
                <h2 className="form__title">Обновить аватар</h2>
                <fieldset className="form__user" id="avatar__fields">
                    <input

                        className="form__item"
                        id="avatar__image"
                        name="url"
                        type="url"
                        placeholder="Ссылка на картинку"
                        required=""
                        ref={avatarRef} />
                    <span className="form__item-error" id="avatar__image-error" />
                </fieldset>
            </form>}>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;