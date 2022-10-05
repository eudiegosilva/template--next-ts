import { MouseEvent } from 'react';

import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import * as s from './tooltip.styles';

export type TooltipProps = {
  content: string;
};

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const Tooltip = ({ content }: TooltipProps) => (
  <s.Provider delayDuration={100}>
    <s.Root>
      <s.Trigger asChild onClick={handleClick}>
        <s.IconButton>
          <QuestionMarkCircledIcon />
        </s.IconButton>
      </s.Trigger>
      <s.Content sideOffset={5}>{content}</s.Content>
    </s.Root>
  </s.Provider>
);

export { Tooltip };
