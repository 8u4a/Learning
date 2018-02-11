/*

we need to check the weather first to see what kind of clothes we shall wear

if sunny ---we need appropriate clothes for that weather
else cloudy ----  we need to see if we have an umbrella
if we have an umbrella --- no need of a hoodie
else no umbrella --- we need a jacket with a hoodie

*/

function getWeatherStatus(status)
{
  var weatherstatus = {meteo: 'nedeclarat'};
  if (status === 'sunny')
  {
    weatherstatus.meteo = 'sunny'

  }
  else if (status === 'cloudy'){
    weatherstatus.meteo = 'cloudy'

  }

  if (status === 'snowy'){
    weatherstatus.meteo = 'snowy'
  }
    return weatherstatus;

}

var astazi = 'sunny'
var ieri = 'cloudy'
var alaltaieri = 'snowy'
var meteoAstazi = getWeatherStatus(astazi)
var meteoIeri = getWeatherStatus(ieri)
var meteoAlaltaieri = getWeatherStatus(alaltaieri)
console.log(meteoAstazi)
console.log(meteoIeri)
console.log(meteoAlaltaieri)
console.log(getWeatherStatus())
