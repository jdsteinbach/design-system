<template>
  <div
    :class="{
      'is-active': isActive,
      'field--horizontal': isHorizontal,
      'field--disabled': disabled,
      'has-attachment': uploadedFileName
    }"
    class="field"
  >
    <ui-text
      :for="uid"
      :style="labelStyles"
      size="small"
      tag="label"
      class="field__label"
      :class="{
        'u-screen-reader-only': labelHidden,
        [`field__label--${type}`]: !!type
      }"
    >
      {{ label }}
      <span v-if="required" aria-label="Required">
        <span aria-hidden="true"> *</span>
      </span>
    </ui-text>
    <ui-text
      v-if="descriptionTop"
      :style="{
        '--text-margin-top': 'var(--spacing-quarter)',
        '--text-margin-bottom': 'var(--spacing-half)',
        '--text-color': 'var(--color-black-faded)'
      }"
      size="small"
      class="field__description"
    >
      {{ description }}
    </ui-text>
    <textarea
      v-if="type == 'textarea'"
      :id="uid"
      :class="fieldClass"
      :value="value"
      :disabled="disabled"
      :required="required"
      v-on="listeners"
    />
    <select
      v-else-if="type == 'select'"
      :id="uid"
      :class="fieldClass"
      :disabled="disabled"
      :required="required"
      v-on="listeners"
    >
      <!-- @slot Select options -->
      <slot />
    </select>
    <input
      v-else
      :id="uid"
      :type="type"
      :class="fieldClass"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :checked="checked"
      :disabled="disabled"
      :required="required"
      v-on="listeners"
    >
    <ui-text v-if="descriptionBottom" class="field__description">
      {{ description }}
    </ui-text>
    <ui-button
      v-if="hasFile"
      class="field__remove-attachment"
      theme="icon"
      @click="removeAttachment"
    >
      <svgicon
        name="close-x"
        height="16"
        width="16"
      />
      <span class="u-screen-reader-only">Remove Attachment</span>
    </ui-button>
  </div>
</template>

<script>
export default {
  name: 'UiField',

  props: {
    /**
     * HTML <label> text
     */
    label: {
      type: String,
      required: true
    },

    /**
     * HTML `type` attribute, or `textarea`, `select`
     */
    type: {
      type: String,
      default: 'text'
    },

    /**
     * HTML `name` attribute for linking radio/checbox
     */
    name: {
      type: String,
      default: ''
    },

    /**
     * HTML `placeholder` attribute
     */
    placeholder: {
      type: String,
      default: ''
    },

    /**
     * Optional descriptive text
     */
    description: {
      type: String,
      default: ''
    },

    /**
     * Description location: `top`, `bottom`
     */
    descriptionLocation: {
      type: String,
      default: 'bottom',
      validator(v) {
        return ['top', 'bottom'].indexOf(v) >= 0;
      }
    },

    /**
     * Should the label be visually hidden?
     */
    labelHidden: {
      type: Boolean,
      default: false
    },

    /**
     * Model for this component's value
     */
    model: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Default value
     */
    value: {
      type: String,
      default: ''
    },

    /**
     * HTML `checked` attribute: `true`, `false`
     */
    checked: {
      type: Boolean,
      default: false
    },

    /**
     * HTML `disabled` attribute: `true`, `false`
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * HTML `required` attribute: `true`, `false`
     */
    required: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      uid: 'field-0',
      isActive: false,
      uploadedFileName: ''
    };
  },

  computed: {
    descriptionBottom() {
      return this.description && this.descriptionLocation === 'bottom';
    },

    descriptionTop() {
      return this.description && this.descriptionLocation === 'top';
    },

    isHorizontal() {
      return ['radio', 'checkbox'].indexOf(this.type) > -1;
    },

    fieldClass() {
      return `field__input field__input--${this.type}`;
    },

    hasFile() {
      return (this.type === 'file') && (this.uploadedFileName !== '');
    },

    labelStyles() {
      return {
        ...this.descriptionTop && {
          '--text-margin-bottom': 0
        },
        ...this.hasFile && {
          '--after-content': `"File: ${this.uploadedFileName}"`,
          'pointer-events': 'none'
        }
      };
    },

    listeners() {
      if (this.type === 'select') {
        return {
          ...this.$listeners,
          change: e => {
            /**
             * Fire change event for `select`
             *
             * @type {any}
             */
            this.$emit('change', e.target.selectedOptions[0].value);
          }
        };
      }
      if (this.type === 'file') {
        return {
          ...this.$listeners,
          change: e => {
            this.uploadedFileName = e.target.files[0].name;
            /**
             * Fire change event for `file`
             *
             * @type {any}
             */
            this.$emit('change', e.target.files[0]);
          }
        };
      }
      return {
        ...this.$listeners,
        input: e => {
          /**
           * Fire input event for `input` & `textarea`
             *
             * @type {any}
           */
          this.$emit('input', e.target.value);
        }
      };
    }
  },

  mounted() {
    this.uid = `field-${this._uid}`;
  },

  methods: {
    focus() {
      this.isActive = true;
    },

    blur() {
      // if float fields, add logic to set false only if value hasn't changed
      this.isActive = false;
    },

    removeAttachment() {
      this.uploadedFileName = '';
      this.value = '';
      /**
       * Fire change event for `file`
       *
       * @type {any}
       */
      this.$emit('change', undefined);
    }
  }
};
</script>

