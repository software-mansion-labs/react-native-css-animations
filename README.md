<img width="1100" alt="header" src="https://github.com/user-attachments/assets/cbf6ecfa-8a0f-4841-8fc0-982aa04e618e" />

Ready-to-use CSS Animation presets for [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

> [!TIP]
> Since version 4.0, React Native Reanimated comes with a native support for CSS Animations and Transitions. Read [the full announcement to learn more](https://blog.swmansion.com/reanimated-4-is-new-but-also-very-familiar-b926dd59aa40).

## Installation

<pre>
yarn add <a href="https://github.com/software-mansion/react-native-reanimated/docs/next/category/css-animations" target="_blank">react-native-reanimated@next</a>
yarn add react-native-css-animations
</pre>

## Usage

### Spin

Add `spin` style object to an `Animated` component add a linear spinning animation. Great for loaders.

<img src="https://github.com/user-attachments/assets/d3a87650-83f4-476b-bf85-832a3a2d0fea" alt="Spin animation demo" align="right" width="275" />

```jsx
import { spin } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View style={[styles.spinner, spin]} />;
}
```

### Ping

Add `ping` style object to an `Animated` component to make the element scale and fade. Great for attention grabbing elements like notifications.

<img src="https://github.com/user-attachments/assets/51c604b4-621b-4821-ab9a-f289f15e07ae" alt="Ping animation demo" align="right" width="275" />

```jsx
import { ping } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View style={[styles.notification, ping]} />;
}
```

### Pulse

Add `pulse` style object to an `Animated` component to make it fade in and out. Great for skeleton loaders.

<img src="https://github.com/user-attachments/assets/d36924b1-f4f8-4bd4-b3dd-a298d3b2f4b6" alt="Pulse animation demo" align="right" width="275"/>

```jsx
import { pulse } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View style={[styles.skeleton, pulse]} />;
}
```

### Bounce

Add `bounce` style object to an `Animated` component to make it bounce up and down. Great for scroll down indicators.

<img src="https://github.com/user-attachments/assets/81e75ed0-b7ec-4f56-a06a-c593a626cb39" alt="Bounce animation demo" align="right" width="275" />

```jsx
import { bounce } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View style={[styles.arrow, bounce]} />;
}
```

### Shimmer

Add `shimmer` style object to an `Animated` component to make it animate from left to right indefinitely. Great for shimmer loading effect.

<img src="https://github.com/user-attachments/assets/2f020a43-1577-485e-b58f-9a8fc660528b" alt="Shimmer animation demo" align="right" width="275" />

```jsx
import { shimmer } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View style={[styles.gradient, shimmer]} />;
}
```

## Alternative API

The following animations are also available in a form of React Native components.

```jsx
import {
  Spin,
  Ping,
  Pulse,
  Bounce,
  Shimmer,
} from 'react-native-css-animations';

function App() {
  return (
    <Bounce style={styles.arrow}>
      <ArrowIcon />
    </Bounce>
  );
}
```

## Customizing animation presets

You can customize the animation style objects by overriding the styles like so:

```diff
import { shimmer } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return <Animated.View
    style={[
      styles.gradient,
      shimmer,
+      {
+        animationName: {
+          to: { transform: [{ translateX: '100%' }] },
+        },
+      },
    ]}
  >
}
```

## Examples

See how the examples where implemented in [our Example app](https://github.com/software-mansion-labs/react-native-css-animations/blob/main/example/src/App.tsx).

## Credits

Most of the examples and animations were adopted from [Tailwind CSS](https://tailwindcss.com/docs/animation).

## React Native CSS Animations were brought to you by Software Mansion

We are a software agency with experience in building web and mobile apps. Core React Native Contributors and experts in dealing with all kinds of React Native issues. We can help you build your next dream product – [Hire us](https://swmansion.com/contact/projects?utm_source=css-animations&utm_medium=readme).
