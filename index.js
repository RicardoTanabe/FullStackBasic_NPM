const dayjs = require('dayjs');
import MicroModal from 'micromodal';
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
// var MicroModal = require('micromodal').default;
require('dayjs/locale/pt-br');

dayjs.extend(utc);
dayjs.extend(timezone);

function updateDateTime() {
    const value = document.getElementById('timezone-select').value
    const date = dayjs().tz(value).locale('pt-br').format('dddd, DD [de] MMMM [de] YYYY');
    const time = dayjs().tz(value).format('HH:mm:ss')
    document.getElementById('date').innerHTML =  date;
    document.getElementById('time').innerHTML =  time;
}

function updateTimezone() {
    const option = document.getElementById('timezone-select').value;
    document.getElementById('timezone').innerHTML = option;
}

setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init();
    updateDateTime();
});

document.getElementById('apply-button').addEventListener('click', updateTimezone);
