import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-8064a.firebaseio.com/'
});

export default instance;