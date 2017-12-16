export default class Animator {
  constructor (animation, time, callback) {
    this.animation = animation
    this.time = time
    this.callback = callback

    this.start()
  }

  start () {
    let i = 0
    this.interval = setInterval(() => {
      i  = (this.animation.length - 1 === i) ? 0: i + 1
      const sprite = this.animation[i]
      this.callback(sprite)
    }, this.time)
  }

  stop () {
    clearInterval(this.interval)
  }
}
