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
    this.topHeading = "Upcoming events";
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
        color: var(--ddd-theme-default-forestGreen);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-4); 
        margin-left: var(--ddd-spacing-8); 
      }
      .event-title{
        margin: 10px;
      }

      .events-container {
        display: flex;
        justify-content: flex-start; 
        margin-left: var(--ddd-spacing-8);   
        gap: var(--ddd-spacing-6); 
        margin-top: var(--ddd-spacing-5);
        flex-wrap: wrap; 
        margin-bottom: var(--ddd-spacing-9);
        }

        .event-card {
        background-color: var(--ddd-theme-default-forestGreen);
        color: var(--ddd-theme-default-white);

        width: 180px;
        height: 150px;

        display: flex;
        flex-direction: column;      
        align-items: center;
        justify-content: flex-start; 

        border-radius: 6px;
        padding: var(--ddd-spacing-2);
    }

    .event-img {
        width: 80%;          
        height: auto;        
        max-height: 80px;    
        object-fit: cover;    
        border-radius: 4px;
}
   

    `];
  }

  render() {
     return html`
     <div class="teamInfo">
        <h1 class="top-heading">${this.topHeading}</h1>

    <div class="events-container">
        <div class="event-card">
        <p class="event-title">Tryouts</p>
        <img src="/images/tryouts.jpg" alt="tryouts" class="event-img">
        </div>

        <div class="event-card">
        <p class="event-title">Practices</p>
        <img src="/images/practice.jpg" alt="Pratices" class="event-img">
        </div>

        <div class="event-card">
        <p class="event-title">Next Match</p>
        <img src="/images/nextMatch.jpg" alt="Next Match" class="event-img">
        </div>

    </div>

    <slot></slot>

    </div>`;
  }
}

globalThis.customElements.define(UpcomingEvents.tag, UpcomingEvents);