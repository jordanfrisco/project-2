import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class SignUp extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "sign-up";
  }
   static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
      name: { type: String },
      email: { type: String },
      submitted: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.active = false;
    this.topHeading = "Sign Up To Tryout!";
    this.name = "";
    this.email = "";
    this.submitted = false;
    };
  
    static get styles() {
    return [super.styles,
    css`
    :host {
      display: block;
      background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-forestGreen));
      min-height: 100vh;
      padding: var(--ddd-spacing-8);
    }

    .placeHolder {
      color: var(--ddd-theme-default-forestGreen);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 450px;
    }

    .top-heading {
      color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-white));
      font-weight: var(--ddd-font-weight-bold);
      text-align: center;
      margin-bottom: var(--ddd-spacing-5);
    }

    form {
      background-color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-6);
      border-radius: var(--ddd-radius-lg);
      max-width: 400px;
      width: 100%;
      box-shadow: var(--ddd-boxShadow-md);
      display: flex;
      flex-direction: column;
      gap: var(--ddd-spacing-4);
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: var(--ddd-font-weight-bold);
      gap: var(--ddd-spacing-2);
    }

    input {
      padding: var(--ddd-spacing-3);
      border: 2px solid var(--ddd-theme-default-forestGreen);
      border-radius: var(--ddd-radius-md);
      font-size: var(--ddd-font-size-s);
    }

    button {
      background-color: var(--ddd-theme-default-forestGreen);
      color: var(--ddd-theme-default-white);
      border: none;
      border-radius: var(--ddd-radius-md);
      padding: var(--ddd-spacing-3);
      font-weight: var(--ddd-font-weight-bold);
      font-size: var(--ddd-font-size-s);
      cursor: pointer;
    }

    button:hover {
      background-color: light-dark(var(--ddd-theme-default-forestGreen), var(--ddd-theme-default-alertUrgent));
    }


  `];
}

  handleSubmit(e) {
  e.preventDefault();

  this.submitted = true;
  }

  updateName(e) {
  this.name = e.target.value;
  }

  updateEmail(e) {
    this.email = e.target.value;
  }

  render() {
    if(this.submitted){
     return html`

      <div class="placeHolder">
        <div class="confirmation-box">
        <h1 class="top-heading">Thanks for signing up!</h1>
        <p>Confirmation sent for: ${this.name}</p>
        <p>Email: ${this.email}</p>
        </div>
      </div>`;
    }
     return html`
      <div class="placeHolder">
        <h1 class="top-heading">${this.topHeading}</h1>

      <form @submit="${this.handleSubmit}">
        <label>
          Name:
          <input
            type="text"
            .value="${this.name}"
            @input="${this.updateName}"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            .value="${this.email}"
            @input="${this.updateEmail}"
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>

      <slot></slot>
    </div>`;
  }
}


globalThis.customElements.define(SignUp.tag, SignUp);