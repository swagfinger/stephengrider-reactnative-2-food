## Food

Restaurant search app using YELP.
react-native projects can be created with

1. react-native-cli - a lot of extra setup
2. expo-cli (NOW... create-expo-app) - tons of extra features like icons, video, camera etc

we use create-expo app because it comes with a lot more features

```cmd
npx create-expo-app food
```

## Yelp

- yelp api
  https://www.yelp.com/fusion

- API urls Business Endpoints - https://www.yelp.com/developers/documentation/v3/business

  - GET https://api.yelp.com/v3/businesses/search
  - GET https://api.yelp.com/v3/businesses/{id}

## React Navigation

- Drawer Navigator
- BottomTabNavigator
- StackNavigator (has automatic back button) react-navigation@4

```cmd
npm i react-navigation

npm i react-navigation-stack @react-native-community/masked-view --legacy-peer-deps
```

## project dependencies

```
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## babel.config.js

add to return{}

```js
plugins: ["react-native-reanimated/plugin"],
```

## vector-icons (https://icons.expo.fyi/)

https://icons.expo.fyi/
https://github.com/expo/vector-icons
