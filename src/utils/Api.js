class Api {
  constructor({ baseUrl, token, cohort }) {
    this._baseUrl = baseUrl
    this._token = token;
    this._cohort = cohort;
  }

  _request(adres, method, info) {
    const pattern = {
      method: method,
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      }
    }

    return fetch(
      `${this._baseUrl}/${this._cohort}/${adres}`,
      info ? { ...pattern, body: JSON.stringify(info) } : pattern
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          Promise.reject(`ошибка: ${res.status}`)
        }
      })
  }

  getUserInfo() {
    return this._request('users/me', 'GET')
  }

  getCards() {
    return this._request('/cards', 'GET')
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`cards/likes/${cardId}`, isLiked? 'DELETE' : 'PUT') 
  }
}
const newApi = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  token: '6317d273-77cd-40e4-acd5-6cbb113af6b1',
  cohort: 'cohort-47'
})

export default newApi