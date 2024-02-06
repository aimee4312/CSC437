import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch-component")
class ToggleSwitchElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  render() {
    return html`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} checked/>
      </span>
    </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }
    label {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      line-height: 2em;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-slider-checked);
      border-radius: 0.75em;
      background-color: var(--color-slider-background);
      margin: 1em;
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color
      var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-slider-checked);
    }
    input {
      appearance: none;
      background-color: var(--color-slider-forground);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: absolute;
      left: 0;
      transition: left var(--time-slider-transition);
    }
    input:checked {
      left: 1.5em;
    }
  `;

  _handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.on = target?.checked;
  }
}