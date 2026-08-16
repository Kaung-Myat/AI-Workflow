# User Stories

## US1 — Search for a city
**As a** webinar attendee,
**I want** to type a city name and submit it,
**so that** I can see the weather there.

**Acceptance criteria**
- Given a city of ≥2 characters is typed and submitted, the app performs a geocoding lookup.
- Given the city resolves, results replace any previous weather display.
- Given the query resolves to a top match, the displayed header shows the resolved name with region/country (e.g. "Paris, Île-de-France, France").
- Given a new search is submitted while a previous one is in flight, only the latest search's results are shown.

## US2 — View current conditions
**As a** user,
**I want** to see the current weather for the searched city,
**so that** I can get a quick summary of conditions.

**Acceptance criteria**
- The current view shows: temperature (°C), condition label (from WMO code), feels-like temperature, humidity (%), and wind speed (km/h).
- Values are clearly labeled; condition label matches the WMO weather code mapping.

## US3 — View 7-day forecast
**As a** user,
**I want** to see the forecast for the next 7 days,
**so that** I can plan ahead.

**Acceptance criteria**
- Exactly 7 daily entries are listed, starting with today (per Open-Meteo default).
- Each entry shows weekday/date, condition label, daily high/low, and precipitation probability (%).
- Dates are local to the searched location (no off-by-one day bug).

## US4 — See a clear empty state
**As a** first-time user,
**I want** to see a prompt before I search,
**so that** I know what to do.

**Acceptance criteria**
- On first load with no search, the app shows a friendly "search for a city" prompt and no weather data, spinner, or error.

## US5 — Get helpful errors
**As a** user,
**I want** clear feedback when something goes wrong,
**so that** I can recover.

**Acceptance criteria**
- Given a city with no geocoding results, a "city not found" message is shown and the user can search again.
- Given a network/API failure, a generic error message is shown and the user can retry.
- Loading is indicated with a visible spinner between submit and result.
