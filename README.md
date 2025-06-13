# expo-unistyles-repro

## Reproduction

### Clean and quick reproduction

> Only for Unix systems

- `pnpm clean-start`

### Quick reproduction

1. `pnpm i`
2. `pnpm expo prebuild --clean`
3. `pnpm expo run:android -d`

### Full reproduction

1. `pnpm create expo-app .`
2. `pnpm expo install react-native-unistyles@next react-native-nitro-modules@0.26.2 react-native-edge-to-edge`
3. Create `babel.config.js` with the following content:
```js
export default function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ['react-native-unistyles/plugin', {
            root: 'app'
        }]
    ]
  }
}
```
4. Create `./unistyles.ts` with the following content:
```ts
import { StyleSheet } from 'react-native-unistyles'

StyleSheet.configure({})
```
5. Create `./index.ts` with the following content:
```ts
import 'expo-router/entry'
import './unistyles'
```
6. Update `main` in `package.json` to point to `./index.ts`:
```jsonc
{
  // ...
  "main": "./index.ts",
  // ...
}
```
7. Replace the content of `app/_layout.tsx` with the following:
```tsx
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>
        Correct insets
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        paddingTop: rt.insets.top,
        paddingBottom: rt.insets.bottom,
        paddingLeft: rt.insets.left,
        paddingRight: rt.insets.right
    },
}))
```
8. `pnpm expo prebuild --clean`
9. `pnpm expo run:android -d`

## Bugs encountered

- Reloading the app (using `r` in the terminal) makes the Mini Runtime lose top and bottom insets (status bar height and navigation bar height) values.
- ~~Reloading the app (using `r` in the terminal) makes sometimes the app crash.~~ Fixed by `3.0.0-nightly-20250613`
