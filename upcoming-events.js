import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class UpcomingEvents extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "upcoming-events";
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
    this.topHeading = "Upcoming Events";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
        padding: var(--ddd-spacing-5);

      }
      .top-heading{
        color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        text-align: center;
      }
      .event-title{
        margin: 0 0 var(--ddd-spacing-3) 0;
        font-size: 40px;
        font-weight: bold;
        color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
      }

      .events-container {
        display: flex;
        justify-content: center;
        margin-left: 0;  
        gap: var(--ddd-spacing-6); 
        margin-top: var(--ddd-spacing-5);
        flex-wrap: wrap; 
        margin-bottom: var(--ddd-spacing-9);
        
        }

        .event-card {
        background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));

        width: 240px;
        height: 200px;

        display: flex;
        flex-direction: column;      
        align-items: center;
        justify-content: center;

        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
    }

      .event-img {
        width: 85%;          
        height: 115px;        
        object-fit: cover;    
        border-radius: 4px;
      }

      .event-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25);
        cursor: pointer;
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
     <div class="teamInfo">
        <h1 class="top-heading">${this.topHeading}</h1>

    <div class="events-container">
        <div class="event-card" @click=${() => this._navigate("my-tryouts")}>
        <p class="event-title">Tryouts</p>
        <img src="/images/tryouts.jpg" alt="tryouts" class="event-img">
        </div>

        <div class="event-card" @click=${() => this._navigate("my-schedule")}>
        <p class="event-title">Practices</p>
        <img src="/images/practice.jpg" alt="Pratices" class="event-img">
        </div>

        <div class="event-card" @click=${() => this._navigate("my-schedule")}>
        <p class="event-title">Next Match</p>
        <img src="/images/nextMatch.jpg" alt="Next Match" class="event-img">
        </div>

    </div>

    <slot></slot>

    </div>`;
  }
}

globalThis.customElements.define(UpcomingEvents.tag, UpcomingEvents);