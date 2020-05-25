import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withPadding } from '@/../.storybook/decorators/withPadding';

const typeOptions = [
  'text',
  'email',
  'date',
  'file'
];

const uiField = storiesOf('3 - Forms|Fields/UI Field', module);

uiField.addDecorator(withKnobs);
uiField.addDecorator(withPadding);

uiField.add(
  'UI Field',
  () => ({
    template: `<ui-field
      :label="uiFieldLabel"
      :type="uiFieldType"
      :name="uiFieldName"
      :placeholder="uiFieldPlaceholder"
      :description="uiFieldDescription"
      :descriptionLocation="uiFieldDescriptionLocation"
      :labelHidden="uiFieldLabelHidden"
      :required="uiFieldRequired"
      :model="{}"
      :disabled="uiFieldDisabled"
    />`,
    props: {
      uiFieldLabel: {
        default: text('Label', 'Field Label')
      },
      uiFieldType: {
        default: select('Type', typeOptions, 'text')
      },
      uiFieldName: {
        default: text('Name', 'name')
      },
      uiFieldPlaceholder: {
        default: text('Placeholder', '')
      },
      uiFieldDescription: {
        default: text('Description', '')
      },
      uiFieldDescriptionLocation: {
        default: select('DescriptionLocation', ['top', 'bottom'], 'bottom')
      },
      uiFieldLabelHidden: {
        default: boolean('LabelHidden', false)
      },
      uiFieldRequired: {
        default: boolean('Required', false)
      },
      uiFieldDisabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Field

      The \`ui-field\` component creates a form field with an associated label. Props allow you to hide the label or add descriptive text (useful for errors).

      To use its value, bind a model prop from the parent component; the \`ui-field\` component will emit \`input\` events with value changes.`
    }
  }
);

uiField.add(
  'UIField: Textarea',
  () => ({
    template: `<ui-field
      :label="uiFieldLabel"
      type="textarea"
      :name="uiFieldName"
      :placeholder="uiFieldPlaceholder"
      :description="uiFieldDescription"
      :descriptionLocation="uiFieldDescriptionLocation"
      :labelHidden="uiFieldLabelHidden"
      :required="uiFieldRequired"
      :model="{}"
      :checked="uiFieldChecked"
      :disabled="uiFieldDisabled"
    />`,
    props: {
      uiFieldLabel: {
        default: text('Label', 'Field Label')
      },
      uiFieldName: {
        default: text('Name', 'name')
      },
      uiFieldPlaceholder: {
        default: text('Placeholder', '')
      },
      uiFieldDescription: {
        default: text('Description', '')
      },
      uiFieldDescriptionLocation: {
        default: select('DescriptionLocation', ['top', 'bottom'], 'bottom')
      },
      uiFieldLabelHidden: {
        default: boolean('LabelHidden', false)
      },
      uiFieldRequired: {
        default: boolean('Required', false)
      },
      uiFieldChecked: {
        default: boolean('Checked', false)
      },
      uiFieldDisabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Field: Textarea

      Use \`ui-field\` with prop \`type="textarea"\` for a textarea.`
    }
  }
);

uiField.add(
  'UIField: Select',
  () => ({
    template: `<ui-field
      :label="uiFieldLabel"
      type="select"
      :name="uiFieldName"
      :placeholder="uiFieldPlaceholder"
      :description="uiFieldDescription"
      :descriptionLocation="uiFieldDescriptionLocation"
      :labelHidden="uiFieldLabelHidden"
      :required="uiFieldRequired"
      :model="{}"
      :checked="uiFieldChecked"
      :disabled="uiFieldDisabled"
    >
      <option value="">Choose an option…</option>
      <option value="a">Option A</option>
      <option value="b">Option B</option>
      <option value="c">Option C</option>
    </ui-field>`,
    props: {
      uiFieldLabel: {
        default: text('Label', 'Field Label')
      },
      uiFieldName: {
        default: text('Name', 'name')
      },
      uiFieldPlaceholder: {
        default: text('Placeholder', '')
      },
      uiFieldDescription: {
        default: text('Description', '')
      },
      uiFieldDescriptionLocation: {
        default: select('DescriptionLocation', ['top', 'bottom'], 'bottom')
      },
      uiFieldLabelHidden: {
        default: boolean('LabelHidden', false)
      },
      uiFieldRequired: {
        default: boolean('Required', false)
      },
      uiFieldChecked: {
        default: boolean('Checked', false)
      },
      uiFieldDisabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    info: {
      summary: `Use \`ui-field\` with prop \`type="select"\` for a select. Put all your \`option\` elements inside \`ui-field\` and they’ll be slotted into the \`select\`.

      This type of \`ui-field\` component will emit \`change\` events with value changes.`
    }
  }
);

uiField.add(
  'UI Field: Select, Numeric Values',
  () => ({
    template: `<ui-field
      :label="uiFieldLabel"
      type="select"
      :name="uiFieldName"
      :placeholder="uiFieldPlaceholder"
      :description="uiFieldDescription"
      :descriptionLocation="uiFieldDescriptionLocation"
      :labelHidden="uiFieldLabelHidden"
      :required="uiFieldRequired"
      :model="{}"
      :checked="uiFieldChecked"
      :disabled="uiFieldDisabled"
    >
      <option value="">Choose an option…</option>
      <option value="1234">Option A</option>
      <option value="2345">Option B</option>
      <option value="4321">Option C</option>
      <option value="5432">Option D</option>
    </ui-field>`,
    props: {
      uiFieldLabel: {
        default: text('Label', 'Field Label')
      },
      uiFieldName: {
        default: text('Name', 'name')
      },
      uiFieldPlaceholder: {
        default: text('Placeholder', '')
      },
      uiFieldDescription: {
        default: text('Description', '')
      },
      uiFieldDescriptionLocation: {
        default: select('DescriptionLocation', ['top', 'bottom'], 'bottom')
      },
      uiFieldLabelHidden: {
        default: boolean('LabelHidden', false)
      },
      uiFieldRequired: {
        default: boolean('Required', false)
      },
      uiFieldChecked: {
        default: boolean('Checked', false)
      },
      uiFieldDisabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Field: Select

      Use \`ui-field\` with prop \`type="select"\` for a select. Put all your \`option\` elements inside \`ui-field\` and they’ll be slotted into the \`select\`.

      This type of \`ui-field\` component will emit \`change\` events with value changes.`
    }
  }
);

uiField.add(
  'UI Field: Radio/Checkbox',
  () => ({
    template: `<ui-field
      :label="uiFieldLabel"
      :type="uiFieldType"
      :name="uiFieldName"
      :description="uiFieldDescription"
      :descriptionLocation="uiFieldDescriptionLocation"
      :labelHidden="uiFieldLabelHidden"
      :required="uiFieldRequired"
      :model="{}"
      :checked="uiFieldChecked"
      :disabled="uiFieldDisabled"
    />`,
    props: {
      uiFieldLabel: {
        default: text('Label', 'Field Label')
      },
      uiFieldType: {
        default: select('Type', ['checkbox', 'radio'], 'checkbox')
      },
      uiFieldName: {
        default: text('Name', 'name')
      },
      uiFieldDescription: {
        default: text('Description', '')
      },
      uiFieldDescriptionLocation: {
        default: select('DescriptionLocation', ['top', 'bottom'], 'bottom')
      },
      uiFieldLabelHidden: {
        default: boolean('LabelHidden', false)
      },
      uiFieldRequired: {
        default: boolean('Required', false)
      },
      uiFieldChecked: {
        default: boolean('Checked', false)
      },
      uiFieldDisabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Field: Radio/Checkbox

      Using \`ui-field\` with \`type="radio"\` or \`type="checkbox"\` to create radio & checkbox inputs.

      Be sure to include \`name\` to allow browsers to property associate grouped inputs. Grouped radio/checkbox inputs can also be wrapped in \`ui-fieldset\`.`
    }
  }
);
