import React from "react";
import avatarEdit from '../images/ava.gif';

function Main(props) {
    // function handleEditAvatarClick() {
    //     document.querySelector('#popup__avatar-edit').classList.add('popup_opened');
    // };

    // function handleEditProfileClick() {
    //     document.querySelector('#popup-profile').classList.add('popup_opened');
    // };

    // function handleAddPlaceClick() {
    //     document.querySelector('.popup-photo').classList.add('popup_opened');
    // };

    return (
        <main className="content">
            <section className="profile" type="button">
                <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}>
                    <img
                        className="profile__image profile__image_avatar"
                        src={avatarEdit}
                        alt="аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name" />
                    <button
                        className="profile__edit-button"
                        onClick={props.onEditProfile}
                        type="button"
                        title="Редактировать" />
                    <p className="profile__about" />
                </div>
                <button
                    className="profile__add-button"
                    onClick={props.onAddPlace}
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