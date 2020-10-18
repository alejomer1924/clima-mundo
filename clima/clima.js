const axios = require('axios'); 

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dc1487e7b995af5da72efe124e83c503&units=metric`);
    return resp.data.main.temp
}

module.exports = {
    getClima
}