import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class TeamRoster extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-roster";
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
      page: { type: String },
      coaches: { type: Array },
      kids: { type: Array }
    };
  }

  constructor() {
    super();

    this.active = false;
    this.page = "home";

    this.topHeading = "Mini Master's Golf Club";

    this.coaches = [
      { name: "Coach Tiger", img: "https://tigerwoods.com/wp-content/uploads/2019/04/WordPress_OntheCourse_1.png" },
      { name: "Coach Rory", img: "https://cloudfront-us-east-1.images.arcpublishing.com/opb/XBQP5FCJ6NJUNKQL35I2IBY6TQ.jpg" },
      { name: "Coach John", img: "https://wreg.com/wp-content/uploads/sites/18/2022/11/john-daly-2022-pga-championship-thursday-standing-tight.jpg?strip=1" }
    ];

    this.kids = [
      "Tommy",
      "Alex",
      "Jordan",
      "Chris",
      "Sam"
    ];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-alertUrgent);
          padding: 16px;
        }

        .top-heading {
          color: var(--ddd-theme-default-forestGreen);
          font-weight: var(--ddd-font-weight-bold);
        }

        .button {
          padding: 10px 16px;
          background: var(--ddd-theme-default-forestGreen);
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 20px;
          border-radius: 6px;
        }

        .coaches {
          display: flex;
          gap: 16px;
          margin: 20px 0;
          color:black;
        }

        .coach {
          text-align: center;
        }

        .coach img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .kids {
          margin-top: 10px;
          color: black;
        }

        .kids li {
          margin: 4px 0;
        }
      `
    ];
  }

  goRoster() {
    this.page = "roster";
  }

  goHome() {
    this.page = "home";
  }

  render() {
    return html`

      ${this.page === "home"
        ? html`
            <div class="navBar">
              <h1 class="top-heading">${this.topHeading}</h1>

              <button class="button" @click=${this.goRoster}>
                View Roster
              </button>
            </div>
          `
        : html`
            <div class="navBar">
              <h1 class="top-heading">Team Roster</h1>

              <button class="button" @click=${this.goHome}>
                Back
              </button>

              <!-- Coaches -->
              <div class="coaches">
                ${this.coaches.map(
                  coach => html`
                    <div class="coach">
                      <img src="${coach.img}" alt="${coach.name}" />
                      <div>${coach.name}</div>
                    </div>
                  `
                )}
              </div>

              <!-- Kids -->
              <div class="kids">
                <h3>Players</h3>
                <ul>
                  ${this.kids.map(
                    kid => html`<li>${kid}</li>`
                  )}
                </ul>
              </div>
            </div>
          `}
    `;
  }
}

globalThis.customElements.define(TeamRoster.tag, TeamRoster);