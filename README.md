# Weather GPT Clone
This repository is inspired by a project featured on vercel where it can automatically detect user's location using latitude and longitude coordinates and then make a request to weather API to get current temperature of user's location.

```mermaid
graph LR
A([End User]) -- Coordinates --> B([Weather GPT])
B -- API Request--> D[Weather Data Provider]
D -- Current Temperature --> B
```

## Want to deploy your own instance?
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAnuragd275%2Fweather)
