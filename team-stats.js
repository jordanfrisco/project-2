import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class TeamStats extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-stats";
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
    this.topHeading = "Team Stats";
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
      }
      .placeHolder{
        color: var(--ddd-theme-default-white);
      }
   

    `];
  }

  render() {
     return html`
     <div class="teamStats">
        <h1 class="top-heading">${this.topHeading}</h1>
        <p class ="placeHolder"> wins go here</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(TeamStats.tag, TeamStats);