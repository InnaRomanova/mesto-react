function PopupWithForm({name, title, children, isOpen, onClose}) {
    return (
        <>
            <div className="popup" id="popup-profile">
                <div className="popup__container">
                    <button
                        className="popup__close-button"
                        id="close-button"
                        type="button"
                        value="close" />
                    <form
                        className="form"
                        id="form_profile"
                        name="profile"
                        method="post"
                        action="#"
                        noValidate="">
                        <h2 className="form__title">Редактировать профиль</h2>
                        <fieldset className="form__user" id="profile__fields">
                            <input
                                className="form__item"
                                type="text"
                                id="profile__name"
                                name="name"
                                placeholder="Введите ваше имя"
                                autoComplete="off"
                                defaultValue=""
                                minLength={2}
                                maxLength={40}
                                required="" />
                            <span className="form__item-error" id="profile__name-error" />
                            <input
                                className="form__item"
                                type="text"
                                id="profile__about"
                                name="about"
                                placeholder="Ваша профессия"
                                minLength={2}
                                maxLength={200}
                                autoComplete="off"
                                defaultValue=""
                                required="" />
                            <span className="form__item-error" id="profile__about-error" />
                        </fieldset>
                        <button
                            className="form__button"
                            id="form__button__profile"
                            type="submit"
                            name="profile__save"
                            value="Сохранить">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>

            <div className="popup" id="popup__avatar-edit">
                <div className="popup__container">
                    <button className="popup__close-button" id="avatar-close-button" />
                    <form
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
                                required="" />
                            <span className="form__item-error" id="avatar__image-error" />
                        </fieldset>
                        <button
                            className="form__button"
                            id="form__button__avatar"
                            type="submit"
                            name="avatar__save"
                            value="Сохранить">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>

            <div className="popup popup-photo">
                <div className="popup__container">
                    <button
                        className="popup__close-button"
                        id="close-Btn"
                        type="button"
                        value="close" />
                    <form
                        className="form"
                        id="form_photo"
                        name="addPhoto"
                        method="post"
                        action="#"
                        noValidate="" >
                        <h2 className="form__title">Новое место</h2>
                        <fieldset className="form__user">
                            <input
                                className="form__item"
                                type="text"
                                id="elements__name"
                                name="name"
                                placeholder="Название"
                                minLength={2}
                                maxLength={30}
                                required="" />
                            <span className="form__item-error" id="elements__name-error" />
                            <input
                                className="form__item"
                                type="url"
                                id="elements__image"
                                name="link"
                                placeholder="Ссылка на картинку"
                                required="" />
                            <span className="form__item-error" id="elements__image-error" />
                        </fieldset>
                        <button
                            className="form__button"
                            id="form__button__photo"
                            type="submit"
                            name="profile__save"
                            value="Сохранить">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>

            <div className="popup" id="popup__delete-photo">
                <div className="popup__container">
                    <button
                        className="popup__close-button"
                        id="delete-close-button"
                        type="button" />
                    <form
                        className="form"
                        id="form-delete-photo"
                        name="delete-photo"
                        method="post"
                        noValidate="">
                        <h2 className="form__title">Вы уверены?</h2>
                        <button
                            className="form__button"
                            id="form__button__delete"
                            type="submit"
                            name="delete__save"
                            value="Да">
                            Да
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}