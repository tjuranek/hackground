import fetch from 'node-fetch';

const timesOfDay = {
    DAY: "Day",
    NIGHT: "Night"
};

const generateSearchQuery = () => {
    const availableTerms = ['nature', 'mountains', 'lakes', 'parks', 'snow', 'landscape', 'scenic', 'beach', 'countryside', 'farm', 'forrest'];
    const selectedTerms = availableTerms.sort(() => 0.5 - Math.random()).slice(0, 1);

    let query = "";

    selectedTerms.forEach(term => query += term + "+");

    return query;
};

const getImagesList = async (timeOfDay) => {
    const query = generateSearchQuery() + timeOfDay;

    //&order_by=latest
    const response = await fetch(`https://api.unsplash.com/search/photos?1&query=${query}&orientation=landscape`, {
        headers: {
            'Authorization': 'Client-ID 8F0_IWw2oT-IDVra79V6Yh80JoEsWNjBgx_vrHs3G20'
        },
        method: 'GET'
    });

    return await response.json();
}

export { getImagesList, timesOfDay }