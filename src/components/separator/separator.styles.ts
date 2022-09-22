import * as RadixSeparator from '@radix-ui/react-separator';

import { styled } from 'styles/stitches.config';

export const Separator = styled(RadixSeparator.Separator, {
  backgroundColor: '$primary-06',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 }
});
