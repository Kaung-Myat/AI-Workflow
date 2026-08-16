# PRD: Weather App (React + Vite, Webinar Demo)

## 1. Overview

A small browser-only weather app for a live webinar demo. The user types a city name; the app resolves it to coordinates and displays **current conditions** and a **7-day forecast**. Data comes from Open-Meteo (free, no API key). Stack: **React + Vite**.

## 2. Target users

- Webinar audience and instructor (primary): want a quick, keyless, reliable demo of a working web app.
- Anyone on a laptop/mobile browser with an internet connection.

## 3. Functional requirements

- **F1 — City search**: User can type a city name (min 2 characters) and submit; app geocodes it to a location using Open-Meteo Geocoding API. Resolves to the top (highest-population) match; displays resolved city name with region/country.
- **F2 — Current conditions**: After a successful search, show current temperature (°C), weather condition (label derived from WMO code), feels-like temperature, humidity (%), and wind speed (km/h).
- **F3 — 7-day forecast**: Show a 7-day daily forecast list: weekday/date, condition (WMO code → label), daily high/low temperature, and precipitation probability (%).
- **F4 — Empty state**: On first load (no search yet), show a friendly prompt telling the user to search for a city. No error, no spinner.
- **F5 — Loading state**: While fetching, show a visible loading indicator.
- **F6 — Error handling**: If the city is not found, show a clear "city not found" message and let the user retry. If the network/API fails, show a generic error message and let the user retry.
- **F7 — Search re-submission**: Submitting a new city replaces the previous results; an out-of-date in-flight response must not overwrite the latest search (no stale-data race).

## 4. Non-functional requirements

- **N1 — No setup**: No API key, no signup, no backend. Works from a plain `npm install && npm run dev`.
- **N2 — Fast install**: Minimal dependencies (plain `fetch`, React, Vite only) so `npm install` is quick in a live demo.
- **N3 — Demo readability**: Large text, high contrast, responsive layout (readable on projected screen and phones).
- **N4 — Deterministic units**: Metric only (°C, km/h, %). No unit toggle (out of scope).
- **N5 — Privacy**: No user data stored or sent anywhere except the Open-Meteo search query.

## 5. Out of scope

- Hourly forecast, geolocation ("my location"), saved/favorite cities, unit toggle (C/F), light/dark theme, backend/SSR, deployment, offline caching, tests beyond a minimal check.

## 6. Success metrics

- Demo runs end-to-end in under ~2 minutes from a cold scaffold.
- First search for a known city returns results with no user confusion.
- All four UI states (empty, loading, error, success) demonstrable.
