import Config from '../Config';

class Api {

    getHome() {
        const url = `http://localhost:3001/api/home`;

        return fetch(url)
        .then(res => res.json())
        .then (data => {
            console.log('data', data);
            const cities = data.cities;
            console.log(cities);
            return data.cities;
        });
}}


export default new Api();


