import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      attackTitle: { type: String },
      attackText: { type: String },
      link: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Piplup";
    this.image = "https://tse3.mm.bing.net/th/id/OIP.ODZcxyLw49N8N88hjvfwvgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3";
    this.attackTitle = "Bubble";
    this.attackText = "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.";
    this.link = "https://hax.psu.edu"; 
   }

  static get styles() {
    return css`
      .card {
        width: 300px;
        border: 12px solid #ffe165;
        border-radius: 12px;
        background: linear-gradient(145deg, #2ea1da, #47b7f5);
        padding: 16px;
        box-sizing: border-box;
        text-align: center;
        margin: 20px auto;
        position: relative;
        overflow: hidden;
      }

      .card::after {
        content: '';
        position: absolute;
        top: 0;
        left: -50%;
        width: 50%;
        height: 100%;
        background: rgba(255,255,255,0.2);
        transform: skewX(-25deg);
        pointer-events: none;
        animation: shine 2s infinite;
      }

      @keyframes shine {
        0% { left: -50%; }
        100% { left: 100%; }
      }

      .card-title {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 12px;
        background: linear-gradient(145deg, #f5f5f5, #d0d0d0, #e0e0e0, #c0c0c0, #f0f0f0);
        border: 2px solid #ccc;
        border-radius: 6px;
        margin: 0 8px;
      }

      .card-image-container {
        width: 225px;
        height: 200px;
        background: #fff;
        border: 2px solid #dfdee3;
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
        background: rgba(255,255,255,0.85);
        border-radius: 8px;
        padding: 8px;
        margin: 0 12px;
        text-align: left;
        font-size: 0.9rem;
      }

      .card-footer {
        margin-top: 12px;
        text-align: center;
      }

      .details-button {
        text-decoration: none;
        padding: 8px 16px;
        background: linear-gradient(135deg, #ffe165, #ffb800);
        color: #222;
        font-weight: bold;
        border-radius: 8px;
        border: 2px solid #fff;
      }
    `;
  }

  render() {
    return html`
        <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <div class="card-image-container">
          <img src="${this.image}" alt="${this.title}" class="card-image">
        </div>
        <div class="card-attack">
          <h4>${this.attackTitle}</h4>
          <p>${this.attackText}</p>
        </div>
        <div class="card-footer">
          <a href="${this.link}" class="details-button">Details</a>
        </div>
      </div>
    `;
  }

  }

globalThis.customElements.define(MyCard.tag, MyCard);
