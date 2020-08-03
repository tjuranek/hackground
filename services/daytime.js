import SunCalc from 'suncalc';

const getIsDaytime = async (latitude, longitude) => {
    const now = new Date();
    const { sunrise, sunset } = SunCalc.getTimes(new Date(), latitude, longitude);

    return sunrise <= now && now <= sunset;
};

export { getIsDaytime };