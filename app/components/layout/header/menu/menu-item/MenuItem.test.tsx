import { MenuItem } from '@/components/layout/header/menu/menu-item/MenuItem';
import { render } from '@testing-library/react';

test('render menu', () => {
  const { container } = render(
    <MenuItem item={{ link: '/home', title: 'Home' }} />
  );
  expect(container).toMatchSnapshot();
});
