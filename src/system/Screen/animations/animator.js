export default class Animator {
  constructor (animation, callback) {
    this.animation = animation
    this.callback = callback

    this.start()
  }

  start () {
    let i = 0
    this.interval = setInterval(() => {
      i  = (this.animation.length - 1 === i) ? 0: i + 1
      const sprite = this.animation[i]
      this.callback(sprite)
    }, 200)
  }

  stop () {
    clearInterval(this.interval)
  }
}
