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
        background-color: var(--ddd-theme-default-forestGreen);
        padding: var(--ddd-spacing-5); 
      }
      .top-heading{
       color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-2); 
        margin-left: var(--ddd-spacing-8); 
      }
      .placeHolder{
        color: var(--ddd-theme-default-white);
        margin-top: var(--ddd-spacing-4); 
        margin-left: var(--ddd-spacing-8); 
      }
   

    `];
  }

  render() {
     return html`
     <div class="teamInfo">

        <h1 class="top-heading">${this.topHeading}</h1>
        <p class ="placeHolder"> info about us goes here</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(AboutUs.tag, AboutUs);