# twimple
A simple tween library with a simple API.

## Usage

```javascript
// The start values.
const start = { 'x': -100, 'y': 500 };
// The end values. The start and end values must have corresponding keys.
const end   = { 'x': 100, 'y': 100 };
// How long to run the tween.
const duration = 500;
// The duration in milliseconds between invocations of the tween callback.
const interval = 20;

// Tween it till it's good.
Twimple.tween(start, end, duration, interval, values => {
  console.log(values);
});
```

Enjoy!