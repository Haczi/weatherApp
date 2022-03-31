const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK ='https://api.openweathermap.org/data/2.5/weather?q='

const API_KEY = '&appid=1b67af9eba422da5197dd296cc4d022b'

const API_UNITS = '&units=metric'

const getWeather = () => {
const city = input.value || 'Warsaw'
const URL = API_LINK + city + API_KEY + API_UNITS

axios.get(URL).then(res => {
    console.log(res.data)
const temp = res.data.main.temp
const hum = res.data.main.humidity
const status = Object.assign({}, ...res.data.weather)
weather.textContent=status.main
cityName.textContent = res.data.name
temperature.textContent = Math.floor(temp) + '°C'
humidity.textContent = hum + '%'

if(status.id >=200 && status.id <=232){
    photo.setAttribute('src', '../img/thunderstorm.png')
}
else if(status.id >=500 && status.id <=531){
    photo.setAttribute('src', '../img/rain.png')
}
else if(status.id >=300 && status.id <=321){
    photo.setAttribute('src', '../img/drizzle.png')
}
else if(status.id >=600 && status.id <=622){
    photo.setAttribute('src', 'https://github.com/Haczi/weatherApp/blob/main/img/ice.png')
}
else if(status.id >=801 && status.id <=804){
    photo.setAttribute('src', '../img/cloud.png')
}
else if(status.id === 800){
    photo.setAttribute('src', '../img/sun.png')
}
else if(status.id === 701 || status.id === 741){
    photo.setAttribute('src', '../img/fog.png')
}
else{
    photo.setAttribute('src', '../img/unknown.png')
}



})
.catch(() =>warning.textContent = 'Wpisz poprawna nazwe miasta')
input.value=''
warning.textContent=''
}
const checkKey = (click)=>{
    if(click.key === 'Enter'){
        getWeather()}
}
getWeather()



button.addEventListener('click', getWeather)
input.addEventListener('keyup', checkKey)