import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }
   static get properties() {
    return {
      ...super.properties,
      active: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.active = false;
    };
  
    static get styles() {
    return [super.styles,
    css`
    :host {
        display: block;
        background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
    }
    .navBar{
        display: flex;
        align-items: center;
        padding: var(--ddd-spacing-3);
    }
    .nav-links {
        display: flex;
        gap: var(--ddd-spacing-5);
        margin-left: auto;
        margin-right: var(--ddd-spacing-8);
    }
    .nav-links a {
        background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
        color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
    }
    .logo {
        width: 100px;
        margin-right: var(--ddd-spacing-5);
    }
    .nav-links a:hover {
      transform: translateY(-2px);
      box-shadow: var(--ddd-boxShadow-lg);
      cursor: pointer;
    }
    .icon {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }


    `];
  }

  _navigate(page) {
  this.dispatchEvent(new CustomEvent("nav-change", {
    detail: { page },
    bubbles: true,
    composed: true
  }));
}

  render() {
     return html`
     <div class="navBar">

     <img src="/images/mini-logo.png" alt="logo" class="logo">

      <div class="nav-links">
        <a @click=${(e) => { e.preventDefault(); this._navigate("home"); }} class="home">Home</a>
         <a @click=${(e) => { e.preventDefault(); this._navigate("schedule"); }} class="schedule">Schedule</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("teamInfo"); }} class="teamInfo">Team Info</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("my-tryouts"); }} class="tryouts">Tryouts</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("signUp"); }} class="signUp">Sign Up</a>
    </div>

            <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);