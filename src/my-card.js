import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

export class MyCard extends LitElement {
  static get tag() { return 'my-card'; }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      attackTitle: { type: String },
      attackText: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true } // reflected!
    };
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.image = "";
    this.attackTitle = "";
    this.attackText = "";
    this.link = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 280px;
        min-height: 400px;
        border-radius: 12px;
        background: var(--my-card-bg, linear-gradient(145deg, #2ea1da, #47b7f5));
        color: var(--my-card-color, #000);
        margin: 16px;
        padding: 8px;
        text-align: center;
        transition: all 0.3s ease-in-out;
        vertical-align: top;
      }

      :host([fancy]) {
        background: var(--my-card-fancy-bg, pink);
        border: 4px solid var(--my-card-fancy-border, gold);
        box-shadow: 10px 5px 15px red;
        color: var(--my-card-fancy-color, black);
      }

      .card-title {
        font-weight: bold;
        font-size: 1.2rem;
        margin: 8px 0;
      }

      .card-image-container {
        width: 225px;
        height: 200px;
        aspect-ratio: 1/1;
        margin: 0 auto;
        border: 2px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        background: white;
      }

      .card-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .card-attack {
        background: rgba(255,255,255,0.8);
        border-radius: 8px;
        padding: 8px;
        margin: 8px;
        font-size: 0.9rem;
        text-align: left;
      }

      details summary {
        text-align: left;
        font-size: 1rem;
        padding: 6px;
        cursor: pointer;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        background: #fff;
        color: #000;
      }

      .card-footer {
        margin-top: 12px;
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
    `;
  }

  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <h1 class="card-title">${this.title}</h1>

      ${this.image
        ? html`
          <div class="card-image-container">
            <meme-maker
              image-url="${this.image}"
              alt="${this.title}"
              top-text="${this.title}"
              bottom-text="${this.attackTitle}">
            </meme-maker>
        </div>
        `
        : ''}

      <div class="card-attack">
        <h4>${this.attackTitle}</h4>
        <p>${this.attackText}</p>
      </div>

      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div><slot></slot></div>
      </details>

      <div class="card-footer">
        <a href="${this.link}">Details</a>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
