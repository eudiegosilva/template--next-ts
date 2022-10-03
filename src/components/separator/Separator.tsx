import { SpacingTokensTypes } from 'types';

import * as s from './separator.styles';

export type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  margin?: SpacingTokensTypes;
};

const Separator = ({
  orientation = 'horizontal',
  margin = '$space-03'
}: SeparatorProps) => (
  <s.Wrapper
    orientation={orientation}
    css={{
      '&[data-orientation=horizontal]': { my: margin },
      '&[data-orientation=vertical]': { mx: margin }
    }}
  />
);

export { Separator };
