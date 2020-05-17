const API_KEY = "f5fbed8cccd05fb8de4dce320ae7ebfe";

const weatherSpan = document.querySelector(".weather");
const COORDS = 'coords';

const getWeather = (lat,lng) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then((response) => {
        return response.json();
    }).then((json) => {
        const temp = json.main.temp;
        const place = json.name;
        weatherSpan.innerText = `${temp} and ${place}`;
    })
}

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat,
        lng
    }
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

const handleGeoError = () => {
    console.log("error");
}

const askForCoods = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoods();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.lng);
    }
}

const weatherInit = () => {
    loadCoords();
}

weatherInit();