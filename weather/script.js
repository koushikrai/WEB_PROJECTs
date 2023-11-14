const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "df1a221920mshb63b38e8258be5ep1dcf5cjsn3f08a5a7a301",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
}

const GetWeather =(city)=> {

    cityName.innerHTML =city

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city , options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    cloud_pct2.innerHTML = response.cloud_pct
    cloud_pct3.innerHTML = response.cloud_pct
    cloud_pct4.innerHTML = response.cloud_pct
    
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    temp3.innerHTML = response.temp
    temp4.innerHTML = response.temp
    temp5.innerHTML = response.temp
    temp6.innerHTML = response.temp
   

    feels_like.innerHTML = response.feels_like
    feels_like2.innerHTML = response.feels_like
    feels_like3.innerHTML = response.feels_like
    feels_like4.innerHTML = response.feels_like
    feels_like5.innerHTML = response.feels_like
    

    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    humidity3.innerHTML = response.humidity
    humidity4.innerHTML = response.humidity
    humidity5.innerHTML = response.humidity
    humidity6.innerHTML = response.humidity
    

    min_temp.innerHTML = response.min_temp
    
    max_temp.innerHTML = response.max_temp

    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    
    wind_degrees.innerHTML = response.wind_degrees

    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    

  })
  .catch(err => console.error(err))
}

submit.addEventListener("click", (e)=>{
e.preventDefault()
GetWeather(city.value)

})
{
  GetWeather("Delhi")
}