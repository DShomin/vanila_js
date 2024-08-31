const apiKeyForm = document.getElementById("api-key-form");
const apiKeyInput = document.getElementById("api-key-input");
const weatherContainer = document.getElementById("weather");

let API_KEY = localStorage.getItem('WEATHER_API_KEY');

function showApiKeyForm() {
    apiKeyForm.classList.remove("hidden");
}

function hideApiKeyForm() {
    apiKeyForm.classList.add("hidden");
}

function validateApiKey(apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid API key');
            }
            return true;
        })
        .catch(() => false);
}

function saveApiKey(apiKey) {
    localStorage.setItem('WEATHER_API_KEY', apiKey);
    API_KEY = apiKey;
}

function handleApiKeySubmit(event) {
    event.preventDefault();
    const apiKey = apiKeyInput.value;

    validateApiKey(apiKey)
        .then(isValid => {
            if (isValid) {
                saveApiKey(apiKey);
                hideApiKeyForm();
                getWeather();
            } else {
                alert("잘못된 API 키입니다. 다시 확인해주세요.");
            }
        });
}

function getWeather() {
    if (!API_KEY) {
        showApiKeyForm();
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = weatherContainer.querySelector("span:first-child");
                const city = weatherContainer.querySelector("span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
            })
            .catch(error => {
                console.error("날씨 정보를 가져오는데 실패했습니다:", error);
                localStorage.removeItem('WEATHER_API_KEY');
                showApiKeyForm();
            });
    }, () => {
        alert("위치 정보를 가져올 수 없습니다. 날씨 정보를 표시할 수 없습니다.");
    });
}

apiKeyForm.addEventListener("submit", handleApiKeySubmit);

getWeather();
