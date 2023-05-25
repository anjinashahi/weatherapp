let name = ' '
let lat = ' '
let long = ' '
let currentDate = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const allmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let day = (currentDate.getDay())
let date = (currentDate.getDate())
let month = currentDate.getMonth()+1
let year = currentDate.getFullYear()
let cityName = 'sandwell' 
let searchValue = document.querySelector("input")
let form = document.querySelector(".top-search")
form.addEventListener('submit', (e) => {
   e.preventDefault()
   let cityName = (searchValue.value)
   fetchData(cityName)
})
let icon = ["cloud", "clear_day", "rainy", "weather_snowy", "thunderstorm"]
function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
function fetchData(cityName){
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=9dae1ede4e635cb3661e122f7f08cddd&units=metric')
.then(response=>response.json())
.then(data=>{
   if(data.cod==="404"){
      document.querySelector(".place").innerHTML = "city not found"
      return
   }
   console.log(data)
   document.getElementById("wind").innerHTML = data.wind.speed
   document.getElementById("humidity").innerHTML = data.main.humidity
   document.getElementById("max").innerHTML = data.main.temp_max
   document.getElementById("min").innerHTML = data.main.temp_min
   document.getElementById('state').innerHTML = capitalizeFirstLetter(data.weather[0].description)
   document.getElementById('celsius').innerHTML = data.main.temp
   document.querySelector(".weather img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   document.querySelector(".top-search button")
   document.querySelector(".place").innerHTML = data.name
   document.querySelector(".day").innerHTML = weekday[day]
   document.querySelector(".fulldate").innerHTML = date +"/"+ month +"/"+ year
})
}
fetchData(cityName)


