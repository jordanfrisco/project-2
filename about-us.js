import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class AboutUs extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-us";
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
    this.topHeading = "Mini Master's Golf Club";
    };
  
    static get styles() {
    return [super.styles,
        css`
      :host {
        display: block;
        background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
        padding: var(--ddd-spacing-5); 
        box-shadow: inset 0 -40px 60px rgba(0,0,0,0.2);
      }
      .top-heading{
        color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-2); 
        text-align: center;
 
      }
      .about-us-summary{
        color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
        margin-top: var(--ddd-spacing-4); 
        line-height: var(--ddd-lh-150);
        text-align: center;
        max-width: 600px;   
        margin-left: auto;
        margin-right: auto; 

      }
      .logo{
        width: 250px;
        display: block;        
        margin: var(--ddd-spacing-4) auto 0;
      }
   

    `];
  }

  render() {

    return html`
     <div class="teamInfo">

        <h1 class="top-heading">${this.topHeading}</h1>

        <img src="/images/mini-logo.png" alt="Mini Masters Golf Club logo" class="logo">

        <p class ="about-us-summary">The Mini Masters Golf Club is a competitive youth team focused on helping young golfers grow and succeed. 
        Our members practice, compete, and support one another while building confidence and strong sportsmanship. 
        We strive to balance competition, teamwork, and a love for the game.</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(AboutUs.tag, AboutUs);