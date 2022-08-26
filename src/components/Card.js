import React from "react";


function Card (props) {
    function handleCardClick() {
        props.onCardClick(props.card)
    }
    return(
        <li class="elements__block">
        <button class="elements__button-delete" type="button" aria-label="Удалить"></button>
        <img src={props.card.name} alt={props.card.name} class="elements__image photo__open-button"
        onClick={handleCardClick} />
        <div class="elements__item">
            <h2 class="elements__name">{props.card.name}</h2>
            <div class="elements__like-wrapper">
                <button class="elements__button-like" type="button" aria-label="Лайк"></button>
                <span class="elements__like-counters">{props.card.likes.length}</span>
            </div>
        </div>
    </li>
    )
    }

    export default Card;