import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './drop-down';
import '../styles/style.css'

@customElement('header-component')
class HeaderElement extends LitElement {
  render() {
    return html`
    <h1>
      <a href="../app/index.html">
        <svg class="icon">
            <use href="../source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <div class="header-title">chromawave</div>
      <dropdown-component>
          <svg class="icon">
              <use href="../source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="../profile-drop-down/profile.html">Profile</a></li>
              <li><hr /></li>
              <li>Saved songs</li>
              <li><hr /></li>
              <li>Saved palettes</li>
              <li><hr /></li>
              <li>Logout</li>
          </ul>
      </dropdown-component>
    </h1>`;
  }
}