// Twimple provies a simple way to run tween functions in Javascript.
class Twimple {
  // Lerp through values start through end by indicating how far with percent.
  static lerp(start, end, percent)
  {
    return start + percent * (end - start);
  }

  // Lerp on intervals.
  static tween(start, end, duration, interval, ontick, method=Twimple.lerp) {
    // Initialize our elapsed time to zero.
    let elapsedTime = 0;

    // Store a reference to our intervalMethod so we can kill it in the callback once
    // one such occurs in which elapsedTime ends up being greater than the specified allowed duration.
    const intervalMethod = setInterval(()=> {
      // The percent of the way to the end of the lerp.
      const percent = elapsedTime > duration ? 1 : elapsedTime / duration;

      // The return value.
      const result = {};

      // Iterate the keys and lerp.
      for(var key in start) {
        if(start.hasOwnProperty(key)) {
        // Store the lerp value.
          result[key] = method(start[key], end[key], percent)
        }
      }

      // Invoke the ontick method passing in the lerped value.
      ontick(result)

      // Increase the elapsedTime with the interval since the last execution of the callback.
      elapsedTime += interval;

      // Kill the interval if the duration is up.        
      if(percent >= 1) {
        clearInterval(intervalMethod);
      }
    },
    // Run the callback on the specified interval.
    interval)

    // Return a reference to the interval method so the caller can end it with clearInterval.
    return intervalMethod;
  }
}

