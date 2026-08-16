import { getWeather } from '../utils/weatherCodes.js'

function round(value) {
  return Math.round(value)
}

export default function CurrentWeather({ current }) {
  const weather = getWeather(current.weather_code)

  return (
    <div className="card current">
      <div>
        <div className="temp">{round(current.temperature_2m)}°</div>
        <div className="cond">
          {weather.emoji} {weather.label}
        </div>
      </div>
      <div>
        <div className="meta">
          <span className="chip">Feels like {round(current.apparent_temperature)}°</span>
          <span className="chip">Humidity {round(current.relative_humidity_2m)}%</span>
          <span className="chip">Wind {round(current.wind_speed_10m)} km/h</span>
        </div>
      </div>
    </div>
  )
}
