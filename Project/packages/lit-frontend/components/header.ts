import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from '../styles/style.css';

@customElement('header-component')
export class MyHeading extends LitElement {
  @property({ type: String }) text = '';

  static styles = css`${styles}`; 

  render() {
    return html`
    <h1>
      <a href="../app/index.html">
        <svg class="icon">
            <use href="../source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <div class="header-title">chromawave</div>
      <drop-down>
          <svg class="icon">
              <use href="../source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="../profile-drop-down/profile.html">Profile</a></li>
              <li>Saved songs</li>
              <li>Saved palettes</li>
              <li>Logout</li>
          </ul>
      </drop-down>
    </h1>`;
  }
}
