import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({ card, onCardClick, onCardLike, liked, setLiked, setDeleteCard }) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === '4c642fb9acc10e2d4d15adcd';
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `elements__button-delete ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );
    const cardLikeButtonClassName = (
        `elements__button-like ${isLiked ? 'elements__button-like_active' : 'elements__button-like'}`
    );

    function handleLikeClick(card) {
        onCardLike(card);
        setLiked(!liked);
    }

    function handleDeleteClick (card) {
        setDeleteCard(card);
        console.log(card)
    }
    return (
        <li class="elements__block">
            <button className={`${cardDeleteButtonClassName}`} onClick={() => handleDeleteClick(card)} 
            type="button" aria-label="Удалить">
            </button>
            <img src={card.link} alt={card.name} onClick={() => onCardClick(card)} class="elements__image photo__open-button" />
            <div class="elements__item">
                <h2 class="elements__name">{card.name}</h2>
                <div class="elements__like-wrapper">
                    <button className={`${cardLikeButtonClassName}`} onClick={() => handleLikeClick(card)} 
                    type="button" aria-label="Лайк"></button>
                    <span class="elements__like-counters">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;
