const axios = require('axios');


const getLugar = async (direccion) => {
    const encoderURL = encodeURI(direccion);

    const resp = await axios.get(`https://geocode.xyz/${encoderURL}?json=1`); 

    //console.log(resp.data.standard.city);
    
    const nombre = resp.data.standard.city; 
    const lat = resp.data.latt; 
    const lng = resp.data.longt; 

  return {
      nombre,
      lat,
      lng
  }
} 

 module.exports = {
    getLugar
 }



