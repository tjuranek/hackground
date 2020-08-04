import wallpaper from 'wallpaper';
import { getIsDaytime } from './services/daytime.js';
import fetch from 'node-fetch';

const latitude = 44.986656;
const longitude = -93.258133;
const pathToImage = 'mountain2.jpg';

const REDDIT_ACCESS_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token'
const APP_ONLY_GRANT_TYPE = 'https://oauth.reddit.com/grants/installed_client'

const init = async () => {
    await setWallpaper(pathToImage);
    const isDaytime = await getIsDaytime(latitude, longitude);

    console.log(`IsDaytime: ${isDaytime}`);

    const params = new URLSearchParams();
    params.append('grant_type', APP_ONLY_GRANT_TYPE);
    params.append('device_id', 'DO_NOT_TRACK_THIS_DEVICE');

    const tokenData = await fetch(REDDIT_ACCESS_TOKEN_URL, {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${"Basic UUtMSCrxflAT6Gsi3MjxGwIOD70:".toString('base64')}`
          }
    })

    console.log(tokenData);
};

const setWallpaper = async (pathToImage) => {
    await wallpaper.set(pathToImage);
};

init();