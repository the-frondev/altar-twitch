import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Pan extends LitElement {
  static styles = css`
  .pan-container {
    width: 7rem;
    height: 5rem;
    display: flex;
    align-items: flex-end;
  }
  .pan {
    width: 7rem;
    height: 4rem;
    background: #cd9467;
    border-radius: 50% 50% 10% 10% / 90% 90% 10% 10%;
    position: relative;
    & .bolita {
      width: 1.25rem;
      height: 0.75rem;
      background: #b97c59;
      border-radius: 50%;
      margin: -0.5rem auto 0;
    }
    & .huesitos {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0 0.325rem;
      justify-content: space-between;
      & .huesito {
        width: 1rem;
        height: 3rem;
        background: radial-gradient(0.5rem 0.75rem at 50% 0.75rem, #b97c59 100%, transparent), radial-gradient(0.5rem 0.5rem at 0 1.5rem, transparent 50%, #b97c59 61% 100%, transparent), radial-gradient(0.5rem 0.5rem at 100% 1.5rem, transparent 50%, #b97c59 61% 100%, transparent), radial-gradient(0.5rem 0.75rem at 50% 2.25rem, #b97c59 100%, transparent);
        &:first-child {
          transform: rotate(30deg);
        }
        &:last-child {
          transform: rotate(-30deg);
        }
      }
    }
  }
  `;

  render() {
    return html`
    <div class="pan-container">
      <div class="pan">
        <div class="bolita"></div>
        <div class="huesitos">
          <div class="huesito"></div>
          <div class="huesito"></div>
          <div class="huesito"></div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('fd-pan', Pan);