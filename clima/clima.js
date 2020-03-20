const axios = require('axios');

const getCLima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4b5443acf833ecd1a01e61ca3acbdc48&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getCLima
}