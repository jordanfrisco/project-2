import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class homePage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "home-page";
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
        width: 100%;
        background-color: var(--ddd-theme-default-alertUrgent);
      }
       .top-heading{
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-forestGreen);
      }
   

    `];
  }

  render() {
     return html`
     <div class="homePage">

        <about-us></about-us>

        <upcoming-events></upcoming-events>

        <contact-us></contact-us>
          
        <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(homePage.tag, homePage);