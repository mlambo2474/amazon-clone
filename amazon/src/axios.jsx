import axios from "axios";

const instance = axios.create({
    baseURL : 'http://127.0.0.1:5001/app-6078f/us-central1/api' //the API (cloud function URL)
})


export default instance;