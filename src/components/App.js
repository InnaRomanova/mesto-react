//корневой компонент

import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import newApi from '../utils/Api';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarClick] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlaceClick] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [userName, setUserName] = useState('а');
  const [userAvatar, setUserAvatar] = useState('kkk');

  const handleCardClick = (card) => {
    setSelectCard(card);
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarClick(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfileClick(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlaceClick(true);
  }


  const handleClickOnPopup = (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
      //закрытие попапа по клику на оверлей либо по клику на крестик
      closeAllPopups();
    }
  }

  const closeAllPopups = () => {
    setIsEditAvatarClick(false);
    setIsEditProfileClick(false);
    setIsAddPlaceClick(false);
    setSelectCard({});
  }

  useEffect(() => {
    Promise.all([newApi.getCards()])
      .then(([cardData]) => {
        console.log(cardData.name);
        setUserName(cardData.name);
        setUserAvatar(cardData.avatar);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []
  )

  return (
    <body className="page">
      <div className="page__wrapper">
        <Header />
        
        <Main onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} />
        <Footer />
      </div>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль"
        onClose={closeAllPopups}>
        <form
          className="form"
          id="form_profile"
          name="profile"
          method="post"
          action="#"
          noValidate="">
          <fieldset className="form__user" id="profile__fields">
            <input
              className="form__item"
              type="text"
              id="profile__name"
              name="name"
              placeholder="Введите ваше имя"
              autoComplete="off"
              defaultValue=""
              minLength="2"
              maxLength="40"
              required="" />
            <span className="form__item-error" id="profile__name-error" />
            <input
              className="form__item"
              type="text"
              id="profile__about"
              name="about"
              placeholder="Ваша профессия"
              minLength="2"
              maxLength="200"
              autoComplete="off"
              defaultValue=""
              required="" />
            <span className="form__item-error" id="profile__about-error" />
          </fieldset>
        </form>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" onClose={closeAllPopups}>
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
        </form>
      </PopupWithForm>
      {console.log(isAddPlacePopupOpen)}
      <PopupWithForm isOpen={isAddPlacePopupOpen} name="addPhoto" onClose={closeAllPopups}>
        <form
          className="form"
          id="form_photo"
          name="addPhoto"
          method="post"
          action="#"
          noValidate="">
          <h2 className="form__title">Новое место</h2>
          <fieldset className="form__user">
            <input
              className="form__item"
              type="text"
              id="elements__name"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="300"
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
        </form>
      </PopupWithForm>

      <PopupWithForm name="confirmation" title="Вы уверены?" buttonText="Да" />
      <ImagePopup card={selectCard} onClose={closeAllPopups} />
    </body>
  )
}

export default App;
