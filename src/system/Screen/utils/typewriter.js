export default function typewriter (str, time, stepCallback, finalCallback) {
  const steps = str.split('').reduce((acc, cur) => {
    if (acc.length) acc.push(acc[acc.length - 1] + cur)
    else acc.push(cur)
    return acc
  }, [])

  let i = 0
  const interval = setInterval(() => {
    if (i === steps.length) {
      clearInterval(interval)
      finalCallback()
    } else {
      stepCallback(steps[i])
      i++
    }
  }, time)
}
