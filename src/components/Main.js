import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import newApi from "../utils/Api";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setuserAvatar] = useState('');
    const [cards, setCards] = useState([])

    useEffect(() => {
        newApi.getUserInfo()
            .then(({ name, about, avatar }) => {
                setUserName(name);
                setUserDescription(about);
                setuserAvatar(avatar);
                console.log(userAvatar)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        newApi.getCards()
            .then((cards) => {
                setCards(cards);
                console.log(cards)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <main className="content">
            <section className="profile" type="button">
                <button className="profile__avatar-edit-button" onClick={onEditAvatar}>
                    <img
                        className="profile__image profile__image_avatar"
                        src={userAvatar}
                        alt="аватар" />
                </button>
                <div className="profile__info">
                    <h2 className="profile__name">{userName}</h2>
                    <button
                        className="profile__edit-button"
                        onClick={onEditProfile}
                        type="button"
                        title="Редактировать" />
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button
                    className="profile__add-button"
                    onClick={onAddPlace}
                    type="button"
                    title="Добавить фотографию" />
            </section>
            <section className="elements">
                <ul class="elements__contain">
                    {cards.map((card) => {
                        return (<Card key={card._id} card={card} onCardClick={onCardClick} />)
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;