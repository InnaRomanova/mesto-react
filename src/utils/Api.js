class Api {
    constructor({baseURL, token, cohort}) {
        this._baseURL = baseURL;
        this._token = token;
        this._cohort = cohort;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`${res.status} ${res.statusText}`);
        }
    }

    getUserInfo() {
        const requestUrl = this._url + `/users/me`;
        return fetch(requestUrl, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    getInitialCards() {
        const requestUrl = this._url + '/cards';
        return fetch(requestUrl, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    getAllNeedData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }

    updateUserInfo(body) {
        const requestUrl = this._url + `/users/me`;
        return fetch(requestUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(body),
        }).then(this._checkResponse);
    }

    addNewCard(body) {
        const requestUrl = this._url + '/cards';
        return fetch(requestUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        }).then(this._checkResponse);
    }

    removeCard(cardId) {
        const requestUrl = this._url + `/cards/${cardId}`;
        return fetch(requestUrl, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._checkResponse);
    }

    addCardLike(cardId) {
        const requestUrl = this._url + `/cards/likes/${cardId}`;
        return fetch(requestUrl, {
            method: 'PUT',
            headers: this._headers,
        }).then(this._checkResponse);
    }

    deleteCardLike(cardId) {
        const requestUrl = this._url + `/cards/likes/${cardId}`;
        return fetch(requestUrl, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._checkResponse);
    }

    updateProfileAvatar(body) {
        const requestUrl = this._url + `/users/me/avatar`;
        return fetch(requestUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(body),
        }).then(this._checkResponse);
    }
}

const newApi = new Api ({
    baseURL: 'https://mesto.nomoreparties.co/v1',
    token: '6317d273-77cd-40e4-acd5-6cbb113af6b1',
    cohort: 'cohort-47'
})

export default newApi