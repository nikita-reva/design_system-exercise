import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Spacing } from '@reva_ds/foundation';

import Color from './Color';

import '@reva_ds/scss/lib/Utilities.css';

export default {
  title: 'Atoms/Color',
};

export const Common = () => <Color hexCode='pink' />;

export const CustomDimensions = () => (
  <Color
    hexCode={text('HexCode', 'pink')}
    width={select('Width', Object.values(Spacing), 'xl')}
    height={select('Height', Object.values(Spacing), 'xl')}
  />
);
