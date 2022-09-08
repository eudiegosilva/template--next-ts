import { styled, ConfigProps } from 'styles/stitches.config';

const heading: ConfigProps = {
  fontFamily: '$heading',
  letterSpacing: '$heading'
};

const body: ConfigProps = {
  fontFamily: '$body'
};

export const TypographyWrapper = styled('p', {
  variants: {
    variant: {
      heading: { ...heading },
      body: { ...body }
    }
  }
});
