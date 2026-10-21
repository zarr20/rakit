import type { PropItem } from '../../../shared/types/playground';

export const TEXT_FIELD_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'Controlled input text value.',
  },
  {
    name: 'onChange',
    type: '(e: ChangeEvent<HTMLInputElement>) => void',
    description: 'Callback fired when text value changes.',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder text displayed when the input is empty.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Standard size tier for the input field.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a clear button to wipe text content in 1 click.',
  },
  {
    name: 'type',
    type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",
    defaultValue: "'text'",
    description: 'HTML input type. When set to password, automatically includes a show/hide toggle eye icon.',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    description: 'Icon displayed on the left side of the input.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Field label above the input element.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helper guidance message below the input.',
  },
  {
    name: 'error',
    type: 'string | boolean',
    description: 'Validation error message or boolean red error ring state.',
  },
];

export const AUTOCOMPLETE_PROPS: PropItem[] = [
  {
    name: 'options',
    type: '(AutocompleteOption | string)[]',
    description: 'List of queryable data options.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Currently selected value.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Callback fired when an option is selected or text is typed.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Autocomplete control sizing.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Shows quick clear input button.',
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Shows spinner while async query is resolving.',
  },
  {
    name: 'emptyText',
    type: 'string',
    defaultValue: "'No matching options'",
    description: 'Message displayed when no options match search query.',
  },
];

export const SELECT_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'Array<{ label: string; value: string | number } | string>',
    description: 'List of dropdown options.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Currently selected value.',
  },
  {
    name: 'onChange',
    type: '(val: string) => void',
    description: 'Callback fired when dropdown option is selected.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Dropdown select control sizing.',
  },
  {
    name: 'searchable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Enables embedded search filter input within the dropdown.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Shows clear button for the selected option.',
  },
];

export const MULTI_SELECT_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'Array<{ label: string; value: string } | string>',
    description: 'List of selectable tag options.',
    required: true,
  },
  {
    name: 'value',
    type: 'string[]',
    description: 'Array of currently selected values.',
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    description: 'Callback fired when selected tags array is updated.',
  },
  {
    name: 'maxDisplayTags',
    type: 'number',
    description: 'Maximum visible tags before truncating to +N indicator.',
  },
];

export const TEXT_AREA_PROPS: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    description: 'Multi-line text value.',
  },
  {
    name: 'rows',
    type: 'number',
    defaultValue: '3',
    description: 'Default textarea row height.',
  },
  {
    name: 'showCount',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Shows live character counter.',
  },
  {
    name: 'maxLength',
    type: 'number',
    description: 'Maximum permitted character length.',
  },
];

export const CHECKBOX_PROPS: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    description: 'Checked state boolean.',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback fired when checked state toggles.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Partial/indeterminate state (horizontal line indicator).',
  },
  {
    name: 'variant',
    type: "'default' | 'card'",
    defaultValue: "'default'",
    description: 'Visual variant: standard inline or interactive card container.',
  },
];

export const RADIO_PROPS: PropItem[] = [
  {
    name: 'options',
    type: 'RadioOption[]',
    description: 'List of mutually exclusive radio choices.',
    required: true,
  },
  {
    name: 'value',
    type: 'string',
    description: 'Currently selected radio value.',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
    description: 'Arrangement layout for radio options.',
  },
  {
    name: 'variant',
    type: "'default' | 'card'",
    defaultValue: "'default'",
    description: 'Visual variant: standard inline or option cards.',
  },
];

export const SWITCH_PROPS: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    description: 'Active on/off boolean state.',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback fired when switch is toggled.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Switch toggle control sizing tier.',
  },
];
