class Task {
  constructor(content) {
    this.content = content;
  }

  render() {
    return `<li>${this.content} <button data-content="${this.content}">Delete</button></li>`
  }

}
