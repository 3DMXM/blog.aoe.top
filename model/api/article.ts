import axios from './axios'

export function getContent() {
    return axios.get('/content.md')
}
