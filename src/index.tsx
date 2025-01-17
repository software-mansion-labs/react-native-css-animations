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

import { cubicBezier } from 'react-native-reanimated';
import type { CSSStyleDeclaration } from 'react-native-reanimated/lib/typescript/css/types';

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
