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
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }
    label {
      display: flex;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-slider-border);
      border-radius: 0.75em;
      background-color: var(--color-light-background);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color
      var(--color-slider-transition);
    }
    .slider:has(input:checked) {
      background-color: var(--color-slider-border);
    }
    input {
      appearance: none;
      background-color: var(--color-slider-button);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: absolute;
      left: 0;
      transition: left var(--color-slider-transition);
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