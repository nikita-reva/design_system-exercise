import React from 'react';

import { FontSize } from '@reva_ds/foundation';

interface TextProps {
  size?: keyof typeof FontSize;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = FontSize.sm, children }) => {
  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
