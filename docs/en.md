# expo-app-exit

![Expo SDK Version](https://img.shields.io/badge/Expo%20SDK-54.0.27-black?logo=expo) ![license](https://img.shields.io/npm/l/expo-app-exit) ![stars](https://img.shields.io/github/stars/Pro203S/expo-app-exit) [![Report Issue](https://img.shields.io/badge/Report-Issue-red)](https://github.com/Pro203S/expo-app-exit/issues)

`expo-app-exit` provides the following features:

1. 📱 As the name suggests, it allows you to exit the app.
2. 💃 Gracefully exits the app on iOS.

## Example Screens

<table>
<tr>
<td>
<img src="ios.gif" alt="Example of app exit on iOS" height="375" />
</td>
<td>
<img src="android.gif" alt="Example of app exit on Android" height="375" />
</td>
</tr>
<tr>
<td align="center">iOS</td><td align="center">Android</td>
</tr>
</table>

## Notes

- ❌ Not supported in Expo Go.
- ✅ Requires [expo-dev-client](https://docs.expo.dev/versions/latest/sdk/dev-client/). No additional plugins are needed.

## Installation

1. Install the package.

```shell
# npm
npm install expo-app-exit

# bun
bun install expo-app-exit
```

2. Install CocoaPods. (You can skip this step when using Expo.)

```shell
cd ios
pod install
```

3. Build the project.

```shell
# Expo
npx expo run:android
npx expo run:ios

# React Native CLI
npx react-native run-android
npx react-native run-ios
```

## Usage Example

```jsx
import AppExit from 'expo-app-exit';
import { Button } from 'react-native';

export default function App() {
  return <Button title="Close" onPress={() => AppExit()} />;
}
```
