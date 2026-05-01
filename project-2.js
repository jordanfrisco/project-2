/**
 * Copyright 2026 mjr7121-sketch
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nav-bar.js";
import "./team-stats.js";
import "./upcoming-events.js";
import "./team-roster.js";
import "./sign-up.js";
import "./home-page.js";
import "./about-us.js";
import "./contact-us.js";
import "./my-schedule.js";
import "./my-tryouts.js";
import "./team-stats.js";

/**
 * `project-2`
 * 
 * @demo index.html
 * @element project-2
 */
export class Project2 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.page = "home";
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/project-2.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      page: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-alertUrgent);
        font-family: var(--ddd-font-navigation);
      }
      :root{
      color-scheme: light-dark;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      .page {
      max-width: 100%;
      }

    .content {
      padding: var(--ddd-spacing-4);
      }
    `];
  }

  _changePage(e) {
  this.page = e.detail.page;
  }

  // Lit render the HTML
  render() {
  return html`
  
  <div class="page">

      <nav-bar @nav-change=${(e) => this._changePage(e)}></nav-bar>

      ${this.page === "home" ? html`<home-page @nav-change=${(e) => this._changePage(e)}></home-page>` : ""}

      ${this.page === "my-schedule" ? html`<my-schedule></my-schedule>` : ""}

      ${this.page === "my-tryouts" ? html`<my-tryouts></my-tryouts>` : ""}

       <!-- YOUR ROSTER ADDED HERE --> 
      ${this.page === "teamInfo" ? html`<team-roster></team-roster><team-stats>` : ""}

      ${this.page === "signUp" ? html`<sign-up></sign-up>` : ""}

    </div>
  `;
}

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Project2.tag, Project2);