<style lang="scss">
.field {
  margin:
    var(--field-margin-top, 0)
    var(--field-margin-right, 0)
    var(--field-margin-bottom, 0)
    var(--field-margin-left, 0);
  padding:
    var(--field-padding-top, 0)
    var(--field-padding-right, 0)
    var(--field-padding-bottom, 0)
    var(--field-padding-left, 0);

  &.has-attachment {
    --field-padding-right: var(--spacing-double);

    position: relative;
  }
}

.field--horizontal {
  min-height: 42px;
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: calc(var(--spacing) / 2);
  align-items: center;
}

.field__label,
.field__input {
  width: 100%;
  display: block;
}

.field__label {
  --text-margin-bottom: var(--spacing-half);
  --text-font-weight: 500;

  .field--disabled & {
    --text-color: var(--color-black-faded);
  }

  .field--horizontal & {
    --text-margin-top: var(--spacing-eighth);
    --text-margin-bottom: 0;

    order: 2;
  }
}

.field__label--file::after {
  content: var(--after-content, "Upload a file");
  padding: 8px var(--spacing-half);
  margin-bottom: var(--spacing-half);
  min-height: var(--field-height, 42px);
  display: block;
  appearance: none;
  font-family: inherit;
  font-size: 16px;
  line-height: (26 / 16);
  border: 1px solid var(--field-border, var(--color-border));
  border-radius: 2px;

  &:hover,
  &:active,
  &:focus {
    --field-border: var(--color-action);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px var(--field-border);
  }

  .field--disabled & {
    pointer-events: none;
  }
}

.field__input {
  padding: 8px var(--spacing-half);
  margin-bottom: var(--spacing-half);
  min-height: var(--field-height, 42px);
  display: block;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: 16px;
  line-height: (26 / 16);
  border: 1px solid var(--field-border, var(--color-border));
  border-radius: 2px;

  &:hover,
  &:active,
  &:focus {
    --field-border: var(--color-action);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px var(--field-border);
  }

  .field--disabled & {
    pointer-events: none;
  }

  .field--horizontal & {
    margin-bottom: 0;
  }

  @include placeholder {
    font-family: inherit;
    color: var(--color-black-faded);
  }
}

.field__input--textarea {
  --field-height: 126px;
}

.field__input--select {
  padding-right: var(--spacing);
  background-image: url("../../../assets/icons/select-arrow.svg");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 10px 6px;

  option[value=""] {
    color: var(--color-black-faded);
  }
}

.field__input--date {
  padding-right: var(--spacing-double);
  background-image: url("../../../assets/icons/date-calendar.svg");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 17px 20px;
}

.field__input--file {
  height: 1px;
  width: 1px;
  position: absolute;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  overflow: hidden;
}

.field__input--checkbox {
  @include checkbox;
}

.field__input--radio {
  @include radio;
}

.field__remove-attachment {
  --button-width: var(--spacing-double);
  --button-height: var(--field-height, 42px);

  position: absolute;
  right: 0;
  bottom: var(--field-padding-bottom, 0);
}
</style>
