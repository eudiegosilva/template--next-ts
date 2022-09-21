import * as s from './icon.styles';
import { ColorTokensTypes } from 'styles/stitches.config';

export type IconNameTypes =
  | 'bolt-outline'
  | 'bolt-solid'
  | 'bookmark-outline'
  | 'bookmark-solid'
  | 'brand-github'
  | 'share-outline'
  | 'share-solid';

export type IconProps = {
  name: IconNameTypes;
  size?: number;
  flip?: boolean;
  color?: ColorTokensTypes;
};

const iconAliases: { [key in IconNameTypes]: string } = {
  'bolt-outline': 'bx-bolt-circle',
  'bolt-solid': 'bxs-bolt-circle',
  'bookmark-outline': 'bx-bookmark-alt-plus',
  'bookmark-solid': 'bxs-bookmark-alt-plus',
  'brand-github': 'bxl-github',
  'share-outline': 'bx-share',
  'share-solid': 'bxs-share'
};

const Icon = ({
  name,
  size = 24,
  flip = false,
  color = '$primary-09'
}: IconProps) => {
  const iconFlip = flip ? 'bx-flip-horizontal' : '';

  return (
    <s.IconWrapper css={{ fontSize: size, color }}>
      <i className={`bx ${iconAliases[name]} ${iconFlip}`} />
    </s.IconWrapper>
  );
};

export { Icon };
