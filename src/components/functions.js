import moment from 'moment';

export function getTemp(t){
    return Math.round(t.main.temp - 273.15) + 'ºC';
};
export function getTime(t){
    return moment(t.data.dt).format('hh:mm');

}