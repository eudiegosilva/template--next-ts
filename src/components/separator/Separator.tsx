import * as s from './separator.styles';
import { StichesConfigProps } from 'styles/stitches.config';

export type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
  css?: StichesConfigProps;
};

const Separator = ({
  orientation = 'horizontal',
  decorative = false,
  css
}: SeparatorProps) => (
  <s.Separator orientation={orientation} decorative={decorative} css={css} />
);

export { Separator };
