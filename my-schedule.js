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
      currentDate: { type: Object },
    };
  }

  constructor() {
    super();
    this.active = false;
    this.topHeading = "";
    this.currentDate = new Date(2026, 4, 1); // May 2026
  }

  prevMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
  }

  getMonthLabel() {
    return this.currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  }

  renderDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(html`<div class="blank"></div>`);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const weekDay = date.getDay();

      days.push(html`
        <div class="day">
          <div>${day}</div>

          ${day === 1
            ? html`<div class="event">Tryouts<br>5:00–7:00pm</div>`
            : ""}

          ${weekDay === 2 || weekDay === 4
            ? html`<div class="event">Practice<br>5:00–6:30pm</div>`
            : ""}

          ${weekDay === 0
            ? html`<div class="event">Match<br>9:00am–12:00pm</div>`
            : ""}
        </div>
      `);
    }

    return days;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
          padding: var(--ddd-spacing-5);
          box-sizing: border-box;
        }

        .schedule-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .schedule-header {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin-bottom: 12px;
        }

        .month-title {
          text-align: center;
          color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-medium);
        }

        .left-btn {
          justify-self: start;
        }

        .right-btn {
          justify-self: end;
        }

        button {
          background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
          color: light-dark( var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
          border: none;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          cursor: pointer;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: var(--ddd-spacing-1);
        }

        .day {
          background-color: light-dark( var(--ddd-theme-default-white), var(--ddd-theme-default-forestGreen));
          min-height: 120px;
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
        }

        .blank {
          background-color: light-dark( var(--ddd-theme-default-white), var(--ddd-theme-default-forestGreen));
          min-height: 120px;
        }

        .event {
          background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
          color: light-dark( var(--ddd-theme-default-white), var(--ddd-theme-default-forestGreen));
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-medium);
          margin-top: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-1);
          border-radius: var(--ddd-radius-sm);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="schedule-wrapper">

        <div class="schedule-header">
          <button class="left-btn" @click="${this.prevMonth}">Prev</button>
          <div class="month-title">${this.getMonthLabel()}</div>
          <button class="right-btn" @click="${this.nextMonth}">Next</button>
        </div>

        <div class="schedule-grid">
          ${this.renderDays()}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MySchedule.tag, MySchedule);