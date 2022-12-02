import EventEmitter from 'eventemitter3';

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: 'ready',
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = '🍌';
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    // display the elements

    let div = document.getElementById('emojis');
    let paragraph = document.createElement('p');

    this.emojis.forEach(emoji => {
      paragraph.textContent += emoji;
    });

    div.appendChild(paragraph);
  }

  addBananas() {
    // add a bannana to each array element (monkey)
    this.emojis = this.emojis.map((m) => m + this.banana);
    document.getElementById('emojis').textContent = '';
    this.setEmojis(this.emojis);
  }
}
