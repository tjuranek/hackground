# hackground
Letting Reddit change your desktop background periodically, powered by nodejs. 

- npm module to change desktop background
    - install and run it, ensure it actually works

- provide a module geocordinates to determine time of day
    - get geocordinates
    - find a module that does this
    - test

- get images
    - a subreddit, or unsplash.com
    - use http instead of an sdk
    - find preferred package between superagent, got, node-fetch
    - call the image api wiht preffered package and get an array images

- determine if image is light or dark
    - BONUS: make this performant

- manipulate the data
    - iterate over images
    - determine if selected image should be light or dark dependent on time of day
    - once a image is available, set the background of the desktop

- make it a long running node process with set interval with immediate run
- make it run on startup
    - make a powershell script to run node script
    - put powershell script in startup, potentially use this instead (https://github.com/vercel/pkg)