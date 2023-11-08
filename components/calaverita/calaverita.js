import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Calaverita extends LitElement {
  static properties = {
    nombre: {type: String}
  }
  static styles = css`
    .calaverita {
      width: 7rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      .top {
        width: 7.5rem;
        height: 5.25rem;
        background: #fafafa;
        border-radius: 50% 50% 25% 25% / 60% 60% 40% 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding : 0.75rem 0.5rem 0.325rem;
        box-sizing: border-box;
        & .name {
          width: 3.5rem;
          height: 1rem;
          padding: 0.25rem;
          text-align: center;
          background: #303f9f;
          color: #fafafa;
        }
        & .eyes {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          & .eye {
            width: 2.125rem;
            height: 2.125rem;
            background: #0e0e0e;
            border-radius: 50%;
          }
          & .nose {
            width: 2rem;
            height: 1.75rem;
            position: relative;
            transform: scaleY(-1);
            &:before, &:after {
              position: absolute;
              content: "";
              left: 49%;
              top: 0;
              width: 50%;
              height: 80%;
              background: #0e0e0e;
              border-radius: 50% 50% 0 0;
              transform: rotate(-45deg);
              transform-origin: 0 100%;
            }
            &:after {
              left: 1%;
              transform: rotate(45deg);
              transform-origin: 100% 100%
            }
          }
        }
      }
      .bottom {
        width: 4rem;
        height: 1.5rem;
        background: radial-gradient(0.5rem 0.5rem at 0.5rem calc(100% - 0.5rem), #fafafa 99%, transparent), radial-gradient(0.5rem 0.5rem at 1.5rem calc(100% - 0.5rem), #fafafa 99%, transparent), radial-gradient(0.5rem 0.5rem at 2.5rem calc(100% - 0.5rem), #fafafa 99%, transparent), radial-gradient(0.5rem 0.5rem at 3.5rem calc(100% - 0.5rem), #fafafa 99%, transparent), linear-gradient(to bottom, #fafafa 52%, transparent 53%);
      }
    }
  `;
  
  render() {
    return html`
    <div class="calaverita">
      <div class="top">
        <div class="name">
        ${this.nombre}
        </div>
        <div class="eyes">
          <div class="eye"></div>
          <div class="nose"></div>
          <div class="eye"></div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    `
  }
}

customElements.define("fd-calaverita", Calaverita);