import { useState } from 'react';

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  ChevronRightIcon,
  CheckIcon,
  DotFilledIcon
} from '@radix-ui/react-icons';

import * as s from './dropdown-menu.styles';

export type DropdownMenuProps = any;

export type ContentProps = {
  children: React.ReactNode;
  sideOffset: number;
};

export type SubContentProps = {
  alignOffset: number;
  children: React.ReactNode;
  sideOffset: number;
};

function Content({ children, ...args }: ContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <s.Content {...args}>
        {children}
        <s.Arrow />
      </s.Content>
    </RadixDropdownMenu.Portal>
  );
}

function SubContent({ alignOffset, sideOffset, children }: SubContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <s.SubContent alignOffset={alignOffset} sideOffset={sideOffset}>
        {children}
      </s.SubContent>
    </RadixDropdownMenu.Portal>
  );
}

const DropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('diego');

  return (
    <s.Wrapper>
      <s.DropdownMenu>
        <s.Trigger asChild>
          <s.IconButton aria-label="customise options">
            <HamburgerMenuIcon />
          </s.IconButton>
        </s.Trigger>
        <Content sideOffset={5}>
          <s.Item>
            New Tab <s.RightSlot>⌘+T</s.RightSlot>
          </s.Item>
          <s.Item>
            New Window <s.RightSlot>⌘+N</s.RightSlot>
          </s.Item>
          <s.Item disabled>
            New Private Window <s.RightSlot>⇧+⌘+N</s.RightSlot>
          </s.Item>
          <s.Sub>
            <s.SubTrigger>
              More Tools
              <s.RightSlot>
                <ChevronRightIcon />
              </s.RightSlot>
            </s.SubTrigger>
            <SubContent sideOffset={2} alignOffset={-5}>
              <s.Item>
                Save Page As... <s.RightSlot>⌘+S</s.RightSlot>
              </s.Item>
              <s.Item>Create Shortcut...</s.Item>
              <s.Item>Name Window...</s.Item>
              <s.Separator />
              <s.Item>Developer Tools</s.Item>
            </SubContent>
          </s.Sub>
          <s.Separator />
          <s.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <s.ItemIndicator>
              <CheckIcon />
            </s.ItemIndicator>
            Show Bookmarks <s.RightSlot>⌘+B</s.RightSlot>
          </s.CheckboxItem>
          <s.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <s.ItemIndicator>
              <CheckIcon />
            </s.ItemIndicator>
            Show Full URLs
          </s.CheckboxItem>
          <s.Separator />
          <s.Label>People</s.Label>
          <s.RadioGroup value={person} onValueChange={setPerson}>
            <s.RadioItem value="diego">
              <s.ItemIndicator>
                <DotFilledIcon />
              </s.ItemIndicator>
              Diego Silva
            </s.RadioItem>
          </s.RadioGroup>
        </Content>
      </s.DropdownMenu>
    </s.Wrapper>
  );
};

export { DropdownMenu };
