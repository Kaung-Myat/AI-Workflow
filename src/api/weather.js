const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

const CURRENT_FIELDS = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'wind_speed_10m',
  'weather_code',
].join(',')

const DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_probability_max',
].join(',')

export async function geocodeCity(city) {
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(city)}&count=1&format=json&language=en`
  const response = await fetch(url)
  if (!response.ok) throw new Error('Geocoding request failed')

  const data = await response.json()
  if (!data.results || data.results.length === 0) return null

  const place = data.results[0]
  return {
    name: place.name,
    admin1: place.admin1 || '',
    country: place.country || '',
    latitude: place.latitude,
    longitude: place.longitude,
  }
}

export async function getForecast(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: CURRENT_FIELDS,
    daily: DAILY_FIELDS,
    timezone: 'auto',
  })

  const response = await fetch(`${FORECAST_URL}?${params.toString()}`)
  if (!response.ok) throw new Error('Forecast request failed')
  return response.json()
}
