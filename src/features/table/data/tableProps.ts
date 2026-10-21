import type { PropItem } from '../../../shared/types/playground';

export const TABLE_PROPS: PropItem[] = [
  {
    name: 'data',
    type: 'T[]',
    description: 'Source data array to be rendered into table rows.',
    required: true,
  },
  {
    name: 'columns',
    type: 'TableColumn<T>[]',
    description: 'Table column configurations (key, title, sortable, align, render, sticky).',
    required: true,
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Cell padding density and typography scale.',
  },
  {
    name: 'striped',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders alternating row backgrounds (zebra striping).',
  },
  {
    name: 'bordered',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Adds vertical dividing borders between columns.',
  },
  {
    name: 'stickyHeader',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Pins header row to the top while scrolling table body.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays loading spinner overlay or skeleton rows placeholder.',
  },
  {
    name: 'skeletonRows',
    type: 'number',
    defaultValue: '0',
    description: 'Number of animated skeleton placeholder rows when isLoading is true.',
  },
  {
    name: 'rowSelection',
    type: 'TableRowSelection<T>',
    description: 'Multi-row checkbox selection configuration (selectedRowKeys, onChange, getCheckboxProps).',
  },
  {
    name: 'emptySlot',
    type: 'ReactNode',
    description: 'Custom fallback component rendered when data array is empty.',
  },
  {
    name: 'onRowClick',
    type: '(record: T, index: number) => void',
    description: 'Callback fired when a table row is clicked.',
  },
];
