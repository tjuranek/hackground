import wallpaper from 'wallpaper';
import { getIsDaytime } from './services/daytime.js';

const latitude = 44.986656;
const longitude = -93.258133;
const pathToImage = 'golf-wallpaper.jpg';

const init = async () => {
    await setWallpaper(pathToImage);
    const isDaytime = await getIsDaytime(latitude, longitude);

    console.log(`IsDaytime: ${isDaytime}`);
};

const setWallpaper = async (pathToImage) => {
    await wallpaper.set(pathToImage);
};

init();