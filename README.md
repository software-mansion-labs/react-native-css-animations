# React Native CSS Animations

Ready-to-use CSS Animation presets for React Native Reanimated.

## Installation

```
yarn add [react-native-reanimated@next](https://github.com/software-mansion/react-native-reanimated)
yarn add react-native-css-animations
```

## Usage

### Spin

```typescript
import { spin } from 'react-native-css-animations';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <Animated.View style={[styles.box, spin]}/>
  )
}
```

### Ping

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
