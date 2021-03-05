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

export default getAccessToken 