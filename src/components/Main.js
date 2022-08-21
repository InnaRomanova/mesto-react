import React from "react";
import avatarEdit from '../images/ava.gif';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('#popup__avatar-edit').classList.add('popup_opened');
    };

    function handleEditProfileClick() {
        document.querySelector('#popup-profile').classList.add('popup_opened');
    };

    function handleAddPlaceClick() {
        document.querySelector('.popup-photo').classList.add('popup_opened');
    };

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}>
                    <img
                        className="profile__image profile__image_avatar"
                        src={avatarEdit}
                        alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name" />
                    <button
                        className="profile__edit-button"
                        onClick={handleEditProfileClick}
                        type="button"
                        title="Редактировать" />
                    <p className="profile__about" />
                </div>
                <button
                    className="profile__add-button"
                    onClick={handleAddPlaceClick}
                    type="button"
                    title="Добавить фотографию" />
            </section>
            <section className="elements">
                <ul className="elements__contain" />
            </section>
        </main>
    )
}

export default Main;