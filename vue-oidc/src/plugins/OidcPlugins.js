import apiService from '../services/ApiService'

export default {
    install(Vue) {
        Vue.prototype.$Token = apiService;
    },
}