# Architecture: Weather App (React + Vite)

## Stack

- **React 18** + **Vite** (`npm create vite@latest . -- --template react`) — plain JS, no TypeScript.
- **No UI framework, no state library, no HTTP library.** Plain `fetch`, `useState`, `useEffect`. No `.env` variables (Open-Meteo is keyless).

## Project structure

```text
.
├── index.html                  # Vite entry
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # ReactDOM mount
    ├── App.jsx                 # State + orchestration
    ├── App.css                 # Global styles (single stylesheet, enough for a demo)
    ├── api/
    │   └── weather.js          # geocodeCity(name) + getForecast(lat, lon) — the only fetch code
    ├── components/
    │   ├── SearchBar.jsx       # F1 input + submit
    │   ├── CurrentWeather.jsx  # F2 current conditions card
    │   └── ForecastList.jsx    # F3 7-day forecast list
    └── utils/
        └── weatherCodes.js     # WMO code → { label, icon } mapping
```

## Data flow

1. `SearchBar` submits a city name → `App` sets `status = 'loading'`.
2. `App` calls `geocodeCity(name)` (Open-Meteo Geocoding API).
   - No `results` → `status = 'error'`, message "City not found".
3. On success, `App` calls `getForecast(lat, lon)` (Open-Meteo Forecast API) with `current` + `daily` vars and `timezone=auto`.
   - Fetch failure → `status = 'error'`, generic retry message.
4. On success, `App` stores `{ location, current, daily }`, sets `status = 'success'`.
5. `CurrentWeather` and `ForecastList` render from that data; `weatherCodes.js` maps WMO codes to labels/icons.

## API endpoints

| Call | URL | Params |
|------|-----|--------|
| Geocode | `https://geocoding-api.open-meteo.com/v1/search` | `name`, `count=1`, `format=json`, `language=en` |
| Forecast | `https://api.open-meteo.com/v1/forecast` | `latitude`, `longitude`, `current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`, `daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`, `timezone=auto` |

## App state (UI)

`status: 'empty' | 'loading' | 'error' | 'success'` plus `errorMessage` and `weather` payload.

## Race-condition guard (F7)

Each search gets an incrementing request id (or `AbortController`); results are applied only if the request is still the latest. Prevents an older response overwriting a newer search.

## Error mapping

- Geocode: `results` empty → "City not found. Try a different spelling."
- Any fetch/network failure → "Something went wrong. Check your connection and try again."
- Search input <2 chars → ignored (no request fired).

## Commands

- Dev: `npm run dev` (http://localhost:5173)
- Build: `npm run build`
- Preview built app: `npm run preview`
