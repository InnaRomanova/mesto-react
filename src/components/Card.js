import React from "react";

function Card({ card, onCardClick }) {
    return (
        <li class="elements__block">
            <button class="elements__button-delete" type="button" aria-label="Удалить"></button>
            <img src={card.link} alt={card.name} onClick={() => onCardClick(card)} class="elements__image photo__open-button" />
            <div class="elements__item">
                <h2 class="elements__name">{card.name}</h2>
                <div class="elements__like-wrapper">
                    <button class="elements__button-like" type="button" aria-label="Лайк"></button>
                    <span class="elements__like-counters">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;
