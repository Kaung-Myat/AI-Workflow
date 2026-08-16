import { getWeather } from '../utils/weatherCodes.js'

function weekday(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en', { weekday: 'short' })
}

function round(value) {
  return Math.round(value)
}

export default function ForecastList({ daily }) {
  return (
    <div className="card forecast-list">
      <h3>7-day forecast</h3>
      {daily.time.map((date, index) => {
        const weather = getWeather(daily.weather_code[index])
        const rain = daily.precipitation_probability_max[index]
        const label = index === 0 ? 'Today' : weekday(date)

        return (
          <div className="day" key={date}>
            <span className="day-name">{label}</span>
            <span className="day-cond">
              <span className="emoji" aria-hidden="true">
                {weather.emoji}
              </span>
              {weather.label}
            </span>
            <span className="day-rain">{rain == null ? '—' : `${round(rain)}%`}</span>
            <span className="day-temps">
              <span className="low">{round(daily.temperature_2m_min[index])}°</span>
              {' / '}
              {round(daily.temperature_2m_max[index])}°
            </span>
          </div>
        )
      })}
    </div>
  )
}
