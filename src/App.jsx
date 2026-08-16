import { useRef, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import ForecastList from './components/ForecastList.jsx'
import { geocodeCity, getForecast } from './api/weather.js'

export default function App() {
  const [status, setStatus] = useState('empty')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastQuery, setLastQuery] = useState('')
  const [location, setLocation] = useState(null)
  const [current, setCurrent] = useState(null)
  const [daily, setDaily] = useState(null)
  const requestIdRef = useRef(0)

  async function handleSearch(city) {
    const trimmed = city.trim()
    if (trimmed.length < 2) return

    const requestId = ++requestIdRef.current
    setStatus('loading')
    setErrorMessage('')
    setLastQuery(trimmed)

    try {
      const place = await geocodeCity(trimmed)
      if (requestId !== requestIdRef.current) return

      if (!place) {
        setStatus('error')
        setErrorMessage(
          `We couldn't find "${trimmed}". Check the spelling and try again.`,
        )
        return
      }

      const data = await getForecast(place.latitude, place.longitude)
      if (requestId !== requestIdRef.current) return

      setLocation(place)
      setCurrent(data.current)
      setDaily(data.daily)
      setStatus('success')
    } catch {
      if (requestId !== requestIdRef.current) return
      setStatus('error')
      setErrorMessage('Something went wrong. Check your connection and try again.')
    }
  }

  const locationParts = [location?.name, location?.admin1, location?.country]
    .filter(Boolean)
    .join(', ')

  return (
    <main className="screen">
      <SearchBar onSearch={handleSearch} disabled={status === 'loading'} />

      {status === 'success' && (
        <p className="location-line">📍 {locationParts}</p>
      )}

      {status === 'empty' && (
        <div className="card empty">
          <div className="icon" aria-hidden="true">
            🌤️
          </div>
          <h1>Weather, anywhere</h1>
          <p>Search a city to see current conditions and a 7-day forecast.</p>
        </div>
      )}

      {status === 'loading' && (
        <div className="card loading" role="status">
          <div className="spinner" aria-hidden="true" />
          <p>Fetching weather for {lastQuery}…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="card error" role="alert">
          <div className="icon" aria-hidden="true">
            🔍
          </div>
          <h2>Oops</h2>
          <p>{errorMessage}</p>
          <button className="btn btn-primary" type="button" onClick={() => handleSearch(lastQuery)}>
            Try again
          </button>
        </div>
      )}

      {status === 'success' && (
        <>
          <CurrentWeather current={current} />
          <ForecastList daily={daily} />
        </>
      )}
    </main>
  )
}
