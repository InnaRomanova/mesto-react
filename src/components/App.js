//корневой компонент

import { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import newApi from '../utils/Api';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarClick] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlaceClick] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [currentUser, setСurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [liked, setLiked] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  const [showCollection, setShowCollection] = useState(cards);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

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

  const handleUpdateUser = (user) => {
    newApi.editUserInfo(user)
    api.setUserInfo(user)
    .then((newData) => {
      setСurrentUser(newData);
      setIsEditProfileClick(false);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  console.log(cards)

  const closeAllPopups = () => {
    setIsEditAvatarClick(false);
    setIsEditProfileClick(false);
    setIsAddPlaceClick(false);
    setSelectCard({});
    setDeleteCard(false);
  }

  useEffect(() => {
    Promise.all([newApi.getCards(), newApi.getUserInfo()])
      .then(([cards, userData]) => {
        setCards(cards);
        setСurrentUser(userData)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [liked]);

  useEffect(() => {
    Promise.all([newApi.changeDeleteCardStatus(deleteCard._id)])
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== deleteCard._id));
      }).catch((err) => {
        console.error(err);
      });
  }, [deleteCard])

  return (
    <body className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__wrapper">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            setCards={setCards}
            liked={liked}
            setLiked={setLiked}
            setDeleteCard={setDeleteCard} />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        {/* <PopupWithForm isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль"
          onClose={closeAllPopups}
          children={<form
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
          </form>}>
        </PopupWithForm> */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        {/* <PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" onClose={closeAllPopups}
          children={<form
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
          </form>}>
        </PopupWithForm> */}
        <PopupWithForm isOpen={isAddPlacePopupOpen} name="addPhoto" onClose={closeAllPopups}
          children={<form
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
          </form>}>
        </PopupWithForm>

        <PopupWithForm name="confirmation" title="Вы уверены?" buttonText="Да" />
        <ImagePopup card={selectCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </body>
  );
}

export default App;
