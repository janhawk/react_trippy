import Config from '../Config';

class Api {

    getHome() {
        const url = `http://localhost:3001/api/home`;

        return fetch(url)
        .then(res => res.json())
        .then (res => {
            return res.cities;
        });
}}


export default new Api();


