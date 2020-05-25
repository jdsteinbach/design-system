<template>
  <div class="login-modal">
    <ui-text-button
      class="login-modal__toggle"
      theme="light"
      @click="showSignInModal"
    >
      Sign In
    </ui-text-button>

    <portal to="overlay">
      <slide-from-bottom>
        <modal v-if="isOpen">
          <!-- @slot Modal header -->
          <template slot="header">
            <modal-header>
              <ui-text tag="h2">
                {{ renderedTitle }}
              </ui-text>
              <ui-text-button theme="light" @click="cancel">
                Cancel
              </ui-text-button>
            </modal-header>
          </template>

          <template>
            <section v-if="isAction('sign-in')" slot="content">
              <ui-text tag="h3" size="title">
                Sign in to get started.
              </ui-text>
              <p>
                New user? <ui-text-button class="login-modal__action-toggle" @click="toggleAction('create-account')">
                  Create an account.
                </ui-text-button>
              </p>
              <form class="form form__sign-in" @submit.prevent="tmpSignIn">
                <ui-field
                  v-model="user.email"
                  type="email"
                  class="form__email"
                  label="Email Address"
                  placeholder="Enter your email address."
                />
                <ui-field
                  v-model="user.password"
                  type="password"
                  class="form__password"
                  label="Password"
                  placeholder="Enter your password."
                />
                <ui-button type="submit" class="form__submit">
                  Sign In
                </ui-button>
              </form>
              <p class="u-center">
                <ui-text-button @click="toggleAction('forgot-password')">
                  Forget your username or password?
                </ui-text-button>
              </p>
            </section>

            <section v-if="isAction('create-account')" slot="content">
              <ui-text tag="h3" size="title">
                Create an account to get started
              </ui-text>
              <p>
                Already have an account? <ui-text-button class="login-modal__action-toggle" @click="toggleAction('sign-in')">
                  Sign In.
                </ui-text-button>
              </p>
              <form class="form form__create-account" @submit.prevent="tmpCreateAccount">
                <ui-field
                  v-model="user.fName"
                  type="text"
                  class="form__fName"
                  label="First Name"
                />
                <ui-field
                  v-model="user.lName"
                  type="text"
                  class="form__lName"
                  label="Last Name"
                />
                <ui-field
                  v-model="user.email"
                  type="email"
                  class="form__email"
                  label="Email Address"
                  placeholder="Enter your email address."
                />
                <ui-field
                  v-model="user.password"
                  type="password"
                  class="form__password"
                  label="Create a Password"
                  placeholder="Choose a password."
                />
                <ui-field
                  v-model="user.confirmPassword"
                  type="password"
                  class="form__confirmPassword"
                  label="Confirm your Password"
                  label-hidden
                  placeholder="Confirm your password."
                />
                <ui-button type="submit" class="form__submit">
                  Create Account
                </ui-button>
              </form>
            </section>

            <section v-if="isAction('forgot-password')" slot="content">
              <ui-text tag="h3" size="title">
                Reset Password
              </ui-text>
              <form class="form form__sign-in" @submit.prevent="tmpResetPassword">
                <ui-field
                  v-model="user.email"
                  type="text"
                  class="form__email"
                  label="Email Address"
                  placeholder="Enter your email address."
                />
                <ui-button type="submit" class="form__submit">
                  Reset Your Password
                </ui-button>
              </form>
              <p class="u-center">
                <ui-text-button @click="toggleAction('sign-in')">
                  Sign In
                </ui-text-button>
              </p>
            </section>
          </template>
        </modal>
      </slide-from-bottom>
    </portal>
  </div>
</template>

<script>
import Modal from './Modal';
import ModalHeader from './ModalHeader';

const actions = {
  'create-account': {
    title: 'Create Account',
    fields: [
      'fName',
      'lName',
      'email',
      'password',
      'confirmPassword'
    ]
  },
  'sign-in': {
    title: 'Sign In',
    fields: [
      'email',
      'password'
    ]
  },
  'forgot-password': {
    title: 'Reset Password',
    fields: [
      'email'
    ]
  }
};

export default {
  name: 'LoginModal',

  components: {
    Modal,
    ModalHeader
  },

  data() {
    return {
      action: actions['sign-in'],
      isOpen: false,
      user: {
        email: undefined,
        password: undefined,
        fName: undefined,
        lName: undefined,
        confirmPassword: undefined
      }
    };
  },

  computed: {
    renderedTitle() {
      return this.action.title;
    }
  },

  methods: {
    showSignInModal() {
      this.isOpen = true;
    },

    cancel() {
      this.isOpen = false;
    },

    toggleAction(action) {
      if (Object.keys(actions).indexOf(action) > -1) {
        this.action = actions[action];
        Object.keys(this.user).map(k => {
          if (this.action.fields.indexOf(k) < 0) {
            this.user[k] = undefined;
          }
        });
      }
    },

    isAction(action) {
      return this.action === actions[action];
    },

    tmpCreateAccount() {
      console.log('tmpCreateAccount()', this.user);
    },

    tmpSignIn() {
      console.log('tmpSignIn()', this.user);
    },

    tmpResetPassword() {
      console.log('tmpResetPassword()', this.user);
    }
  }
};
</script>

<style lang="scss">
.login-modal__action-toggle {
  --button-font-size: 16px;
  --button-fg-color: var(--color-action);

  &:hover,
  &:active {
    --button-fg-color: var(--color-action-bright);
  }
}

.form {
  margin: var(--spacing) 0;
  display: grid;
  gap: var(--spacing-half) var(--spacing);
}

.form__create-account {
  grid-template:
    "fName lName"
    "email email"
    "password password"
    "confirmPassword confirmPassword"
    "submit submit" /
    1fr 1fr;
}

.form__sign-in {
  grid-template:
    "email"
    "password"
    "submit";
}

@each $field in (fname, lname, email, password, confirmPassword, submit) {
  .form__#{$field} {
    grid-area: $field;
  }
}

.form__footer {
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
  max-width: var(--content-max-width);
}
</style>
