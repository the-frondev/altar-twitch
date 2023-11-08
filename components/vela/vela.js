import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Vela extends LitElement {
  static styles = css`
    .vela {
      position: relative;
      &::before {
        animation: resplandor 3s linear infinite;
        position: absolute;
        top: -32%;
        left: calc((50% - 2.5rem));
        content: '';
        width: 5rem;
        height: 5rem;
        background: radial-gradient(circle at center, #ef6c00, transparent 60%);
        border-radius: 50%;
        z-index: 0;
      }
      & .flama {
        --rotate: 45deg;
        width: 1.75rem;
        height: 1.75rem;
        background: radial-gradient(circle at center, #ffd54f, #ef6c00);
        border-radius: 0 50% 50% 50%;
        transform: rotate(var(--rotate));
        animation: flame 3s linear infinite;
        & .flama-interior {
          --rotate: 0deg;
          width: 1rem;
          height: 1rem;
          background: radial-gradient(circle at center, #fafafacc, #fdd835cc);
          border-radius: 0 50% 50% 50%;
          position: absolute;
          bottom: 0.125rem;
          right: 0.125rem;
          animation: flame 2s linear reverse infinite;
        }
      }
      & .cera {
        width: 1.75rem;
        height: 4rem;
        background: #fafafa;
        border-radius: 50% 50% 10% 10% / 10% 10% 10% 10%;
      }
    }
    @keyframes resplandor {
      40% {
        transform: scale(1.25);
      }
      80% {
        transform: scale(0.9);
      }
    }
    @keyframes flame {
      40% {
        transform: rotate(calc(var(--rotate) - 5deg)) scale(0.95);
      }
      80% {
        transform: rotate(calc(var(--rotate) + 5deg)) scale(1);
      }
    }
  `;

  render() {
    return html`
    <div class="vela">
      <div class="flama">
        <div class="flama-interior"></div>
      </div>
      <div class="cera"></div>
    </div>
    `
  }
}

customElements.define('fd-vela', Vela)