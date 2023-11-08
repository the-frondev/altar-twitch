import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class PapelPicado extends LitElement {
  static properties = {
    color: {type: String},
  }
  static styles = css`
    .papel-picado {
      width: 7rem;
      height: 5rem;
      box-sizing: border-box;
      background: 
        repeating-linear-gradient(-35deg, currentColor 0.25rem, transparent 0.25rem 0.75rem, currentColor 0.75rem 1rem
        ),
        repeating-linear-gradient(35deg, currentColor 0.25rem, transparent 0.25rem 0.75rem, currentColor 0.75rem 1rem
        ), 
        linear-gradient(to top, currentColor 0.5rem, transparent 0.51rem calc(100% - 0.51rem), currentColor calc(100% - 0.5rem)), 
        linear-gradient(to right, currentColor 0.5rem, transparent 0.51rem calc(100% - 0.51rem), currentColor calc(100% - 0.5rem));
      display: grid;
      place-items: center;
      place-content: center;
      position: relative;
      & span {
        text-align: center;
        background: var(--bg);
        color: currentColor;
        font-weight: bold;
        font-size: 1.25rem;
      }
      &::after {
        position: absolute;
        bottom: -0.75rem;
        content: '';
        width: 100%;
        height: 1rem;
        background: radial-gradient(0.75rem 0.75rem at 6.25rem calc(100% - 0.75rem), currentColor 100%, transparent),
        radial-gradient(0.75rem 0.75rem at 4.875rem calc(100% - 0.75rem), currentColor 100%, transparent),
        radial-gradient(0.75rem 0.75rem at 3.5rem calc(100% - 0.75rem), currentColor 100%, transparent),
        radial-gradient(0.75rem 0.75rem at 2.125rem calc(100% - 0.75rem), currentColor 100%, transparent),
        radial-gradient(0.75rem 0.75rem at 0.75rem calc(100% - 0.75rem), currentColor 100%, transparent);
      }

    }
  `;

  render() {
    return html`
    <div class="papel-picado" style="color: ${this.color}">
      <span>DÍA DE </span> <br>
      <span> MUERTOS</span>
    </div>
    `
  }
}

customElements.define('fd-papelpicado', PapelPicado)