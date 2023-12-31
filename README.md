# 📱 expo-starter-kit

An opinionated expo-starter for building robust cross-platform apps blazingly fast! This project purpose is for creating a minimum viable product (MVP) in a single day.

## Stack

- Expo

- [Expo Router](https://expo.github.io/router)

- expo-image

- [zustand](https://github.com/pmndrs/zustand) - state management

- [nativewind](https://nativewind.io/) - Tailwind CSS for React Native

- [axios](https://axios-http.com/) - Promise based HTTP client

- [i18next](https://www.i18next.com/) - Internationalization-framework

- [@shopify/flash-list](https://github.com/Shopify/flash-list) - React Native flash list component

## Project Structure

- `src` - source code for the application.

- `src/components` - contains reusable components.

- `src/screens` - contains the application's screens.

- `src/assets` - contains the application's assets (all the assets stored here will be bundled into the app).

- `src/config` - contains the application's config files.

- `src/constants` - contains the application's constants.

- `src/context` - contains the application's theme.

- `src/locales` - contains the application's local files (i18n, i18next, expo-localization).

- `src/store` - contains the application's zustand store for state managment.

- `src/utils` - contains the application's utils for helper functions.

## Setup Instructions

1. Clone the repository.

2. Install the dependencies using `yarn install`.

3. Start the expo server using `yarn start`.

#### ENV variables

1. Create a .env file in the root.
2. Define env variables inside the .env file
3. Use env variables everywhere by import env-loader

`import ENV from '_utils/env-loader';`

`const env_weather_api_key = ENV.WEATHER_API_KEY;`

That's it! Nice and simple way of dealing with environment variables.

## Roadmap

### Completed Tasks:

1. ~~Init Expo-router project with TypeScript.~~

2. ~~Create a src/ folder structure.~~

3. ~~Add Nativewind.~~

4. ~~Load Google fonts.~~

5. ~~Prettier.~~

6. ~~i18next.~~
7. ~~Implement One Signal notifications.~~
8. ~~Load ENV variables in a simple way~~
9. ~~Home page with a carousel and two example lists with Shopify flashlist.~~
10. ~~Create a detail page when clicking on an element on the carousel or list item.~~

### In Progress:

1. Dark/light theme.
2. Settings screen with light/dark toggle switch and language selector.
3. Animated Splash Screen with Lottie Animations

### Upcoming Tasks:

1. Add Login Screen/ Register modal.

2. Tutorial screens.

3. Create an example axios weather call and store it in zustand for creating a universal header component.

4. Create another tab with universal elements.

5. Re-usable components (Logo, Cards, etc.)

### Doubts

1. Instead of simple axios calls using react-query. If you have any opinion about this feel free to open a discussion.

2. Create a universal library for handling expo-icons. -> Create a universal component which can handle all the icon libs within one component.

3. E-commerce components/pages

4. Subscription implementation with [RevenueCat](https://www.revenuecat.com/)

## Contributing

If you have any suggestions on how to make this expo-starter better, feel free to create a discussion about it.

## License

This project is licensed under the terms of the MIT license.
