import wallpaper from 'wallpaper';
import { getIsDaytime } from './services/daytime.js';
import { getImagesList, timesOfDay } from './services/unsplash.js';
import { downloadAndSaveWallpaper } from './services/wallpaper.js';

const latitude = 44.986656;
const longitude = -93.258133;


const init = async () => {
    const timeOfDay = await getIsDaytime(latitude, longitude) ? timesOfDay.DAY : timesOfDay.NIGHT;
    const imagesList = await getImagesList(timeOfDay);

    await(downloadAndSaveWallpaper(imagesList.results[1].urls.full));
};

init();