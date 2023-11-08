import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Flores extends LitElement {
  static styles = css`
    .flores {
      width: 4.5rem;
      display: grid;
      place-items: center;
      & .flores-container {
        width: 4rem;
        height: 4rem;
        position: relative;
        margin-bottom: -0.75rem;
        z-index: 2;
        & .flor {
          width: 2rem;
          height: 2rem;
          background: radial-gradient(1rem 1rem at center, #ffd54f 30%, #ef6c00 31% 40%, transparent 70%), radial-gradient(1rem 1rem at calc(100% - 0.5rem) 0.75rem, #ffd54f 30%, #ef6c00 31% 40%, transparent 51%), radial-gradient(1rem 1rem at calc(100% - 0.5rem) 1.25rem, #ffd54f 30%, #ef6c00 31% 50%, transparent 51%), radial-gradient(1rem 1rem at 50% 1.5rem, #ffd54f 30%, #ef6c00 31% 50%, transparent 51%), radial-gradient(1rem 1rem at 0.5rem 1.25rem, #ffd54f 30%, #ef6c00 31% 50%, transparent 51%), radial-gradient(1rem 1rem at 0.5rem 0.75rem, #ffd54f 30%, #ef6c00 31% 50%, transparent 51%), radial-gradient(1rem 1rem at 50% 0.5rem, #ffd54f 30%, #ef6c00 31% 50%, transparent 51%);
          border-radius: 50%;
          position: absolute;
          &:first-child {
            top: 0;
          }
          &:nth-child(2) {
            top: 1rem;
            left: 1rem;
            z-index: 1;
          }
          &:nth-child(3) {
            top: 0;
            right: 0;
          }
          &:nth-child(4) {
            bottom: 0;
            left: 0;
          }
          &:last-child {
            bottom: 0;
            right: 0;
          }
        }
      }
      & .jarron {
        width: 3.5rem;
        height: 5rem;
        background: linear-gradient(to bottom,#1976d2, #0d47a1);
        border-radius: 50% 50% 50% 50% / 10% 10% 10% 10%;
        clip-path: polygon(10% 0, 90% 0, 65% 25%, 100% 40%, 80% 100%, 20% 100%, 0 40%, 35% 25%);
      }
    }
  `;

  render() {
    return html`
    <div class="flores">
      <div class="flores-container">
        <div class="flor"></div>
        <div class="flor"></div>
        <div class="flor"></div>
        <div class="flor"></div>
        <div class="flor"></div>
      </div>
      <div class="jarron"></div>
    </div>
    `
  }
}

customElements.define('fd-flores', Flores);