import * as s from './icon.styles';

export type IconProps = {
  name?: 'share' | 'bookmark-alt-plus';
  type?: 'outline' | 'solid';
  size?: number;
  flip?: boolean;
  color?: string;
};

const Icon = ({
  name = 'share',
  type = 'outline',
  size = 24,
  flip,
  color
}: IconProps) => {
  const iconType = type === 'outline' ? 'bx' : 'bxs';
  const iconFlip = flip ? 'bx-flip-horizontal' : '';
  return (
    <s.IconWrapper css={{ fontSize: size, color: color }}>
      <i className={`bx ${iconType}-${name} ${iconFlip}`}></i>
    </s.IconWrapper>
  );
};

export { Icon };
