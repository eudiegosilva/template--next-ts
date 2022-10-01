import { Container } from 'components/container/container.styles';
import { styled } from 'styles/stitches.config';

export const Header = styled('header', {
  height: 75,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

export const HeaderContainer = styled(Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const LogoWrapper = styled('div', {
  '&:hover': { cursor: 'pointer' }
});

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex'
});

export const ListItem = styled('li', {});

export const LinkItem = styled('a', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$text-contrast-low',
  fontFamily: '$body',
  transition: '$fast',
  fontSize: '$sm',
  fontWeight: '$400',
  letterSpacing: '$body-small',
  padding: '$space-04',
  textTransform: 'uppercase',
  '&:hover': {
    color: '$text-contrast-high',
    cursor: 'pointer',
    '&::after': { backgroundColor: '$primary-09' }
  },

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 8,
    height: '1px',
    width: '40%'
  },

  variants: {
    variant: {
      active: {
        color: '$text-contrast-high',
        '&::after': { backgroundColor: '$text-contrast-high' }
      },
      inactive: { '&::after': { display: 'none' } }
    }
  }
});
