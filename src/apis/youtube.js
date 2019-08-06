import axios from 'axios'

const Key = 'AIzaSyBwXR6o48aqw_v9SyCwTtBf_kUFmNituD8';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : Key
    }
})