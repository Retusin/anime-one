import { Menu } from '@/components/layout/header/menu/Menu';
import { render } from '@testing-library/react';

test('render menu', () => {
  const { container } = render(<Menu />);
  // @ts-ignore
  expect(container).toMatchSnapshot();
});
