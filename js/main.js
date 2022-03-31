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
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/11d@2x.png')
}
else if(status.id >=500 && status.id <=531){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png')
}
else if(status.id >=300 && status.id <=321){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png')
}
else if(status.id >=600 && status.id <=622){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png')
}
else if(status.id >=801 && status.id <=804){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/03d@2x.png')
}
else if(status.id === 800){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png')
}
else if(status.id === 701 || status.id === 741){
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/50d@2x.png')
}
else{
    photo.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png')
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