import { Logo } from '@/components/layout/header/logo/Logo';
import { render } from '@testing-library/react';

test('render logo', () => {
  const { asFragment } = render(<Logo />);
  // @ts-ignore
  expect(asFragment(<Logo />)).toMatchSnapshot();
});
