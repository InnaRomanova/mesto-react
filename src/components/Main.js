import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import newApi from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, setCards, setLiked, liked, setDeleteCard }) {
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        newApi.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch((err) => {
            console.error(err);
          });
    }
    
    function handleCardDelete(card) {
        const isOwn = card.owner._id === '4c642fb9acc10e2d4d15adcd';
        newApi.changeDeleteCardStatus(card._id)
        .then((newCard) => {
            setCards((cards) => cards.filter((c) => c._id !== card._id));
        }).catch((err) => {
            console.error(err);
          });
    }
    
    return (
        <main className="content">
            <section className="profile" type="button">
                <button className="profile__avatar-edit-button" onClick={onEditAvatar}>
                    <img
                        className="profile__image profile__image_avatar"
                        src={currentUser.avatar}
                        alt="аватар" />
                </button>
                <div className="profile__info">
                    <h2 className="profile__name">{currentUser.name}</h2>
                    <button
                        className="profile__edit-button"
                        onClick={onEditProfile}
                        type="button"
                        title="Редактировать" />
                    <p className="profile__about">{currentUser.about}</p>
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
                        return (<Card key={card._id} card={card} 
                            onCardClick={onCardClick} onCardLike={handleCardLike} liked={liked} setLiked={setLiked}
                            setDeleteCard={setDeleteCard} />)
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;