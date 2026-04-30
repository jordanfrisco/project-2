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
        background-color: var(--ddd-theme-default-forestGreen);
        padding-top: var(--ddd-spacing-4);
        padding-bottom: var(--ddd-spacing-9);
        box-shadow: inset 0 -40px 60px rgba(0,0,0,0.2);
      }
        .top-heading{
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-4); 
        margin-left: var(--ddd-spacing-8); 
      }
      .contact-info{
        color: var(--ddd-theme-default-white);
        margin-top: var(--ddd-spacing-4); 
        justify-content: flex-start; 
        margin-left: var(--ddd-spacing-8);  
        max-width: 600px;    
      }
   

    `];
  }

  render() {
     return html`

        <h1 class="top-heading">${this.topHeading}</h1>

        <p class= "contact-info">Email: test@gmail.com <br>
                                Phone: 123-456-7890</p>

          <slot></slot>

    `;
  }
}

globalThis.customElements.define(ContactUs.tag, ContactUs);