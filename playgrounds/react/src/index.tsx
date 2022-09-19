import React from 'react';
import { createRoot } from 'react-dom/client';

import { Select } from '@reva_ds/react';

import '@reva_ds/scss/lib/Utilities.css';
import '@reva_ds/scss/lib/Text.css';
import '@reva_ds/scss/lib/Margin.css';
import '@reva_ds/scss/lib/Select.css';
import '@reva_ds/scss/lib/global.css';

const container = document.getElementById('app');

const root = createRoot(container!);

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

const App = () => {
  return (
    <div style={{ padding: '40px' }}>
      <Select options={options} />
    </div>
  );
};

root.render(<App />);
