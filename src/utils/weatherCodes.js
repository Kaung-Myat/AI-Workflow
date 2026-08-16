const WEATHER_CODES = {
  0: { label: 'Clear sky', emoji: '☀️' },
  1: { label: 'Mainly clear', emoji: '🌤️' },
  2: { label: 'Partly cloudy', emoji: '⛅' },
  3: { label: 'Overcast', emoji: '☁️' },
  45: { label: 'Fog', emoji: '🌫️' },
  48: { label: 'Depositing rime fog', emoji: '🌫️' },
  51: { label: 'Light drizzle', emoji: '🌦️' },
  53: { label: 'Drizzle', emoji: '🌦️' },
  55: { label: 'Dense drizzle', emoji: '🌦️' },
  56: { label: 'Freezing drizzle', emoji: '🌧️' },
  57: { label: 'Dense freezing drizzle', emoji: '🌧️' },
  61: { label: 'Light rain', emoji: '🌧️' },
  63: { label: 'Rain', emoji: '🌧️' },
  65: { label: 'Heavy rain', emoji: '🌧️' },
  66: { label: 'Freezing rain', emoji: '🌧️' },
  67: { label: 'Heavy freezing rain', emoji: '🌧️' },
  71: { label: 'Light snowfall', emoji: '❄️' },
  73: { label: 'Snowfall', emoji: '❄️' },
  75: { label: 'Heavy snowfall', emoji: '❄️' },
  77: { label: 'Snow grains', emoji: '❄️' },
  80: { label: 'Light showers', emoji: '🌦️' },
  81: { label: 'Showers', emoji: '🌦️' },
  82: { label: 'Heavy showers', emoji: '🌧️' },
  85: { label: 'Snow showers', emoji: '🌨️' },
  86: { label: 'Heavy snow showers', emoji: '🌨️' },
  95: { label: 'Thunderstorm', emoji: '⛈️' },
  96: { label: 'Thunderstorm with hail', emoji: '⛈️' },
  99: { label: 'Thunderstorm with heavy hail', emoji: '⛈️' },
}

export function getWeather(code) {
  return WEATHER_CODES[code] ?? { label: 'Unknown', emoji: '❓' }
}
