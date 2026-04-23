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
        background-color: var(--ddd-theme-default-alertUrgent);
    }
    .navBar{
        display: flex;
        align-items: center;
        padding: var(--ddd-spacing-3);
    }
    .nav-links {
        display: flex;
        gap: var(--ddd-spacing-4);
        margin-left: auto;
        margin-right: var(--ddd-spacing-8);
    }
    .nav-links a {
        color: var(--ddd-theme-default-white); 
        background-color: var(--ddd-theme-default-forestGreen); 
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        text-decoration: none;
    }
    .golfer {
        width: 80px;
        margin-right: var(--ddd-spacing-5);
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

     <img src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-golf-player-silhouette-png-image_7077471.png" alt="golfer" class="golfer">

      <div class="nav-links">
        <a @click=${(e) => { e.preventDefault(); this._navigate("home"); }} class="home">🏠 home</a>
         <a @click=${(e) => { e.preventDefault(); this._navigate("schedule"); }} class="schedule">🗓️ Schedule</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("teamInfo"); }} class="teamInfo">ℹ Team Info</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("tryouts"); }} class="tryouts">🏌️‍♀️ Tryouts</a>
        <a @click=${(e) => { e.preventDefault(); this._navigate("signUp"); }} class="signUp">✍️ Sign Up</a>
    </div>

            <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);