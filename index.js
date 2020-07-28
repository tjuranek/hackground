add const wallpaper = require('wallpaper');

(async () => {
    await wallpaper.set('golf-wallpaper.jpg');

    console.log(await wallpaper.get());
})();