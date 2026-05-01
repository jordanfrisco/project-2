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
    this.topHeading = "Contact Us";
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
      text-align: center;
      }
      .contact-info{
      background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
      color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-forestGreen));

      width: 320px;
      min-height: 130px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: var(--ddd-radius-md);
      padding: var(--ddd-spacing-4);
      margin: var(--ddd-spacing-5) auto var(--ddd-spacing-4);

      font-size: 24px;
      font-weight: bold;
      text-align: center; 
      }
   

    `];
  }

  render() {
     return html`

        <h1 class="top-heading">${this.topHeading}</h1>

        <p class= "contact-info">Email: minimasters@gmail.com <br> Phone: 123-456-7890</p>

          <slot></slot>

    `;
  }
}

globalThis.customElements.define(ContactUs.tag, ContactUs);