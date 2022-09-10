import React, {useEffect}  from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({ card, onCardClick, onCardLike, onCardDelete, onDeletePopup, onConfirmDelete, setDeleteCard }) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `elements__button-delete ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );
    const cardLikeButtonClassName = (
        `elements__button-like ${isLiked ? 'elements__button-like_active' : 'elements__button-like'}`
    );

    function handleDelete(card) {
        onDeletePopup(true);
        setDeleteCard(card);
    }

    return (
        <li class="elements__block">
            <button className={`${cardDeleteButtonClassName}`} onClick={() => { handleDelete(card) }}
                type="button" aria-label="Удалить">
            </button>
            <img src={card.link} alt={card.name} onClick={() => onCardClick(card)} class="elements__image photo__open-button" />
            <div class="elements__item">
                <h2 class="elements__name">{card.name}</h2>
                <div class="elements__like-wrapper">
                    <button className={cardLikeButtonClassName} onClick={() => onCardLike(card)}
                        type="button" aria-label="Лайк"></button>
                    <span class="elements__like-counters">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;
