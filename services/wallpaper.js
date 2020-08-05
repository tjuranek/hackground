import fetch from 'node-fetch';
import fs from 'fs';
import { pipeline } from 'stream';
import util from 'util';
import wallpaper from 'wallpaper';

const downloadAndSaveWallpaper = async (url) => {
    const streamPipeline = util.promisify(pipeline);

    const response = await fetch(url, {
        method: 'GET'
    });

    if (response.ok) {
        await streamPipeline(response.body, fs.createWriteStream('../wallpaper.png'));
        wallpaper.set('../wallpaper.png');
        return;
    }

    throw new Error(`Failed to download image: ${response.statusText}`);
};

export { downloadAndSaveWallpaper };