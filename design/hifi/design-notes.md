# Design Notes — Weather App (Webinar Demo)

## Screen map

| Screen / state | Purpose | PRD refs |
|----------------|---------|----------|
| Empty | Friendly prompt before first search | F4 |
| Loading | Spinner while fetching geocode + forecast | F5 |
| Error (city not found) | Message + retry | F6 |
| Error (network) | Generic message + retry (same layout, different copy) | F6 |
| Success — current | Location line + current conditions card | F1, F2 |
| Success — forecast | 7-day list below current conditions | F1, F3 |

Single-page layout: persistent search bar at top; the card below it swaps between empty / loading / error / success content.

## Visual tokens

- **Colors**
  - Background gradient: `#0b1e33` → `#2e7bb8` (deep navy sky).
  - Card: `#ffffff`; card tint chip: `#f2f8fd`; border: `#d6e4ee`.
  - Text: `#0d1b2a`; soft text: `#41566b`.
  - Primary button: `#1d4e78` (white text).
  - Accent (demo note): `#f9a825`.
  - Error: `#c0392b`; success chip accents inherited.
- **Typography**: system-ui stack; hero temp `4rem`/800, location line `1.35rem`/700, body `1.05rem`.
- **Spacing / radius**: card padding `20px`, radius `16px`; input radius `12px`; chip radius `999px`; vertical gap `16px`.
- **Icons**: emoji only (`☀️ 🌤️ ☁️ 🌧️ ⛈️ 🌦️`) — zero assets, webinar-safe.

## Components

1. **Search bar** — text input + primary Search button; placeholder "Search a city, e.g. Paris".
2. **Empty card** — big emoji, headline "Weather, anywhere", helper line.
3. **Loading card** — CSS spinner + "Fetching weather for <city>…" (role="status").
4. **Error card** — emoji, "City not found", message with the searched term, Try again button (role="alert").
5. **Location line** — 📍 + "Name, Region, Country" above current card.
6. **Current conditions card** — big temperature, condition label, chips for feels-like / humidity / wind.
7. **Forecast list card** — 7 rows: day name, condition (emoji + label), rain %, high/low temps.

## Handoff notes for Developer

- **Match exactly**: layout structure above, card/button styling tokens, emoji condition icons, four distinct states, persistent search bar, "Name, Region, Country" location line, chips grid for current meta.
- **Approximate**: exact placeholder values and day names come from live API; copy wording may be tightened. CSS is a single `App.css` in React — port tokens as CSS variables.
- WMO code → label/emoji mapping lives in `src/utils/weatherCodes.js`; design uses the same set of icons shown above.
- Keep text large and high-contrast; the gradient background and white cards are the demo look.
- On ≥720px, current card becomes a two-column grid (temp/condition | chips) — keep this breakpoint.
