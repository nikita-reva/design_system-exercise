import React from 'react';

import { Spacing } from '@reva_ds/foundation';

export interface MarginProps {
  space?: keyof typeof Spacing;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;

  children: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({
  space = Spacing.md,
  children,
  top,
  right,
  bottom,
  left,
}) => {
  let className = ``;

  if (!top && !right && !bottom && !left) {
    className = `dse-margin-${space}`;
  }

  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }

  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }

  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
