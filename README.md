<img width="1100" alt="header" src="https://github.com/user-attachments/assets/f007398e-68f6-446a-8580-8a0fb3fab57a" />

Ready-to-use CSS Animation presets for React Native Reanimated

## Installation

<pre>
yarn add <a href="https://github.com/software-mansion/react-native-reanimated" target="_blank">react-native-reanimated@next</a>
yarn add react-native-css-animations
</pre>

## Usage

### Spin

Add `spin` style object to an `Animated` component add a linear spinning animation. Great for loaders.

<img src="https://github.com/user-attachments/assets/d3a87650-83f4-476b-bf85-832a3a2d0fea" alt="Spin animation demo" align="right" width="275" />

```typescript
import { spin } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <Animated.View style={[styles.spinner, spin]}/>
  )
}
```

### Ping

Add `ping` style object to an `Animated` component to make the element scale and fade. Great for attention grabbing elements like notifications.

<img src="https://github.com/user-attachments/assets/51c604b4-621b-4821-ab9a-f289f15e07ae" alt="Ping animation demo" align="right" width="275" />

```typescript
import { ping } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <Animated.View style={[styles.notification, ping]}/>
  )
}
```

### Pulse

Add `pulse` style object to an `Animated` component to make it fade in and out. Great for skeleton loaders.

<img src="https://github.com/user-attachments/assets/d36924b1-f4f8-4bd4-b3dd-a298d3b2f4b6" alt="Pulse animation demo" align="right" width="275"/>

```typescript
import { pulse } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <Animated.View style={[styles.skeleton, pulse]}/>
  )
}
```

### Bounce

Add `bounce` style object to an `Animated` component to make it bounce up and down. Great for scroll down indicators.

<img src="https://github.com/user-attachments/assets/81e75ed0-b7ec-4f56-a06a-c593a626cb39" alt="Bounce animation demo" align="right" width="275" />

```typescript
import { bounce } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <Animated.View style={[styles.arrow, bounce]}/>
  )
}
```

## Credits

- The examples and animations were adopted from [Tailwind CSS](https://tailwindcss.com/docs/animation).
