import * as RadixSeparator from '@radix-ui/react-separator';

import { styled } from 'styles/stitches.config';

export const Wrapper = styled(RadixSeparator.Root, {
  backgroundColor: '$primary-06',
  '&[data-orientation=horizontal]': {
    height: 1,
    width: '50%',
    mx: 'auto',
  },
  '&[data-orientation=vertical]': { height: '100%', width: 1, my: 'auto' },
});
