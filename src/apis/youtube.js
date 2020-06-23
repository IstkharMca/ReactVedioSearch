import axios from 'axios'

const Key = 'AIzaSyCi-tHLg0peD-0A-EOOiLtWR1Aao_DiPYg';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : Key
    }
})