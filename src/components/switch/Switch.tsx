import { Flex } from 'components';

import * as s from './switch.styles';

export type SwitchProps = {
  label?: string;
  id: string;
  defaultChecked?: boolean;
  onCheckedChange?: () => void;
};

const Switch = ({
  label,
  id,
  defaultChecked = false,
  onCheckedChange
}: SwitchProps) => (
  <s.Form>
    <Flex css={{ alignItems: 'center' }}>
      {label && <s.Label htmlFor={id}>{label}</s.Label>}
      <s.Switch
        id={id}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
      >
        <s.SwitchThumb />
      </s.Switch>
    </Flex>
  </s.Form>
);

export { Switch };
