import React from "react";


function Card (props) {
    return(
        <li class="elements__block">
        <button class="elements__button-delete" type="button" aria-label="Удалить"></button>
        <img src="#" alt="#" class="elements__image photo__open-button" />
        <div class="elements__item">
            <h2 class="elements__name">Карачаевск</h2>
            <div class="elements__like-wrapper">
                <button class="elements__button-like" type="button" aria-label="Лайк"></button>
                <span class="elements__like-counters">0</span>
            </div>
        </div>
    </li>
    )
    }

    export default Card;
