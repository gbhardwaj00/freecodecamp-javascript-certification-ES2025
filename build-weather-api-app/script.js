const getWeatherBtn = document.getElementById('get-weather-btn')
const citySelectInput = document.getElementById('city-select')
const weatherData = document.getElementById('weather-data')

getWeatherBtn.addEventListener('click', async () => {
  if (citySelectInput.value === '') {
    return
  }
  const selectedCity = citySelectInput.value
  await showWeather(selectedCity)
})

const showWeather = async (city) => {
  let data = await getWeather(city)
  if (!data || data.hasOwnProperty('error')) {
    alert('Something went wrong, please try again later')
    return
  }
  weatherData.innerHTML = 
  `
    <img id='weather-icon' src='${data?.weather[0]?.icon ?? ''}'></img>
    <div id='main-temperature'>${data?.main?.temp ?? 'N/A'}</div>
    <div id='feels-like'>${data?.main?.feels_like ?? 'N/A'}</div>
    <div id='humidity'>${data?.main?.humidity ?? 'N/A'}</div>
    <div id='wind'>${data?.wind?.speed ?? 'N/A'}</div>
    <div id='wind-gust'>${data?.wind?.gust ?? 'N/A'}</div>
    <div id='weather-main'>${data?.weather[0]?.main ?? 'N/A'}</div>
    <div id='location'>${data?.name ?? 'N/A'}</div>
  `
}

const getWeather = async (city) => {
  try {
    let response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    let data = await response.json()
    return data
  } catch(err) {
    console.log(err)
  }
}



