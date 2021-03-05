import axios from 'axios'
import qs from 'qs'

function getAccessToken(baseUrl, clientId, clientSecret, scope) {
  return axios({
      method: 'post',
      url: baseUrl, 
      data: qs.stringify({
        client_id: clientId, 
        client_secret: clientSecret, 
        scope: scope,
        grant_type: 'client_credentials'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then(response => response.data)
    .catch(error => error)
}

function getAccessTokenNoParams() {
  return axios({
      method: 'post',
      url: process.env.VUE_APP_TOKEN_URL, 
      data: qs.stringify({
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        scope: process.env.SCOPE,
        grant_type: 'client_credentials'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then(response => response.data)
    .catch(error => error)
}

export default { getAccessToken, getAccessTokenNoParams }