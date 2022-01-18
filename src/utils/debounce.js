export const debounce = (fnc, delay) => {
  let timeoutID
  return function(...args) {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      fnc(...args)
    }, delay)
  }
}