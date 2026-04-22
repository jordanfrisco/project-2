import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class MySchedule extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() { 
    return "my-schedule";
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
      topHeading: { type: String },
      monthLabel: { type: String },
    };
  }

  constructor() {
    super();
    this.active = false;
    this.topHeading = "Title:";
    this.monthLabel = "April 2026";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: #b98963;
          padding: 24px;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .schedule-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .top-heading {
          color: #6b241f;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 20px 0;
        }

        .schedule-header {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin-bottom: 12px;
        }

        .month-title {
          text-align: center;
          color: #6b241f;
          font-size: 1.8rem;
          font-weight: 500;
        }

        .left-btn {
          justify-self: start;
        }

        .right-btn {
          justify-self: end;
        }

        button {
          background-color: #6b241f;
          color: white;
          border: none;
          padding: 6px 12px;
          font-size: 1rem;
          cursor: pointer;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .day {
          background-color: #efefef;
          min-height: 120px;
          padding: 10px;
          box-sizing: border-box;
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f2a38;
        }

        .blank {
          background-color: #efefef;
          min-height: 120px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="schedule-wrapper">
        <h1 class="top-heading">${this.topHeading}</h1>

        <div class="schedule-header">
          <button class="left-btn">Prev</button>
          <div class="month-title">${this.monthLabel}</div>
          <button class="right-btn">Next</button>
        </div>

        <div class="schedule-grid">
          <div class="blank"></div>
          <div class="blank"></div>
          <div class="blank"></div>

          <div class="day">1</div>
          <div class="day">2</div>
          <div class="day">3</div>
          <div class="day">4</div>

          <div class="day">5</div>
          <div class="day">6</div>
          <div class="day">7</div>
          <div class="day">8</div>
          <div class="day">9</div>
          <div class="day">10</div>
          <div class="day">11</div>

          <div class="day">12</div>
          <div class="day">13</div>
          <div class="day">14</div>
          <div class="day">15</div>
          <div class="day">16</div>
          <div class="day">17</div>
          <div class="day">18</div>

          <div class="day">19</div>
          <div class="day">20</div>
          <div class="day">21</div>
          <div class="day">22</div>
          <div class="day">23</div>
          <div class="day">24</div>
          <div class="day">25</div>

          <div class="day">26</div>
          <div class="day">27</div>
          <div class="day">28</div>
          <div class="day">29</div>
          <div class="day">30</div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MySchedule.tag, MySchedule); 