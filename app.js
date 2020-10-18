const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para poner el clima',
        demand: true
    }
}).argv;

// lugar.getLugar(argv.direccion).then(console.log);



//clima.getClima(40.68908, -73.95861).then(console.log).catch(console.log);

const getInfo = async (direccion) => {

    try {
        const datos = await lugar.getLugar(direccion);
        const temp = await clima.getClima(datos.lat, datos.lng);
        return `El clima de ${datos.nombre} es ${temp} grados`;
    } catch (error) {
        return `No se pudo determinar el clima`
    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);






















