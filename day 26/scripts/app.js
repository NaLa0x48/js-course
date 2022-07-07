const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
  //   console.log(data)
  //   const cityDets = data.cityDets
  //   const weather = data.weather

  //destructure properties

  const { cityDets, weather } = data
  console.log(weather)

  details.innerHTML = `
            <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
  `
  //update the night and day and icon images
  let iconsrc = `img/icons/${weather.WeatherIcon}.svg`
  console.log(iconsrc)
  icon.setAttribute('src', iconsrc)
  //let timesrc = null

  let timesrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
  // if (weather.IsDayTime) {
  //   timesrc = 'img/day.svg'
  // } else {
  //   timesrc = 'img/night.svg'
  // }
  time.setAttribute('src', timesrc)
  //remove the d-none class if present

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}

const updateCity = async (city) => {
  const cityDets = await getCity(city)
  const weather = await getWeather(cityDets.Key)

  return {
    cityDets,
    weather,
  }
}

cityForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const city = cityForm.city.value.trim()
  cityForm.reset()
  //update new city
  updateCity(city)
    .then((data) => {
      updateUI(data)
    })
    .catch((err) => console.log(err))

  //set local storage
  localStorage.setItem('city', city)
})

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err))
}
