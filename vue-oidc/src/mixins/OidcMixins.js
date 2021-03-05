import apiservice from '../services/ApiService'

const accesToken = {
    methods: {
        getAccessToken : apiservice.getAccessTokenNoParams,
    }
}

export default {
    accesToken
}