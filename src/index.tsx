// MIT License

// Copyright (c) Tailwind Labs, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import * as React from 'react';
import Animated, { cubicBezier } from 'react-native-reanimated';
import type { CSSStyleDeclaration } from 'react-native-reanimated/lib/typescript/css/types';

interface CSSAnimationProps {
  style?: CSSStyleDeclaration;
}

/**
 * A `spin` style object to an `Animated` component add a linear spinning animation. Great for loaders.
 */
export const spin: CSSStyleDeclaration = {
  animationName: {
    to: {
      transform: [{ rotate: '360deg' }],
    },
  },
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
};

export function Spin({
  style,
  children,
  ...rest
}: React.PropsWithChildren<CSSAnimationProps>): JSX.Element {
  return (
    <Animated.View style={[spin, style]} {...rest}>
      {children}
    </Animated.View>
  );
}

/**
 * Add `ping` style object to an `Animated` component to make the element scale and fade. Great for attention grabbing elements like notifications.
 */
export const ping: CSSStyleDeclaration = {
  animationName: {
    '75%, 100%': {
      transform: [{ scale: 2 }],
      opacity: 0,
    },
  },
  animationDuration: '1s',
  animationTimingFunction: cubicBezier(0, 0, 0.2, 1),
  animationIterationCount: 'infinite',
};

export function Ping({
  style,
  children,
  ...rest
}: React.PropsWithChildren<CSSAnimationProps>): JSX.Element {
  return (
    <Animated.View style={[ping, style]} {...rest}>
      {children}
    </Animated.View>
  );
}

/**
 * Add `pulse` style object to an `Animated` component to make it fade in and out. Great for skeleton loaders.
 */
export const pulse: CSSStyleDeclaration = {
  animationName: {
    '50%': {
      opacity: 0.5,
    },
  },
  animationDuration: '2s',
  animationTimingFunction: cubicBezier(0.4, 0, 0.6, 1),
  animationIterationCount: 'infinite',
};

export function Pulse({
  style,
  children,
  ...rest
}: React.PropsWithChildren<CSSAnimationProps>): JSX.Element {
  return (
    <Animated.View style={[pulse, style]} {...rest}>
      {children}
    </Animated.View>
  );
}

/**
 * Add `bounce` style object to an `Animated` component to make it bounce up and down. Great for scroll down indicators.
 */
export const bounce: CSSStyleDeclaration = {
  animationName: {
    '0%, 100%': {
      transform: [{ translateY: '-25%' }],
      animationTimingFunction: cubicBezier(0.8, 0, 1, 1),
    },
    '50%': {
      transform: [{ translateY: '0%' }],
      animationTimingFunction: cubicBezier(0, 0, 0.2, 1),
    },
  },
  animationDuration: '1s',
  animationIterationCount: 'infinite',
};

export function Bounce({
  style,
  children,
  ...rest
}: React.PropsWithChildren<CSSAnimationProps>): JSX.Element {
  return (
    <Animated.View style={[bounce, style]} {...rest}>
      {children}
    </Animated.View>
  );
}

/**
 * Add `shimmer` style object to an `Animated` component to make it animate from left to right indefinitely. Great for shimmer loading effect.
 */
export const shimmer: CSSStyleDeclaration = {
  animationName: {
    from: {
      transform: [{ translateX: '-25%' }],
    },
    to: {
      transform: [{ translateX: '25%' }],
    },
  },
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
};

export function Shimmer({
  style,
  children,
  ...rest
}: React.PropsWithChildren<CSSAnimationProps>): JSX.Element {
  return (
    <Animated.View style={[shimmer, style]} {...rest}>
      {children}
    </Animated.View>
  );
}
