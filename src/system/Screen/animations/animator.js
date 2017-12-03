function nextFrame (animationArray, callback, i) {
  const sprite = animationArray[i]

  i = (animationArray.length - 1 === i) ? 0: i + 1
  setTimeout(() => {
    callback(sprite)
    nextFrame(animationArray, callback, i);
  }, 200)
}

export function animate (animationArray, callback) {
  nextFrame(animationArray, callback, 0)
}
