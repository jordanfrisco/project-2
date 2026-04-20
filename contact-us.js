import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class ContactUs extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "contact-us";
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
        background-color: var(--ddd-theme-default-alertUrgent);
      }
      .top-heading{
        color: var(--ddd-theme-default-forestGreen);
        font-weight: var(--ddd-font-weight-bold);
      }
      .placeHolder{
       color: var(--ddd-theme-default-forestGreen);
      }
   

    `];
  }

  render() {
     return html`
     <div class="navBar">
        <h1 class="top-heading">${this.topHeading}</h1>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(ContactUs.tag, ContactUs);