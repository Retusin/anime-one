import { Login } from '@/components/layout/header/login/Login';
import { render } from '@testing-library/react';

test('render menu', () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});
