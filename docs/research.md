# Research: React + Vite Weather App (Webinar Demo)

## Goal

A **small**, browser-only weather app for a live webinar demo: user types a city, app shows **current conditions** and a **7-day forecast**. Built with **React + Vite** (per user), data from **Open-Meteo** (per user: free, no API key), **city search** for location input (per user).

## Similar apps / competitors

| App | Approach | Lessons for our demo |
|-----|----------|----------------------|
| OpenWeatherMap tutorials | City name → lat/lon → current weather. Requires API key. | City-name lookup pattern is standard; avoid key requirement for a no-setup demo. |
| WeatherAPI / Visual Crossing | Clean forecast payloads, key required. | Keyless data is the main demo differentiator. |
| Open-Meteo reference apps | lat/lon in → JSON out, no auth. | Geocode first, then forecast. Keep requests narrow. |
| Generic React+Vite tutorials | Vite scaffold, fetch-based, component split, loading/error states. | Standard: `useState` + `useEffect`, components for Search, Current, Forecast. |

## API research: Open-Meteo

**No API key, no registration, free for non-commercial use (~10,000 calls/day).** Two endpoints needed:

### 1. Geocoding (city name → coordinates)
- Endpoint: `https://geocoding-api.open-meteo.com/v1/search?name=<city>&count=5&format=json&language=en`
- Response: `results[]` with `name`, `latitude`, `longitude`, `country`, `admin1` (state/region), `country_code`, `population`, `timezone`, `elevation`.
- Minimum query length: 2 characters.
- Ambiguous names ("Springfield", "Paris") return multiple matches; top result is highest population. For a clean demo, show the top result (name, admin1, country) or offer a short picker.
- URL-encode user input (`encodeURIComponent`).

### 2. Forecast (current + daily)
- Endpoint: `https://api.open-meteo.com/v1/forecast`
- Required: `latitude`, `longitude`. Default `forecast_days=7` — exactly our scope.
- `current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`
- `daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
- **`timezone=auto`** so dates/times are local to the location (otherwise wrong calendar day for daily data).
- Units are metric by default (Celsius, km/h, mm); can override via `temperature_unit`, `wind_speed_unit`.
- Response: flat JSON with `current`, `current_units`, `daily`, `daily_units`, `timezone`.
- **Note:** `weather_code` is a WMO integer (0 = clear, 1–3 = cloudy, 45–48 = fog, 51–67 = drizzle/rain, 71–77 = snow, 80–82 = showers, 95–99 = thunderstorm). App must map it to a human label + icon.

## React + Vite setup for the demo

- Scaffold: `npm create vite@latest <name> -- --template react` (plain JS; no TypeScript needed for a small demo).
- Run: `npm install`, then `npm run dev` → http://localhost:5173. Build: `npm run build`; preview: `npm run preview`.
- Suggested structure (small app): `src/components/` (SearchBar, CurrentWeather, ForecastList), `src/api/` (single module wrapping the two fetch calls), `src/App.jsx` (state + orchestration). No Redux/router/axios — plain `fetch` + `useState`/`useEffect`.
- No `.env`/`VITE_` variables needed: Open-Meteo requires no key.

## Best practices to carry into Planning/Design/Dev

- Separate data layer (`api/`) from UI; components shouldn't know API quirks.
- Handle all four UI states explicitly: **empty** (prompt to search), **loading** (spinner), **error** (bad city, network), **success**.
- Guard against race conditions: if the user searches quickly, an older in-flight response must not overwrite the newer one (AbortController or ignore-stale check).
- Validate inputs: geocode returns no `results` → friendly "city not found" message.
- Weather-code→icon mapping table; keep it readable (emoji or SVG) for webinar viewing.
- Responsive, large text, high contrast — demo readability matters.
- Non-functional concerns: no auth/keys, works offline-gracefully (show error, not blank), minimal dependencies for a fast `npm install` during a live demo.

## Recommended scope (confirmed with user)

- City search via Open-Meteo Geocoding API.
- Current conditions: temperature, condition, feels-like, humidity, wind.
- 7-day forecast: daily high/low, condition, precipitation probability.
- Loading / error / empty states.

## Out of scope (avoid inventing)

- Hourly forecast, geolocation ("my location"), saved favorites, unit toggle, SSR/backend, deployment.
