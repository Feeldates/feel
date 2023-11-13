import moment from "moment-timezone";

export default function firebaseDateFormat(firebaseDate) {

    const timestampObject = firebaseDate;
    const date = new Date(timestampObject.seconds * 1000 + timestampObject.nanoseconds / 1000000);

    // Formatea la fecha ajustándola a la zona horaria de México
    const fechaFormateada = moment(date).tz('America/Mexico_City');

    const day = fechaFormateada.format('DD');
    const month = fechaFormateada.format('MM');
    const year = fechaFormateada.format('YYYY');
    const hour12 = fechaFormateada.format('h:mm:ss A');

    const hour24 = fechaFormateada.format('HH');
    const onlyHour12 = fechaFormateada.format('h');
    const minutes = fechaFormateada.format('mm');
    const seconds = fechaFormateada.format('ss');

    return {day, month, year, hour12, hour24, onlyHour12, minutes, seconds}

}