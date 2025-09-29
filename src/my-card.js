import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() { return 'my-card'; }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      attackTitle: { type: String },
      attackText: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true } // NEW
    };
  }

  constructor() {
    super();
    this.title = "Piplup";
    this.image = "https://tse3.mm.bing.net/th/id/OIP.ODZcxyLw49N8N88hjvfwvgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3";
    this.attackTitle = "Bubble";
    this.attackText = "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.";
    this.link = "https://hax.psu.edu"; 
    this.fancy = false; // default
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 300px;
        border-radius: 12px;
        background: var(--my-card-bg, linear-gradient(145deg, #2ea1da, #47b7f5));
        color: var(--my-card-color, #000);
        margin: 20px auto;
        overflow: hidden;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        transition: all 0.3s ease-in-out;
      }

      :host([fancy]) {
        background: var(--my-card-fancy-bg, #FF0000);
        color: var(--my-card-fancy-color, #fff);
        box-shadow: 10px 5px 15px rgba(0,0,0,0.5);
      }

      .card-title {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 12px;
        background: var(--my-card-title-bg, linear-gradient(145deg, #f5f5f5, #d0d0d0));
        border: 2px solid var(--my-card-title-border, #ccc);
        border-radius: 6px;
        margin: 0 8px;
      }

      .card-image-container {
        width: 225px;
        height: 200px;
        background: var(--my-card-image-bg, #fff);
        border: 2px solid var(--my-card-image-border, #dfdee3);
        border-radius: 8px;
        overflow: hidden;
        margin: 12px auto;
      }

      .card-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .card-attack {
        background: var(--my-card-attack-bg, rgba(255,255,255,0.85));
        border-radius: 8px;
        padding: 8px;
        margin: 0 12px;
        text-align: left;
        font-size: 0.9rem;
      }

      details summary {
        text-align: left;
        font-size: 1rem;
        padding: 6px;
        cursor: pointer;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        background: white;
        color: black;
      }

      .card-footer a {
        text-decoration: none;
        padding: 8px 16px;
        background: var(--my-card-link-bg, linear-gradient(135deg, #ffe165, #ffb800));
        color: var(--my-card-link-color, #222);
        font-weight: bold;
        border-radius: 8px;
        border: 2px solid #fff;
      }

      slot {
        display: block;
        margin-top: 8px;
      }
    `;
  }

  openChanged(e) {
    // toggle fancy based on <details> open state
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <h1 class="card-title">${this.title}</h1>
      <div class="card-image-container">
        <img src="${this.image}" alt="${this.title}" class="card-image">
      </div>
      <div class="card-attack">
        <h4>${this.attackTitle}</h4>
        <p>${this.attackText}</p>
      </div>

      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot></slot>
        </div>
      </details>

      <div class="card-footer">
        <a href="${this.link}">Details</a>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
