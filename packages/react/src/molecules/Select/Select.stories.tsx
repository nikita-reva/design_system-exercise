import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import Select from './Select';

import '@reva_ds/scss/lib/Select.css';

const options = [
  {
    label: 'Strict Black',
    value: 'black',
  },
  {
    label: 'Heavenly Green',
    value: 'green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

export default {
  title: 'Molecules/Select',
  decorators: [withA11y],
};

export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ option, isSelected, getOptionRecommendedProps }) => (
      <span {...getOptionRecommendedProps()}>
        {option.label}
        {isSelected ? ' SELECTED' : ''}
      </span>
    )}
  />
);

export const CustomLabel = () => (
  <Select label='Select a color ...' options={options} />
);
