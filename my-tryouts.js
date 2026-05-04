import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class MyTryouts extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "my-tryouts";
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
    this.topHeading = "Spring Tryouts";
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
      .tryouts {
        text-align: center;
        color: var(--ddd-theme-default-forestGreen);
        padding: var(--ddd-spacing-6);
      }
      .box {
        background-color: var(--ddd-theme-default-forestGreen);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-md);
        width: 220px;
      }
      .box-row {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
      }
   
    `];
  }

  render() {
     return html`
    <div class="tryouts">
      <h1 class="top-heading">${this.topHeading}</h1>

      <p class="intro">
        Want to join Mini Master's Golf Club? Tryouts are open for kids
        interested in improving their golf skills.
      </p>

      <div class="box-row">
        <div class="box">
          <h2>When</h2>
          <p>May 1st, 2026</p>
          <p>5:00 PM - 7:00 PM</p>
        </div>

        <div class="box">
          <h2>Where</h2>
          <p>Mini Masters Golf Courses</p>
        </div>

        <div class="box">
          <h2>Bring</h2>
          <p>Golf clubs, water, and athletic clothes.</p>
        </div>
      </div>

    </div>`;
  }
}

globalThis.customElements.define(MyTryouts.tag, MyTryouts);