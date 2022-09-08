import {
  FontElementsTypes,
  FontVariantTypes,
  FontWeightTypes,
  FontSizeTypes,
  FontLineHeightTypes
} from './typography.types';

import * as s from './typography.styles';

export type TypographyProps = {
  children: React.ReactNode;
  variant?: FontVariantTypes;
  element?: FontElementsTypes;
  weight?: FontWeightTypes;
  size?: FontSizeTypes;
  lineHeight?: FontLineHeightTypes;
};

const Typography = ({
  children,
  variant = 'body',
  element = 'p',
  weight = 400,
  size = 'md',
  lineHeight = 100
}: TypographyProps) => (
  <s.TypographyWrapper
    variant={variant}
    as={element}
    css={{
      fontWeight: `$${weight}`,
      fontSize: `$${size}`,
      lineHeight: `$${lineHeight}`
    }}
  >
    {children}
  </s.TypographyWrapper>
);

export { Typography };
